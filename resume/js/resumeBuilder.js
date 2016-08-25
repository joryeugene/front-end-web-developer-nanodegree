var bio = {
    "name": "Jory&nbsp;Pestorious",
    "role": " Web&nbsp;Developer",
    "contacts": {
      "email": "jory@pestorious.com",
      "mobile": "952-270-7529",
      "github": "https://github.com/joryeugene",
      "location": "Minneapolis, Minnesota"
    },
    "biopic": "images/jory.jpg",
    "welcomeMessage": "I am a self-driven learner and love a challenge. One example of this is teaching myself the Korean language to a high-intermediate level (as tested by KIIP in 2014) through extensive reading, listening to Korean audio for 10+ hours a day, and changing the language on my phone and computer to Korean. I am applying the same motivation and learning skill set to expanding my software and web development abilities and establishing myself as a well-rounded developer.",
    "skills": ["Java", "JavaScript", "Objected-Oriented Programming", "Web Development", "Bootstrap", "Git", "CSS", "HTML", "WordPress"],
    "display": function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedName, formattedRole, formattedPic, formattedMessage);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      formattedEmail = formattedEmail.replace("#", bio.contacts.email);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      formattedMobile = formattedMobile.replace("#", bio.contacts.mobile);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      formattedGithub = formattedGithub.replace("#", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts, #footerContacts").append(formattedEmail, formattedMobile, formattedGithub,
        formattedLocation);
      if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
      }
      bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace('%data%', skill);
        $('#skills').append(formattedSkills);
      });
    }
};

var work = {
  "jobs": [
    {
      "title": "Java Web Developer Apprentice",
      "employer": "The Software Guild",
      "dates": "July 2016 - Present",
      "location": "Minneapolis, Minnesota",
      "description": "Hands-on software/web developer apprenticeship with full stack experience"
    },
    {
      "title": "International Baccalaureate English Teacher",
      "employer": "Shanghai Shangde Experimental School",
      "dates": "August 2015 - May 2016",
      "location": "Shanghai, China",
      "description": "Guided students in the advancement of their reading and writing skills, and taught in-service workshops to fellow teachers"
    },
    {
      "title": "English Literature and Writing Teacher",
      "employer": "Dux Foreign Language Academy",
      "dates": "August 2013 - August 2014",
      "location": "Seoul, South Korea",
      "description": "Taught the recognition of themes, symbolism, imagery, and allegory through a variety of English literature classics, as well as corrected and gave feedback on the structure, content, grammar, and spelling of several hundred student essays"
    },
    {
      "title": "English Conversation Instructor",
      "employer": "EWAS Institute",
      "dates": "August 2011 - July 2012",
      "location": "Guri, South Korea",
      "description": "Maintained an entertaining and productive learning environment for a wide variety of students, ranging from pre-kindergarten to adult"
    },
    {
      "title": "Pharmacy Intern / Pharmacy Technician",
      "employer": "Walgreens Pharmacy",
      "dates": "May 2006 - April 2010",
      "location": "Minnetonka, Minnesota",
      "description": "Resolved a multitude of problems for patients by consulting with clinics, pharmacists, and insurance companies, while communicating sensitive data with great attention to detail"
    }
  ],
  "display": function() {
    $("#workExperience").append(HTMLworkStart);
    this.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle,
         formattedworkDates, formattedworkLocation, formattedDescription);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Minimalist Responsive Personal Landing Page",
      "dates": "July 2016",
      "description": "Utilizes fluid sizing and spacing, tailored background image selection through media queries, and enhanced accessibility through ARIA attributes and keyboard accessibility",
      "images": ["images/personal.png", "images/personal2.png"],
      "url": "http://jorypestorious.com/"
    },
    {
      "title": "Kimbap Heaven - Responsive Korean Restaurant Website",
      "dates": "August 2016",
      "description": "With a focus on responsive design, the site adapts to each user's device, from desktop, to tablet, to mobile",
      "images": [""],
      "url": "http://joryeugene.bitbucket.org/prework/js/lab2/"
    },
    {
      "title": "Dice Game Simulation with Real-time Game Log",
      "dates": "August 2016",
      "description": 'Written with a non-blocking recursive loop to run the game’s main function in order to display the dice roll results in “real-time”',
      "images": [""],
      "url": "http://joryeugene.bitbucket.org/prework/js/lab1/"
    }
  ],
  "display": function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      formattedTitle = formattedTitle.replace("#", project.url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry").append(formattedTitle, formattedDates, formattedDescription);
      if (project.images !== "") {
        for (var img = 0; img < project.images.length; img++) {
          var formattedImage = HTMLprojectImage.replace("%data%", project.images[img]);
          $(".project-entry").append(formattedImage);
        }
      }
    });
  }
};

var education = {
  "schools": [
    {
      "name": "The Software Guild",
      "degree": "Bootcamp",
      "location": "Minneapolis, Minnesota",
      "dates": "July 2016 - December 2016",
      "majors": "Java Software & Web Development",
      "url": "http://www.thesoftwareguild.com/"
    },
    {
      "name": "Hamline University",
      "degree": "Master's Degree",
      "location": "St. Paul, Minnesota",
      "dates": "2012 - 2015",
      "majors": "Advanced Linguistic Analysis, Research Methodology, and Second Language Acquisition",
      "url": "http://www.hamline.edu/"
    },
    {
      "name": "University of Minnesota",
      "degree": "Bachelor's Degree",
      "location": "Twin Cities, Minnesota",
      "dates": "2006 - 2011",
      "majors": "Pharmaceutical Sciences, Biology, and Foreign Cultures & Languages",
      "url": "https://twin-cities.umn.edu/"
    }
  ],
  "onlineCourse": [
    {
      "school": "Udacity",
      "title": "Front-End Web Developer Nanodegree",
      "dates": "August 2016 - September 2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "school": "Coursera & Johns Hopkins University",
      "title": "HTML, CSS, and Javascript for Web Developers",
      "dates": "August 2016",
      "url": "https://www.coursera.org/learn/html-css-javascript-for-web-developers"
    },
    {
      "school": "Coursera & University of Michigan",
      "title": "Advanced Styling with Responsive Design",
      "dates": "July 2016",
      "url": "https://www.coursera.org/learn/responsivedesign"
    }
  ],
  "display": function() {
    $("#education").append(HTMLschoolStart);
    for (var s = 0; s < education.schools.length; s++) {
      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
      formattedschoolName= formattedschoolName.replace("#", education.schools[s].url);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
      $(".education-entry:last").append(formattedschoolName + formattedschoolDegree, formattedschoolLocation,
        formattedschoolDates, formattedschoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineStart);
    for (var course = 0; course < education.onlineCourse.length; course++) {
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
      formattedonlineTitle = formattedonlineTitle.replace("#", education.onlineCourse[course].url);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", "See more");
      formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourse[course].url);
      $(".online-entry:last").append(formattedonlineTitle + formattedonlineSchool,
        formattedonlineDates, formattedonlineURL);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
