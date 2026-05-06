import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  linkedInUrl?: string;
  initials: string;
}

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.html',
  styleUrl: './team-section.scss',
})
export class TeamSectionComponent {
  protected readonly teamMembers: TeamMember[] = [
    {
      name: 'Illia Kovtun',
      role: 'Frontend розробник і дизайнер',
      description:
        'Працює з інтерфейсами, візуальною структурою сторінок, адаптивною версткою та клієнтською частиною веб-додатків.',
      skills: ['UI', 'UX', 'адаптивний frontend', 'дизайн інтерфейсів'],
      imageUrl: 'Illia.jpg',
      linkedInUrl: 'https://www.linkedin.com/in/illia-kovtun?skipRedirect=true',
      initials: 'IK',
    },
    {
      name: 'Vladyslav Aleksiienko',
      role: 'Backend розробник',
      description:
        'Фокусується на серверній логіці, API, інтеграціях і стабільній основі для бізнес-функцій продукту.',
      skills: ['C#', '.NET', 'ASP.NET Core', 'security'],
      imageUrl: 'Vlad.jpg',
      linkedInUrl: 'https://www.linkedin.com/in/vladyslav-aleksiienko-487a9735b/',
      initials: 'VA',
    },
    {
      name: 'Artem Nishchenko',
      role: 'Full-stack розробник',
      description:
        'Поєднує frontend, backend, інтеграції та запуск, щоб зібрати повний робочий потік від інтерфейсу до сервера.',
      skills: ['Angular', 'Spring', 'full-stack'],
      imageUrl: 'Artem.png',
      linkedInUrl: 'https://www.linkedin.com/in/artem-nishchenko-0026b31ba/?skipRedirect=true',
      initials: 'AN',
    },
    {
      name: 'Bohdan Petrichenko',
      role: 'Backend розробник',
      description:
        'Працює із серверною частиною, бізнес-логікою, обробкою даних і технічною основою для інтеграцій.',
      skills: ['API', 'дані', 'Linux', 'DevOps'],
      initials: 'BP',
    },
  ];
}
