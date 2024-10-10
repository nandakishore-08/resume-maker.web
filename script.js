// Getting the form and preview elements
const form = document.getElementById('resume-form');
const resumePreview = document.getElementById('resume-preview');

// Form submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Setting the values to the preview section
    document.getElementById('name-preview').textContent = name;
    document.getElementById('email-preview').textContent = email;
    document.getElementById('phone-preview').textContent = phone;
    document.getElementById('address-preview').textContent = address;
    document.getElementById('skills-preview').textContent = skills;
    document.getElementById('experience-preview').textContent = experience;
    document.getElementById('education-preview').textContent = education;

    // Show the resume preview section
    resumePreview.classList.remove('hidden');
});