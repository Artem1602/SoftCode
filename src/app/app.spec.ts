import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the SoftCode shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header .wordmark')?.textContent).toContain('SoftCode');
    expect(compiled.querySelector('#hero h1')?.textContent).toContain('SoftCode');
    expect(compiled.querySelector('#services')?.textContent).toContain('Дизайн і продуктова логіка');
    expect(compiled.querySelector('#projects')?.textContent).toContain('Сайт для локального бізнесу');
    expect(compiled.querySelector('#why-softcode')?.textContent).toContain('Гнучка пропозиція');
    expect(compiled.querySelector('#process')?.textContent).toContain('Full-stack розробка');
    expect(compiled.querySelector('#team')?.textContent).toContain('Illia Kovtun');
    expect(compiled.querySelector('#contact')?.textContent).toContain('Підготувати заявку');
    expect(compiled.querySelector('#technologies')).toBeNull();
  });
});
