// Hamburger menu in nav
function openHamburgerMenu(){
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar"){
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }

  var projectItems = document.getElementsByClassName("project-item");

function togglePersonalProjects() {
  Array.from(projectItems).forEach((project) => {
    if (!project.classList.contains("personal")) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
}

function toggleFreelanceProjects() {
  Array.from(projectItems).forEach((project) => {
    if (!project.classList.contains("freelance")) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
}

function toggleInternshipProject() {
  Array.from(projectItems).forEach((project) => {
    if (!project.classList.contains("internship")) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
}


  // var personals = document.getElementsByClassName("notpersonal");
  // var freelances = document.getElementsByClassName("notfreelance");
  // var internship = document.getElementsByClassName("notinternship");

// function toggleProjects() {
//  if (Array.from(personals).forEach((personalProjects) => {
//   personalProjects.style.display === "none"}) ) {
//     personalProjects.style.display = "block";
//     Array.from(freelances).forEach((freelanceProjects) => {freelanceProjects.style.display = "none";});
//     Array.from(internship).forEach((internshipProjects) => {internshipProjects.style.display = "none";});
//   } else if  ( Array.from(freelances).forEach((freelanceProjects) => {
//     freelanceProjects.style.display === "none"}) ) {
//       freelanceProjects.style.display = "block";
//       Array.from(personals).forEach((personalProjects) => {personalProjects.style.display = "none";});
//       Array.from(internship).forEach((internshipProjects) => {internshipProjects.style.display = "none";});
//   } else if (  Array.from(internship).forEach((internshipProjects) => {
//     internshipProjects.style.display === "none"}) ) {
//       internshipProjects.style.display = "block";
//       Array.from(personals).forEach((personalProjects) => {personalProjects.style.display = "none";});
//       Array.from(freelances).forEach((freelanceProjects) => {freelanceProjects.style.display = "none";});
//     }
// }

// function togglePersonalProjects() {
//     Array.from(personals).forEach((personalProjects) => {
//     if (personalProjects.style.display === "none") {
//         personalProjects.style.display = "block";
     
//     } else {
//         personalProjects.style.display = "none";
//     }
//   })
// }

// function toggleFreelanceProjects() {
//     Array.from(freelances).forEach((freelanceProjects) => {
//     if (freelanceProjects.style.display === "none") {
//         freelanceProjects.style.display = "block";
//     } else {
//         freelanceProjects.style.display = "none";
//     }
//   })
// }

// function toggleInternshipProject() {
//     Array.from(internship).forEach((internshipProjects) => {
//     if (internshipProjects.style.display === "none") {
//         internshipProjects.style.display = "block";
//     } else {
//         internshipProjects.style.display = "none";
//     }
//   })
// }

