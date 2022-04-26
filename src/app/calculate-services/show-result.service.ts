import {calculateService} from "./calculate.service";

export class showResultService {

  number2: number = 0;

  onResult(number: number, calculation: string , calculationType: string) {
    if (number !== 0) {
      this.number2 = Number(calculation);
      if (calculationType === "+") {
        calculation = String(number + this.number2);
      } else if (calculationType === "-") {
        calculation = String(number - this.number2);
      } else if (calculationType === "*") {
        calculation = String(number * this.number2);
      } else if (calculationType === "/") {
        calculation = String(number / this.number2);
      }
    }else{
      calculation = "";
      }
    this.number2 = 0;
    return calculation;
    }
}
