var form = document.getElementById('resume-form');
var generatedContainer = document.getElementById('generated-container');
var profilePicture = document.getElementById('picture');
var downloadPdfButton = document.getElementById('download-pdf');
var resumeForm = {
    name: '',
    email: '',
    phone: '',
    picture: '',
    degree: '',
    institution: '',
    year: '',
    jobtitle: '',
    company: '',
    skills: '',
    skills1: '',
    skills2: '',
    description: ''
};
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var formData = new FormData(form);
    resumeForm.name = formData.get('name');
    resumeForm.email = formData.get('email');
    resumeForm.phone = formData.get('phone');
    resumeForm.degree = formData.get('degree');
    resumeForm.jobtitle = formData.get('jobtitle');
    resumeForm.year = formData.get('year');
    resumeForm.institution = formData.get('institution');
    resumeForm.description = formData.get('description');
    resumeForm.company = formData.get('company');
    resumeForm.skills = formData.get('skills');
    resumeForm.skills1 = formData.get('skills1');
    resumeForm.skills2 = formData.get('skills2');
    resumeForm.picture = ((_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicture.files[0]) : '';
    generateResume();
});
downloadPdfButton.style.display = 'none';
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
var generateResume = function () {
    var ResumeHtmlSec = "\n\n    <div class='main-output' style=\"background-color: #0D1282; -webkit-print-color-adjust: exact;\">\n\n    <div class='left-sec'>\n    <img src='".concat(resumeForm.picture, "' alt='profile-pic' width='100' height='100'>\n    <div class='left-inner-content'>\n    <p contenteditable=\"true\">").concat(resumeForm.name, "</p>\n    <p contenteditable=\"true\">").concat(resumeForm.email, "</p>\n    <p contenteditable=\"true\">").concat(resumeForm.phone, "</p>\n    </div>\n    </div>\n\n    <div class='right-sec'>\n    <div class='right-inner-content'>\n    <h3 class='ts-headings'>Education</h3>\n     <p contenteditable=\"true\">").concat(resumeForm.institution, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.degree, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.year, "</p><hr>\n\n\n    <h3 class='ts-headings'>Skills</h3>\n     <p contenteditable=\"true\">").concat(resumeForm.skills, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.skills1, "</p>\n     <p>").concat(resumeForm.skills2, "</p><hr>\n      \n     <h3 class='ts-headings'>Work Experience</h3>\n     <p contenteditable=\"true\">").concat(resumeForm.jobtitle, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.company, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.year, "</p>\n     <p contenteditable=\"true\">").concat(resumeForm.description, "</p>\n    </div>\n    </div>\n\n    </div>\n\n    ");
    generatedContainer.innerHTML = ResumeHtmlSec;
    downloadPdfButton.style.display = 'block';
};
