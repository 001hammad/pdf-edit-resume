var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var form = document.getElementById('resume-form');
var generatedContainer = document.getElementById('generated-container');
var profilePicture = document.getElementById('picture');
var downloadPdfButton = document.getElementById('download-pdf');
var addSkillText = document.getElementById('add-skill-text');
var skillsList = document.getElementById('skills-list');
var skillCount = 1;
var resumeForm = {
    name: '',
    title: '',
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
addSkillText.addEventListener('click', function () {
    skillCount++;
    var newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.name = "skill-".concat(skillCount);
    newSkillInput.placeholder = "Skill ".concat(skillCount);
    newSkillInput.className = 'skill-input';
    skillsList.appendChild(newSkillInput);
});
// Submit event to gather skills
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var formData = new FormData(form);
    // Gather all data from form
    resumeForm.name = formData.get('name');
    resumeForm.title = formData.get('title');
    resumeForm.email = formData.get('email');
    resumeForm.phone = formData.get('phone');
    resumeForm.address = formData.get('address');
    resumeForm.summary = formData.get('summary');
    resumeForm.objective = formData.get('objective');
    resumeForm.degree = formData.get('degree');
    resumeForm.jobtitle = formData.get('jobtitle');
    resumeForm.year = formData.get('year');
    resumeForm.institution = formData.get('institution');
    resumeForm.description = formData.get('description');
    resumeForm.company = formData.get('company');
    resumeForm.picture = ((_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicture.files[0]) : '';
    // Include the initial skill input along with any additional ones
    resumeForm.skill = __spreadArray([
        formData.get('skill')
    ], Array.from(skillsList.querySelectorAll('.skill-input')).map(function (input) { return input.value; }), true).filter(function (skill) { return skill; }); // Filter out any empty skills
    generateResume();
});
downloadPdfButton.style.display = 'none';
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
var generateResume = function () {
    var skillsHTML = resumeForm.skill.map(function (skill) { return "<ul><li><p contenteditable=\"true\"> ".concat(skill, "</p></li></ul>"); }).join('');
    var ResumeHtmlSec = "\n         <div class='main-output'>\n             <div class='left-sec'>\n                 <img src='".concat(resumeForm.picture, "' alt='profile-pic' width='150' height='150' class=\"photo\">\n                 <div class='left-inner-content'>\n                     <p contenteditable=\"true\"><u><h4>Professional Summary</h4></u><br>").concat(resumeForm.summary, "</p>\n                     <p contenteditable=\"true\"><u><h4>Career Objective</h4></u><br>").concat(resumeForm.objective, "</p>\n                 </div>\n             </div>\n \n             <div class='right-sec'>\n                 <div class='right-inner-content'>\n                     <h1 contenteditable=\"true\">").concat(resumeForm.title, "</h1>\n                     <h3 class='ts-headings'>Personal Information</h3>\n                     <p contenteditable=\"true\"><b>Full Name:</b> ").concat(resumeForm.name, "</p>\n                     <p contenteditable=\"true\"><b>Email Id:</b> ").concat(resumeForm.email, "</p>\n                     <p contenteditable=\"true\"><b>Address:</b> ").concat(resumeForm.address, "</p>\n                     <p contenteditable=\"true\"><b>Contact Number:</b> ").concat(resumeForm.phone, "</p><hr>\n                     <h3 class='ts-headings'>Education</h3>\n                     <p contenteditable=\"true\"><b>Institution:</b> ").concat(resumeForm.institution, "</p>\n                     <p contenteditable=\"true\"><b>Degree:</b> ").concat(resumeForm.degree, "</p>\n                     <p contenteditable=\"true\"><b>Passing Year:</b> ").concat(resumeForm.year, "</p><hr>\n \n                     <h3 class='ts-headings'>Skills</h3>\n                     ").concat(skillsHTML, "\n \n                     <h3 class='ts-headings'><b>Work Experience</b></h3>\n                     <p contenteditable=\"true\"><b>Job Title:</b> ").concat(resumeForm.jobtitle, "</p>\n                     <p contenteditable=\"true\"><b>Company:</b> ").concat(resumeForm.company, "</p>\n                     <p contenteditable=\"true\"><b>Year:</b> ").concat(resumeForm.year, "</p>\n                     <h3 class=\"ts-headings\"><b>Description</b></h3>\n                     <p contenteditable=\"true\"> ").concat(resumeForm.description, "</p>\n                 </div>\n             </div>\n         </div>\n     ");
    generatedContainer.innerHTML = ResumeHtmlSec;
    downloadPdfButton.style.display = 'block';
};
