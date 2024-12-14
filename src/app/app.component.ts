import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComponent } from "./event/event.component";
import { BindingsComponent } from "./bindings/bindings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventComponent,BindingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project_Angular';
}
