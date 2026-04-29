import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  stats = [
    { value: '500+', label: 'Children Helped' },
    { value: '10+', label: 'Years of Service' },
    { value: '1000+', label: 'Volunteers' },
    { value: '50+', label: 'Events Held' },
  ];
}
