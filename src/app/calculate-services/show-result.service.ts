import {calculateService} from "./calculate.service";

export class showResultService {

  onResult(number1: number, number2: number, calculation: string , calculationType: string) {
    if (number1 !== 0) {
      number2 = Number(calculation);
      if (calculationType === "+") {
        calculation = String(number1 + number2);
      } else if (calculationType === "-") {
        calculation = String(number1 - number2);
      } else if (calculationType === "*") {
        calculation = String(number1 * number2);
      } else if (calculationType === "/") {
        calculation = String(number1 / number2);
      }
    }else{
      calculation = "";
      }
    console.log("result" + calculation);
    return calculation;
    }
}
