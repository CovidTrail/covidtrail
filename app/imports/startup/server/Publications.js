import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Checkins } from '../../api/checkin/Checkin';
import { Vaccines } from '../../api/vaccine/Vaccine';
import { urls } from '../../api/urlCollection/Image';
import { UserProfiles } from '../../api/user/UserProfile';


// publish only documents for logged in user
Meteor.publish('Checkin', function publish() {
    if (this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return Checkins.find({ user: username});
    }
    return this.ready();
})

Meteor.publish('Vaccine', function publish() {
    if (this.userId) {
        return Vaccines.find({ userId: this.userId})
    }
    return this.ready();
})


Meteor.publish('urls', function publish() {
  if (this.userId) {
    return urls.find({ userId: this.userID})
  }
  return this.ready();
})


Meteor.publish('UserProfile', function publish() {
  if (this.userId) {
    return UserProfiles.find({ userId: this.userId})
  }
  return this.ready();
})


// publish only documents for logged in user
Meteor.publish('Status', function () {
    return Checkins.find();
})

Meteor.methods({
  updateImageUrl: function( id, doc ){
    urls.collection.update( id, { $set: doc }, {upsert: true});
  }
});
//admin publications

//publish roles for each user
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId});
    }
    return this.ready();
})
