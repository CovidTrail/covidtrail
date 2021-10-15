import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const UserProfiles = new Mongo.Collection('UserProfiles');

const UserProfileSchema = new SimpleSchema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  dateOfSubmission: Date,
}, { tracker : Tracker });

UserProfiles.attachSchema(UserProfileSchema);

export { UserProfiles, UserProfileSchema };