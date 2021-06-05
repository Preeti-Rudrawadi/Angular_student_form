import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$
    .subscribe(
      message => {
        if(message ==='Good Morning'){
          alert('Good Morning teacher');
        }else if(message === 'well Done'){
          alert('Thank u teacher');
        }
      }
    );
  }

}
