// Функция для обработки Markdown контента (упрощенная версия)
export const renderMarkdown = (content) => {
  if (!content) return '';
  
  return content
    .split('\n')
    .map(line => {
      // Заголовки
      if (line.startsWith('## ')) {
        return `<h2>${line.replace('## ', '')}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3>${line.replace('### ', '')}</h3>`;
      }
      
      // Списки
      if (line.startsWith('- ')) {
        return `<li>${line.replace('- ', '')}</li>`;
      }
      
      // Таблицы (базовая поддержка)
      if (line.includes('|')) {
        return `<tr>${line.split('|').map(cell => `<td>${cell.trim()}</td>`).join('')}</tr>`;
      }
      
      // Обычный текст
      return line ? `<p>${line}</p>` : '<br>';
    })
    .join('');
};

// Форматирование даты
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
};

// Подсветка текста в результатах поиска
export const highlightText = (text, query) => {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="highlight">$1</mark>');
};