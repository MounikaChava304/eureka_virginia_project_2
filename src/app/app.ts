import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialDemo } from './components/material-demo/material-demo';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo,
     UnitTestingDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_virginia_project_2');
}
