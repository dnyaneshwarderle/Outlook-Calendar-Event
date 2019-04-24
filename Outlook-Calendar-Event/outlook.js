var outlook = require('node-outlook');
var config = require('./outlook_token.json');
  
// console.log(config.token)
   outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
   var token= config.token
   var newEvent = config.newEvent
    var userInfo = {
      email: config.email
    };

    outlook.calendar.createEvent({token: token, event: newEvent, user: userInfo},
      function(error, result){
        if (error) {
          console.log('createEvent returned an error: ' + error);
        }
        else if (result) {
          console.log(JSON.stringify(result, null, 2));
        }
      });
