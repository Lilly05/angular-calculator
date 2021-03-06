import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent} from "./calculator/calculator.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {calculateService} from "./calculate-services/calculate.service";
import {showResultService} from "./calculate-services/show-result.service";


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      MatButtonModule
  ],
  providers: [calculateService, showResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
