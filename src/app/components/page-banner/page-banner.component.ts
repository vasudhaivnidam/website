import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-banner.component.html',
})
export class PageBannerComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() emoji = '';
}
