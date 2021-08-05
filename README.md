# GOCS gRPC web client
A ReactJS UI for the [gocs gRPC service](https://github.com/AbhilashJN/gocs-grpc-server). Based on [grpc-web](https://github.com/grpc/grpc-web). Most of the components in this UI are from [gocs-ui-core](https://github.com/AbhilashJN/gocs-ui-core).

## Usage notes
 - Note that we need to configure a proxy to forward the browser's gRPC-Web requests to the backend, since the web browser will not be able to directly communicate with the gRPC services. Here we use [Envoy](https://www.envoyproxy.io/) proxy for this purpose. 
 - A sample envoy configuration can be found in the file `envoy.yaml` in this repo.
 - This configuration is set to listen to requests from the frontend on port 8080, and forward the requests to a gRPC server running on port 9090.

 - Run the envoy proxy in a docker container:
 ```
 docker run -d --rm -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.17.0
 ```
