// work object
var work = {
  "jobs": [
    {
      "employer": "WhereIWantToLive",
      "title": "Dream Job",
      "location": "Rangitukia",
      "dates": "2016 - Present",
      "description": "Living in Rangitukia, turning soil, planting crops, harvesting.  Drive the quadbike down to the beach for some fishing.  Eat freshly grown produce and only buy baking ingredients."
    },
    {
      "employer": "In Homes",
      "title": "Practitioner",
      "location": "Wellington",
      "dates": "2013 - early 2015",
      "description": "I have a continuing program of research, in the laboratory and in the field. Of course, the job is one of the most demanding in the humanities. I use to work 14 hour days sometimes 20.  It was challenging than most run-of-the-mill careers and the rewards are more of a satisfaction rather than just money.  Funny description I found at http://www.sunnyskyz.com/blog/661/A-Stay-At-Home-Mom-Was-Asked-Her-Occupation-This-Is-Her-Brilliant-Response."
    },
    {
      "employer": "Dreamer",
      "title": "Actor",
      "location": "Auckland",
      "dates": "2007 - 2013",
      "description": "I dreamt of being an actor. I thought I'd be pretty good as well."

    }
    ]
}

// projects object
var projects = {
  "projects": [
    {
      "title": "Rena-Deane's Blog",
      "dates": "March 2016 - current",
      "description": "What I've learnt at EDA?",
      "images": ["https://drive.google.com/uc?export=view&id=0B0KthiNDtD4Tc2I3czVvQnpFVEk", "https://drive.google.com/uc?export=view&id=0B0KthiNDtD4TQUhUcUFqcTgtQ28"]
    }, 
    {
      "title": "Ngati Porou East Coast",
      "dates": "December 2014 - January 2016",
      "description": "Ad-hoc design for the East Coast Rugby Union.  For more information on this project visit https://beysh.wordpress.com/portfolio/ngati-porou-east-coast/.",
      "images": ["https://drive.google.com/uc?export=view&id=0B0KthiNDtD4TbVFlVVFqMGV0WTA"]
    }]
}

//bio object
var bio = {
  "name": "Rena Goldsmith",
  "role": "Student",
  "welcomeMessage": "Nau mai haere mai ki taku wharangi.  Kua whakaraupapa ahau i nga mea tinihanga.  Ehara tenei i taku resume tuturu!",
  "contacts": {
    "mobile": "025 555-5555",
    "email": "renadeane@gmail.com",
    "gitHub": "rena-deane",
    "twitter": "@renaGoldsmith",
    "location": "Wellington"
    },
  "skills": ["video maker", "design", "fluent te reo Maori", "process mapping"],
  "bioPic": "http://49yzp92imhtx8radn224z7y1.wpengine.netdna-cdn.com/wp-content/uploads/2015/08/oprah.jpeg"

}

// education object
var education = {
  "schools": [
    {
      "name": "Victoria University",
      "location": "Wellington",
      "degree": "Bachelor of Commerce and Administration",
      "majors": "Information Systems",
      "dates": "2007 - 2010",
      "url": "http://www.victoria.ac.nz/"
    }, {
      "name": "Scared Heart College",
      "location": "Lower Hutt, Wellington",
      "degree": "none",
      "majors": "none",
      "dates": "2004 - 2007",
      "url": "http://www.sacredheartcollege.school.nz/home"
    }],
  "onlineCourse": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": "20 April 2016"
    }, {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": "30 March 2016"
    }]
}

// add name

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Add contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
$("#topContacts").append(formattedGithub);

//add welcomeMessage
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// add bio pic
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMessage);

// add skills from bio to Skills section
if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

    for (var i=0; i<bio.skills.length; ++i){
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
}


//display work section with populated objects
function displayWork(){
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

  $(".work-entry:last").append(formattedWorkDates);

  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedworkLocation);
  
  var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedworkDescription);
  }
}
displayWork();

//pass clicks to function


/*MY SOLUTION FOR BUTTON without helperJS

$("#main").append(internationalizeButton);

getButton = document.getElementsByTagName('button');
inButton = getButton[0];
inButton.addEventListener("click", inName);

function inName(){
  var splitName = bio.name.split(" ");
  splitFirstName = splitName[0];
  firstName = splitFirstName.slice(0, 1).toUpperCase() + splitFirstName.slice(1).toLowerCase();
  splitLastName = splitName[1];
  lastName = splitLastName.toUpperCase();
  return (firstName + " " + lastName);
}*/

// UDACITY SOLUTION FOR BUTTON

function inName(name){
  var name = name.trim().split(" ");
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// Encapsulating Function

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
}
// call function
projects.display();

//add sections to education
education.display = function() {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

  var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  formattedSchoolDegree = formattedSchool + " " + formattedDegree;
  $(".education-entry:last").append(formattedSchoolDegree);

  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDates);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchoolLocation);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchoolMajor);
  }
}
education.display();

//add google map
$("#mapDiv").append(googleMap);

//letsConnect
$("#footerContacts:last").append(formattedTwitter);
$("#footerContacts:last").append(formattedGithub);
$("#footerContacts:last").append(formattedEmail);

