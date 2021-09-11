import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const userProfiles = new Mongo.Collection('userProfiles');

const userProfileSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  email: String,
}, { tracker: Tracker });

userProfiles.attachSchema(userProfileSchema);

export { userProfiles, userProfileSchema };