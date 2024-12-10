var form = document.getElementById('resume f');
var resumeDisplayElement = document.getElementById('resume-display');
var shareablelinkcontainer = document.getElementById('shareble-link-container');
var shareablelinkElement = document.getElementById('shareble-link');
var downloadpdfButton = document.getElementById('Download-PDF');
//submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var EXPERIANCE = document.getElementById('EXPERIANCE').value;
    var SKILLS = document.getElementById('SKILLS').value;
    //save data in local storage with the username as key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        EXPERIANCE: EXPERIANCE,
        SKILLS: SKILLS
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <h2><b> Editable Resume</b></>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3>Experiance</h3>\n     <p contenteditable=\"true\">").concat(EXPERIANCE, "</p>\n\n      <h3>SKILLS</h3>\n     <p contenteditable=\"true\">").concat(SKILLS, "</p>\n\n    ");
    //diplay the genreted resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //generate a shareable 
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display
    shareablelinkcontainer.style.display = 'block';
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadpdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value;
            resumeData.skills;
        }
    }
});
