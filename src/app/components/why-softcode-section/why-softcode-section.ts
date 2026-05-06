import { Component } from '@angular/core';

interface ReasonItem {
  title: string;
  description: string;
  highlighted?: boolean;
}

@Component({
  selector: 'app-why-softcode-section',
  templateUrl: './why-softcode-section.html',
  styleUrl: './why-softcode-section.scss',
})
export class WhySoftCodeSectionComponent {
  protected readonly reasons: ReasonItem[] = [
    {
      title: 'Невелика команда без зайвих шарів',
      description:
        'Ви спілкуєтеся напряму з людьми, які проєктують і розробляють рішення, тому менше втрат між ідеєю, рішенням і реалізацією.',
    },
    {
      title: 'Гнучка пропозиція',
      description:
        'Для різних задач можна змінювати обсяг, етапи й формат співпраці. Це допомагає почати з того, що дає найбільшу користь саме зараз.',
      highlighted: true,
    },
    {
      title: 'Фокус на корисному результаті',
      description:
        'Не додаємо функції тільки заради масштабу. Спочатку визначаємо, що справді допоможе клієнту отримати заявки, перевірити ідею або спростити процес.',
    },
    {
      title: 'Досвід комерційної розробки',
      description:
        'Команда має практику роботи з реальними продуктами, backend, frontend, інтеграціями та вимогами до стабільності.',
    },
    {
      title: 'Підтримка від ідеї до запуску',
      description:
        'Допомагаємо пройти шлях від первинної структури й дизайну до розробки, перевірки, деплою та перших покращень після релізу.',
    },
    {
      title: 'Гнучкий старт для різних задач',
      description:
        'Можемо почати з консультації, невеликого лендингу, MVP або окремої автоматизації, а потім розвивати рішення поступово.',
    },
  ];
}
