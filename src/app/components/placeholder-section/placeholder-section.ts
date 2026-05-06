import { Component, input } from '@angular/core';

export interface PlaceholderSectionData {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-placeholder-section',
  templateUrl: './placeholder-section.html',
  styleUrl: './placeholder-section.scss',
})
export class PlaceholderSectionComponent {
  readonly section = input.required<PlaceholderSectionData>();
}
