const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const userngSchema = require("./booking");





class UserRole extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, 'UserRole');
  }
  cast(val) {
    let _val = String(val);
    if (_val != 'Customer' && _val != 'Admin') {
      throw new Error('UserRole: ' + val +
        ' does not match a valid user role.');
    }
    return _val;
  }
}
mongoose.Schema.Types.UserRole = UserRole;

const userSchema = new mongoose.Schema({
  name: {
    type: Schema.Types.String,
    ref: "nameUser",
    required: true,
    lowercase:true,
  },
  surname: {
    type: String,
    required: true,
    lowercase:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: { validator: validator.isEmail, msg: "Invalid email" },
  },
  password: {
    type: String,
    required: true,
  },
  imgUser:{
    type:String,
    ref:"imgUser",
    lowercase:true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isMobilePhone,
      msg: "Invalid mobile phone number.",
    },
  },
  country: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  birthday: {
    type: Date,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.UserRole,
    default: 'Customer'
   },
  isActive: {
    type: Boolean,
    default: true,
  },
  imgUser:{
    type: String,
  }
});

userSchema.set('toJSON', {
  transform: function(doc,ret,opt) {
      delete ret['password'];
      return ret;
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
