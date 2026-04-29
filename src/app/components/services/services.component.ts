import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      icon: '🎒',
      title: 'School Fees for Poor Children',
      subtitle: 'Education for Every Child',
      description:
        'We cover school fees for children from underprivileged families, ensuring no child is denied an education due to financial constraints. We believe knowledge is the greatest gift.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
    },
    {
      icon: '⛺',
      title: 'Summer Camp – Aryaveerdal',
      subtitle: 'Nurturing Tomorrow\'s Heroes',
      description:
        'Our Aryaveerdal Summer Camp instills values of courage, discipline, patriotism, and cultural pride in young hearts. A transformative experience combining learning and fun.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
    },
    {
      icon: '🧘',
      title: 'Yoga & Meditation',
      subtitle: 'Harmony of Mind & Body',
      description:
        'Regular yoga and meditation sessions open to all community members. We guide practitioners toward inner peace, physical health, and mental clarity through ancient Indian traditions.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
    },
    {
      icon: '🥢',
      title: 'Lathi Practice',
      subtitle: 'Traditional Indian Martial Art',
      description:
        'Preserving the ancient Indian martial tradition of Lathi (staff fighting). Our expert trainers teach this discipline that builds strength, coordination, confidence, and cultural connection.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
    },
  ];
}
