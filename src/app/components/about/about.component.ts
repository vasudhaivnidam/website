import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  values = [
    { icon: '📚', title: 'Education', desc: 'Quality learning for all' },
    { icon: '🤝', title: 'Community', desc: 'Building bonds together' },
    { icon: '🧘', title: 'Wellness', desc: 'Mind, body, and spirit' },
    { icon: '💪', title: 'Discipline', desc: 'Strength through practice' },
  ];

  mission = [
    'Provide financial assistance for school fees of underprivileged children',
    'Organize summer camps to nurture young talent and values',
    'Promote yoga and meditation for mental and physical health',
    'Preserve and teach traditional arts like Lathi practice',
    'Build a strong, caring community rooted in Indian culture',
  ];
}
