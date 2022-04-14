export class calculateService{
  onCalculate(calculationShow: string, calculationType:string){
    calculationShow += calculationType;
    return calculationShow;
  }
}
