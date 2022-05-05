import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
 

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { 
      this.loginForm = new FormGroup({
        username: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required])

      })   
    }

    ngOnInit() {

    }

   
    onSubmit() {
      this.router.navigate(['/orders']);
    }
}
