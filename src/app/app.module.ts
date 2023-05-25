import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
