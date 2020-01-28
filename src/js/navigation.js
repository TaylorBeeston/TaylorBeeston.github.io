import Resume from '../pdfs/resume.pdf';

const currentPage = document.querySelector('title').innerText.replace('Taylor Beeston | ', '');
const currentTag = document.querySelector(`#links > a[page=${currentPage}]`);
const resumeTag = document.getElementById('resume');

currentTag.classList.toggle('current');
resumeTag.href = Resume;
