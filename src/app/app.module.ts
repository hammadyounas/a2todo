import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdInputModule} from '@angular/material';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
   exports: [MdButtonModule, MdCheckboxModule,MdInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
