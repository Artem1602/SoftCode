import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactRequest, ContactSubmissionService } from './contact-submission';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly submissionService = inject(ContactSubmissionService);

  protected readonly isSubmitting = signal(false);
  protected readonly submissionMessage = signal('');

  protected readonly serviceOptions: SelectOption[] = [
    { value: 'design', label: 'Дизайн або структура продукту' },
    { value: 'landing', label: 'Лендинг' },
    { value: 'business-site', label: 'Сайт для бізнесу' },
    { value: 'full-stack', label: 'Full-stack веб-додаток' },
    { value: 'backend-api', label: 'Backend або API' },
    { value: 'automation', label: 'Автоматизація або інтеграції' },
    { value: 'not-sure', label: 'Поки не впевнений' },
  ];

  protected readonly budgetOptions: SelectOption[] = [
    { value: 'consultation', label: 'Потрібна консультація' },
    { value: 'starter', label: 'Початковий бюджет' },
    { value: 'standard', label: 'Середній обсяг робіт' },
    { value: 'larger', label: 'Більший проєкт' },
    { value: 'flexible', label: 'Готові обговорити варіанти' },
  ];

  protected readonly timelineOptions: SelectOption[] = [
    { value: 'asap', label: 'Якомога швидше' },
    { value: 'month', label: 'Протягом місяця' },
    { value: 'quarter', label: '1-3 місяці' },
    { value: 'flexible', label: 'Гнучкий термін' },
    { value: 'not-sure', label: 'Поки не знаю' },
  ];

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required]],
    projectName: [''],
    service: ['', [Validators.required]],
    budget: [''],
    timeline: [''],
    description: ['', [Validators.required, Validators.minLength(20)]],
    website: [''],
  });

  protected fieldInvalid(fieldName: keyof typeof this.contactForm.controls): boolean {
    const field = this.contactForm.controls[fieldName];
    return field.invalid && (field.touched || field.dirty);
  }

  protected async submitForm(): Promise<void> {
    this.submissionMessage.set('');

    if (this.contactForm.controls.website.value) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const result = await this.submissionService.submit(this.contactForm.getRawValue() as ContactRequest);

    this.isSubmitting.set(false);
    this.submissionMessage.set(
      result.enabled
        ? 'Дякуємо. Заявку підготовлено до відправлення.'
        : `Форма поки працює як UI-прототип. Для реального звернення напишіть на ${result.recipientEmail}.`,
    );
  }
}
