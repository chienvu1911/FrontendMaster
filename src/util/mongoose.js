module.exports = {
    multipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((mongooseObject) =>
            mongooseObject.toObject(),
        );
    },
    mongooseToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    },
};
