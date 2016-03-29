/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

  module.exports = {

    schema: true,
    tableName: 'user',

  attributes: {
    helpsterId :{
      type:'integer',
      required: 'true',
      defaultsTo: 1,
      autoIncrement: true,
      primaryKey: true,
      columnName: 'helpsterId'

    },
    firstname:{
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 30,
      columnName: 'firstname'
    },
    lastname:{
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 30,
      columnName: 'lastname'
    },
    mobile: {
      type: 'integer',
      integer: true,
      required: true,
      unique: true,
      minLength:10,
      maxLength:10,
      columnName: 'mobile'
    },
    email:{
      type: 'string',
      email: true,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 50,
      columnName: 'email'

    },
    encryptedPassword:{
      type: 'string',
      columnName: 'encryptedPassword'
    },
    gender:{
      enum: ['male','female'],
      defaultsTo: 'male',
      required: true,
      columnName: 'gender'
    },
    online:{
      type:'boolean',
      defaultsTo: false,
      columnName: 'online',

    },
    admin:{
      type:'boolean',
      defaultsTo: false,
      columnName: 'admin'
    },
    dob:{
      type:'date',
      date:true,
      required: true,
      columnName:'dob'
    },
    //toJSON: function(){
    //  var obj= this.toObject();
    //  delete obj.password;
    //  delete obj.confirmation;
    //  delete obj.encryptedPassword;
    //  delete obj._crsf;
    //  delete obj.helpsterId;
    //},
    beforeValidation: function (values, next) {
      if (typeof values.admin !== 'undefined') {
        if (values.admin === 'unchecked') {
          values.admin = false;
        } else if (values.admin[1] === 'on') {
          values.admin = true;
        }
      }
      next();
    }
  }
  };

