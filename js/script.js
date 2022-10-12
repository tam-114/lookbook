// Hamburger menu in nav
function openHamburgerMenu(){
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar"){
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }


  function togglePersonalProjects() {
    var personals = document.getElementsByClassName("notpersonal")
    Array.from(personals).forEach((personalProjects) => {
    if (personalProjects.style.display === "none") {
        personalProjects.style.display = "block";
    } else {
        personalProjects.style.display = "none";
    }
  })
}

function toggleFreelanceProjects() {
    var freelances = document.getElementsByClassName("notfreelance")
    Array.from(freelances).forEach((freelanceProjects) => {
    if (freelanceProjects.style.display === "none") {
        freelanceProjects.style.display = "block";
    } else {
        freelanceProjects.style.display = "none";
    }
  })
}

function toggleInternshipProject() {
    var internship = document.getElementsByClassName("notinternship")
    Array.from(internship).forEach((internshipProjects) => {
    if (internshipProjects.style.display === "none") {
        internshipProjects.style.display = "block";
    } else {
        internshipProjects.style.display = "none";
    }
  })
}

