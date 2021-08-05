// source: services/stats_summary/stats_summary.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var services_stats_summary_accuracy_summary_accuracy_summary_pb = require('../../services/stats_summary/accuracy_summary/accuracy_summary_pb.js');
goog.object.extend(proto, services_stats_summary_accuracy_summary_accuracy_summary_pb);
var services_stats_summary_damage_summary_damage_summary_pb = require('../../services/stats_summary/damage_summary/damage_summary_pb.js');
goog.object.extend(proto, services_stats_summary_damage_summary_damage_summary_pb);
var services_stats_summary_deaths_summary_deaths_summary_pb = require('../../services/stats_summary/deaths_summary/deaths_summary_pb.js');
goog.object.extend(proto, services_stats_summary_deaths_summary_deaths_summary_pb);
goog.exportSymbol('proto.stats_summary.GetStatsSummaryRequest', null, global);
goog.exportSymbol('proto.stats_summary.GetStatsSummaryResponse', null, global);
goog.exportSymbol('proto.stats_summary.GetStatsSummaryResponse.DataCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.stats_summary.GetStatsSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.stats_summary.GetStatsSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.stats_summary.GetStatsSummaryRequest.displayName = 'proto.stats_summary.GetStatsSummaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.stats_summary.GetStatsSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.stats_summary.GetStatsSummaryResponse.repeatedFields_, proto.stats_summary.GetStatsSummaryResponse.oneofGroups_);
};
goog.inherits(proto.stats_summary.GetStatsSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.stats_summary.GetStatsSummaryResponse.displayName = 'proto.stats_summary.GetStatsSummaryResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.stats_summary.GetStatsSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.stats_summary.GetStatsSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stats_summary.GetStatsSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.stats_summary.GetStatsSummaryRequest}
 */
proto.stats_summary.GetStatsSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.stats_summary.GetStatsSummaryRequest;
  return proto.stats_summary.GetStatsSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.stats_summary.GetStatsSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.stats_summary.GetStatsSummaryRequest}
 */
proto.stats_summary.GetStatsSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.stats_summary.GetStatsSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.stats_summary.GetStatsSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stats_summary.GetStatsSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.stats_summary.GetStatsSummaryRequest} returns this
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.setPlayer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stat_type = 2;
 * @return {string}
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.getStatType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.stats_summary.GetStatsSummaryRequest} returns this
 */
proto.stats_summary.GetStatsSummaryRequest.prototype.setStatType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.stats_summary.GetStatsSummaryResponse.repeatedFields_ = [1,2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.stats_summary.GetStatsSummaryResponse.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.stats_summary.GetStatsSummaryResponse.DataCase = {
  DATA_NOT_SET: 0,
  ALL_ACCURACY_SUMMARIES: 3,
  ALL_DAMAGE_SUMMARIES: 4,
  ALL_DEATHS_SUMMARIES: 5
};

/**
 * @return {proto.stats_summary.GetStatsSummaryResponse.DataCase}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getDataCase = function() {
  return /** @type {proto.stats_summary.GetStatsSummaryResponse.DataCase} */(jspb.Message.computeOneofCase(this, proto.stats_summary.GetStatsSummaryResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.stats_summary.GetStatsSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.stats_summary.GetStatsSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stats_summary.GetStatsSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemFieldsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    comparisonFieldsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    allAccuracySummaries: (f = msg.getAllAccuracySummaries()) && services_stats_summary_accuracy_summary_accuracy_summary_pb.AllAccuracySummaries.toObject(includeInstance, f),
    allDamageSummaries: (f = msg.getAllDamageSummaries()) && services_stats_summary_damage_summary_damage_summary_pb.AllDamageSummaries.toObject(includeInstance, f),
    allDeathsSummaries: (f = msg.getAllDeathsSummaries()) && services_stats_summary_deaths_summary_deaths_summary_pb.AllDeathsSummaries.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.stats_summary.GetStatsSummaryResponse}
 */
proto.stats_summary.GetStatsSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.stats_summary.GetStatsSummaryResponse;
  return proto.stats_summary.GetStatsSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.stats_summary.GetStatsSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.stats_summary.GetStatsSummaryResponse}
 */
proto.stats_summary.GetStatsSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addItemFields(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addComparisonFields(value);
      break;
    case 3:
      var value = new services_stats_summary_accuracy_summary_accuracy_summary_pb.AllAccuracySummaries;
      reader.readMessage(value,services_stats_summary_accuracy_summary_accuracy_summary_pb.AllAccuracySummaries.deserializeBinaryFromReader);
      msg.setAllAccuracySummaries(value);
      break;
    case 4:
      var value = new services_stats_summary_damage_summary_damage_summary_pb.AllDamageSummaries;
      reader.readMessage(value,services_stats_summary_damage_summary_damage_summary_pb.AllDamageSummaries.deserializeBinaryFromReader);
      msg.setAllDamageSummaries(value);
      break;
    case 5:
      var value = new services_stats_summary_deaths_summary_deaths_summary_pb.AllDeathsSummaries;
      reader.readMessage(value,services_stats_summary_deaths_summary_deaths_summary_pb.AllDeathsSummaries.deserializeBinaryFromReader);
      msg.setAllDeathsSummaries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.stats_summary.GetStatsSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.stats_summary.GetStatsSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stats_summary.GetStatsSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getComparisonFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAllAccuracySummaries();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      services_stats_summary_accuracy_summary_accuracy_summary_pb.AllAccuracySummaries.serializeBinaryToWriter
    );
  }
  f = message.getAllDamageSummaries();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      services_stats_summary_damage_summary_damage_summary_pb.AllDamageSummaries.serializeBinaryToWriter
    );
  }
  f = message.getAllDeathsSummaries();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      services_stats_summary_deaths_summary_deaths_summary_pb.AllDeathsSummaries.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string item_fields = 1;
 * @return {!Array<string>}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getItemFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.setItemFieldsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.addItemFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.clearItemFieldsList = function() {
  return this.setItemFieldsList([]);
};


