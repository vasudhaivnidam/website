import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, HeroComponent],
  templateUrl: './home.page.html',
})
export class HomePageComponent {
  cards = [
    {
      icon: '🏛️',
      title: 'About Us',
      desc: 'Learn about our mission, vision and the values that drive Vasudhaivnidam Foundation.',
      link: '/about',
      color: 'border-orange-400',
      btnColor: 'bg-orange-600 hover:bg-orange-700',
    },
    {
      icon: '🎯',
      title: 'Our Services',
      desc: 'Education fees, summer camp, yoga & meditation, and traditional Lathi practice.',
      link: '/services',
      color: 'border-blue-400',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: '📸',
      title: 'Gallery',
      desc: 'Browse photos from our events, camps, yoga sessions and community activities.',
      link: '/gallery',
      color: 'border-green-400',
      btnColor: 'bg-green-600 hover:bg-green-700',
    },
    {
      icon: '👥',
      title: 'Our Team',
      desc: 'Meet the dedicated leaders guiding the foundation with integrity and compassion.',
      link: '/team',
      color: 'border-purple-400',
      btnColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      icon: '❤️',
      title: 'Donate',
      desc: 'Your contribution helps educate children, preserve culture, and serve the community.',
      link: '/donate',
      color: 'border-red-400',
      btnColor: 'bg-red-600 hover:bg-red-700',
    },
  ];
}
