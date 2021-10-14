import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Checkins } from '../../api/checkin/Checkin';
import { Vaccines } from '../../api/vaccine/Vaccine';
import { Users } from '../../api/user/UserProfile';

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

Meteor.publish('Users', function publish() {
  if (this.userId) {
    return Users.find({ userId: this.userId})
  }
  return this.ready();
})

// publish only documents for logged in user
Meteor.publish('Status', function () {
    return Checkins.find();
})


//admin publications 

//publish roles for each user
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId});
    }
    return this.ready();
})
