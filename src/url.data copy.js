const urls = [
	{
		name: 'Owen Lars',
		url: 'https://i.ibb.co/WWwYvDM/Owen-Lars.jpg'
	},
	{
		name: 'Roos Tarpals',
		url: 'https://i.ibb.co/HXySQpy/Roos-Tarpals.jpg'
	},
	{
		name: 'Darth Maul',
		url: 'https://i.ibb.co/H2gTGR9/220px-Darth-Maul.png'
	},
	{
		name: 'Wicket Systri Warrick',
		url: 'https://i.ibb.co/qmXfD2T/220px-Wicket-W-Warrick.png'
	},
	{
		name: 'Jar Jar Binks',
		url: 'https://i.ibb.co/m8HZbDd/Jar-Jar-aotc.jpg'
	},
	{
		name: 'Palpatine',
		url: 'https://i.ibb.co/cDyPKp9/Palpatine.jpg'
	},
	{
		name: 'Rey',
		url: 'https://i.ibb.co/cxBTMLc/Rey-Star-Wars.png'
	},
	{
		name: 'Wat Tambor',
		url: 'https://i.ibb.co/ysqQVbH/Wat-Tambor.jpg'
	},
	{
		name: 'San Hill',
		url: 'https://i.ibb.co/wSCbMKf/San-Hill.jpg'
	},
	{
		name: 'Plo Koon',
		url: 'https://i.ibb.co/F7v2TXW/Plo-Koon.jpg'
	},
	{
		name: 'Jango Fett',
		url: 'https://i.ibb.co/QKvDK4v/Jango-Fett.jpg'
	},
	{
		name: 'Dormé',
		url: 'https://i.ibb.co/dGrMzk6/Dorm.jpg'
	},
	{
		name: 'Zam Wesell',
		url: 'https://i.ibb.co/SKqBbbY/Zam-Wesell.jpg'
	},
	{
		name: 'Poe Dameron',
		url: 'https://i.ibb.co/pXK6CH6/Poe-Dameron.jpg'
	},
	{
		name: 'Raymus Antilles',
		url: 'https://i.ibb.co/DY4zp7V/Raymus-Antilles.jpg'
	},
	{
		name: 'Ayla Secura',
		url: 'https://i.ibb.co/23XN3Lx/Ayla-Secura.jpg'
	},
	{
		name: 'Ratts Tyerell',
		url: 'https://i.ibb.co/VJgcj24/Ratts-Tyerell.jpg'
	},
	{
		name: 'Rugor Nass',
		url: 'https://i.ibb.co/gz058RN/Rugor-Nass.jpg'
	},
	{
		name: 'Quarsh Panaka',
		url: 'https://i.ibb.co/WWZhj1b/Quarsh-Panaka.jpg'
	},
	{
		name: 'Dud Bolt',
		url: 'https://i.ibb.co/64p02tm/Dud-Bolt.png'
	},
	{
		name: 'Shmi Skywalker',
		url: 'https://i.ibb.co/7yLFb14/Shmi-Skywalker.jpg'
	},
	{
		name: 'Adi Gallia',
		url: 'https://i.ibb.co/LYQVFJn/Adi-Gallia.jpg'
	},
	{
		name: 'Kit Fisto',
		url: 'https://i.ibb.co/SQwT7yg/Kit-Fisto.jpg'
	},
	{
		name: 'Ki-Adi-Mundi',
		url: 'https://i.ibb.co/CJ92B5S/Ki-Adi-Mundi.jpg'
	},
	{
		name: 'Poggle the Lesser',
		url: 'https://i.ibb.co/q9FvKft/Poggle-the-Lesser.jpg'
	},
	{
		name: 'Barriss Offee',
		url: 'https://i.ibb.co/GdPd7FJ/Barriss-Offee.jpg'
	},
	{
		name: 'Luminara Unduli',
		url: 'https://i.ibb.co/gZTk97h/Luminara-Unduli.jpg'
	},
	{
		name: 'Mace Windu',
		url: 'https://i.ibb.co/BzFkPWJ/Mace-Windu.jpg'
	},
	{
		name: 'R4-P17',
		url: 'https://i.ibb.co/dgrr5zg/R4-P17.jpg'
	},
	{
		name: 'Eeth Koth',
		url: 'https://i.ibb.co/9G7fDZH/Eeth-Koth.jpg'
	},
	{
		name: 'Mas Amedda',
		url: 'https://i.ibb.co/zs4csk7/Mas-Amedda.jpg'
	},
	{
		name: 'Sly Moore',
		url: 'https://i.ibb.co/CWR1xQ9/Sly-Moore.jpg'
	},
	{
		name: 'Dexter Jettster',
		url: 'https://i.ibb.co/BGVnbP4/Dexter-Jettster.jpg'
	},
	{
		name: 'Jek Tono',
		url: 'https://i.ibb.co/sm35KdM/Jek-Tono-Porkins.jpg'
	},
	{
		name: 'Cordé',
		url: 'https://i.ibb.co/Rj1d19X/Cord.jpg'
	},
	{
		name: 'Bail Prestor Organa',
		url: 'https://i.ibb.co/xskwwVY/Bail-Prestor-Organa.jpg'
	},
	{
		name: 'Cliegg Lars',
		url: 'https://i.ibb.co/7QV0Kqk/Cliegg-Lars.jpg'
	},
	{
		name: 'Gregar Typho',
		url: 'https://i.ibb.co/PFbPCPW/Gregar-Typho.png'
	},
	{
		name: 'Tion Medon',
		url: 'https://i.ibb.co/SJBhfQQ/Tion-Medon.jpg'
	},
	{
		name: 'Taun We',
		url: 'https://i.ibb.co/nsYJSnZ/Taun-We.jpg'
	},
	{
		name: 'Tarfful',
		url: 'https://i.ibb.co/92HNqT7/Tarfful.jpg'
	},
	{
		name: 'Yarael Poof',
		url: 'https://i.ibb.co/0hVf4yG/Yarael-Poof.png'
	},
	{
		name: 'Shaak Ti',
		url: 'https://i.ibb.co/qMssbBH/Shaak-Ti.jpg'
	},
	{
		name: 'Jocasta Nu',
		url: 'https://i.ibb.co/NsncP88/Jocasta-Nu.jpg'
	},
	{
		name: 'Lama Su',
		url: 'https://i.ibb.co/NsncP88/Jocasta-Nu.jpg'
	},
	{
		name: 'Saesee Tiin',
		url: 'https://i.ibb.co/HhJDy9X/Saesee-Tiin.jpg'
	},
	{
		name: 'Grievous',
		url: 'https://i.ibb.co/HhJDy9X/Saesee-Tiin.jpg'
	},
	{
		name: 'C-3PO',
		url: 'https://i.ibb.co/nPkbrs0/C-3PO.jpg'
	},
	{
		name: 'Gasgano',
		url: 'https://i.ibb.co/8xrjgqy/Gasgano.jpg'
	},
	{
		name: 'Lobot',
		url: 'https://i.ibb.co/Wtj7kfK/Lobot.jpg'
	},
	{
		name: 'Boba Fett',
		url: 'https://i.ibb.co/gFVtRLV/Boba-Fett.jpg'
	},
	{
		name: 'Bossk',
		url: 'https://i.ibb.co/vBgxQbH/Bossk.jpg'
	},
	{
		name: 'Mon Mothma',
		url: 'https://i.ibb.co/LhhNDMH/Mon-Mothma.png'
	},
	{
		name: 'Qui-Gon Jinn',
		url: 'https://i.ibb.co/q1mdSpc/Qui-Gon-Jinn.jpg'
	},
	{
		name: 'Bib Fortuna',
		url: 'https://i.ibb.co/d5VLdwf/Bib-Fortuna.png'
	},
	{
		name: 'Sebulba',
		url: 'https://i.ibb.co/g3Zk6Qg/Sebulba.jpg'
	},
	{
		name: 'Arvel Crynyd',
		url: 'https://i.ibb.co/GxtKfss/Arvel-Crynyd.jpg'
	},
	{
		name: 'Ric Olié',
		url: 'https://i.ibb.co/WBYyK05/Ric-Oli.jpg'
	},
	{
		name: 'Padmé Amidala',
		url: 'https://i.ibb.co/M17nB67/Padm-Amidala.jpg'
	},
	{
		name: 'Finis Valoru',
		url: 'https://i.ibb.co/GdTFQVM/Finis-Valorum.jpg'
	},
	{
		name: 'Nute Gunray',
		url: 'https://i.ibb.co/hYYG1Kj/Nute-Gunray.jpg'
	},
	{
		name: 'Watto',
		url: 'https://i.ibb.co/zSWT46w/Watto.jpg'
	},
	{
		name: 'Ackbar',
		url: 'https://i.ibb.co/L5Ps1ww/Ackbar.jpg'
	},
	{
		name: 'Dooku',
		url: 'https://i.ibb.co/yNRnsFS/Dooku.png'
	},
	{
		name: 'Finn',
		url: 'https://i.ibb.co/pzXWhQf/Finn.jpg'
	},
	{
		name: 'Captain Phasma',
		url: 'https://i.ibb.co/grLtVDF/Captain-Phasma.jpg'
	},
	{
		name: 'BB8',
		url: 'https://i.ibb.co/vQcC2X9/BB8.jpg'
	},
	{
		name: 'Yoda',
		url: 'https://i.ibb.co/DGzJfQd/Yoda.jpg'
	},
	{
		name: 'Lando Calrissian',
		url: 'https://i.ibb.co/ZKcjk7b/Lando-Calrissian.png'
	},
	{
		name: 'IG-88',
		url: 'https://i.ibb.co/w66VgBc/IG-88.jpg'
	},
	{
		name: 'Greedo',
		url: 'https://i.ibb.co/S3PsKNJ/Greedo.jpg'
	},
	{
		name: 'Wedge Antilles',
		url: 'https://i.ibb.co/37VVRVy/Wedge-Antilles.jpg'
	},
	{
		name: 'Jabba Desilijic Tiure',
		url: 'https://i.ibb.co/TMHk2RJ/Jabba-Desilijic-Tiure.jpg'
	},
	{
		name: 'Han Solo',
		url: 'https://i.ibb.co/4TbY7mK/Han-Solo.jpg'
	},
	{
		name: 'Biggs Darklighter',
		url: 'https://i.ibb.co/GP4Gmk4/Biggs-Darklighter.png'
	},
	{
		name: 'Chewbacca',
		url: 'https://i.ibb.co/k5JSqwh/chew.jpg'
	},
	{
		name: 'Wilhuff Tarkin',
		url: 'https://i.ibb.co/v1T7XZK/Wilhuff-Tarkin.png'
	},
	{
		name: 'Obi-Wan Kenobi',
		url: 'https://i.ibb.co/1JCpWmW/Obi-Wan-Kenobi.jpg'
	},
	{
		name: 'Anakin Skywalker',
		url: 'https://i.ibb.co/8cFgq3v/Anakin-Skywalker.png'
	},
	{
		name: 'Beru Whitesun lars',
		url: 'https://i.ibb.co/dkCCLmf/Beru-Whitesun-lars.jpg'
	},
	{
		name: 'R5-D4',
		url: 'https://i.ibb.co/zsYPLfN/R5-D4.jpg'
	},
	{
		name: 'Leia Organa',
		url: 'https://i.ibb.co/w7x7jGW/Leia-Organa.jpg'
	},
	{
		name: 'Darth Vader',
		url: 'https://i.ibb.co/yQyqFzv/star-wars-Luke-Skywalker.jpg'
	},
	{
		name: 'R2-D2',
		url: 'https://i.ibb.co/fnXcqRJ/R2-D2.jpg'
	},
	{
		name: 'Luke Skywalker',
		url: 'https://i.ibb.co/yQyqFzv/star-wars-Luke-Skywalker.jpg'
	},
	{
		name: 'Nien Nunb',
		url: 'https://i.ibb.co/rckX4Mh/Nien-Nunb.jpg'
	},
	{
		name: 'Ben Quadinaros',
		url: 'https://i.ibb.co/1MN5bqs/Ben-Quadinaros.png'
	}
];
export default urls;
