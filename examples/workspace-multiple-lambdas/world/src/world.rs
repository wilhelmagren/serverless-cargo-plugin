use lambda_runtime::{service_fn, tracing, Error as LambdaError, LambdaEvent};
use serde::{Deserialize, Serialize};
use std::result;

type Result<T> = result::Result<T, LambdaError>;

// The json equivalent of this struct is:
// { "msg": "your message" }
#[derive(Deserialize)]
struct HttpRequest {
    msg: String,
}

#[derive(Serialize)]
struct HttpResponse {
    req_id: String,
    msg: String,
}

/// Handle a simple HTTP request with body defined as [`HttpRequest`] and produces
/// an OK response defined as [`HttpResponse`]. This function only echoes the input.
async fn http_handler(event: LambdaEvent<HttpRequest>) -> Result<HttpResponse> {
    let msg: String = event.payload.msg;
    Ok(HttpResponse {
        req_id: event.context.request_id,
        msg: format!("Hello World: '{}'. Bye!", msg),
    })
}

#[tokio::main]
async fn main() -> Result<()> {
    // This defaults to RUST_LOG="INFO".
    tracing::init_default_subscriber();

    let lambda_handler = service_fn(http_handler);
    lambda_runtime::run(lambda_handler)
        .await?;
    Ok(())
}

#[cfg(test)]
mod tests_http_lambda {
    use super::*;
    use lambda_runtime::Context;

    #[tokio::test]
    async fn ok_input() {
        let id: &str = "189banjf877213i1";
        let mut ctx: Context = Context::default();
        ctx.request_id = id.to_string();

        let payload: HttpRequest = HttpRequest {
            msg: "hello AWS Lambda from Rust".to_string(),
        };
        let event: LambdaEvent<HttpRequest> = LambdaEvent { payload, context: ctx };
        let result: HttpResponse = http_handler(event).await.unwrap();

        assert_eq!(
            "Hello World: 'hello AWS Lambda from Rust'. Bye!",
            result.msg,
        );
        assert_eq!(id.to_string(), result.req_id);
    }
}
