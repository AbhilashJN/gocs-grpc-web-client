/**
 * @fileoverview gRPC-Web generated client stub for map_details
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.map_details = require('./map_details_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.map_details.MapDetailsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.map_details.MapDetailsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.map_details.MapNameRequest,
 *   !proto.map_details.MapNameResponse>}
 */
const methodDescriptor_MapDetailsService_GetMapName = new grpc.web.MethodDescriptor(
  '/map_details.MapDetailsService/GetMapName',
  grpc.web.MethodType.UNARY,
  proto.map_details.MapNameRequest,
  proto.map_details.MapNameResponse,
  /**
   * @param {!proto.map_details.MapNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.map_details.MapNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.map_details.MapNameRequest,
 *   !proto.map_details.MapNameResponse>}
 */
const methodInfo_MapDetailsService_GetMapName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.map_details.MapNameResponse,
  /**
   * @param {!proto.map_details.MapNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.map_details.MapNameResponse.deserializeBinary
);


/**
 * @param {!proto.map_details.MapNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.map_details.MapNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.map_details.MapNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.map_details.MapDetailsServiceClient.prototype.getMapName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/map_details.MapDetailsService/GetMapName',
      request,
      metadata || {},
      methodDescriptor_MapDetailsService_GetMapName,
      callback);
};


/**
 * @param {!proto.map_details.MapNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.map_details.MapNameResponse>}
 *     Promise that resolves to the response
 */
proto.map_details.MapDetailsServicePromiseClient.prototype.getMapName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/map_details.MapDetailsService/GetMapName',
      request,
      metadata || {},
      methodDescriptor_MapDetailsService_GetMapName);
};


module.exports = proto.map_details;

