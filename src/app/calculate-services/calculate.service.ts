import {MatButton} from "@angular/material/button";
import {showResultService} from "./show-result.service";
import {Injectable} from "@angular/core";

@Injectable()
export class calculateService{

  constructor() {
  }

  onCalculate(calculation: string, calculationType:string){
    calculation += calculationType;
    return calculation;
  }
}
