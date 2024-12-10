const form =document.getElementById('resume f') as HTMLFormElement
const resumeDisplayElement=document.getElementById('resume-display') as HTMLDivElement
const shareablelinkcontainer =document.getElementById('shareble-link-container')as HTMLElement;
const shareablelinkElement=document.getElementById('shareble-link') as HTMLAnchorElement;
const downloadpdfButton =document.getElementById('Download-PDF') as HTMLButtonElement;
//submission
form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    //input values
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const EXPERIANCE = (document.getElementById('EXPERIANCE') as HTMLTextAreaElement).value
    const SKILLS = (document.getElementById('SKILLS') as HTMLTextAreaElement).value

    //save data in local storage with the username as key
    const resumeData ={
        name,
        email,
        phone,
        education,
        EXPERIANCE,
        SKILLS
    };

    localStorage.setItem(username,JSON.stringify(resumeData));



    const resumeHTML =`
    <h2><b> Editable Resume</b></>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Name:</b><span contenteditable="true">${email}</span></p>
    <p><b>Name:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
     <p contenteditable="true">${education}</p>

      <h3>Experiance</h3>
     <p contenteditable="true">${EXPERIANCE}</p>

      <h3>SKILLS</h3>
     <p contenteditable="true">${SKILLS}</p>

    `;

    //diplay the genreted resume
    resumeDisplayElement.innerHTML=resumeHTML
    //generate a shareable 
    const shareableURL =
   `${window.location.origin}?username=${encodeURIComponent(username)}`;

    //display
    shareablelinkcontainer.style.display ='block';
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
    }); 


    // Handle PDF download
    downloadpdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save
    });

        // Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {

    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value
    resumeData.skills;
}
}
});  