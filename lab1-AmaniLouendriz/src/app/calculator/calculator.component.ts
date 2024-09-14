import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstNumber:number = 0;
  secondNumber:number = 0;

  out:number = 0;

  add(fNumber:string,sNumber:string):void {
    this.firstNumber = Number(fNumber);
    this.secondNumber = Number(sNumber);
    this.out = this.firstNumber + this.secondNumber;
  }

  substract(fNumber:string,sNumber:string):void {
    this.firstNumber = Number(fNumber);
    this.secondNumber = Number(sNumber);
    this.out = this.firstNumber - this.secondNumber;
  }

  multiply(fNumber:string,sNumber:string):void {
    this.firstNumber = Number(fNumber);
    this.secondNumber = Number(sNumber);
    this.out = this.firstNumber * this.secondNumber;
  }

  divide(fNumber:string,sNumber:string):void {
    this.firstNumber = Number(fNumber);
    this.secondNumber = Number(sNumber);
    this.out = this.firstNumber / this.secondNumber;
  }

}
