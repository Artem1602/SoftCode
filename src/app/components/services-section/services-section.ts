import { Component } from '@angular/core';

interface ServiceGroup {
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSectionComponent {
  protected readonly services: ServiceGroup[] = [
    {
      title: 'Дизайн і продуктова логіка',
      description:
        'Допомагаємо сформувати структуру сторінки або продукту, продумати сценарії користувачів і підготувати зрозумілий інтерфейс.',
      items: ['UI/UX дизайн', 'прототипи', 'структура продукту'],
    },
    {
      title: 'Лендинги та бізнес-сайти',
      description:
        'Створюємо швидкі адаптивні сторінки для послуг, продуктів, подій або невеликого бізнесу з фокусом на чітку дію для клієнта.',
      items: ['лендинги', 'сайти для бізнесу', 'адаптивна верстка'],
    },
    {
      title: 'Full-stack веб-додатки',
      description:
        'Розробляємо веб-додатки з клієнтською частиною, серверною логікою, базовою адмінкою та інтеграціями під реальні процеси.',
      items: ['MVP', 'кабінети', 'внутрішні інструменти'],
    },
    {
      title: 'Backend і API',
      description:
        'Проєктуємо серверну частину, API та бізнес-логіку, яка з’єднує інтерфейс, дані й зовнішні сервіси.',
      items: ['REST API', 'серверна логіка', 'інтеграції даних'],
    },
    {
      title: 'Автоматизація та інтеграції',
      description:
        'Підключаємо зовнішні сервіси й автоматизуємо повторювані дії, щоб команда витрачала менше часу на ручну роботу.',
      items: ['Telegram боти', 'Google сервіси', 'AI API'],
    },
    {
      title: 'Запуск і Linux підтримка',
      description:
        'Допомагаємо підготувати проєкт до запуску, налаштувати середовище, деплой і базову операційну підтримку.',
      items: ['деплой', 'Docker', 'Linux сервери'],
    },
  ];
}
