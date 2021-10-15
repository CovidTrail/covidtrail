import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

const urls = new Mongo.Collection("Urls")

const urlsSchema = new SimpleSchema ({
  userId: String,
  image: String

    }, { tracker : Tracker });

urls.attachSchema(urlsSchema);

export { urls, urlsSchema }
