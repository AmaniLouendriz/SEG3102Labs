import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdderComponent } from './adder/adder.component';
import { MainListComponent } from './main-list/main-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdderComponent,MainListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-list';
}