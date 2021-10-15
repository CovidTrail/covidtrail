import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Profiles = new Mongo.Collection('Profiles');

const ProfileSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  email: String,
}, { tracker: Tracker });

Profiles.attachSchema(ProfileSchema);

export const Profile = new ProfileCollection();

// import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
// import { Tracker } from 'meteor/tracker';
//
// class ProfileCollection {
//   constructor() {
//     this.name = 'ProfileCollection';
//     this.collection = new Mongo.Collection(this.name);
//     this.schema = new SimpleSchema({
//       firstName: String,
//       lastName: String,
//       email: String,
//     },{ tracker: Tracker });
//     this.collection.attachSchema(this.schema);
//     this.userName = `${this.name}.publication.user`;
//     this.adminName = `${this.name}.publication.admin`;
//   }
// }
//
// export const Profile = new ProfileCollection();