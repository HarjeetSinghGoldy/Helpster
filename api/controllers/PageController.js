/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  showSignup: function (req, res, next) {

    return res.view('user/Signup',
      {
        layout: false
      })

  },

//  showHomePage: function(req, res, next){
//
//  //  If not logged in show the public view homepage
//
//    if(!req.session.me) {
//
//      return res.view('user/homepage', {
//        layout: false
//
//      });
//    }
//    //  Else looked up the login view and show the login dashboard for the user
//    //  Bootstrap the basic user data from the server using html respose.
//      User.findOne(req.session.me, function(err, user){
//        if(err){
//        return res.negotiate(err);
//        }
//
//        if(!user){
//        Sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
//        return view('user/homepage',
//          {
//          layout: false
//          })
//        }
//
//        return view ('user/Signup',
//          {
//            me: {
//              id:         user.id,
//              helpsterID: user.helpsterID,
//              firstname:  user.firstname,
//              lastname:   user.lastname,
//              email:      user.email,
//              isAdmin:    user.admin
//            },
//            layout: false,
//          })
//
//      })
//
//  }
//
//}
//

  showHomePage: function (req, res) {

    // If not logged in, show the public view.
    console.log(req.method)
    console.log(req.session.me)
    if (!req.session.me) {
      return res.view('user/homepage');

    }
    console.log(req.session.me)

    // Otherwise, look up the logged-in user and show the logged-in view,
    // bootstrapping basic user data in the HTML sent from the server
    console.log("This is the error", req.session.me)
    User.findOne(req.session.me, function (err, user) {
      if (err) {
        return res.negotiate(err);
      }
      console.log(user);
      console.log(err);
      console.log(req.session.me)
      if (!user) {
        sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
        return res.view('user/homepage');
      }

      return res.view('user/dashboard', {

        me: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          title: user.title,
          isAdmin: !!user.admin,
          gravatarUrl: user.gravatarUrl
        },
        layout: false
      });

    });
  }
}
