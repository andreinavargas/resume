//BIO
var bio = {
	name: "Maria Andreina Vargas",
	role: "Marketing Specialist",
	biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/000/1f1/38e/3af4dee.jpg",
	welcomeMessage: "Bachelor degree in Business and Administration with a lot of experience in digital marketing, what are you waiting for, hire me!",
	skills: ["Responsability", "Awesomeness", "Queen of digital ads"],
	contacts: {
		mobile: '0034644129265',
		email: 'andreina.vargas@gmail.com',
		github: 'andreina.vargas',
		location: 'Madrid, Spain'
	},
	display: function () {
		// Header with name
		var formatted_name = HTMLheaderName.replace("%data%", this.name);
		$("#header").append(formatted_name);

		// Role in header
		var formatted_role = HTMLheaderRole.replace("%data%", this.role);
		$("#header").append(formatted_role);

		// Picture
		var formated_picture_url = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formated_picture_url);

		// Welcome message
		var formated_welcome_message = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formated_welcome_message);

		$("#header").append(HTMLheaderRole.replace("%data%", ""));

		// Mobile number
		var formated_contact_info = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts, #footerContacts").append(formated_contact_info);

		// Email adress
		var formated_email = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts, #footerContacts").append(formated_email);

		// Github Account
		var formated_github_info = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts, #footerContacts").append(formated_github_info);

		$("#header").append("<br/>");
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < this.skills.length; i++) {
			var formated_skills = HTMLskills.replace("%data%", this.skills[i]);
			$("#skills").append(formated_skills);
		}
	}
};

//Work
var work = {
	jobs: [
		{
			title: "Online Sales Manager",
			employer: "playthe.net",
			dates: "2015 - 2017",
			location: "Madrid, Spain",
			description: "Managing the Online Sales department contacts and budgets"
		},
		{
			title: "Digital Account Executive",
			employer: "Marco de Comunicacion",
			dates: "2013 - 2015",
			location: "Madrid, Spain",
			description: "Customer support and overal supervision of digital product sales"
		}
	],
	display: function () {
		for (var i = 0; i < this.jobs.length; i++) {
			var work = this.jobs[i];
			$("#workExperience").append(HTMLworkStart);

			var formated_employer = HTMLworkEmployer.replace("%data%", work.employer);
			//current job position
			var formated_job_position = HTMLworkTitle.replace("%data%", work.title);

			var concatenated = formated_employer + formated_job_position;

			$(".work-entry:last").append(concatenated);

			// years working
			var formated_year_worked = HTMLworkDates.replace("%data%", work.dates);
			$(".work-entry:last").append(formated_year_worked);

			// city business of work
			var formated_city = HTMLworkLocation.replace("%data%", work.location);
			$(".work-entry:last").append(formated_city);

			var formated_description = HTMLworkDescription.replace("%data%", work.description);
			$(".work-entry:last").append(formated_description);
		}
	}
};

//Education
var education = {
	schools: [
		{
			name: "Universidad Complutense de Madrid",
			dates: "2010 - 2011",
			location: "Madrid, Spain",
			degree: "Master in digital Marketing",
			majors: ["Marketing"]
		},
		{
			name: "Universidad Centroccidental Lisandro Alvarado",
			dates: "2004 - 2009",
			location: "Barquisimeto, Venezuela",
			degree: "Bacherlor in Business and Administration",
			majors: ["Business Administration"]
		}
	],
	onlineCourses: [
		{
			title: 'Nano Degree in Programming',
			school: 'Udacity',
			dates: 'In progress',
			url: 'www.udacity.com'
		}
	],
	display: function () {
		for (var i = 0; i < this.schools.length; i++) {
			var study = this.schools[i];

			$("#education").append(HTMLschoolStart);

			//school_name
			var formated_school_name = HTMLschoolName.replace("%data%", study.name);

			//school degree 
			var formated_school_degree = HTMLschoolDegree.replace("%data%", study.degree);

			/// This is a way to put this elements united 
			var concatenated_edu = formated_school_name + formated_school_degree;
			$(".education-entry:last").append(concatenated_edu);

			//school_dates
			var formated_dates = HTMLschoolDates.replace("%data%", study.dates);
			$(".education-entry:last").append(formated_dates);

			///Location of the university
			var formated_location_u = HTMLschoolLocation.replace("%data%", study.location);
			$(".education-entry:last").append(formated_location_u);

			//Major of the study
			var formated_major = HTMLschoolMajor.replace("%data%", study.majors[0]); 
			$(".education-entry:last").append(formated_major);
		}

		for (var j = 0; j < this.onlineCourses.length; j++) {
			var course = this.onlineCourses[j];

			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formated_course_name = HTMLonlineTitle.replace("%data%", course.title);
			var formated_course_school = HTMLonlineSchool.replace("%data%", course.school);
			var concatenated_course = formated_course_name + formated_course_school;
			$(".education-entry:last").append(concatenated_course);

			var formated_dates_c = HTMLonlineDates.replace("%data%", course.dates);
			$(".education-entry:last").append(formated_dates_c);

			var course_url = HTMLonlineURL.replace("%data%", course.url); 
			$(".education-entry:last").append(course_url);
		}
	}
};


//Projects 
var projects = {
	projects: [ 
		{
			dates: "2010 - 2015",
			title: "Tripper",
			description: "Tripper is an app in android that recommends customer the best destiny and company to make a trip",
			images: [
				"https://lh3.googleusercontent.com/x14UjQ6yYHNMD0fp2V2xLXkMAfYL1BFueqP9BV6uhuWvuntZEC2kJ5VprzP68JUOCdAj=w300",
				"http://i.imgur.com/HGM4CbCl.jpg"
				]
		}
	],
	display: function() {
		for (var i = 0; i < this.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var project = this.projects[i];

			//project title
			var formated_name_p = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formated_name_p);

			//dates
			var formated_pdates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formated_pdates);
			
			// description
			var formated_description= HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formated_description);

			// project images
			for (var j = 0; j < project.images.length; j++) {
				var formated_project_image = HTMLprojectImage.replace("%data%", project.images[j]);
				$(".project-entry:last").append(formated_project_image);
			}
		}
}
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(map);
