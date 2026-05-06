import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected readonly navigationLinks = [
    { href: '#services', label: 'Послуги' },
    { href: '#projects', label: 'Проєкти' },
    { href: '#why-softcode', label: 'Чому SoftCode' },
    { href: '#process', label: 'Процес' },
    { href: '#team', label: 'Команда' },
  ];
}
