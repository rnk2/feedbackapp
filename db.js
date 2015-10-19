mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3309',
    user: 'root',
    password: 'admin',
    database: 'feedapp'
});

module.exports = {
	config:connection
}





