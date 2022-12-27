import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // this called every time when user changed the code
  onCodeChanged(code: string) {
    console.log("Change",code)
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    console.log("Completed",code)

  }
}