/**
 * repeated string comparison_fields = 2;
 * @return {!Array<string>}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getComparisonFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.setComparisonFieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.addComparisonFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.clearComparisonFieldsList = function() {
  return this.setComparisonFieldsList([]);
};


/**
 * optional accuracy_summary.AllAccuracySummaries all_accuracy_summaries = 3;
 * @return {?proto.accuracy_summary.AllAccuracySummaries}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getAllAccuracySummaries = function() {
  return /** @type{?proto.accuracy_summary.AllAccuracySummaries} */ (
    jspb.Message.getWrapperField(this, services_stats_summary_accuracy_summary_accuracy_summary_pb.AllAccuracySummaries, 3));
};


/**
 * @param {?proto.accuracy_summary.AllAccuracySummaries|undefined} value
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
*/
proto.stats_summary.GetStatsSummaryResponse.prototype.setAllAccuracySummaries = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.stats_summary.GetStatsSummaryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.clearAllAccuracySummaries = function() {
  return this.setAllAccuracySummaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.hasAllAccuracySummaries = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional damage_summary.AllDamageSummaries all_damage_summaries = 4;
 * @return {?proto.damage_summary.AllDamageSummaries}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getAllDamageSummaries = function() {
  return /** @type{?proto.damage_summary.AllDamageSummaries} */ (
    jspb.Message.getWrapperField(this, services_stats_summary_damage_summary_damage_summary_pb.AllDamageSummaries, 4));
};


/**
 * @param {?proto.damage_summary.AllDamageSummaries|undefined} value
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
*/
proto.stats_summary.GetStatsSummaryResponse.prototype.setAllDamageSummaries = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.stats_summary.GetStatsSummaryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.clearAllDamageSummaries = function() {
  return this.setAllDamageSummaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.hasAllDamageSummaries = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional deaths_summary.AllDeathsSummaries all_deaths_summaries = 5;
 * @return {?proto.deaths_summary.AllDeathsSummaries}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.getAllDeathsSummaries = function() {
  return /** @type{?proto.deaths_summary.AllDeathsSummaries} */ (
    jspb.Message.getWrapperField(this, services_stats_summary_deaths_summary_deaths_summary_pb.AllDeathsSummaries, 5));
};


/**
 * @param {?proto.deaths_summary.AllDeathsSummaries|undefined} value
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
*/
proto.stats_summary.GetStatsSummaryResponse.prototype.setAllDeathsSummaries = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.stats_summary.GetStatsSummaryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stats_summary.GetStatsSummaryResponse} returns this
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.clearAllDeathsSummaries = function() {
  return this.setAllDeathsSummaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stats_summary.GetStatsSummaryResponse.prototype.hasAllDeathsSummaries = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.stats_summary);
