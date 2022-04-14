export class showResultService {

  onResult(number1: number, number2: number, calculation: string , calculationShow: string, calculationType: string) {
    if (number1 !== 0) {
      number2 = Number(calculation);
      if (calculationType === "+") {
        calculationShow = String(number1 + number2);
      } else if (calculationType === "-") {
        calculationShow = String(number1 - number2);
      } else if (calculationType === "*") {
        calculationShow = String(number1 * number2);
      } else if (calculationType === "/") {
        calculationShow = String(number1 / number2);
      }
      return calculationShow;
    }else{
      this.onClear(calculation, calculationShow);
      }
    }
      onClear(calculation: string, calculationShow: string){
        calculationShow = "";
        return calculationShow;
  }
}
