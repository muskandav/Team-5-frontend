import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule } from '@angular/material/tabs';
import { ChangepinComponent } from './changepin/changepin.component'
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { IssuechequeComponent } from './issuecheque/issuecheque.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ChangepinComponent,
    FundtransferComponent,
    IssuechequeComponent,
    FrontpageComponent,
    CheckbalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
