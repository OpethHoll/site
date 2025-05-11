const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Данные проектов
// Можно добавлять любые ссылки в links и изображения в images
const projectsData = {
    1: {
        title: "HR-бот в Telegram",
        category: "Разработка",
        images: ["assets/images/HR_bot/project1(1).jpg", "assets/images/HR_bot/project1.jpg"],
        description: "Разработка Telegram бота для автоматизации HR-процессов в Томской электронной компании. Бот позволяет сотрудникам получать информацию о зарплате, отпусках, корпоративных мероприятиях, а также отправлять заявки в HR-отдел.",
        technologies: ["Python", "Telegram API", "PostgreSQL", "Docker"],
        links: [
            { url: "#", text: "Демо", icon: "fas fa-external-link-alt" },
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    },
    2: {
        title: "Трекер времени 'Use my time'",
        category: "Разработка",
        images: [
            "assets/images/Tracker/project2.webp",
            "assets/images/Tracker/tracker2.png",
        ],
        description: "Разрабатываемая система для ведения учета рабочего времени сотрудников компании на выполнение определенных задач.",
        technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Redux"],
        links: [
            { url: "#", text: "Демо", icon: "fas fa-external-link-alt" },
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    },
    3: {
        title: "ИТ регламенты и документация",
        category: "Документация",
        images: [
            "assets/images/Documentation/project3.webp",
            "assets/images/Documentation/doc.png",
        ],
        description: "Полная актуализация внутренней ИТ-документации компании, включая регламенты работы, политики безопасности и инструкции для сотрудников.",
        technologies: ["Confluence", "Jira", "ITIL", "Бизнес-процессы"],
        links: [
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    },
    4: {
        title: "Внедрение Битрикс24",
        category: "Управление",
        images: [
            "assets/images/Bitrix24/project4.jpg",
            "assets/images/Bitrix24/bitrix.webp",
        ],
        description: "Управление проектом внедрения CRM-системы Битрикс24 в компании. Включает миграцию данных, обучение сотрудников, настройку бизнес-процессов и интеграцию с существующими системами.",
        technologies: ["Битрикс24", "Управление проектами", "Корпоративные CRM"],
        links: [
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    },
    5: {
        title: "Регистрация ПО в реестре РПО",
        category: "Документация",
        images: [
            "assets/images/Registration/project5.jfif",
            "assets/images/Registration/patent.png",
        ],
        description: "Регистрация программного обеспечения Томской электронной компании в реестре Российского программного обеспечения. Включает подготовку документации, соответствие требованиям Минцифры и юридическое сопровождение.",
        technologies: ["Юридическая экспертиза", "Техническая документация", "Стандарты РПО"],
        links: [
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    },

    6: {
        title: "Разработка сайтов компании",
        category: "Разработка",
        images: [
            "assets/images/Sites/project6.jpg",
            "assets/images/Sites/tec.png",
        ],
        description: "Создание и поддержка корпоративных сайтов компании. Полный цикл от проектирования до реализации. Адаптивный дизайн, интеграция с CRM, SEO-оптимизация.",
        technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "Битрикс"],
        links: [
            { url: "#", text: "Демо", icon: "fas fa-external-link-alt" },
            { url: "#", text: "GitHub", icon: "fab fa-github" },
        ]
    }
};


// Открытие модального окна с информацией о проекте
document.querySelectorAll('.project-more').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];

        if (project) {
            modalBody.innerHTML = `
                <div class="project-gallery">
                    ${project.images.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="${project.title}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
                <div class="modal-project-content">
                    <h3 class="modal-project-title">${project.title}</h3>
                    <span class="modal-project-category">${project.category}</span>
                    <p class="modal-project-description">${project.description}</p>
                    
                    <div class="modal-project-tech-container">
                        <h4>Использованные технологии:</h4>
                        <div class="modal-project-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    ${project.links.length > 0 ? `
                    <div class="modal-project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" target="_blank" rel="noopener">
                                <i class="${link.icon}"></i> ${link.text}
                            </a>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
            `;

            // Инициализация простой галлереи
            initGallery();
            projectModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});

// Функция инициализации галлереи
function initGallery() {
    const gallery = document.querySelector('.project-gallery');
    if (!gallery) return;

    let currentIndex = 0;
    const items = gallery.querySelectorAll('.gallery-item');
    if (items.length <= 1) {
        if (items.length === 1) items[0].classList.add('active');
        return;
    }

    // Создаем навигацию
    const nav = document.createElement('div');
    nav.className = 'gallery-nav';
    nav.innerHTML = `
        <button class="gallery-prev"><i class="fas fa-chevron-left"></i></button>
        <span class="gallery-counter">1/${items.length}</span>
        <button class="gallery-next"><i class="fas fa-chevron-right"></i></button>
    `;
    gallery.appendChild(nav);

    // Функция переключения слайдов
    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        currentIndex = index;
        updateCounter();
    }

    // Обработчики навигации
    gallery.querySelector('.gallery-next').addEventListener('click', () => {
        showSlide((currentIndex + 1) % items.length);
    });

    gallery.querySelector('.gallery-prev').addEventListener('click', () => {
        showSlide((currentIndex - 1 + items.length) % items.length);
    });

    function updateCounter() {
        gallery.querySelector('.gallery-counter').textContent =
            `${currentIndex + 1}/${items.length}`;
    }

    // Показать первый слайд
    showSlide(0);
}
// Создание фильтров
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Удаляем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                // Показываем карточку
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';

                // Принудительный рефлоу для корректного отображения изображений
                void card.offsetWidth;

                // Загрузка изображений
                const img = card.querySelector('.project-image img');
                if (img) {
                    img.style.opacity = '1';
                    // Перезагружаем изображение, если оно не загрузилось
                    if (!img.complete || img.naturalWidth === 0) {
                        img.src = img.src;
                    }
                }
            } else {
                // Скрываем карточку
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Инициализация - показываем все проекты при загрузке
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.querySelector('.filter-btn[data-filter="all"]').click();
    }, 100);
});


// Закрытие модального окна
closeModal.addEventListener('click', function () {
    projectModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener('click', function (event) {
    if (event.target === projectModal) {
        projectModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

const typingTexts = [
    "Приветствую Вас на своей странице",
    "Я IT специалист из Томска",
    "Занимаюсь разработкой и управлением проектов"
];

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeText() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;

    const currentText = typingTexts[currentTextIndex];

    // Обновляем текст и позицию курсора синхронно
    typingElement.textContent = currentText.substring(0, charIndex);

    if (!isDeleting) {
        // Печатаем текст
        charIndex++;
        if (charIndex <= currentText.length) {
            const speed = isEnd ? 100 : 150;
            setTimeout(typeText, speed);
            isEnd = false;
        } else {
            isEnd = true;
            isDeleting = true;
            setTimeout(typeText, 2000);
        }
    } else {
        // Удаляем текст
        charIndex--;
        if (charIndex >= 0) {
            setTimeout(typeText, 100);
        } else {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        }
    }
}

// Запуск анимации при загрузке страницы
setTimeout(typeText, 1000);

// Анимация при скролле
const animateOnScroll = function () {
    const elements = document.querySelectorAll('.about-card, .project-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимации
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', function () {
    // Установка начального состояния для анимации
    document.querySelectorAll('.about-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Первый запуск анимации
    animateOnScroll();
});