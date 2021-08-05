/**
 * @fileoverview gRPC-Web generated client stub for players_list
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.players_list = require('./players_list_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.players_list.PlayersListServiceClient =
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
proto.players_list.PlayersListServicePromiseClient =
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
 *   !proto.players_list.PlayersListRequest,
 *   !proto.players_list.PlayersListResponse>}
 */
const methodDescriptor_PlayersListService_GetPlayersList = new grpc.web.MethodDescriptor(
  '/players_list.PlayersListService/GetPlayersList',
  grpc.web.MethodType.UNARY,
  proto.players_list.PlayersListRequest,
  proto.players_list.PlayersListResponse,
  /**
   * @param {!proto.players_list.PlayersListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.players_list.PlayersListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.players_list.PlayersListRequest,
 *   !proto.players_list.PlayersListResponse>}
 */
const methodInfo_PlayersListService_GetPlayersList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.players_list.PlayersListResponse,
  /**
   * @param {!proto.players_list.PlayersListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.players_list.PlayersListResponse.deserializeBinary
);


/**
 * @param {!proto.players_list.PlayersListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.players_list.PlayersListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.players_list.PlayersListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.players_list.PlayersListServiceClient.prototype.getPlayersList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/players_list.PlayersListService/GetPlayersList',
      request,
      metadata || {},
      methodDescriptor_PlayersListService_GetPlayersList,
      callback);
};


/**
 * @param {!proto.players_list.PlayersListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.players_list.PlayersListResponse>}
 *     Promise that resolves to the response
 */
proto.players_list.PlayersListServicePromiseClient.prototype.getPlayersList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/players_list.PlayersListService/GetPlayersList',
      request,
      metadata || {},
      methodDescriptor_PlayersListService_GetPlayersList);
};


module.exports = proto.players_list;

