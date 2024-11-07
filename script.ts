// TypeScript Interfaces and Variables
interface ResumeDataTypes  {
    name: string;
    title:string,
    email: string;
    phone: string;
    address: string;
    summary: string;
    objective: string;
    picture: string;
    degree: string;
    institution: string;
    year: string;
    jobtitle: string;
    company: string;
    skill: string[]; // Skills array to store multiple skills
    description: string;
 }
 
 const form = document.getElementById('resume-form') as HTMLFormElement;
 const generatedContainer = document.getElementById('generated-container') as HTMLDivElement;
 const profilePicture = document.getElementById('picture') as HTMLInputElement;
 const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
 const addSkillText = document.getElementById('add-skill-text') as HTMLSpanElement;
 const skillsList = document.getElementById('skills-list') as HTMLDivElement;
 
 let skillCount = 1;
 const resumeForm: ResumeDataTypes = {
     name: '',
     title:'',
     email: '',
     phone: '',
     address: '',
     summary: '',
     objective: '',
     picture: '',
     degree: '',
     institution: '',
     year: '',
     jobtitle: '',
     company: '',
     skill: [], // Initial empty array
     description: ''
 };
 
 // Add Skill functionality
 addSkillText.addEventListener('click', () => {
     skillCount++;
     const newSkillInput = document.createElement('input');
     newSkillInput.type = 'text';
     newSkillInput.name = `skill-${skillCount}`;
     newSkillInput.placeholder = `Skill ${skillCount}`;
     newSkillInput.className = 'skill-input';
     skillsList.appendChild(newSkillInput);
 });
 
 // Submit event to gather skills
 form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Gather all data from form
    resumeForm.name = formData.get('name') as string;
    resumeForm.title = formData.get('title') as string;
    resumeForm.email = formData.get('email') as string;
    resumeForm.phone = formData.get('phone') as string;
    resumeForm.address = formData.get('address') as string;
    resumeForm.summary = formData.get('summary') as string;
    resumeForm.objective = formData.get('objective') as string;
    resumeForm.degree = formData.get('degree') as string;
    resumeForm.jobtitle = formData.get('jobtitle') as string;
    resumeForm.year = formData.get('year') as string;
    resumeForm.institution = formData.get('institution') as string;
    resumeForm.description = formData.get('description') as string;
    resumeForm.company = formData.get('company') as string;
    resumeForm.picture = profilePicture.files?.[0] ? URL.createObjectURL(profilePicture.files[0]) : '';

    // Include the initial skill input along with any additional ones
    resumeForm.skill = [
        formData.get('skill') as string, // Initial skill input
        ...Array.from(skillsList.querySelectorAll<HTMLInputElement>('.skill-input')).map(input => input.value)
    ].filter(skill => skill); // Filter out any empty skills

    generateResume();
});

 
 downloadPdfButton.style.display = 'none';
 downloadPdfButton.addEventListener('click', () => {
     window.print();
 });
 
 const generateResume = () => {
     const skillsHTML = resumeForm.skill.map(skill => `<ul><li><p contenteditable="true"> ${skill}</p></li></ul>`).join('');
 
     const ResumeHtmlSec = `
         <div class='main-output'>
             <div class='left-sec'>
                 <img src='${resumeForm.picture}' alt='profile-pic' width='150' height='150' class="photo">
                 <div class='left-inner-content'>
                     <p contenteditable="true"><u><h4>Professional Summary</h4></u><br>${resumeForm.summary}</p>
                     <p contenteditable="true"><u><h4>Career Objective</h4></u><br>${resumeForm.objective}</p>
                 </div>
             </div>
 
             <div class='right-sec'>
                 <div class='right-inner-content'>
                     <h1 contenteditable="true">${resumeForm.title}</h1>
                     <h3 class='ts-headings'>Personal Information</h3>
                     <p contenteditable="true"><b>Full Name:</b> ${resumeForm.name}</p>
                     <p contenteditable="true"><b>Email Id:</b> ${resumeForm.email}</p>
                     <p contenteditable="true"><b>Address:</b> ${resumeForm.address}</p>
                     <p contenteditable="true"><b>Contact Number:</b> ${resumeForm.phone}</p><hr>
                     <h3 class='ts-headings'>Education</h3>
                     <p contenteditable="true"><b>Institution:</b> ${resumeForm.institution}</p>
                     <p contenteditable="true"><b>Degree:</b> ${resumeForm.degree}</p>
                     <p contenteditable="true"><b>Passing Year:</b> ${resumeForm.year}</p><hr>
 
                     <h3 class='ts-headings'>Skills</h3>
                     ${skillsHTML}
 
                     <h3 class='ts-headings'><b>Work Experience</b></h3>
                     <p contenteditable="true"><b>Job Title:</b> ${resumeForm.jobtitle}</p>
                     <p contenteditable="true"><b>Company:</b> ${resumeForm.company}</p>
                     <p contenteditable="true"><b>Year:</b> ${resumeForm.year}</p>
                     <h3 class="ts-headings"><b>Description</b></h3>
                     <p contenteditable="true"> ${resumeForm.description}</p>
                 </div>
             </div>
         </div>
     `;
 
     generatedContainer.innerHTML = ResumeHtmlSec;
     downloadPdfButton.style.display = 'block';
 };
 