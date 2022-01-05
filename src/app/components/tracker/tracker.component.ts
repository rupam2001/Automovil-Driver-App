import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  showContent:boolean = true;

  constructor(private router:Router) { 
    
  }

  navigate () {
    this.router.navigateByUrl("uploadproof")
  }

  ngOnInit() {}

}
