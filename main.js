var _a, _b;
// Function to generate resume dynamically on the webpage
function generateResume() {
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Handle profile picture preview
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureURL = '';
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profilePictureURL); // Call the display function after image loads
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(''); // Display resume without picture if no image is uploaded
    }
    // Function to display the resume
    function displayResume(profilePictureURL) {
        var resumeContent = "\n            <h2>".concat(firstName, " ").concat(middleName, " ").concat(lastName, "'s Resume</h2>\n            <div>\n                ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">") : '', "\n            </div>\n            <h3>Contact Information</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        // Display the resume preview in the div
        document.getElementById('resumePreview').innerHTML = resumeContent;
    }
}
// Function to download the resume as a PDF using jsPDF
function downloadPDF() {
    var jsPDF = window.jsPDF;
    var doc = new jsPDF();
    // Get the generated resume content from the form
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Add content to the PDF
    doc.text("".concat(firstName, " ").concat(middleName, " ").concat(lastName, "'s Resume"), 10, 10);
    doc.text("Email: ".concat(email), 10, 20);
    doc.text("Contact: ".concat(contact), 10, 30);
    doc.text("Address: ".concat(address), 10, 40);
    doc.text("Degree: ".concat(degree), 10, 50);
    doc.text("Institution: ".concat(institution), 10, 60);
    doc.text("Skills: ".concat(skills), 10, 70);
    doc.text("Experience: ".concat(experience), 10, 80);
    // Save the PDF
    doc.save('resume.pdf');
}
// Add event listeners to the buttons
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('downloadPDF')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadPDF);
