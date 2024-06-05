"use strict";
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
// Last updated: 2024-06-03
//
Object.defineProperty(exports, "__esModule", { value: true });
var ServerlessPluginRust = /** @class */ (function () {
    function ServerlessPluginRust(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.commands = {
            welcome: {
                usage: "Helps you start your first Serverless plugin.",
                lifecycleEvents: ["hello", "world"],
                options: {
                    message: {
                        usage: "Specify the message that you want to deploy (e.g. \"--message 'Rust is great'\" or \"-m 'Rust is great'\")",
                        required: true,
                        shortcut: "m",
                    }
                }
            }
        };
        this.hooks = {
            "before:welcome:hello": this.beforeWelcome.bind(this),
            "welcome:hello": this.welcomeUser.bind(this),
            "welcome:world": this.displayHelloMessage.bind(this),
            "after:welcome:world": this.afterHelloWorld.bind(this),
        };
    }
    ServerlessPluginRust.prototype.beforeWelcome = function () {
        this.serverless.cli.log("Hello from Serverless!");
    };
    ServerlessPluginRust.prototype.welcomeUser = function () {
        this.serverless.cli.log("Your message:");
    };
    ServerlessPluginRust.prototype.displayHelloMessage = function () {
        this.serverless.cli.log("".concat(this.options.message));
    };
    ServerlessPluginRust.prototype.afterHelloWorld = function () {
        this.serverless.cli.log("Please come again!");
    };
    return ServerlessPluginRust;
}());
;
module.exports = ServerlessPluginRust;
