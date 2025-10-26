var skills = [];
var projects = [];

function addSkill() {
    var input = document.getElementById('skillInput');
    var skill = input.value.trim();
    if (skill) {
        skills.push(skill);
        input.value = '';
        renderSkills();
        updatePreview();
    }
}

function renderSkills() {
    var container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    for (var i = 0; i < skills.length; i++) {
        var div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = '<span>' + escapeHtml(skills[i]) + '</span><button class="btn btn-danger" onclick="removeSkill(' + i + ')">Remove</button>';
        container.appendChild(div);
    }
}

function removeSkill(index) {
    skills.splice(index, 1);
    renderSkills();
    updatePreview();
}

function addProject() {
    var title = document.getElementById('projectTitle').value.trim();
    var description = document.getElementById('projectDesc').value.trim();
    var link = document.getElementById('projectLink').value.trim();
    if (title && description) {
        projects.push({title: title, description: description, link: link});
        document.getElementById('projectTitle').value = '';
        document.getElementById('projectDesc').value = '';
        document.getElementById('projectLink').value = '';
        renderProjects();
        updatePreview();
    }
}

function renderProjects() {
    var container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    for (var i = 0; i < projects.length; i++) {
        var div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = '<div><div style="font-weight: 600; margin-bottom: 5px;">' + escapeHtml(projects[i].title) + '</div><div style="font-size: 0.9em; color: #666;">' + escapeHtml(projects[i].description) + '</div></div><button class="btn btn-danger" onclick="removeProject(' + i + ')">Remove</button>';
        container.appendChild(div);
    }
}

