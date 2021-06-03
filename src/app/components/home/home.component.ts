import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() limit:any;
  @Output() returnLuckyResultToParent = new EventEmitter();
  @Output() isReset = new EventEmitter();

  ngOnInit(): void {
  }
  luckyNumber =0;
  success: boolean = false;
  successImg: any;

  run() {

   if(this.limit == 0 || this.limit > 10 ){
    this.success = false;
    this.luckyNumber = 0;
    alert("Enter Valid Number between 1 and 10");
  }
  else{
    let random = Math.ceil(Math.random()*10);
    this.luckyNumber = random;
    this.result();
    }
    this.returnLuckyResultToParent.emit(this.success);
  }

  reset() {
    this.isReset.emit(this.success);
    this.success = false;
    this.luckyNumber = 0;
  }

  result() {
    if (this.luckyNumber > 0 && this.luckyNumber < this.limit) {
      this.success = true;
    //  this.successImg="assets/winner.jpg"
    this.successImg= "data:image/png;base64,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"
    } else {
      this.success = false;
    }
  }

}
