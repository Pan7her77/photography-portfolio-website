import React, { useState, useEffect } from 'react';
import './PhotographyPortfolio.css';

const PhotographyPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Identity",
      description: "The Idea of the Photo essay wat to explore the feeling of being trapped in yourself.",
      image: "./resources/identity.jpg",
      category: "Experimental",
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

  // Close project on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="photography-portfolio">
      <div className="container">
        <div className="header">
          <h1>Visual Stories</h1>
          <p>Capturing moments that matter through the lens of creativity and passion</p>
        </div>

        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card project-card-${index + 1}`}
              onClick={() => openProject(project)}
            >
              <div 
                className="card-image" 
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-detail active" onClick={closeProject}>
          <button className="close-btn" onClick={closeProject}>
            ×
          </button>
          <div className="detail-content" onClick={(e) => e.stopPropagation()}>
            <div className="detail-header">
              <h1 className="detail-title">{selectedProject.title}</h1>
              <p className="detail-subtitle">{selectedProject.description}</p>
            </div>
            
            <div 
              className="detail-image" 
              style={{ backgroundImage: `url('${selectedProject.image}')` }}
            />
            
            <div className="detail-info">
              <div className="info-section">
                <h3 className="info-title">Project Details</h3>
                <p className="info-text"><strong>Category:</strong> {selectedProject.category}</p>
                <p className="info-text"><strong>Year:</strong> {selectedProject.year}</p>
                <p className="info-text"><strong>Location:</strong> {selectedProject.location}</p>
                <p className="info-text"><strong>Equipment:</strong> {selectedProject.equipment}</p>
              </div>
              
              <div className="info-section">
                <h3 className="info-title">About This Project</h3>
                <p className="info-text">{selectedProject.fullDescription}</p>
              </div>
            </div>
            
            <div className="info-section">
              <h3 className="info-title">Concept & Approach</h3>
              <p className="info-text">{selectedProject.concept}</p>
              <div className="tech-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPortfolio;