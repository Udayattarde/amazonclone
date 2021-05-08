import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup;
  constructor(private fb:FormBuilder,private authservice:AuthserviceService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
    this.LoginForm =this.fb.group({
      email:[''],
      password:['']
    })
  }
  SignIn()
  {
 this.authservice.SignIn(this.LoginForm.value.email,this.LoginForm.value.password)
  }
  CreateAccount()
  {

    this.authservice.SignUp(this.LoginForm.value.email,this.LoginForm.value.password)
  }
}
