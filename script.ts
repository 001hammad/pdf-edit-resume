interface ResumeDataTypes  {
   name:string;
   email:string;
   phone:string;
   picture:string;
   degree:string;
   institution:string;
   year:string;
   jobtitle:string;
   company:string;
   skills:string;
   skills1:string;
   skills2:string;
   description:string;
}



const form:HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
const generatedContainer:HTMLDivElement = document.getElementById('generated-container') as HTMLDivElement;
const profilePicture:HTMLInputElement = document.getElementById('picture') as HTMLInputElement;
const downloadPdfButton:HTMLButtonElement = document.getElementById('download-pdf') as HTMLButtonElement; 



const resumeForm:ResumeDataTypes = {
    name:'',
    email:'',
    phone:'',
    picture:'',
    degree:'',
    institution:'',
    year:'',
    jobtitle:'',
    company:'',
    skills:'',  
    skills1:'',  
    skills2:'',  
    description:''
}


form.addEventListener(
    'submit',(e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        resumeForm.name = formData.get('name') as string;
        resumeForm.email = formData.get('email') as string;
        resumeForm.phone = formData.get('phone') as string;
        resumeForm.degree = formData.get('degree') as string;
        resumeForm.jobtitle = formData.get('jobtitle') as string;
        resumeForm.year = formData.get('year') as string;
        resumeForm.institution = formData.get('institution') as string;
        resumeForm.description = formData.get('description') as string;
        resumeForm.company = formData.get('company') as string;
        resumeForm.skills = formData.get('skills') as string;
        resumeForm.skills1 = formData.get('skills1') as string;
        resumeForm.skills2 = formData.get('skills2') as string;
        resumeForm.picture = profilePicture.files?.[0]? URL.createObjectURL(profilePicture.files[0]):'';
        generateResume();
        
    }
)
downloadPdfButton.style.display = 'none';



downloadPdfButton.addEventListener('click', () => { 
    window.print();
    
}); 



const generateResume = ()=>{
    const ResumeHtmlSec = `

    <div class='main-output' style="background-color: #0D1282; -webkit-print-color-adjust: exact;">

    <div class='left-sec'>
    <img src='${resumeForm.picture}' alt='profile-pic' width='100' height='100'>
    <div class='left-inner-content'>
    <p contenteditable="true">${resumeForm.name}</p>
    <p contenteditable="true">${resumeForm.email}</p>
    <p contenteditable="true">${resumeForm.phone}</p>
    </div>
    </div>

    <div class='right-sec'>
    <div class='right-inner-content'>
    <h3 class='ts-headings'>Education</h3>
     <p contenteditable="true">${resumeForm.institution}</p>
     <p contenteditable="true">${resumeForm.degree}</p>
     <p contenteditable="true">${resumeForm.year}</p><hr>


    <h3 class='ts-headings'>Skills</h3>
     <p contenteditable="true">${resumeForm.skills}</p>
     <p contenteditable="true">${resumeForm.skills1}</p>
     <p>${resumeForm.skills2}</p><hr>
      
     <h3 class='ts-headings'>Work Experience</h3>
     <p contenteditable="true">${resumeForm.jobtitle}</p>
     <p contenteditable="true">${resumeForm.company}</p>
     <p contenteditable="true">${resumeForm.year}</p>
     <p contenteditable="true">${resumeForm.description}</p>
    </div>
    </div>

    </div>

    `;
    generatedContainer.innerHTML=ResumeHtmlSec;
    downloadPdfButton.style.display = 'block';
}


