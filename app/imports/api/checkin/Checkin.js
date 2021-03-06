import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Checkins = new Mongo.Collection('Checkins');

const CheckinSchema = new SimpleSchema({
    user: String,
    userId: String,
    dateTime: Date,
    date: String,
    status: String,
}, { tracker: Tracker });

Checkins.attachSchema(CheckinSchema);

export { Checkins, CheckinSchema };