import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  template: `
     <div class="absolute origin-bottom top-16 left-[50%] right-[50%] rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div class="flex max-w-xs flex-col items-center">
                        <div class="rounded bg-gray-900 p-2 text-xs text-center shadow-lg">{{title}}</div>
                        <!-- <div class="clip-bottom h-2 w-4 bg-gray-900"></div> -->
                    </div>
                </div>
  `,
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
	@Input() title!: string;
}
