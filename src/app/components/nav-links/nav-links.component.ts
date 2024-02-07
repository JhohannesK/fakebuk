import { Component } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [TooltipComponent, RouterModule],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {

}
