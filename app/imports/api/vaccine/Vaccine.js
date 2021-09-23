import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Vaccines = new Mongo.Collection('Vaccines');

const VaccineSchema = new SimpleSchema({
    userId: String,
    firstName: String,
    lastName: String,
    vaccineName: String,
    lotNum1: String,
    date1: String,
    lotNum2: String,
    date2: String,
    dateOfBirth: String,
}, { tracker : Tracker });

Vaccines.attachSchema(VaccineSchema);

export { Vaccines, VaccineSchema };