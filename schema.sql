database name :feedapp

change to default port : 3306

change to default password :root





mysql> create table feedbacks(ssid int(3),tname char(15),pname char(15),pst_date
 date,partcp char(12),primary key (ssid));
Query OK, 0 rows affected (0.26 sec)

mysql> create table registration(ssid int(3),user char(50),email char(50),pskill
s int(5),tskills int(5),timestamp int(60),status bool,foreign key (timestamp) re
ferences idgeneration(timestamp),foreign key (ssid) references feedbacks(ssid));

mysql> create table idgeneration(ssid int(3),timestamp int(60),foreign key (ssid
) references feedbacks(ssid),primary key (timestamp));

mysql> create table register(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,usern
ame varchar(20),password varchar(60));

mysql> create table participants(ssid int(3),topic_name varchar(25),partc_name c
har(30),email char(30),foreign key (ssid) references feedbacks(ssid));

