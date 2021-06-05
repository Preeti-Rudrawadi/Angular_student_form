import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog'
import { MatPaginator} from '@angular/material/paginator' 
import {MatSort} from '@angular/material/sort';
import { from } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { dispatch } from 'rxjs/internal/observable/range';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { InteractionService } from '../interaction.service'

export interface PeriodicElement {
  position:number;
  username: string;
  address: string;
  zipcode: number;
  mobno: number;
  email: string;
  select_country: string;
  select_state: string;
  password: number;
  
}

const ELEMENT_DATA: PeriodicElement[]=[
  {position: 1, username:'preeti', address:'pune',zipcode:451727, mobno:7709192196,email:'p@gmail.com',select_country:'india',select_state:'K',password:6735672},
  {position: 2, username:'sanskruti', address:'solapur',zipcode:413007, mobno:7907564369,email:'s@gmail.com',select_country:'india',select_state:'AP',password:87574},
  {position: 3, username:'sanchita', address:'mumbai',zipcode:413047, mobno:7908761234,email:'o@gmail.com',select_country:'india',select_state:'MH',password:874398},
  {position: 4, username:'pooja', address:'nashik',zipcode:451756, mobno:7854678945,email:'v@gmail.com',select_country:'india',select_state:'MN',password:6354673},
  {position: 5, username:'preeti', address:'pune',zipcode:451727, mobno:7709192196,email:'p@gmail.com',select_country:'india',select_state:'K',password:6735672},
  {position: 6, username:'sanskruti', address:'solapur',zipcode:413007, mobno:7907564369,email:'s@gmail.com',select_country:'india',select_state:'AP',password:87574},
  {position: 7, username:'sanchita', address:'mumbai',zipcode:413047, mobno:7908761234,email:'o@gmail.com',select_country:'india',select_state:'MH',password:874398},
  {position: 8, username:'pooja', address:'nashik',zipcode:451756, mobno:7854678945,email:'v@gmail.com',select_country:'india',select_state:'MN',password:6354673},

]


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['position','username','address','zipcode','mobno','email','select_country','select_state','password','actions'];
  
  //searchKey: string;
  dataSource = ELEMENT_DATA;
  searchKey!: string;
  listData: any;
  constructor(public dialog:MatDialog, public router:Router,private interactionService:InteractionService   ){}

  openDialog(element : any){
    console.log(element);
    let dialogRef=this.dialog.open(DialogComponent);
    dialogRef.componentInstance.enrollmentDetail = element;
    dialogRef.afterClosed().subscribe(result =>{console.log('Dialog result: ${result}')})
    //this.dialog.open(DialogComponent);


  }

  ngOnInit(): void {
    
       
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%";
    this.dialog.open(RegisterComponent,dialogConfig);

  }
  naviagateToLogin(){
    this.router.navigate(['/login']);
  }
  formStatus(){
     return confirm('all changes will be lost , do u want to continue');

  }
  filterData(event:any) {
    const filterValue = event.target.value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
