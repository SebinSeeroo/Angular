import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  congratsimag_1="assets/congrats_1.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
