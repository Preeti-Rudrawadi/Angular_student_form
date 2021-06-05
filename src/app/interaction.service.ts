import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
  private_teacherMessageSource= new Subject<string>();
  teacherMessage$ = this.private_teacherMessageSource.asObservable();
  _teacherMessageSource: any;

  constructor() { }
  
  sendMessage(message: string){
    this._teacherMessageSource.next(message);
  }

  verifyUserToken(status : boolean ) : boolean {
      return status;
  }

}
