import { Meteor } from 'meteor/meteor';
// import { User } from '../../api/user/User';
//import collections from api here

//initializing database
function addData(data) {
    //example.collections.insert(data);
}

function addName(name) {
  console.log(` Adding ${name.firstName} ${name.lastnName} `);
  User.collection.insert(name);
}

//initializing a colletion if empty
//pulls from the settings file for default collection data
/**
 if (example.collection.find().count() == 0) {
     if (Meteor.settings.defaultData) {
         Meteor.settings.defaultData.map(data=> addData(data));
     }
 }
 */