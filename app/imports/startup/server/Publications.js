import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Checkins } from '../../api/checkin/Checkin'

// publish only documents for logged in user
Meteor.publish('Checkin', function publish() {
    if (this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return Checkins.find({ user: username});
    }
    return this.ready();
})

//admin publications 

//publish roles for each user
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.roleAssignment.find({ 'user._id': this.userId});
    }
    return this.ready();
})
