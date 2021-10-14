import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Users = new Mongo.Collection('Users');

const UserSchema = new SimpleSchema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
}, { tracker : Tracker });

Users.attachSchema(UserSchema);

export { Users, UserSchema };