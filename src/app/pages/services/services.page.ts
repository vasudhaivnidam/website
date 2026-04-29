import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, ServicesComponent],
  template: `
    <app-page-banner
      title="Our Services"
      subtitle="Four pillars of service — empowering children, preserving culture, and nurturing well-being."
      emoji="🎯"
    />
    <app-services />

    <!-- Service Detail Cards -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-10">How Each Service Helps</h2>
        <div class="grid md:grid-cols-2 gap-8">
          @for (detail of details; track detail.title) {
            <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex gap-5">
              <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ' + detail.bg">
                {{ detail.icon }}
              </div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">{{ detail.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-3">{{ detail.body }}</p>
                <ul class="space-y-1">
                  @for (point of detail.points; track point) {
                    <li class="text-gray-600 text-xs flex items-start gap-2">
                      <span class="text-orange-500 mt-0.5">✓</span> {{ point }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <div class="bg-white py-10 text-center border-t border-gray-100">
      <p class="text-gray-600 mb-4 text-sm">Help us continue these programs with your generous donation</p>
      <a routerLink="/donate"
        class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Support a Service ❤️
      </a>
    </div>
  `,
})
export class ServicesPageComponent {
  details = [
    {
      icon: '🎒',
      bg: 'bg-blue-100',
      title: 'School Fees for Poor Children',
      body: 'We identify deserving students from low-income families and ensure their annual school fees are paid, keeping them in school and on track.',
      points: [
        'Covers tuition, books, and uniforms',
        'Supports students from Class 1 to 12',
        'Regular follow-up with families and schools',
      ],
    },
    {
      icon: '⛺',
      bg: 'bg-green-100',
      title: 'Aryaveerdal Summer Camp',
      body: 'A week-long residential camp for youth that instills patriotism, discipline, and cultural values through activities, workshops, and team-building.',
      points: [
        'Cultural education and storytelling',
        'Physical training and outdoor activities',
        'Leadership and character building',
      ],
    },
    {
      icon: '🧘',
      bg: 'bg-purple-100',
      title: 'Yoga & Meditation',
      body: 'Regular sessions open to all age groups in the community, guided by experienced practitioners following traditional Indian methods.',
      points: [
        'Morning yoga sessions six days a week',
        'Guided pranayama and dhyana practice',
        'Special sessions for seniors and students',
      ],
    },
    {
      icon: '🥢',
      bg: 'bg-orange-100',
      title: 'Lathi Practice',
      body: 'Traditional Indian staff martial art taught by master practitioners. Builds physical strength, self-discipline, and connects youth with cultural heritage.',
      points: [
        'Open to all ages, beginners welcome',
        'Traditional techniques and safety training',
        'Annual demonstration events',
      ],
    },
  ];
}
