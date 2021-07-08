import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
contact: [];

data: [];

  constructor(private router : Router) { }

  ngOnInit(): void {
	   //console.log("data",this.router.getCurrentNavigation().extras.state);
	  //this.contact=history.state;
	  //this.contact = Object.values(this.contact);
	  //console.log(history.state);
	  this.contact=history.state;
	  for(let value in this.contact){
		  //this.data.push(key);
		  console.log(value);
	  }
	  debugger;


	  
  }

}
