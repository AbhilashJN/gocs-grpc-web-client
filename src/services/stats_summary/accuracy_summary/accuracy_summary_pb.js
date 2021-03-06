// source: services/stats_summary/accuracy_summary/accuracy_summary.proto
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

goog.exportSymbol('proto.accuracy_summary.AccuracySummary', null, global);
goog.exportSymbol('proto.accuracy_summary.AccuracySummaryItem', null, global);
goog.exportSymbol('proto.accuracy_summary.AllAccuracySummaries', null, global);
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
proto.accuracy_summary.AccuracySummaryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accuracy_summary.AccuracySummaryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accuracy_summary.AccuracySummaryItem.displayName = 'proto.accuracy_summary.AccuracySummaryItem';
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
proto.accuracy_summary.AccuracySummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accuracy_summary.AccuracySummary.repeatedFields_, null);
};
goog.inherits(proto.accuracy_summary.AccuracySummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accuracy_summary.AccuracySummary.displayName = 'proto.accuracy_summary.AccuracySummary';
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
proto.accuracy_summary.AllAccuracySummaries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accuracy_summary.AllAccuracySummaries.repeatedFields_, null);
};
goog.inherits(proto.accuracy_summary.AllAccuracySummaries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accuracy_summary.AllAccuracySummaries.displayName = 'proto.accuracy_summary.AllAccuracySummaries';
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
proto.accuracy_summary.AccuracySummaryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.accuracy_summary.AccuracySummaryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accuracy_summary.AccuracySummaryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AccuracySummaryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fired: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hitpercentage: jspb.Message.getFieldWithDefault(msg, 4, ""),
    headshots: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.accuracy_summary.AccuracySummaryItem}
 */
proto.accuracy_summary.AccuracySummaryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accuracy_summary.AccuracySummaryItem;
  return proto.accuracy_summary.AccuracySummaryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accuracy_summary.AccuracySummaryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accuracy_summary.AccuracySummaryItem}
 */
proto.accuracy_summary.AccuracySummaryItem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFired(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHits(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHitpercentage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeadshots(value);
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
proto.accuracy_summary.AccuracySummaryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accuracy_summary.AccuracySummaryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accuracy_summary.AccuracySummaryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AccuracySummaryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFired();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHits();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHitpercentage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHeadshots();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accuracy_summary.AccuracySummaryItem} returns this
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 fired = 2;
 * @return {number}
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.getFired = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.accuracy_summary.AccuracySummaryItem} returns this
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.setFired = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 hits = 3;
 * @return {number}
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.getHits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.accuracy_summary.AccuracySummaryItem} returns this
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.setHits = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string hitPercentage = 4;
 * @return {string}
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.getHitpercentage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.accuracy_summary.AccuracySummaryItem} returns this
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.setHitpercentage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 headshots = 5;
 * @return {number}
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.getHeadshots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.accuracy_summary.AccuracySummaryItem} returns this
 */
proto.accuracy_summary.AccuracySummaryItem.prototype.setHeadshots = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accuracy_summary.AccuracySummary.repeatedFields_ = [2];



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
proto.accuracy_summary.AccuracySummary.prototype.toObject = function(opt_includeInstance) {
  return proto.accuracy_summary.AccuracySummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accuracy_summary.AccuracySummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AccuracySummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.accuracy_summary.AccuracySummaryItem.toObject, includeInstance)
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
 * @return {!proto.accuracy_summary.AccuracySummary}
 */
proto.accuracy_summary.AccuracySummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accuracy_summary.AccuracySummary;
  return proto.accuracy_summary.AccuracySummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accuracy_summary.AccuracySummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accuracy_summary.AccuracySummary}
 */
proto.accuracy_summary.AccuracySummary.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.accuracy_summary.AccuracySummaryItem;
      reader.readMessage(value,proto.accuracy_summary.AccuracySummaryItem.deserializeBinaryFromReader);
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
proto.accuracy_summary.AccuracySummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accuracy_summary.AccuracySummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accuracy_summary.AccuracySummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AccuracySummary.serializeBinaryToWriter = function(message, writer) {
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
      proto.accuracy_summary.AccuracySummaryItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string category = 1;
 * @return {string}
 */
proto.accuracy_summary.AccuracySummary.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accuracy_summary.AccuracySummary} returns this
 */
proto.accuracy_summary.AccuracySummary.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AccuracySummaryItem items = 2;
 * @return {!Array<!proto.accuracy_summary.AccuracySummaryItem>}
 */
proto.accuracy_summary.AccuracySummary.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.accuracy_summary.AccuracySummaryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accuracy_summary.AccuracySummaryItem, 2));
};


/**
 * @param {!Array<!proto.accuracy_summary.AccuracySummaryItem>} value
 * @return {!proto.accuracy_summary.AccuracySummary} returns this
*/
proto.accuracy_summary.AccuracySummary.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.accuracy_summary.AccuracySummaryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accuracy_summary.AccuracySummaryItem}
 */
proto.accuracy_summary.AccuracySummary.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.accuracy_summary.AccuracySummaryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accuracy_summary.AccuracySummary} returns this
 */
proto.accuracy_summary.AccuracySummary.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accuracy_summary.AllAccuracySummaries.repeatedFields_ = [1];



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
proto.accuracy_summary.AllAccuracySummaries.prototype.toObject = function(opt_includeInstance) {
  return proto.accuracy_summary.AllAccuracySummaries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accuracy_summary.AllAccuracySummaries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AllAccuracySummaries.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.accuracy_summary.AccuracySummary.toObject, includeInstance)
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
 * @return {!proto.accuracy_summary.AllAccuracySummaries}
 */
proto.accuracy_summary.AllAccuracySummaries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accuracy_summary.AllAccuracySummaries;
  return proto.accuracy_summary.AllAccuracySummaries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accuracy_summary.AllAccuracySummaries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accuracy_summary.AllAccuracySummaries}
 */
proto.accuracy_summary.AllAccuracySummaries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accuracy_summary.AccuracySummary;
      reader.readMessage(value,proto.accuracy_summary.AccuracySummary.deserializeBinaryFromReader);
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
proto.accuracy_summary.AllAccuracySummaries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accuracy_summary.AllAccuracySummaries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accuracy_summary.AllAccuracySummaries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accuracy_summary.AllAccuracySummaries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.accuracy_summary.AccuracySummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AccuracySummary data = 1;
 * @return {!Array<!proto.accuracy_summary.AccuracySummary>}
 */
proto.accuracy_summary.AllAccuracySummaries.prototype.getDataList = function() {
  return /** @type{!Array<!proto.accuracy_summary.AccuracySummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.accuracy_summary.AccuracySummary, 1));
};


/**
 * @param {!Array<!proto.accuracy_summary.AccuracySummary>} value
 * @return {!proto.accuracy_summary.AllAccuracySummaries} returns this
*/
proto.accuracy_summary.AllAccuracySummaries.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.accuracy_summary.AccuracySummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.accuracy_summary.AccuracySummary}
 */
proto.accuracy_summary.AllAccuracySummaries.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.accuracy_summary.AccuracySummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accuracy_summary.AllAccuracySummaries} returns this
 */
proto.accuracy_summary.AllAccuracySummaries.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(exports, proto.accuracy_summary);
