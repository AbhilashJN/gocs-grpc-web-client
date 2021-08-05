// source: services/stats_summary/deaths_summary/deaths_summary.proto
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

goog.exportSymbol('proto.deaths_summary.AllDeathsSummaries', null, global);
goog.exportSymbol('proto.deaths_summary.DeathsSummary', null, global);
goog.exportSymbol('proto.deaths_summary.DeathsSummaryItem', null, global);
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
proto.deaths_summary.DeathsSummaryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.deaths_summary.DeathsSummaryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deaths_summary.DeathsSummaryItem.displayName = 'proto.deaths_summary.DeathsSummaryItem';
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
proto.deaths_summary.DeathsSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.deaths_summary.DeathsSummary.repeatedFields_, null);
};
goog.inherits(proto.deaths_summary.DeathsSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deaths_summary.DeathsSummary.displayName = 'proto.deaths_summary.DeathsSummary';
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
proto.deaths_summary.AllDeathsSummaries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.deaths_summary.AllDeathsSummaries.repeatedFields_, null);
};
goog.inherits(proto.deaths_summary.AllDeathsSummaries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deaths_summary.AllDeathsSummaries.displayName = 'proto.deaths_summary.AllDeathsSummaries';
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
proto.deaths_summary.DeathsSummaryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.deaths_summary.DeathsSummaryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deaths_summary.DeathsSummaryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.DeathsSummaryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kills: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.deaths_summary.DeathsSummaryItem}
 */
proto.deaths_summary.DeathsSummaryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deaths_summary.DeathsSummaryItem;
  return proto.deaths_summary.DeathsSummaryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deaths_summary.DeathsSummaryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deaths_summary.DeathsSummaryItem}
 */
proto.deaths_summary.DeathsSummaryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKills(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeaths(value);
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
proto.deaths_summary.DeathsSummaryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deaths_summary.DeathsSummaryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deaths_summary.DeathsSummaryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.DeathsSummaryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKills();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.deaths_summary.DeathsSummaryItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.deaths_summary.DeathsSummaryItem} returns this
 */
proto.deaths_summary.DeathsSummaryItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 kills = 2;
 * @return {number}
 */
proto.deaths_summary.DeathsSummaryItem.prototype.getKills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.deaths_summary.DeathsSummaryItem} returns this
 */
proto.deaths_summary.DeathsSummaryItem.prototype.setKills = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 deaths = 3;
 * @return {number}
 */
proto.deaths_summary.DeathsSummaryItem.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.deaths_summary.DeathsSummaryItem} returns this
 */
proto.deaths_summary.DeathsSummaryItem.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.deaths_summary.DeathsSummary.repeatedFields_ = [2];



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
proto.deaths_summary.DeathsSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.deaths_summary.DeathsSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deaths_summary.DeathsSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.DeathsSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.deaths_summary.DeathsSummaryItem.toObject, includeInstance)
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
 * @return {!proto.deaths_summary.DeathsSummary}
 */
proto.deaths_summary.DeathsSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deaths_summary.DeathsSummary;
  return proto.deaths_summary.DeathsSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deaths_summary.DeathsSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deaths_summary.DeathsSummary}
 */
proto.deaths_summary.DeathsSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 2:
      var value = new proto.deaths_summary.DeathsSummaryItem;
      reader.readMessage(value,proto.deaths_summary.DeathsSummaryItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.deaths_summary.DeathsSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deaths_summary.DeathsSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deaths_summary.DeathsSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.DeathsSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.deaths_summary.DeathsSummaryItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string category = 1;
 * @return {string}
 */
proto.deaths_summary.DeathsSummary.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.deaths_summary.DeathsSummary} returns this
 */
proto.deaths_summary.DeathsSummary.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DeathsSummaryItem items = 2;
 * @return {!Array<!proto.deaths_summary.DeathsSummaryItem>}
 */
proto.deaths_summary.DeathsSummary.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.deaths_summary.DeathsSummaryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.deaths_summary.DeathsSummaryItem, 2));
};


/**
 * @param {!Array<!proto.deaths_summary.DeathsSummaryItem>} value
 * @return {!proto.deaths_summary.DeathsSummary} returns this
*/
proto.deaths_summary.DeathsSummary.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.deaths_summary.DeathsSummaryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.deaths_summary.DeathsSummaryItem}
 */
proto.deaths_summary.DeathsSummary.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.deaths_summary.DeathsSummaryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.deaths_summary.DeathsSummary} returns this
 */
proto.deaths_summary.DeathsSummary.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.deaths_summary.AllDeathsSummaries.repeatedFields_ = [1];



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
proto.deaths_summary.AllDeathsSummaries.prototype.toObject = function(opt_includeInstance) {
  return proto.deaths_summary.AllDeathsSummaries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deaths_summary.AllDeathsSummaries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.AllDeathsSummaries.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.deaths_summary.DeathsSummary.toObject, includeInstance)
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
 * @return {!proto.deaths_summary.AllDeathsSummaries}
 */
proto.deaths_summary.AllDeathsSummaries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deaths_summary.AllDeathsSummaries;
  return proto.deaths_summary.AllDeathsSummaries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deaths_summary.AllDeathsSummaries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deaths_summary.AllDeathsSummaries}
 */
proto.deaths_summary.AllDeathsSummaries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.deaths_summary.DeathsSummary;
      reader.readMessage(value,proto.deaths_summary.DeathsSummary.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.deaths_summary.AllDeathsSummaries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deaths_summary.AllDeathsSummaries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deaths_summary.AllDeathsSummaries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deaths_summary.AllDeathsSummaries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.deaths_summary.DeathsSummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeathsSummary data = 1;
 * @return {!Array<!proto.deaths_summary.DeathsSummary>}
 */
proto.deaths_summary.AllDeathsSummaries.prototype.getDataList = function() {
  return /** @type{!Array<!proto.deaths_summary.DeathsSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.deaths_summary.DeathsSummary, 1));
};


/**
 * @param {!Array<!proto.deaths_summary.DeathsSummary>} value
 * @return {!proto.deaths_summary.AllDeathsSummaries} returns this
*/
proto.deaths_summary.AllDeathsSummaries.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.deaths_summary.DeathsSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.deaths_summary.DeathsSummary}
 */
proto.deaths_summary.AllDeathsSummaries.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.deaths_summary.DeathsSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.deaths_summary.AllDeathsSummaries} returns this
 */
proto.deaths_summary.AllDeathsSummaries.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(exports, proto.deaths_summary);
