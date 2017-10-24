import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formulaire:FormGroup;

  constructor(private fb:FormBuilder,
               private auth:AuthService) { }

  ngOnInit() {
    this.formulaire = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(3)]],
      mail:['', [Validators.required, Validators.email]],
      birthdate:[null, []],
    });
  }

  signup() {
    let user = new User(this.formulaire.value.username,
                        this.formulaire.value.password);
    user.mail = this.formulaire.value.mail;
    user.birthdate = this.formulaire.value.birthdate;
    
    this.auth.signup(user).subscribe();
  }

}
