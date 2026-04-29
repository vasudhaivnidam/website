import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  roleHindi: string;
}

interface TeamGroup {
  title: string;
  titleHindi: string;
  color: string;
  bgColor: string;
  borderColor: string;
  members: TeamMember[];
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
})
export class TeamComponent {
  teamGroups: TeamGroup[] = [
    {
      title: 'Sanrakshak',
      titleHindi: 'संरक्षक',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      members: [
        { name: 'Dr. Sanjay Mittal', role: 'Sanrakshak', roleHindi: 'संरक्षक' },
        { name: 'Smt. Snehalata Kattar', role: 'Sanrakshak', roleHindi: 'संरक्षक' },
        { name: 'Smt. Ajay Laxmi Grover', role: 'Sanrakshak', roleHindi: 'संरक्षक' },
      ],
    },
    {
      title: 'Adhyaksh',
      titleHindi: 'अध्यक्ष',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      members: [
        { name: 'Acharya Yogendra Medhavi', role: 'Adhyaksh', roleHindi: 'अध्यक्ष' },
      ],
    },
    {
      title: 'Upadhyaksh',
      titleHindi: 'उपाध्यक्ष',
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      members: [
        { name: 'Shri Rakesh Kumar', role: 'Upadhyaksh', roleHindi: 'उपाध्यक्ष' },
      ],
    },
    {
      title: 'Sachiv',
      titleHindi: 'सचिव',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      members: [
        { name: 'Vibhash Sinha', role: 'Sachiv', roleHindi: 'सचिव' },
      ],
    },
    {
      title: 'Sah Sachiv',
      titleHindi: 'सह सचिव',
      color: 'from-teal-600 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      members: [
        { name: 'Dr. Sanjay Tyagi', role: 'Sah Sachiv', roleHindi: 'सह सचिव' },
        { name: 'Shri Shankar Dyal', role: 'Sah Sachiv', roleHindi: 'सह सचिव' },
      ],
    },
    {
      title: 'Coshadhyaksh',
      titleHindi: 'कोषाध्यक्ष',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      members: [
        { name: 'Shri Sher Singh', role: 'Coshadhyaksh', roleHindi: 'कोषाध्यक्ष' },
      ],
    },
    {
      title: 'Sampadhadhikari',
      titleHindi: 'संपादकाधिकारी',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      members: [
        { name: 'Shri Utpal Priyadarshi', role: 'Sampadhadhikari', roleHindi: 'संपादकाधिकारी' },
      ],
    },
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter((w) => !['Dr.', 'Shri', 'Smt.', 'Acharya'].includes(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  }
}
