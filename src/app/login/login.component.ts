import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading = false;
    submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
	  
	  this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }
get f() { return this.loginForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
if(this.f.username.value == 'admin' && this.f.password.value == 'admin'){
     this.router.navigate(["form-a"]);
	 this.loading = true;
    }
        
        
    }
}
