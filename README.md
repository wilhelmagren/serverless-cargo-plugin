<div align="center">

  # NOTE ON SERVERLESS FRAMEWORK v4

  The Serverless Team have recently stated the following (full statement can be read at [this](serverless_framework_v4) link):
  > "The forthcoming release of Serverless Framework V.4 will introduce a new pricing model for Organizations generating more than $2M in Annual Revenue. These changes will only apply to Serverless Framework V.4 and beyond, slated for general availability early next year, and not to earlier versions. Serverless Framework V.3 will continue to be maintained via critical security and bug fixes through 2024."

  The new pricing model does not apply if you are still using a later version of the Serverless Framework, and note that the Serverless team (as stated above)
  will continue to support v3 throughout 2024 with critical security and bug fixes. Hence, if you want to use the older version, you can install it using the
  following command: `npm install -g serverless@3.38.0`, but note that we (as of writing this) do not know of any potential future security support for the
  Serverless Framework v3.x as 2024 ends. I would recommend to **try and say updated** on the topic if this new commercial licensing affects you and your company.
  
</div>


# rust-serverless-plugin
> ⚡️ A Serverless Framework plugin for building, testing, and deploying robust Rust services to AWS Lambda.

This project is inspired by the following existing Serverless Framework plugins:
* [cargo-lambda-serverless](cargo_lambda_serverless)
* [serverless-rust-plugin](serverless_rust_plugin) 
* [serverless-rust](serverless_rust)
* [serverless-plugin-rust](serverless_plugin_rust)
* [sls-rust](sls_rust)

and builds upon some of the ideas presented in those plugins. However, most of the Rust plugins for the Serverless Framework seem outdated, and considering that the AWS Lambda community for Rust has started with the [cargo lambda](https://www.cargo-lambda.info/) project, and the awslabs teams is actively developing the new [aws lambda rust runtime](https://github.com/awslabs/aws-lambda-rust-runtime), i strongly believe a more active rust plugin for the Serverless Framework seem like something that is going to be needed for the future of serverless Rust on AWS Lambda.

Therefore, you should see this plugin as a merged fork of all the three above existing plugins; but rewritten as its own plugin.


## ✨ Features

This project was just started, so a defined set of features does not yet exist. However, this plugin **will support most of the features found in the above mentioned plugins**. This Serverless plugin aims to be a drop-in-replacement, unifying the ecosystem for serverless Rust programming.

* Customizable cargo flags per function
* Optional docker build support
* Target specific host architecture
* Cargo lambda support
* ...


## ⚡️ Quick start

Install the plugin inside your Serverless Framework project using npm:

```
npm install --save-dev rust-serverless-plugin
```

and then simply add the following line to your projects `serverless.yml` file.

```yml
plugins:
  - rust-serverless-plugin
```


## ⚠️ License

Copyright (c) 2024 Wilhelm Ågren. The rust-serverless-plugin project is free and open source software released under the [MIT](repo_license_url) license.


<!-- README links -->
[cargo_lambda_serverless]: https://github.com/ipetrovbg/cargo-lambda
[serverless_framework_v4]: https://www.serverless.com/blog/serverless-framework-v4-a-new-model
[serverless_rust_plugin]: https://github.com/kaicoh/serverless-rust-plugin
[serverless_rust]: https://github.com/softprops/serverless-rust/
[serverless_plugin_rust]: https://github.com/MadebyAe/serverless-plugin-rust
[sls_rust]: https://github.com/fdaciuk/sls-rust

<!-- Repository links -->
[repo_license_url]: https://github.com/wilhelmagren/serverless-plugin-rust/blob/main/LICENSE
