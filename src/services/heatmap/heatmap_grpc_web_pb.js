/**
 * @fileoverview gRPC-Web generated client stub for heatmap
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.heatmap = require('./heatmap_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.heatmap.HeatmapServiceClient =
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
proto.heatmap.HeatmapServicePromiseClient =
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
 *   !proto.heatmap.HeatmapRequest,
 *   !proto.heatmap.HeatmapResponse>}
 */
const methodDescriptor_HeatmapService_GetHeatmapPositions = new grpc.web.MethodDescriptor(
  '/heatmap.HeatmapService/GetHeatmapPositions',
  grpc.web.MethodType.UNARY,
  proto.heatmap.HeatmapRequest,
  proto.heatmap.HeatmapResponse,
  /**
   * @param {!proto.heatmap.HeatmapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.heatmap.HeatmapResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.heatmap.HeatmapRequest,
 *   !proto.heatmap.HeatmapResponse>}
 */
const methodInfo_HeatmapService_GetHeatmapPositions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.heatmap.HeatmapResponse,
  /**
   * @param {!proto.heatmap.HeatmapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.heatmap.HeatmapResponse.deserializeBinary
);


/**
 * @param {!proto.heatmap.HeatmapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.heatmap.HeatmapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.heatmap.HeatmapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.heatmap.HeatmapServiceClient.prototype.getHeatmapPositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/heatmap.HeatmapService/GetHeatmapPositions',
      request,
      metadata || {},
      methodDescriptor_HeatmapService_GetHeatmapPositions,
      callback);
};


/**
 * @param {!proto.heatmap.HeatmapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.heatmap.HeatmapResponse>}
 *     Promise that resolves to the response
 */
proto.heatmap.HeatmapServicePromiseClient.prototype.getHeatmapPositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/heatmap.HeatmapService/GetHeatmapPositions',
      request,
      metadata || {},
      methodDescriptor_HeatmapService_GetHeatmapPositions);
};


module.exports = proto.heatmap;

