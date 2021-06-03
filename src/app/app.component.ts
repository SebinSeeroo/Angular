import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  inp = 0;
  output: any;
  returnResult: any;

  setValue(e: any) {
    this.inp = e.target.value;
  }

  displayLucky(data: any) {
    this.output = data;
  }

  getOutputResult(rParam : any){
      this.returnResult = rParam;
  }

  resetValue(rParam : any){
    this.returnResult = false;
    this.inp = 0;
}

}


