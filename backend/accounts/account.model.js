const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    passwordHash: { type: String, required: true, trim: true },
    avatar: { type: String, required: true },
    plan: { type: String, required: true },
    language: { type: String, required: true },
    role: { type: String, required: true },
    notification: Boolean,
    verified: Date,
    resetToken: {
        token: String,
        expires: Date
    }, 
    passwordReset: Date,
    created: { type: Date, default: Date.now },
    updated: Date
});

schema.virtual('isVerified').get(function () {
    return !!(this.verified || this.passwordReset);
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
        delete ret.passwordHash;
    }
});

const Account = mongoose.model('Account', schema);
module.exports = Account;