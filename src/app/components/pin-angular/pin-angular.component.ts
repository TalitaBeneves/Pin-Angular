import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-angular',
  templateUrl: './pin-angular.component.html',
  styleUrls: ['./pin-angular.component.css']
})
export class PinAngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // this called every time when user changed the code
    onCodeChanged(code: string) {
      console.log('Change', code);
    }

    // this called only if user entered full code
    onCodeCompleted(code: string) {
      console.log('Completed', code);
    }

}
