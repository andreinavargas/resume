
var awesome_thougths
awesome_thougths = "My name is Andreina and I am awesome"
console.log(awesome_thougths);


var fun_thougths = awesome_thougths.replace("awesome","fun");
console.log(fun_thougths);
//$("#main").append(fun_thougths);

var formatted_name;
var formatted_role;


var bio = {
	name: "Maria Andreina Vargas",
	role: "Marketing Specialist",
	contact_info: "0034644129265",
	picture_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/000/1f1/38e/3af4dee.jpg",
	welcome_message: "Bachelor degree in Business and Administration with a lot of experience in digital marketing, what are you waiting for, hire me!",
	skills: ["Responsability", "Awesomeness", "Queen of digital ads"],
	email:" andreina.vargas@gmail.com",
	contacts: {
		location: 'Madrid, Spain'
	}
}

// Picture
var formated_picture_url = HTMLbioPic.replace("%data%", bio.picture_url);
$("#header").prepend(formated_picture_url);

// Header with name
var formatted_name = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formatted_name);

// Role in header
var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formatted_role);

// Welcome message
var formated_welcome_message = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
$("#header").append(formated_welcome_message)

// Mobile number
var formated_contact_info = HTMLmobile.replace("%data%", bio.contact_info);
$("#header").append(formated_contact_info);

// Email adress
var formated_email = HTMLemail.replace("%data%", bio.email);
$("#header").append(formated_email);

if (bio.skills.length > 0) {
	// Skills
	$("#header").append("<br/>");
	$("#header").append(HTMLskillsStart);
	var formated_skills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formated_skills);
	formated_skills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formated_skills);
	formated_skills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formated_skills);
}

//Work
var work = {
	jobs: [
		{
			job_position: "Online Sales Manager",
			employer: "playthe.net",
			years_worked: "1 year",
			location: "Madrid, España",
			description: "Managing the Online Sales department contacts and budgets"
		},
		{
			job_position: "Digital Account Executive",
			employer: "Marco de Comunicacion",
			years_worked: "2 years",
			location: "Madrid, España",
			description: "Customer support and overal supervision of digital product sales"
		}
	]
};

//Education
var education = {
	schools: [
		{
			school_name: "Universidad Complutense de Madrid",
			school_dates: "2010",
			location: "Madrid, Spain",
			degree: "Master in digital Marketing",
			major: "Marketing"
		},
		{
			school_name: "Universidad Centroccidental Lisandro Alvarado",
			school_dates: "2009",
			location: "Barquisimeto, Venezuela",
			degree: "Bacherlor in Business and Administration",
			major: "Business Administration"
		}
	]
};


//Projects 
var projects = {
	projects: [ 
		{
			dates: "2010",
			project_title: "Tripper",
			description: "Tripper is an app in android that recommends customer the best destiny and company to make a trip",
			project_image: "https://lh3.googleusercontent.com/x14UjQ6yYHNMD0fp2V2xLXkMAfYL1BFueqP9BV6uhuWvuntZEC2kJ5VprzP68JUOCdAj=w300"
		}
	]
};

projects.display = function() {
	for (i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var project = projects.projects[i];

		//project tittle
		var formated_name_p = HTMLprojectTitle.replace("%data%", project.project_title);
		$(".project-entry:last").append(formated_name_p);

		//dates
		var formated_pdates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formated_pdates);
		
		// description
		var formated_description= HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formated_description);

		// project image
		var formated_project_image = HTMLprojectImage.replace("%data%", project.project_image);
		$(".project-entry:last").append(formated_project_image);
	}
}

displayWork(work.jobs);
displayStudies(education.schools);
projects.display();











