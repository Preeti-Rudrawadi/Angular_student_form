import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { StudentComponent } from './student/student.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './home/home.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    HomeComponent,
    DialogComponent,
    MatConfirmDialogComponent,

  ],
   
  entryComponents: [RegisterComponent,DialogComponent,MatConfirmDialogComponent],

  imports: [
    BrowserModule,
    MatSortModule,
    MatPaginatorModule ,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
  
  

  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
