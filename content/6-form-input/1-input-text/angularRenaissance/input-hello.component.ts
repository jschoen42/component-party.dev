import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: "app-input-hello",
  template: `
    <p>{{ text() }}</p>
    <input [(ngModel)]="text" />
  `,
})
export class InputHelloComponent {
  text = signal("");
}
