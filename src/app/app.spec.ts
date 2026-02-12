import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => { //each describe represents one test suite, which is a group of test cases
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => { //each it represents a test case
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); //expect is an expected result. Matchers are used to write expected results.
  });                         //Here in this case toBeTruthy() is a matcher.

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, eureka_virginia_project_2');
  });
});
