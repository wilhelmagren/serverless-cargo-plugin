<div align="center">

  # NOTE ON SERVERLESS FRAMEWORK v4

  The Serverless Team have recently stated the following (full statement can be read at [this](serverless_framework_v4) link):
  > "The forthcoming release of Serverless Framework V.4 will introduce a new pricing model for Organizations generating more than $2M in Annual Revenue. These changes will only apply to Serverless Framework V.4 and beyond, slated for general availability early next year, and not to earlier versions. Serverless Framework V.3 will continue to be maintained via critical security and bug fixes through 2024."

  The new pricing model does not apply if you are still using a later version of the Serverless Framework, and note that the Serverless team (as stated above)
  will continue to support v3 throughout 2024 with critical security and bug fixes. Hence, if you want to use the older version, you can install it using the
  following command: `npm install -g serverless@3.38.0`, but note that we (as of writing this) do not know of any potential future security support for the
  Serverless Framework v3.x as 2024 ends. I would recommend to **try and say updated** on the topic if this new commercial licensing affects you and your company.
  
  
</div>


# serverless-plugin-rust
> ⚡️ A Serverless Framework plugin for building, testing, and deploying robust and efficient Rust services to AWS Lambda.

This project was clearly inspired by the following existing Serverless Framework plugins:
* [serverless-rust-plugin](serverless_rust_plugin) 
* [sls-rust](sls_rust)
* [serverless-rust](serverless_rust)

and builds upon some of the ideas presented in those plugins. However, most of the Rust plugins for the Serverless Framework seem outdated, and considering that the AWS Lambda community for Rust has started with the [cargo lambda](https://www.cargo-lambda.info/) project, and the awslabs teams is actively developing the new [aws lambda rust runtime](https://github.com/awslabs/aws-lambda-rust-runtime), i stronly believe a more active rust plugin for the Serverless Framework seem like something that is going to be needed for the future of serverless Rust on AWS Lambda.

Therefore, you should see this plugin as a merged fork of all the three above existing plugins; but rewritten as its own plugin.


## ✨ Features

...


## ⚡️ Quick start

...


## ⚠️ License

Copyright (c) 2024 Wilhelm Ågren, serverless-plugin-rust is free and open source software released under the [MIT](repo_license_url) license.


<!-- README links -->
[serverless_framework_v4]: https://www.serverless.com/blog/serverless-framework-v4-a-new-model
[serverless_rust_plugin]: https://github.com/kaicoh/serverless-rust-plugin
[sls_rust]: https://github.com/fdaciuk/sls-rust
[serverless_rust]: https://github.com/softprops/serverless-rust/

<!-- Repository links -->
[repo_license_url]: https://github.com/wilhelmagren/serverless-plugin-rust/blob/main/LICENSE
