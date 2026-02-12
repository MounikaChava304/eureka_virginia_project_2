import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => { //describe.only will run only this test file. describe.skip skips the particular test file
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;

  beforeAll(() => {
    console.log('before All......')
  })

  beforeEach(async () => {
    console.log('Before Each...')
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

   afterEach(() => {
    console.log('after Each......')
  })

   afterAll(() => {
    console.log('after All......')
  })

  it('should create', () => {//it.only will run only this test case. it.skip skips the particular test case
    console.log('It-1');
    expect(component).toBeTruthy();
  });

  it('should verify add',() => {
    console.log('It-2');
    expect(component.add(10,20)).toBe(30);
    expect(component.add(10,-20)).toBe(-10);
    expect(component.add(-10,20)).toBe(10);
    expect(component.add(-10,-20)).toBe(-30);
  })

  it('should verify sumOfDigits',() => {
    console.log('It-3');
    expect(component.sumOfDigits(125)).toBe(8);
  })

  it('should verify addNewCar',() => {
    console.log('It-4');
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
    // console.log(component.cars);

  })
});
