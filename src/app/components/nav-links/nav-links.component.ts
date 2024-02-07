import { Component } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [TooltipComponent],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {

}
