import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => {
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify add',() => {
    expect(component.add(10,20)).toBe(30);
    expect(component.add(10,-20)).toBe(-10);
    expect(component.add(-10,20)).toBe(10);
    expect(component.add(-10,-20)).toBe(-30);
  })

  it('should verify sumOfDigits',() => {
    expect(component.sumOfDigits(125)).toBe(8);
  })

  it('should verify addNewCar',() => {
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(2);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).not.toContain('BMW');
    component.addNewCar('Maruti');
        expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).not.toContain('BMW');
    expect(component.cars).toContain('Maruti');

  })
});
