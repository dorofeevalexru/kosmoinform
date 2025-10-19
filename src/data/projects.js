export const projectsData = [
  {
    id: 'volga',
    title: "Экология Волги",
    description: "Анализ загрязнений реки Волга с использованием ГИС-технологий",
    shortDescription: "Исследование экологического состояния реки Волга",
    image: "/assets/img/back.png",
    heroImage: "/assets/img/back.png",
    period: "2020-2024 гг.",
    leader: "Иванова А.К.",
    participants: "15 специалистов",
    tags: ["ГИС", "Экология", "Вода"],
    reportLink: "/reports/volga.pdf",
    mapImage: "/assets/img/volga-scheme.jpg",
    mapLink: "#",
    content: `
## О проекте
Проект посвящен исследованию экологического состояния реки Волга — крупнейшей водной артерии Европейской части России. В ходе работы были проанализированы данные за последние 5 лет с 35 гидропостов, расположенных от истока до устья.

## Методология
Исследование проводилось с использованием следующих методов:
- Спутниковый мониторинг (Sentinel-2, Landsat 8)
- Отбор и лабораторный анализ проб воды
- ГИС-моделирование распространения загрязнений

## Основные показатели
| Параметр | 2019 | 2024 |
|----------|------|------|
| БПК5 (мг/л) | 4.2 | 3.8 |
    `
  },

  {
    id: 'project-2',
    title: "Космический мониторинг",
    description: "Мониторинг земной поверхности с использованием спутниковых данных",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/aviatraffic.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
    {
    id: 'project-3',
    title: "Спец. заказ для ООО 'Оверсайз'",
    description: "Мониторинг распространения пицц на Земле",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/spb.png",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
    {
    id: 'project-4',
    title: "Moscow never sleeps",
    description: "TEST TEST TEST",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/moscow.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
    {
    id: 'project-33',
    title: "Ты не верь слезам",
    description: "Мониторинг земной поверхности с использованием спутниковых данных",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/aviatraffic.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
    {
    id: 'project-77',
    title: "ПМО",
    description: "Мониторинг земной поверхности с использованием спутниковых данных",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/aviatraffic.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
    {
    id: 'project-00',
    title: "La Routine",
    description: "Мониторинг земной поверхности с использованием спутниковых данных",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/aviatraffic.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
      {
    id: 'project-11',
    title: "KFkfkfkfkfk",
    description: "Мониторинг земной поверхности с использованием спутниковых данных",
    shortDescription: "Спутниковый мониторинг окружающей среды",
    image: "/assets/img/aviatraffic.jpg",
    heroImage: "/assets/img/default-bg.jpg",
    period: "2021-2023 гг.",
    leader: "Петров С.И.",
    participants: "8 специалистов",
    tags: ["Космос", "Мониторинг", "ДЗЗ"],
    reportLink: "#",
    mapImage: "/assets/img/map-placeholder.jpg",
    mapLink: "#",
    content: "Контент второго проекта..."
  },
];

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

export const searchProjects = (query) => {
  if (!query) return projectsData;
  
  const lowerQuery = query.toLowerCase();
  return projectsData.filter(project => 
    project.title.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};