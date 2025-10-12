import React from 'react';
import ProjectSearch from '../../components/projects/ProjectSearch/ProjectSearch';
import ProjectCard from '../../components/projects/ProjectCard/ProjectCard';
import { useSearch } from '../../hooks/useSearch';
import styles from './Home.module.css';

const Home = () => {
  const { searchQuery, filteredProjects, handleSearch } = useSearch();

  return (
    <div className={styles.home}>
      <div className={styles.backphoto}>
        <img 
          src="/assets/img/back.png" 
          alt="background photo" 
          className={styles.backgroundPhoto}
        />
      </div>
      
      {/* Передаем handleSearch в ProjectSearch */}
      <ProjectSearch 
        searchQuery={searchQuery} 
        onSearchChange={handleSearch} 
      />
      
      {/* Показываем результаты поиска */}
      {searchQuery && (
        <div className={styles.searchResults}>
          <p>Найдено проектов: {filteredProjects.length}</p>
        </div>
      )}
      
      <div className={styles.projects}>
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            searchQuery={searchQuery}
          />
        ))}
        
        {filteredProjects.length === 0 && searchQuery && (
          <div className={styles.noResults}>
            <p>Проекты не найдены. Попробуйте изменить поисковый запрос.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;