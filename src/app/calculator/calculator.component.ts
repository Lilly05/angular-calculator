import { Component, OnInit } from '@angular/core';
import { showResultService } from "../calculate-services/show-result.service";
import { calculateService } from "../calculate-services/calculate.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [showResultService, calculateService]
})
export class CalculatorComponent implements OnInit {

  constructor(private showResultService: showResultService, private calculateService: calculateService) { }

  ngOnInit(): void {
  }
  title = 'taschenrechner';
  calculation: string = "";
  calculationShow: string = "";
  number1: number = 0;
  number2: number = 0;
  calculationType: string = "";
  resultOnScreen: boolean = false;

  onClick(number: HTMLButtonElement){
    this.calculation += number.value;
    this.calculationShow = this.calculation;
    if (this.resultOnScreen){
      this.onClear();
    }
  }

  onClear(){
    this.calculation = "";
    this.calculationShow = "";
    this.number1 = 0;
    this.number2 = 0;
    this.resultOnScreen = false;
  }

  onCalculate(type: HTMLButtonElement){
    if(this.number1 === 0){
      this.calculationType = type.value;
      this.number1 = Number(this.calculation);
      this.calculation = "";
      this.calculationShow = this.calculateService.onCalculate(this.calculationShow, this.calculationType);
    }
  }

  onResult(){
    this.calculationShow = this.showResultService.onResult(this.number1, this.number2, this.calculation, this.calculationShow, this.calculationType);
    this.resultOnScreen = true;
  }
}
