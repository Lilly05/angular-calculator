import { Component, OnInit } from '@angular/core';
import { showResultService } from "../calculate-services/show-result.service";
import { calculateService } from "../calculate-services/calculate.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  // providers: [showResultService, calculateService]
})
export class CalculatorComponent implements OnInit {

  constructor(private showResultService: showResultService, private calculateService: calculateService) {
  }

  ngOnInit(): void {
  }

  title = 'taschenrechner';
  calculation: string = "";
  calculationSaved: string = "";
  number: number = 0;
  calculationType: string = "";

  onClick(number: MatButton) {
    this.calculation += number._elementRef.nativeElement.value;
    this.calculationSaved = this.calculation;
  }

  onClear() {
    this.calculation = "";
    this.calculationSaved = "";
    this.number = 0;
    this.calculationType = "";
  }

  onCalculate(type: MatButton) {
    if (this.number === 0) {
      this.calculationType = String(type._elementRef.nativeElement.value);
      this.number = Number(this.calculation);
      this.calculationSaved = this.calculation;
      this.calculationSaved = this.calculateService.onCalculate(this.calculation, this.calculationType);
    } else {
      this.calculation = this.showResultService.onResult(this.number, this.calculation, this.calculationType);
      this.number = Number(this.calculation);
      this.calculationSaved = this.calculation;
      this.calculationType = type._elementRef.nativeElement.value;
      this.calculationSaved = this.calculateService.onCalculate(this.calculation, this.calculationType);
    }
    this.calculation = "";
  }

  onResult() {
    this.calculationSaved = this.showResultService.onResult(this.number, this.calculation, this.calculationType);
    this.number = 0;
    this.calculation = this.calculationSaved;
  }
}
