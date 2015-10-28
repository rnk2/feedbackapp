database name :feedapp

change to default port : 3306

change to default password :root



create table feedback(ssid int(3),tname char(15),pname char(15),pst_date date,partcp char(12),primary key (ssid));
	
create table idgeneration(ssid int(3),timestamp int(60),foreign key (ssid) references feedback(ssid),primary key (timestamp));

create table registrations(ssid int(3),user char(50),email char(50),pskills int(5),tskills int(5),timestamp int(60),status b
ool,foreign key (timestamp) references idgeneration(timestamp),foreign key (ssid) references feedback(ssid));



create table register(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,username varchar(20),password varchar(60));

create table participants(sno int(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,ssid int(3),topic_name varchar(30),partc_name varchar(30),email varchar(30),foreign key (ssid) re
ferences feedback(ssid));

var query = db.config.query('insert into idgeneration(ssid,id) values('+ssid+"," +id+ ');',function(req,resp){
             console.log(res);

        });

var query = db.config.query('insert into registration(ssid,user,email,pskills,tskills,timestamp,status) values(' + ssid + "," + "'" + user + "'" + "," + "'" + email + "'" + "," + "'" + pskills + "'" + "," + "'" + tskills + "'" + "," + timestamp + "," + status +');', function(req, res) {
            console.log(res);
            response.send(res);
        });