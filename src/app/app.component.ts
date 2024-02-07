import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { NavRightComponent } from './components/nav-right/nav-right.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavLeftComponent, NavLinksComponent, NavRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fb-angular';
}
