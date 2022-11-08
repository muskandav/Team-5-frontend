import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
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
import { OpenfdComponent } from './openfd/openfd.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    ChangepinComponent,
    FundtransferComponent,
    IssuechequeComponent,
    FrontpageComponent,
    CheckbalanceComponent,
    OpenfdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
