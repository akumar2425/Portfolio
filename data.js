var app = angular.module("myApp", []);

app.controller("myAppController", function ($scope, $window) {

	$scope.firstName = 'Arvind';
	$scope.lastName = 'Kumar';
	$scope.fullName = $scope.firstName + ' ' + $scope.lastName;
	$scope.imageUrl = 'media/Arvind-photo.png';
	$scope.doj = '2019-03-19';
	$scope.dob = '1998/11/25';
	$scope.about = `I am a Software Engineer in technologies like Java, JavaScript, SQL, HTML, CSS, etc. I have been fortunate to handle large to small-scale web applications.`;
	$scope.website = window.location.href;
	$scope.phone = '+91 9140 757 951';
	$scope.location = 'Kanpur, U.P. INDIA';
	$scope.age = getAge($scope.dob);
	$scope.degree = 'Master in Computer Application (MCA)';
	$scope.email = 'akumar.tech24@gmail.com';
	$scope.summary = 'Web Developer || Front-end and Back-end Developer || JAVA, SQL, HTML, CSS, JavaScript';

	$scope.skills = [
		{ name: 'HTML', performance: 90 },
		{ name: 'CSS', performance: 70 },
		{ name: 'BOOTSTRAP', performance: 60 },
		{ name: 'C Language', performance: 60 },
		{ name: 'JAVASCRIPT', performance: 90 },
		{ name: 'JAVA', performance: 75 },
		{ name: 'SQL', performance: 80 },
		{ name: 'DSA', performance: 70 },
		
	];

	$scope.achievements = [
		{ paragraph: 'Runner-up in Logo-Designer Competition in College.' },
		{ paragraph: 'Rewarded Gift Hamper For get Grade A in Fevicol Company.' },
		{ paragraph: 'Gold medal in Taekwondo state level competition' },
		{ paragraph: 'Award for Great Performance in Scout' },
		{ paragraph: 'Award for Great Performance for Coordinating as a Fashion-Show Co-ordinator' },
		
	];

	$scope.certifications = [
		{
			title: 'Advance Diploma In Computer Application',
			imageUrl_small: 'assets/certificates/small/Advance-Diploma-in-Computer-Application.jpg',
			imageUrl: 'assets/certificates/Advance-Diploma-in-Computer-Application.jpg',
		}, {
			title: 'Course On Computer Concepts',
			imageUrl_small: 'assets/certificates/small/CCC.jpg',
			imageUrl: 'assets/certificates/CCC.jpg',
		}, {
			title: 'Manual Accounting with Tally GST',
			imageUrl_small: 'assets/certificates/small/Manual-Accounting.jpg',
			imageUrl: 'assets/certificates/Manual-Accounting.jpg',
		}, {
			title: 'Certificate of Appreciation (Next Level)',
			imageUrl_small: 'assets/certificates/small/Next-level.jpg',
			imageUrl: 'assets/certificates/Next-level.jpg',
		}, {
			title: 'Certificate of Participation as Co-ordinator (Fashion-Show) at KIT',
			imageUrl_small: 'assets/certificates/small/Coordinator-FS.jpg',
			imageUrl: 'assets/certificates/Coordinator-FS.jpg',
		}, {
			title: 'Certificate to cleared the CSS(Basic) Assessment on HackerRank',
			imageUrl_small: 'assets/certificates/small/CSS-Assessment-HackerRank.jpg',
			imageUrl: 'assets/certificates/CSS-Assessment-HackerRank.jpg',
		}, {
			title: 'Certificate of Completion "Cyber Security Threats" at "Great Learning Academy"',
			imageUrl_small: 'assets/certificates/small/CyberSecurityThreats-GreatLearning.jpg',
			imageUrl: 'assets/certificates/CyberSecurityThreats-GreatLearning.jpg',
		}, {
			title: 'Certificate of Cleared a "Cloud Computing Assessment" on "IBM"',
			imageUrl_small: 'assets/certificates/small/IBM-Cloud.jpg',
			imageUrl: 'assets/certificates/IBM-Cloud.jpg',
		}, {
			title: 'Certificate of Cleared a "Data-Science Assessment" on "IBM"',
			imageUrl_small: 'assets/certificates/small/IBM-DS.jpg',
			imageUrl: 'assets/certificates/IBM-DS.jpg',
		}, {
			title: 'Certificate of Participation in "Intregating Tech" in "GuruShala"',
			imageUrl_small: 'assets/certificates/small/Integrating-Tech-Certificate.jpg',
			imageUrl: 'assets/certificates/Integrating-Tech-Certificate.jpg',
		}, {
			title: 'Certificate of Completetion An Internship at "DigitalBhem"',
			imageUrl_small: 'assets/certificates/small/Internship-DigitalBhem.jpg',
			imageUrl: 'assets/certificates/Internship-DigitalBhem.jpg',
		}, {
			title: 'Certificate of Appreciation of "World-Vision"',
			imageUrl_small: 'assets/certificates/small/NGO-WV.jpg',
			imageUrl: 'assets/certificates/NGO-WV.jpg',
		}, {
			title: 'Certificate of Participation on "Python Basics" in "WhiteHatJr"',
			imageUrl_small: 'assets/certificates/small/Python-WhitehateJr.jpg',
			imageUrl: 'assets/certificates/Python-WhitehateJr.jpg',
		}, {
			title: 'Certificate of State-Award of "Scout-Guide"',
			imageUrl_small: 'assets/certificates/small/Scout-Guide.jpg',
			imageUrl: 'assets/certificates/Scout-Guide.jpg',
		}, {
			title: 'Certificate of "Shikha-Samman" in "Fevicol"',
			imageUrl_small: 'assets/certificates/small/ShikshaSamman-Fevicol.jpg',
			imageUrl: 'assets/certificates/ShikshaSamman-Fevicol.jpg',
		}, {
			title: 'Certificate of State-Award with Gold-madel in "Taekwando"',
			imageUrl_small: 'assets/certificates/small/Taekwando.jpg',
			imageUrl: 'assets/certificates/Taekwando.jpg',
		}
	];

	$scope.educations = [
		{
			name: 'Master in Computer Application',
			duration: '2022-2024',
			college: 'Kanpur Institute of Technology, Kanpur',
			message: 'Currently I am Working on a Mini Project given by College.'
		}, {
			name: 'Bachelor of Science',
			duration: '2015-2018',
			college: 'Pt. Khere Prashad Mahavidyalaya , Kanpur',
			message: 'I completed my graduation from here.'
		}, {
			name: 'Intermediate',
			duration: '2013-2015',
			college: 'Dr. Chiranji Lal Rashtriya Inter College, Kanpur',
			message: 'I completed my Intermediate Education form here and scored first division.'
		}, {
			name: 'High School',
			duration: '2011-2013',
			college: 'Dr. Chiranji Lal Rashtriya Inter College, Kanpur',
			message: 'I completed my High School Education form here and scored first division.'
		},
	];

	

	$scope.recommendations = [
		{
			name: 'Abhishek Singh',
			message: 'Arvind is very hard working, focused, and dedicated individual. He has a good sense of responsibility and is always ready for new challenges. His adaptability and pressure handling capabilities are simple commendable. He is an excellent team member and can be a good leader depending on the situation.'
		}, {
			name: 'Vishal Singh',
			message: 'Arvind is a very hardworking and had very good technical knowledge. He is very calm in nature and always ready to help their juniors. He always inspire us. All the best for your future.'
		}, {
			name: 'Abhishek Shrivastava',
			message: 'Arvind sir is a nice guy . Haven\'t worked much with each other. he is a smart and quick learner. He always inspires me.'
		}, {
			name: 'Shivendra Pratap Singh',
			message: ' is very Dedicated and Responsible towards his responsibilities. He is also helping nature with the colleagues and very humble person, and also a good team player .'
		}, {
			name: 'Ashutosh Singh Sachan',
			message: 'Arvind is one of the most valuable people I have ever met. Both innovative and professional. Experienced, deadline oriented, and intelligent person. He is a fantastic person to work with and is not only a multi-skilled and insightful colleague but also an inspiring strategist. Very good person. A great employee with very strong problem solving skills. He is an asset to any company. I would highly recommend him. all the best for the future.'
		}, {
			name: 'Anjali Katiyar',
			message: 'He is focused and good developer. His dedication towords work is appreciated. His logics are very clear.'
		}, {
			name: 'Harshit Agnihotri',
			message: 'Arvind is always looking to learn new Technologies, He is a Quick learner.'
		}, 
	];

	$scope.links = [
		{
			name: 'twitter',
			class: 'bx bxl-twitter',
			href: 'https://twitter.com/akumar2425'
		}, {
			name: 'instagram',
			class: 'bx bxl-instagram',
			href: 'https://www.instagram.com/complicated_ak/'
		}, {
			name: 'linkedin',
			class: 'bx bxl-linkedin',
			href: 'https://www.linkedin.com/in/akumar2425/'
		}, {
			name: 'github',
			class: 'bx bxl-github',
			href: 'https://github.com/akumar2425'
		}, {
			name: 'gmail',
			class: 'bx bxl-gmail',
			href: 'mailto:akumar.tech24@gmail.com'
		}, {
			name: 'whatsapp',
			class: 'bx bxl-whatsapp',
			href: 'https://wa.me/+919140757951'
		}, {
			name: 'telegram',
			class: 'bx bxl-telegram',
			href: 'https://telegram.me/akumar2425',
		},
	];

	$scope.projects = [
		{
			name: 'Eka1',
			type: 'Web',
			imageUrl_small: 'media/small_project/eka.png',
			imageUrl: 'media/eka.png',
			website: 'https://eka1.com/',
			filter: 'web'
		}, 
	]

	function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	function dateDiff(startingDate, endingDate) {
		var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
		if (!endingDate) {
			endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
		}
		var endDate = new Date(endingDate);
		if (startDate > endDate) {
			var swap = startDate;
			startDate = endDate;
			endDate = swap;
		}
		var startYear = startDate.getFullYear();
		var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
		var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		var yearDiff = endDate.getFullYear() - startYear;
		var monthDiff = endDate.getMonth() - startDate.getMonth();
		if (monthDiff < 0) {
			yearDiff--;
			monthDiff += 12;
		}
		var dayDiff = endDate.getDate() - startDate.getDate();
		if (dayDiff < 0) {
			if (monthDiff > 0) {
				monthDiff--;
			} else {
				yearDiff--;
				monthDiff = 11;
			}
			dayDiff += daysInMonth[startDate.getMonth()];
		}

		let newYear = '';
		if (yearDiff == 1) {
			newYear = yearDiff + ' Year ';
		} else if (yearDiff > 1) {
			newYear = yearDiff + ' Years ';
		}

		let month = '';
		if (monthDiff == 1) {
			month = monthDiff + ' Month'
		} else if (monthDiff > 1) {
			month = monthDiff + ' Months'
		}

		return newYear + '' + month;
	}
});