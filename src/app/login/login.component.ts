import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//loginForm: FormGroup;
//loading = false;
   // submitted = false;
   dynamicForm: FormGroup;
   loginForm: Array<any> = [];
   //validationsArray: Array<any> = [];
	private _jsonURL = 'assets/logValid.json';
  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient) { 
  
  this.getJSON().subscribe(data => {
    this.loginForm = data;
	const controls: any = {};
    this.loginForm.forEach(res => {
      const validationsArray: any = [];
      res.validations.forEach((val : any) => {
        if (val.name === 'required') {
          validationsArray.push(
            Validators.required
          );
        }
        if (val.name === 'pattern') {
          validationsArray.push(
            Validators.pattern(val.validator)
          );
        }
      });
      controls[res.label] = new FormControl('', validationsArray);
    });
    this.dynamicForm = new FormGroup(
      controls
    );
   });
  
  
  
  }

public getJSON(): Observable<any> {
   return this.http.get(this._jsonURL);
 }
  ngOnInit(): void {
	  
	  //this.loginForm = this.formBuilder.group({
            //username: ['', Validators.required],
           // password: ['', Validators.required]
        //});
	//this.dynamicForm = this.generateUserForm();	
  }
//get f() { return this.loginForm.controls; }

onSubmit() {
        //this.submitted = true;
console.log(this.dynamicForm.value);
        // stop here if form is invalid
        /*if (this.loginForm.invalid) {
            return;
        }
if(this.f.username.value == 'admin' && this.f.password.value == 'admin'){
     this.router.navigate(["form-a"]);
	 this.loading = true;
    }*/
        
        
    }
}
