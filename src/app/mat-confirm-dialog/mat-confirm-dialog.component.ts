import { Component, OnInit, Inject } from '@angular/core';
import { from } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}