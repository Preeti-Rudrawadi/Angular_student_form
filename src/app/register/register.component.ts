import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  title = 'Welcome to Register page';
  hide = true;
 
constructor(private fromBuilder : FormBuilder){}
     registerForm: FormGroup = this.fromBuilder.group({
       
      
      'email': new FormControl('', [
       Validators.required,
       Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
     'username' : new FormControl('', Validators.required ),
     'address' : new FormControl('', Validators.required ),
     'zipcode' : new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]{5}$')  ]),
     'mobno' : new FormControl('', [Validators.required, Validators.pattern('(0/91)?[7-9][0-9]{9}') ]),
     'select_country' : new FormControl('', Validators.required ),
     'select_state' : new FormControl('', Validators.required ),
     'password' : new FormControl('', Validators.required ),
    });
   
ngOnInit(){

}
  onSubmit()
  {
    console.log(this.registerForm.value);
    
  }
 
}



     