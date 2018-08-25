var mysql = require('mysql');

var connection = mysql.createConnection(
     "mysql://bba3bcd4199375:db85379c@us-cdbr-iron-east-01.cleardb.net/heroku_331f77c6c193ff2?reconnect=true"
 );


connection.connect(function(err) {
   if (err) {
       console.error('error connecting: ' + err.stack);
       return;
   }
   console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
