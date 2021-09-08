import { Mongo } from 'meteor/mongo';
import simpleSchema from 'simpleSchema';
import { Tracker } from 'meteor/Tracker';

const Checkins = new Mongo.Collection('Checkins');

const CheckinSchema = new SimpleSchema({
    user: String,
    userId: String,
    date: Date,
    status: String,
}, { tracker: Tracker });

Checkins.attachSchema(CheckinSchema);

export { Checkins, CheckinSchema };