import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { InteractionService } from './interaction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public dialog: MatDialog, private _interactionService: InteractionService){}
  greetStudent(){
    this._interactionService.sendMessage('Good Morning');
  }
  appreciateStudent(){
    this._interactionService.sendMessage('Well Done');
  }


   openDialog(){
     let dialogRef = this.dialog.open(DialogComponent, {data:{name:'preeti'}});
     dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}')}
      )

   };
  }
  
  