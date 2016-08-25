var bio = {
    "name": "Jory Pestorious",
    "role": "Web Developer",
    "contacts": {
      "email": "jory@pestorious.com",
      "mobile": "952-270-7529",
      "github": "https://github.com/joryeugene",
      "twitter": "@joryeugene",
      "location": "Minneapolis, MN"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Yo, bro!",
    "skills": ["Java", "HTML", "CSS", "JavaScript"]
};

var work = {
  "jobs": [
    {
      "title": "Awesome Dude",
      "employer": "The Cool Factory",
      "dates": "August 2000 - May 2016",
      "location": "Seoul, South Korea",
      "description": "Keepin' it cool"
    },
    {
      "title": "Awesome Sauce Man",
      "employer": "Sauce Factory",
      "dates": "The Past - The Future",
      "location": "Tokyo, Japan",
      "description": "Makin' those sweet sauces"
    },
    {
      "title": "Awesome King",
      "employer": "Castle Land",
      "dates": "Forever - Always",
      "location": "Bangkok, Thailand",
      "description": "You know how it is"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "So sweet",
      "dates": "2012",
      "description": "Just sweetness",
      "images": ["images/197x148.gif"]
    },
    {
      "title": "So sweet",
      "dates": "2012",
      "description": "Just sweetness",
      "images": ["images/197x148.gif"]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Hogwarts",
      "degree": "Killing shit",
      "location": "Great Britian",
      "dates": "2009 - 2013",
      "majors": ["Super Arcane Blasting"]
    },
    {
      "name": "Hogwarts",
      "degree": "Killing shit",
      "location": "Great Britian",
      "dates": "2009 - 2013",
      "majors": ["Super Arcane Blasting"]
    }
  ],
  "onlineCourse": [
    {
      "school": "Udacity",
      "title": "This",
      "dates": "in progress",
      "url": "#"
    },
    {
      "school": "Coursera",
      "title": "Learning How to Learn",
      "dates": "2016",
      "url": "https://www.coursera.org/learn/learning-how-to-learn"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedTopContacts = formattedEmail + formattedMobile + formattedGithub +
    formattedTwitter + formattedLocation;
  $("#topContacts, #footerContacts").append(formattedTopContacts);
  if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
  }
  for (var skill = 0; skill < bio.skills.length; skill++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }
};

work.display = function() {
  $("#workExperience").append(HTMLworkStart);
  for (var job = 0; job < work.jobs.length; job++) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedworkDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (var i = 0; i < projects.projects.length; i++) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry").append(formattedDescription);
    if (projects.projects[i].images !== "") {
      for (var img = 0; img < projects.projects[i].images.length; img++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry").append(formattedImage);
      }
    }
  }
};

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (var s = 0; s < education.schools.length; s++) {
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
    var formattedSchool = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedSchool);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
    $(".education-entry:last").append(formattedschoolLocation);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
    $(".education-entry:last").append(formattedschoolMajor);
  }
  for (var course = 0; course < education.onlineCourse.length; course++) {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
    var formattedOnline = formattedonlineTitle +formattedonlineSchool;
    $(".education-entry").append(formattedOnline);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
    $(".education-entry").append(formattedonlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", "See more");
    formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourse[course].url);
    $(".education-entry").append(formattedonlineURL);
  }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
