// Portfolio projects data
const projects = [
    {
        id: 1,
        title: "Urban Reflections",
        description: "A documentary series exploring the intersection of architecture and human emotion in modern cityscapes.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        category: "Documentary",
        year: "2024",
        location: "New York City",
        equipment: "Canon EOS R5, 24-70mm f/2.8",
        fullDescription: "Urban Reflections is a deeply personal exploration of how architecture shapes our daily emotions and interactions. Shot over six months in various New York neighborhoods, this series captures the quiet moments when buildings become more than structures—they become witnesses to human stories.",
        concept: "The project examines the relationship between built environments and psychological states, using reflective surfaces and geometric compositions to create visual metaphors for urban life.",
        tags: ["Street Photography", "Architecture", "Documentary", "Black & White"]
    },
    {
        id: 2,
        title: "Ethereal Landscapes",
        description: "Minimalist compositions of natural environments captured during the golden hour.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Landscape",
        year: "2023",
        location: "Pacific Northwest",
        equipment: "Sony A7R IV, 16-35mm f/2.8",
        fullDescription: "This collection represents a year-long journey through the Pacific Northwest, seeking moments of perfect stillness in nature. Each image was captured during the brief window of golden hour, when light transforms ordinary landscapes into something magical.",
        concept: "Using minimalist composition and natural lighting, these photographs strip away distractions to reveal the essential beauty of untouched wilderness.",
        tags: ["Landscape", "Minimalism", "Golden Hour", "Nature"]
    },
    {
        id: 3,
        title: "Portrait Studies",
        description: "Intimate character studies exploring the complexity of human expression and emotion.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        category: "Portrait",
        year: "2024",
        location: "Studio & Location",
        equipment: "Nikon D850, 85mm f/1.4",
        fullDescription: "This ongoing series focuses on capturing the authentic self that exists between poses. Working with natural light and minimal setup, each session becomes a conversation about identity, vulnerability, and human connection.",
        concept: "These portraits aim to reveal the person behind the persona, using subtle lighting and composition to create images that feel both intimate and timeless.",
        tags: ["Portrait", "Natural Light", "Character Study", "Emotion"]
    },
    {
        id: 4,
        title: "Abstract Motion",
        description: "Experimental photography exploring movement and time through intentional camera movement.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
        category: "Abstract",
        year: "2023",
        location: "Various",
        equipment: "Fujifilm X-T4, Various Lenses",
        fullDescription: "Abstract Motion challenges traditional photography by embracing blur, movement, and the unpredictable. Using intentional camera movement and long exposures, this series creates painterly images that exist somewhere between photography and abstract art.",
        concept: "By abandoning sharp focus and static composition, these images explore how photography can capture the essence of movement and energy rather than just frozen moments.",
        tags: ["Abstract", "Experimental", "Motion Blur", "Long Exposure"]
    },
    {
        id: 5,
        title: "Cultural Heritage",
        description: "Documenting traditional crafts and cultural practices before they fade from memory.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        category: "Documentary",
        year: "2024",
        location: "Rural Communities",
        equipment: "Leica Q2, Available Light",
        fullDescription: "Cultural Heritage is a documentation project focused on preserving the visual record of traditional crafts and practices. Working closely with artisans and community members, this series captures not just the work, but the wisdom and stories behind generations-old traditions.",
        concept: "Each photograph serves as both artistic expression and historical document, emphasizing the human element in cultural preservation.",
        tags: ["Documentary", "Cultural", "Traditional Crafts", "Community"]
    },
    {
        id: 6,
        title: "Night Visions",
        description: "Exploring the hidden beauty of urban environments after dark.",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
        category: "Night Photography",
        year: "2023",
        location: "Metropolitan Areas",
        equipment: "Canon R6, 50mm f/1.2",
        fullDescription: "Night Visions reveals the transformation that occurs in cities after sunset. Using available light from street lamps, neon signs, and building illumination, this series shows how familiar urban spaces become mysterious and cinematic in darkness.",
        concept: "These images explore the duality of urban life—the energy and isolation, the artificial and natural light sources that create a unique nocturnal landscape.",
        tags: ["Night Photography", "Urban", "Available Light", "Cinematic"]
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