function removeProject(index) {
    projects.splice(index, 1);
    renderProjects();
    updatePreview();
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function updatePreview() {
    var name = document.getElementById('name').value || 'Your Name';
    var title = document.getElementById('title').value || 'Your Title';
    var bio = document.getElementById('bio').value;
    var preview = document.getElementById('preview');
    
    var html = '<div class="preview-header"><div class="preview-name">' + escapeHtml(name) + '</div><div class="preview-title">' + escapeHtml(title) + '</div></div>';
    
    if (bio) {
        html += '<div class="preview-section-title">About Me</div><div class="preview-bio">' + escapeHtml(bio).replace(/\n/g, '<br>') + '</div>';
    }
    
    if (skills.length > 0) {
        html += '<div class="preview-section-title">Skills</div><div class="preview-skills">';
        for (var i = 0; i < skills.length; i++) {
            html += '<span class="skill-badge">' + escapeHtml(skills[i]) + '</span>';
        }
        html += '</div>';
    }
    
    if (projects.length > 0) {
        html += '<div class="preview-section-title">Projects</div>';
        for (var i = 0; i < projects.length; i++) {
            html += '<div class="project-card"><div class="project-title">' + escapeHtml(projects[i].title) + '</div><div class="project-description">' + escapeHtml(projects[i].description) + '</div>';
            if (projects[i].link) html += '<a href="' + projects[i].link + '" class="project-link" target="_blank">View Project →</a>';
            html += '</div>';
        }
    }
    
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var twitter = document.getElementById('twitter').value;
    var email = document.getElementById('email').value;
    if (github || linkedin || twitter || email) {
        html += '<div class="preview-section-title">Connect With Me</div><div class="social-links">';
        if (github) html += '<a href="' + github + '" class="social-link" target="_blank">GitHub</a>';
        if (linkedin) html += '<a href="' + linkedin + '" class="social-link" target="_blank">LinkedIn</a>';
        if (twitter) html += '<a href="' + twitter + '" class="social-link" target="_blank">Twitter</a>';
        if (email) html += '<a href="mailto:' + email + '" class="social-link">Email</a>';
        html += '</div>';
    }
    
    preview.innerHTML = html;
}

function downloadPortfolio() {
    var name = document.getElementById('name').value || 'Your Name';
    var title = document.getElementById('title').value || 'Your Title';
    var bio = document.getElementById('bio').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var twitter = document.getElementById('twitter').value;
    var email = document.getElementById('email').value;
    
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + escapeHtml(name) + ' - Portfolio</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Segoe UI";line-height:1.6;color:#333}.header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:80px 20px;text-align:center}.header h1{font-size:3.5em;margin-bottom:15px}.header p{font-size:1.5em;opacity:0.9}.container{max-width:1000px;margin:0 auto;padding:60px 20px}.section{margin-bottom:60px}.section-title{font-size:2.5em;margin-bottom:30px;padding-bottom:15px;border-bottom:3px solid #667eea;color:#333}.bio{font-size:1.2em;line-height:2;color:#555}.skills{display:flex;flex-wrap:wrap;gap:15px}.skill{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:12px 24px;border-radius:25px;font-size:1em;font-weight:500}.project{background:#f8f9fa;padding:30px;border-radius:15px;margin-bottom:20px;border-left:5px solid #667eea}.project-title{font-size:1.8em;font-weight:600;margin-bottom:15px;color:#333}.project-description{font-size:1.1em;color:#666;margin-bottom:15px;line-height:1.8}.project-link{color:#667eea;text-decoration:none;font-weight:600;font-size:1.1em}.project-link:hover{text-decoration:underline}.social-links{display:flex;gap:20px;flex-wrap:wrap}.social-link{padding:15px 30px;background:#667eea;color:white;text-decoration:none;border-radius:10px;font-size:1.1em;font-weight:600}.footer{background:#333;color:white;text-align:center;padding:40px 20px;margin-top:80px}</style></head><body><div class="header"><h1>' + escapeHtml(name) + '</h1><p>' + escapeHtml(title) + '</p></div><div class="container">';
    
    if (bio) html += '<div class="section"><h2 class="section-title">About Me</h2><div class="bio">' + escapeHtml(bio).replace(/\n/g, '<br>') + '</div></div>';
    if (skills.length > 0) {
        html += '<div class="section"><h2 class="section-title">Skills</h2><div class="skills">';
        for (var i = 0; i < skills.length; i++) {
            html += '<span class="skill">' + escapeHtml(skills[i]) + '</span>';
        }
        html += '</div></div>';
    }
    if (projects.length > 0) {
        html += '<div class="section"><h2 class="section-title">Projects</h2>';
        for (var i = 0; i < projects.length; i++) {
            html += '<div class="project"><div class="project-title">' + escapeHtml(projects[i].title) + '</div><div class="project-description">' + escapeHtml(projects[i].description) + '</div>';
            if (projects[i].link) html += '<a href="' + projects[i].link + '" class="project-link" target="_blank">View Project →</a>';
            html += '</div>';
        }
        html += '</div>';
    }
    if (github || linkedin || twitter || email) {
        html += '<div class="section"><h2 class="section-title">Connect With Me</h2><div class="social-links">';
        if (github) html += '<a href="' + github + '" class="social-link" target="_blank">GitHub</a>';
        if (linkedin) html += '<a href="' + linkedin + '" class="social-link" target="_blank">LinkedIn</a>';
        if (twitter) html += '<a href="' + twitter + '" class="social-link" target="_blank">Twitter</a>';
        if (email) html += '<a href="mailto:' + email + '" class="social-link">Email</a>';
        html += '</div></div>';
    }
    html += '</div><div class="footer"><p>&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(name) + '. Created with Portfolio Builder.</p></div></body></html>';
    
    var blob = new Blob([html], {type: 'text/html'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name.replace(/\s+/g, '_') + '_portfolio.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function previewFullPage() {
    var name = document.getElementById('name').value || 'Your Name';
    var title = document.getElementById('title').value || 'Your Title';
    var bio = document.getElementById('bio').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var twitter = document.getElementById('twitter').value;
    var email = document.getElementById('email').value;
    
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + escapeHtml(name) + ' - Portfolio</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Segoe UI";line-height:1.6;color:#333}.header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:80px 20px;text-align:center}.header h1{font-size:3.5em;margin-bottom:15px}.header p{font-size:1.5em;opacity:0.9}.container{max-width:1000px;margin:0 auto;padding:60px 20px}.section{margin-bottom:60px}.section-title{font-size:2.5em;margin-bottom:30px;padding-bottom:15px;border-bottom:3px solid #667eea;color:#333}.bio{font-size:1.2em;line-height:2;color:#555}.skills{display:flex;flex-wrap:wrap;gap:15px}.skill{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:12px 24px;border-radius:25px;font-size:1em;font-weight:500}.project{background:#f8f9fa;padding:30px;border-radius:15px;margin-bottom:20px;border-left:5px solid #667eea}.project-title{font-size:1.8em;font-weight:600;margin-bottom:15px;color:#333}.project-description{font-size:1.1em;color:#666;margin-bottom:15px;line-height:1.8}.project-link{color:#667eea;text-decoration:none;font-weight:600;font-size:1.1em}.project-link:hover{text-decoration:underline}.social-links{display:flex;gap:20px;flex-wrap:wrap}.social-link{padding:15px 30px;background:#667eea;color:white;text-decoration:none;border-radius:10px;font-size:1.1em;font-weight:600}.footer{background:#333;color:white;text-align:center;padding:40px 20px;margin-top:80px}</style></head><body><div class="header"><h1>' + escapeHtml(name) + '</h1><p>' + escapeHtml(title) + '</p></div><div class="container">';
    
    if (bio) html += '<div class="section"><h2 class="section-title">About Me</h2><div class="bio">' + escapeHtml(bio).replace(/\n/g, '<br>') + '</div></div>';
    if (skills.length > 0) {
        html += '<div class="section"><h2 class="section-title">Skills</h2><div class="skills">';
        for (var i = 0; i < skills.length; i++) {
            html += '<span class="skill">' + escapeHtml(skills[i]) + '</span>';
        }
        html += '</div></div>';
    }
    if (projects.length > 0) {
        html += '<div class="section"><h2 class="section-title">Projects</h2>';
        for (var i = 0; i < projects.length; i++) {
            html += '<div class="project"><div class="project-title">' + escapeHtml(projects[i].title) + '</div><div class="project-description">' + escapeHtml(projects[i].description) + '</div>';
            if (projects[i].link) html += '<a href="' + projects[i].link + '" class="project-link" target="_blank">View Project →</a>';
            html += '</div>';
        }
        html += '</div>';
    }
    if (github || linkedin || twitter || email) {
        html += '<div class="section"><h2 class="section-title">Connect With Me</h2><div class="social-links">';
        if (github) html += '<a href="' + github + '" class="social-link" target="_blank">GitHub</a>';
        if (linkedin) html += '<a href="' + linkedin + '" class="social-link" target="_blank">LinkedIn</a>';
        if (twitter) html += '<a href="' + twitter + '" class="social-link" target="_blank">Twitter</a>';
        if (email) html += '<a href="mailto:' + email + '" class="social-link">Email</a>';
        html += '</div></div>';
    }
    html += '</div><div class="footer"><p>&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(name) + '. Created with Portfolio Builder.</p></div></body></html>';
    
    var previewWindow = window.open();
    previewWindow.document.write(html);
    previewWindow.document.close();
}

// Add event listeners
document.getElementById('name').addEventListener('input', updatePreview);
document.getElementById('title').addEventListener('input', updatePreview);
document.getElementById('bio').addEventListener('input', updatePreview);
document.getElementById('email').addEventListener('input', updatePreview);
document.getElementById('github').addEventListener('input', updatePreview);
document.getElementById('linkedin').addEventListener('input', updatePreview);
document.getElementById('twitter').addEventListener('input', updatePreview);

document.getElementById('skillInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addSkill();
});
