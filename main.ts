// Function to generate resume dynamically on the webpage
function generateResume() {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const middleName = (document.getElementById('middleName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Handle profile picture preview
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    let profilePictureURL = '';
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePictureURL = e.target?.result as string;
            displayResume(profilePictureURL);  // Call the display function after image loads
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        displayResume('');  // Display resume without picture if no image is uploaded
    }

    // Function to display the resume
    function displayResume(profilePictureURL: string) {
        const resumeContent = `
            <h2>${firstName} ${middleName} ${lastName}'s Resume</h2>
            <div>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">` : ''}
            </div>
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
        `;

        // Display the resume preview in the div
        document.getElementById('resumePreview')!.innerHTML = resumeContent;
    }
}

// Function to download the resume as a PDF using jsPDF
function downloadPDF() {
    const { jsPDF } = window as any;
    const doc = new jsPDF();

    // Get the generated resume content from the form
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const middleName = (document.getElementById('middleName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Add content to the PDF
    doc.text(`${firstName} ${middleName} ${lastName}'s Resume`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Contact: ${contact}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.text(`Degree: ${degree}`, 10, 50);
    doc.text(`Institution: ${institution}`, 10, 60);
    doc.text(`Skills: ${skills}`, 10, 70);
    doc.text(`Experience: ${experience}`, 10, 80);

    // Save the PDF
    doc.save('resume.pdf');
}

// Add event listeners to the buttons
document.getElementById('generateResume')?.addEventListener('click', generateResume);
document.getElementById('downloadPDF')?.addEventListener('click', downloadPDF);
