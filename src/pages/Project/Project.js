import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectById } from '../../data/projects';
import styles from './Project.module.css';

const Project = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Простая функция для рендеринга markdown-like контента
  const renderContent = (content) => {
    if (!content) return null;

    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={index}>{line.replace('- ', '')}</li>;
      }
      if (line.includes('|')) {
        const cells = line.split('|').filter(cell => cell.trim());
        return (
          <tr key={index}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell.trim()}</td>
            ))}
          </tr>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className={styles.project}>
      <section 
        className={styles.projectHero}
        style={{ backgroundImage: `url('${project.heroImage}')` }}
      >
        <h1 className={styles.projectTitle}>{project.title}</h1>
      </section>

      <div className={styles.projectContainer}>
        <main className={styles.projectContent}>
          <div className={styles.content}>
            {renderContent(project.content)}
          </div>
        </main>

        <aside className={styles.projectSidebar}>
          <div className={styles.projectMeta}>
            <h3>Детали проекта</h3>
            <div className={styles.metaItem}>
              <div className={styles.metaTitle}>Период</div>
              <div>{project.period}</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaTitle}>Руководитель</div>
              <div>{project.leader}</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaTitle}>Участники</div>
              <div>{project.participants}</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaTitle}>Теги</div>
              <div>
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.relatedDocs}>
            <h3>Материалы</h3>
            <ul>
              <li>
                <a href={project.reportLink} style={{ color: '#005aaa' }}>
                  Полный отчет (PDF)
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#005aaa' }}>
                  Исходные данные
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.mapPreview}>
            <h3>Карта проекта</h3>
            <img 
              src={project.mapImage} 
              alt="Карта проекта" 
            />
            <a 
              href={project.mapLink} 
              className="btn" 
              style={{ display: 'block', textAlign: 'center', marginTop: '15px' }}
            >
              Открыть карту
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Project;