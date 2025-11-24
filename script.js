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
        equipment: "Canon EOS R5, 24-70mm f/2.8",
        fullDescription: "Urban Reflections is a deeply personal exploration of how architecture shapes our daily emotions and interactions. Shot over six months in various New York neighborhoods, this series captures the quiet moments when buildings become more than structures—they become witnesses to human stories.",
        concept: "The project examines the relationship between built environments and psychological states, using reflective surfaces and geometric compositions to create visual metaphors for urban life.",
        tags: ["Monochrome", "Architecture", "Fine Art", "Black & White", "conceptual photography"]
    },
    {
        id: 2,
        title: "Lost in Contemplation",
        description: "Minimalist compositions of natural environments captured during the golden hour.",
        image: "./resources/IMG_2399 copy 2.jpg",
        category: "Fine Art",
        year: "2023",
        location: "Bowmanville, Ontario",
        equipment: "Sony A7R IV, 16-35mm f/2.8",
        fullDescription: "This collection represents a year-long journey through the Pacific Northwest, seeking moments of perfect stillness in nature. Each image was captured during the brief window of golden hour, when light transforms ordinary landscapes into something magical.",
        concept: "Using minimalist composition and natural lighting, these photographs strip away distractions to reveal the essential beauty of untouched wilderness.",
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
        equipment: "Nikon D850, 85mm f/1.4",
        fullDescription: "This ongoing series focuses on capturing the authentic self that exists between poses. Working with natural light and minimal setup, each session becomes a conversation about identity, vulnerability, and human connection.",
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
        equipment: "Fujifilm X-T4, Various Lenses",
        fullDescription: "Abstract Motion challenges traditional photography by embracing blur, movement, and the unpredictable. Using intentional camera movement and long exposures, this series creates painterly images that exist somewhere between photography and abstract art.",
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