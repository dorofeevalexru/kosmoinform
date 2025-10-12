import { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    console.log('Search query:', searchQuery); // для отладки
    console.log('All projects:', projectsData); // для отладки
    
    if (!searchQuery.trim()) {
      return projectsData;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = projectsData.filter(project => {
      const matches = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.shortDescription && project.shortDescription.toLowerCase().includes(query)) ||
        project.tags.some(tag => tag.toLowerCase().includes(query));
      
      console.log('Project:', project.title, 'matches:', matches); // для отладки
      return matches;
    });
    
    console.log('Filtered projects:', filtered); // для отладки
    return filtered;
  }, [searchQuery]);

  const handleSearch = (query) => {
    console.log('Setting search query to:', query); // для отладки
    setSearchQuery(query);
  };

  return {
    searchQuery,
    filteredProjects,
    handleSearch
  };
};
