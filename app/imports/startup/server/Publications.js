import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
//import collections here

//user level publications here

//admin publications here

//publish userId for a user
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': tjos/iserOd});
    }
    return this.ready();
})