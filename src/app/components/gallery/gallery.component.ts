import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface GalleryPhoto {
  id: number;
  filename: string;
  caption: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  photos: GalleryPhoto[] = [];
  filteredPhotos: GalleryPhoto[] = [];
  activeCategory = 'all';
  selectedPhoto: GalleryPhoto | null = null;
  categories = ['all', 'events', 'yoga', 'lathi', 'camp', 'education'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<GalleryPhoto[]>('gallery/gallery.json').subscribe({
      next: (data) => {
        this.photos = data;
        this.filteredPhotos = data;
      },
      error: () => {
        this.photos = [];
        this.filteredPhotos = [];
      },
    });
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    this.filteredPhotos =
      category === 'all' ? this.photos : this.photos.filter((p) => p.category === category);
  }

  openLightbox(photo: GalleryPhoto) {
    this.selectedPhoto = photo;
  }

  closeLightbox() {
    this.selectedPhoto = null;
  }

  getCategoryLabel(cat: string): string {
    const labels: Record<string, string> = {
      all: 'All',
      events: 'Events',
      yoga: 'Yoga',
      lathi: 'Lathi',
      camp: 'Camp',
      education: 'Education',
    };
    return labels[cat] ?? cat;
  }
}
