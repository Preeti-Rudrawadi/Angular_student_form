import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  title = 'Welcome to login page';
  hide = true;
 
constructor(private fromBuilder : FormBuilder){}
     loginForm: FormGroup = this.fromBuilder.group({
       
      
      'email': new FormControl('', [
       Validators.required,
       Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      'password' : new FormControl('', Validators.required )
    });
   
ngOnInit(){

}
  onSubmit()
  {
    console.log(this.loginForm.value);
    
  }
 
}



     