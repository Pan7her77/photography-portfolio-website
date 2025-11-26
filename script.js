// Portfolio projects data
const projects = [
    {
        id: 1,
        title: "Identity - Self",
        description: "How do you fell in this moment? How does…your(self) feel?",
        image: "./resources/Identity 4 copy.jpg",
        category: "Fine Art",
        year: "2021",
        location: "Windsor, Ontario",
        equipment: "Canon EOS 2000D, 18-55mm f",
        fullDescription: "The Identity series delves into the complexities of self-perception and emotional states. Through a series of staged portraits, the project explores how individuals relate to their own identities in moments of introspection and vulnerability.",
        concept: "This Project blurs the eyes which are known as the windows to the soul, to instead focus on other features of the subject and position to allow the viewer to place how they themselves feel onto the subject.",
        tags: ["Monochrome", "Architecture", "Fine Art", "Black & White", "conceptual photography"]
    },
    {
        id: 2,
        title: "Lost in Contemplation",
        description: "Get lost in your thoughts. Drown in them.",
        image: "./resources/IMG_2399 copy 2.jpg",
        category: "Fine Art",
        year: "2023",
        location: "Bowmanville, Ontario",
        equipment: "Canon EOS 2000D, 18-55mm f",
        fullDescription: "Lost in Contemplation is a project that captures the ideas of solitude and introspection.",
        concept: "Using dramatic lighting and moody tones, the images evoke a sense of quiet reflection, inviting viewers to connect with their own inner thoughts and emotions.",
        tags: ["Dramatic lighting", "Cinematic", "Moody", "Low light", "Fine Art"]
    },
    {
        id: 3,
        title: "Identity ||| - Rift",
        description: "A rift in the mind, peering through different realities.",
        image: "./resources/Identity 6.jpg",
        category: "Fine Art",
        year: "2021",
        location: "Windsor, Ontario",
        equipment: "Canon EOS 2000D, 18-55mm f",
        fullDescription: "The Identity series delves into the complexities of self-perception and emotional states. Through a series of staged portraits, the project explores how individuals relate to their own identities in moments of introspection and vulnerability.",
        concept: "These portraits aim to reveal the person behind the persona, using subtle lighting and composition to create images that feel both intimate and timeless.",
        tags: ["Experimental", "Abstract", "Fine Art", "Gritty texture"]
    },
    {
        id: 4,
        title: "Identity || - Characters",
        description: "Characters of different origins.",
        image: "./resources/Identity 1.jpg",
        category: "Fine Art",
        year: "2021",
        location: "Windsor, Ontario",
        equipment: "Canon EOS 2000D, 18-55mm f",
        fullDescription: "The Identity series delves into the complexities of self-perception and emotional states. Through a series of staged portraits, the project explores how individuals relate to their own identities in moments of introspection and vulnerability.",
        concept: "By abandoning sharp focus and static composition, these images explore how photography can capture the essence of movement and energy rather than just frozen moments.",
        tags: ["Surreal", "Experimental", "psychological", "Black & White", "Fine Art"]
    },
    {
        /*
        id: 5,
        title: "Cultural Heritage",
        description: "",
        image: "",
        category: "Documentary",
        year: "2024",
        location: "",
        equipment: "Leica Q2, Available Light",
        fullDescription: "",
        concept: "",
        tags: ["Documentary", "Cultural", "Traditional Crafts", "Community"]
    },
    {
        id: 6,
        title: "",
        description: "",
        image: "",
        category: "Night Photography",
        year: "2023",
        location: "",
        equipment: "Canon R6, 50mm f/1.2",
        fullDescription: "",
        concept: "T",
        tags: ["Night Photography", "Urban", "Available Light", "Cinematic"]
        */
    }
];

// Generate portfolio cards
function generatePortfolio() {
    const container = document.getElementById('portfolioContainer');
    container.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProject(${project.id})">
            <div class="card-image" style="background-image: url('${project.image}')"></div>
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="card-meta">
                    <span>${project.category}</span>
                    <span>${project.year}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open project detail
function openProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-header">
            <h1 class="detail-title">${project.title}</h1>
            <p class="detail-subtitle">${project.description}</p>
        </div>
        
        <div class="detail-image" style="background-image: url('${project.image}')"></div>
        
        <div class="detail-info">
            <div class="info-section">
                <h3 class="info-title">Project Details</h3>
                <p class="info-text"><strong>Category:</strong> ${project.category}</p>
                <p class="info-text"><strong>Year:</strong> ${project.year}</p>
                <p class="info-text"><strong>Location:</strong> ${project.location}</p>
                <p class="info-text"><strong>Equipment:</strong> ${project.equipment}</p>
            </div>
            
            <div class="info-section">
                <h3 class="info-title">About This Project</h3>
                <p class="info-text">${project.fullDescription}</p>
            </div>
        </div>
        
        <div class="info-section">
            <h3 class="info-title">Concept & Approach</h3>
            <p class="info-text">${project.concept}</p>
            <div class="tech-tags">
                ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    document.getElementById('projectDetail').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project detail
function closeProject() {
    document.getElementById('projectDetail').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProject();
    }
});

// Close on background click
document.getElementById('projectDetail').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProject();
    }
});

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generatePortfolio();
});