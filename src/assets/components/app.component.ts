import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: "<input type='file'>"
})
export class AppComponent {
  constructor() {
    console.log("I am Angular!");
  }
}
