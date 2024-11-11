function generateResume() {
    // Collecting data from form fields
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const aboutMe = document.getElementById('aboutMe').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Generating the resume preview
    const resumePreview = `
        <h3>${fullName}</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

        <h4>About Me:</h4>
        <p>${aboutMe}</p>

        <h4>Skills:</h4>
        <div class="skills-list">
            ${skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
        </div>

        <h4>Work Experience:</h4>
        <p>${experience}</p>

        <h4>Education:</h4>
        <p>${education}</p>
    `;

    // Show preview section
    const previewSection = document.querySelector('.preview-section');
    previewSection.style.display = 'block';
    document.getElementById('resumePreview').innerHTML = resumePreview;
}
