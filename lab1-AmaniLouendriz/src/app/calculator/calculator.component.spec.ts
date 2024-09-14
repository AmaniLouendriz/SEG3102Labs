import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // addition test cases
  it('should add 2 and 2', ()=>{
    const element:string = "2";
    component.add(element,element);
    expect(component.firstNumber).toEqual(2);
    expect(component.secondNumber).toEqual(2);
    expect(component.out).toEqual(4);
  });

  it('should add 1000 and 0', ()=>{
    const first:string = "1000";
    const second:string = "0";
    component.add(first,second);
    expect(component.firstNumber).toEqual(1000);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(1000);
  });

  it('should add 0 and 0', ()=>{
    const first:string = "0";
    const second:string = "0";
    component.add(first,second);
    expect(component.firstNumber).toEqual(0);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(0);
  });

  it('should add -1000 and 2000', ()=>{
    const first:string = "-1000";
    const second:string = "2000";
    component.add(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(2000);
    expect(component.out).toEqual(1000);
  });

  it('should add -1000 and -3000', ()=>{
    const first:string = "-1000";
    const second:string = "-3000";
    component.add(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(-3000);
    expect(component.out).toEqual(-4000);
  });

  it('should add 22.5 and 22.87', ()=>{
    const first:string = "22.5";
    const second:string = "22.87";
    component.add(first,second);
    expect(component.firstNumber).toEqual(22.5);
    expect(component.secondNumber).toEqual(22.87);
    expect(component.out).toBeCloseTo(45.37);
  });

  // Substraction test cases
  it('should substract 2 and 2', ()=>{
    const element:string = "2";
    component.substract(element,element);
    expect(component.firstNumber).toEqual(2);
    expect(component.secondNumber).toEqual(2);
    expect(component.out).toEqual(0);
  });

  it('should substract 1000 and 0', ()=>{
    const first:string = "1000";
    const second:string = "0";
    component.substract(first,second);
    expect(component.firstNumber).toEqual(1000);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(1000);
  });

  it('should substract 0 and 0', ()=>{
    const first:string = "0";
    const second:string = "0";
    component.substract(first,second);
    expect(component.firstNumber).toEqual(0);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(0);
  });

  it('should substract -1000 and 2000', ()=>{
    const first:string = "-1000";
    const second:string = "2000";
    component.substract(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(2000);
    expect(component.out).toEqual(-3000);
  });

  it('should add -1000 and -3000', ()=>{
    const first:string = "-1000";
    const second:string = "-3000";
    component.substract(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(-3000);
    expect(component.out).toEqual(2000);
  });

  it('should add 22.5 and 22.87', ()=>{
    const first:string = "22.5";
    const second:string = "22.87";
    component.substract(first,second);
    expect(component.firstNumber).toEqual(22.5);
    expect(component.secondNumber).toEqual(22.87);
    expect(component.out).toBeCloseTo(-0.37);
  });

  // Multiplication test cases
  it('should multiply 2 and 2', ()=>{
    const element:string = "2";
    component.multiply(element,element);
    expect(component.firstNumber).toEqual(2);
    expect(component.secondNumber).toEqual(2);
    expect(component.out).toEqual(4);
  });

  it('should multiply 1000 and 0', ()=>{
    const first:string = "1000";
    const second:string = "0";
    component.multiply(first,second);
    expect(component.firstNumber).toEqual(1000);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(0);
  });

  it('should multiply 0 and 0', ()=>{
    const first:string = "0";
    const second:string = "0";
    component.multiply(first,second);
    expect(component.firstNumber).toEqual(0);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(0);
  });

  it('should multiply -1000 and 2000', ()=>{
    const first:string = "-1000";
    const second:string = "2000";
    component.multiply(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(2000);
    expect(component.out).toEqual(-2000000);
  });

  it('should multiply -1000 and -3000', ()=>{
    const first:string = "-1000";
    const second:string = "-3000";
    component.multiply(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(-3000);
    expect(component.out).toEqual(3000000);
  });

  it('should add 22.5 and 22.87', ()=>{
    const first:string = "22.5";
    const second:string = "22.87";
    component.multiply(first,second);
    expect(component.firstNumber).toEqual(22.5);
    expect(component.secondNumber).toEqual(22.87);
    expect(component.out).toBeCloseTo(514.575);
  });

  // Division test cases

  it('should divide 2 and 2', ()=>{
    const element:string = "2";
    component.divide(element,element);
    expect(component.firstNumber).toEqual(2);
    expect(component.secondNumber).toEqual(2);
    expect(component.out).toEqual(1);
  });

  it('should divide 1000 and 0', ()=>{
    const first:string = "1000";
    const second:string = "0";
    component.divide(first,second);
    expect(component.firstNumber).toEqual(1000);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(Infinity);
  });

  it('should divide 0 and 0', ()=>{
    const first:string = "0";
    const second:string = "0";
    component.divide(first,second);
    expect(component.firstNumber).toEqual(0);
    expect(component.secondNumber).toEqual(0);
    expect(component.out).toEqual(NaN);
  });

  it('should divide -1000 and 2000', ()=>{
    const first:string = "-1000";
    const second:string = "2000";
    component.divide(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(2000);
    expect(component.out).toEqual(-0.5);
  });

  it('should multiply -1000 and -3000', ()=>{
    const first:string = "-1000";
    const second:string = "-3000";
    component.divide(first,second);
    expect(component.firstNumber).toEqual(-1000);
    expect(component.secondNumber).toEqual(-3000);
    expect(component.out).toBeCloseTo(0.33);
  });

  it('should add 22.5 and 22.87', ()=>{
    const first:string = "22.5";
    const second:string = "22.87";
    component.divide(first,second);
    expect(component.firstNumber).toEqual(22.5);
    expect(component.secondNumber).toEqual(22.87);
    expect(component.out).toBeCloseTo(0.98);
  });
  
});
