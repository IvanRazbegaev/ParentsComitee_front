import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { OverallSumDialogComponent } from './home/overall-sum-dialog/overall-sum-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { AddingNewRecordComponent } from './home/adding-new-record/adding-new-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverallSumDialogComponent,
    AddingNewRecordComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
