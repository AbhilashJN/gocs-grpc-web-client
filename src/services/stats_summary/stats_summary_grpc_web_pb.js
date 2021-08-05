/**
 * @fileoverview gRPC-Web generated client stub for stats_summary
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var services_stats_summary_accuracy_summary_accuracy_summary_pb = require('../../services/stats_summary/accuracy_summary/accuracy_summary_pb.js')

var services_stats_summary_damage_summary_damage_summary_pb = require('../../services/stats_summary/damage_summary/damage_summary_pb.js')

var services_stats_summary_deaths_summary_deaths_summary_pb = require('../../services/stats_summary/deaths_summary/deaths_summary_pb.js')
const proto = {};
proto.stats_summary = require('./stats_summary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stats_summary.StatsSummaryServiceClient =
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
proto.stats_summary.StatsSummaryServicePromiseClient =
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
 *   !proto.stats_summary.GetStatsSummaryRequest,
 *   !proto.stats_summary.GetStatsSummaryResponse>}
 */
const methodDescriptor_StatsSummaryService_GetStatsSummary = new grpc.web.MethodDescriptor(
  '/stats_summary.StatsSummaryService/GetStatsSummary',
  grpc.web.MethodType.UNARY,
  proto.stats_summary.GetStatsSummaryRequest,
  proto.stats_summary.GetStatsSummaryResponse,
  /**
   * @param {!proto.stats_summary.GetStatsSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stats_summary.GetStatsSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stats_summary.GetStatsSummaryRequest,
 *   !proto.stats_summary.GetStatsSummaryResponse>}
 */
const methodInfo_StatsSummaryService_GetStatsSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stats_summary.GetStatsSummaryResponse,
  /**
   * @param {!proto.stats_summary.GetStatsSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stats_summary.GetStatsSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.stats_summary.GetStatsSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stats_summary.GetStatsSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stats_summary.GetStatsSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stats_summary.StatsSummaryServiceClient.prototype.getStatsSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stats_summary.StatsSummaryService/GetStatsSummary',
      request,
      metadata || {},
      methodDescriptor_StatsSummaryService_GetStatsSummary,
      callback);
};


/**
 * @param {!proto.stats_summary.GetStatsSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stats_summary.GetStatsSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.stats_summary.StatsSummaryServicePromiseClient.prototype.getStatsSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stats_summary.StatsSummaryService/GetStatsSummary',
      request,
      metadata || {},
      methodDescriptor_StatsSummaryService_GetStatsSummary);
};


module.exports = proto.stats_summary;

