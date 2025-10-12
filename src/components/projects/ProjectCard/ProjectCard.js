import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, searchQuery = '' }) => {
  // Функция для подсветки совпадений в тегах
  const shouldHighlightTag = (tag) => {
    return searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className={styles.projectCard}>
      <img 
        src={project.image} 
        alt={project.title}
        className={styles.projectImage}
      />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
        
        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`tag ${shouldHighlightTag(tag) ? 'highlight' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.buttons}>
          <Link to={`/project/${project.id}`} className="btn">
            Подробнее
          </Link>
          <a href={project.mapLink} className={`btn ${styles.btnMap}`}>
            На карте
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;