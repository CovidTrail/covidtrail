import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

//create functions in server to be called by client
Meteor.methods(
    {
      //create user/admin account
      createAccount: function (firstname, lastname, email, password, role) {
        console.log(`Creating user ${email}`);
        const userID = Accounts.createUser({
          username: email,
          email: email,
          password: password,
          profile: {
            firstname: firstname,
            lastname: lastname,
          }
        });
        Roles.createRole(role, { unlessExists: true });
        Roles.addUsersToRoles(userID, role);
      }
    }
);

//Not using the settings.development.json file
//startup with default user accounts (change these after first run)
/*if (Meteor.users.find().count() === 0) {
  console.log('No accounts found');
  if (Meteor.settings.defaultAccounts) {
    console.log('Starting application with default users');
    Meteor.settings.defaultAccounts.map(({ email, password, role, firstName, lastName, description }) => createUser(email, password, role, firstName, lastName, description));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
*/
