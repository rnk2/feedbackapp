-- database name :feedapp

-- change to default port : 3306

-- change to default password :root



create table sessions(ssid int(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,tname char(15),pname char(15),pst_date datetime);
	
create table idgeneration(ssid int(3),timestamp int(60),foreign key (ssid) references sessions(ssid),primary key (timestamp));

create table feedback(ssid int(3),user char(50),pskills int(5),tskills int(5),timestamp int(60),status bool,foreign key (timestamp) references idgeneration(timestamp),foreign key (ssid) references sessions(ssid),primary key(timestamp));



create table register(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,username varchar(20),password varchar(60),role varchar(12));

create table participants(sno int(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,ssid int(3),partc_name varchar(30),name_presenter
varchar(25),email varchar(30),foreign key (ssid) references sessions(ssid));

select a.partc_name,b.status from participants a join  feedback b on a.ssid=b.ssid where a.ssid=17;