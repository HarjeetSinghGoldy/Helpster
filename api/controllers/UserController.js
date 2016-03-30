/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * Check the provided email address and password, and if they
   * match a real user in the database, sign in to Medool.
   */
  login: function (req, res) {

    // Try to look up user using the provided email address
    User.findOne({
      email: req.param('email')
    }, function foundUser(err, user) {
      if (err)
        return res.negotiate(err);
      if (!user)
        return res.notFound();

      // Compare password attempt from the form params to the encrypted password
      // from the database (`user.password`)
      require('machinepack-passwords').checkPassword({
        passwordAttempt: req.param('password'),
        encryptedPassword: user.encryptedPassword
      }).exec({
        error: function (err) {
          return res.negotiate(err);
        },
        /*
         If the password from the form params doesn't checkout w/ the encrypted
         password from the database...
         */
        incorrect: function () {
          return res.notFound();
        },
        success: function () {

          // Store user id in the user session
          req.session.me = user.id;

          // All done- let the client know that everything worked.
          return res.ok();
        }
      });
    });

  }

};

