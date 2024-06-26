//
// MIT License
// 
// Copyright (c) 2024 Wilhelm Ågren
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// File created: 2024-06-03
// Last updated: 2024-06-07
//

import Serverless from "serverless";
import Service from "serverless/classes/Service";

import fs from "fs";

class ServerlessCargoPlugin {
    serverless: Serverless;
    cli_options: Map<string, string>;

    hooks: { [key: string]: Function }

    constructor(serverless: Serverless, options: any) {
        this.serverless = serverless;
        this.cli_options = options;

        this.hooks = {
            "before:package:createDeploymentArtifacts": this.build.bind(this),
            "before:deploy:function:packageFunction": this.build.bind(this),
        };
    }

    validateConfig(service: Service) {
        var isValid: boolean = true;
        var reasons: Array<string> = [];
        const sls: Serverless = service.serverless;

        if (service.provider.name != "aws") {
            reasons.push("only allowed provider is 'aws'");
            isValid = false;
        }

        if (!isValid) {
            console.error(`Your serverless config file '${sls.configurationFilename}' is not valid, reasons:`);
            reasons.forEach(reason => console.error(` - ${reason}`));
            process.exit(1);
        }
    }

    buildFunctions(service: Service) {
        console.log("\n 🛠️ Building lambda function(s) locally using 'cargo lambda'.\n");
        service.getAllFunctions().forEach(name => {
            const func: any = service.getFunction(name);
            console.log(func);
        });
        console.log("TODO!!!!! not done yet :)");
        process.exit(1);
    }

    checkBootstrapsAvailable(service: Service) {
        console.log("\n 📝 Prebuilt mode, checking for valid lambda bootstraps.\n");

        var workspacePath: string = service.custom.cargo.workspace;
        if (!workspacePath) {
            workspacePath = "./";
        }

        var missingBootstraps: Array<string> = [];
        var existingBootstraps: Map<string, string> = new Map();
        service.getAllFunctions().forEach(name => {
            const func: any = service.getFunction(name);
            const artifactPath: string = workspacePath + func["package"]["artifact"];
            func["package"]["artifact"] = artifactPath;
            if (!fs.existsSync(artifactPath)) {
                missingBootstraps.push(name);
            } else {
                existingBootstraps.set(artifactPath, name);
            }
        });

        if (missingBootstraps.length > 0) {
            console.error(` 💥 Could not find a prebuilt lambda bootstrap for ${missingBootstraps.length} lambda function(s):`);
            missingBootstraps.forEach(name => console.error(`    - ${name}`));
            process.exit(1);
        }

        console.log(` ✔️ Found all defined lambda function bootstraps:`);
        existingBootstraps.forEach((name, artifactPath) => console.log(`    - ${name}: ${artifactPath}`));
    }

    build() {
        const service: Service = this.serverless.service;
        const custom = service.custom;
        this.validateConfig(service);

        if (custom.cargo.prebuilt) {
            this.checkBootstrapsAvailable(service)
        } else {
            this.buildFunctions(service);
        }
    }
};

module.exports = ServerlessCargoPlugin;
