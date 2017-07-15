const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate : {
      validator: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
    }
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrpyt.hash(this.password, salt, null, (err,hash) => {
      if(err) return next(err);
      this.password = hash;
      next();
    })
  });
});

UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  bcrypt.compare();
};

module.exports = UserSchema;
