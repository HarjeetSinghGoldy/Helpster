/**
 * Created by harjeet on 8/4/16.
 */

//
//Useage
//
//
//res.mobileNumberInUse();

module.exports = function mobileNumberInUse() {

  var req = this.req;
  var res = this.res;

  return res.send('410',  'Mobile number is not unique');

}
