import { Component, signal, SimpleChanges } from '@angular/core';
import { Dropdown } from '../../shared/components/dropdown/dropdown';
import { Checkbox } from '../../shared/components/checkbox/checkbox';
import { Popup } from '../../shared/components/popup/popup';
import { Card } from './card/card';
import { Paginator } from '../../shared/components/paginator/paginator';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-hire',
  imports: [Dropdown, Checkbox, Card, Paginator, SlicePipe, Popup],
  templateUrl: './hire.html',
  styleUrl: './hire.css',
})
export class Hire {
  public profileCardData = signal<ProfileCard[]>([
    {
      id: 1,
      name: 'მარიამ დ.',
      profession: 'UX/UI Designer',
      description: 'დამწყები დიზაინერი',
      skills: ['Figma', 'Adobe Illustrator'],
      salary: {
        min: 2500,
        max: 3500,
      },
      verified: true,
      rating: 4.9,
      projects: 12,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'გიორგი კ.',
      profession: 'Frontend Developer',
      description: 'Angular დეველოპერი',
      skills: ['Angular', 'TypeScript'],
      salary: {
        min: 3000,
        max: 4500,
      },
      verified: true,
      rating: 4.8,
      projects: 18,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'ნინო მ.',
      profession: 'Graphic Designer',
      description: 'კრეატიული გრაფიკული დიზაინერი',
      skills: ['Photoshop', 'Illustrator'],
      salary: {
        min: 2200,
        max: 3200,
      },
      verified: true,
      rating: 4.7,
      projects: 9,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'ლუკა ბ.',
      profession: 'Backend Developer',
      description: 'Backend დეველოპერი',
      skills: ['NestJS', 'PostgreSQL'],
      salary: {
        min: 3500,
        max: 5000,
      },
      verified: false,
      rating: 4.6,
      projects: 15,
      isFavorite: false,
    },
    {
      id: 5,
      name: 'სალომე გ.',
      profession: 'Product Designer',
      description: 'ციფრული პროდუქტების დიზაინერი',
      skills: ['Figma', 'Prototyping'],
      salary: {
        min: 2800,
        max: 4000,
      },
      verified: true,
      rating: 4.9,
      projects: 21,
      isFavorite: true,
    },
    {
      id: 6,
      name: 'დავით ს.',
      profession: 'Full Stack Developer',
      description: 'Full Stack ვებ დეველოპერი',
      skills: ['React', 'Node.js'],
      salary: {
        min: 4000,
        max: 5500,
      },
      verified: true,
      rating: 4.8,
      projects: 27,
      isFavorite: false,
    },
    {
      id: 7,
      name: 'თამარ ლ.',
      profession: 'Mobile Developer',
      description: 'მობილური აპლიკაციების დეველოპერი',
      skills: ['Flutter', 'Dart'],
      salary: {
        min: 3200,
        max: 4800,
      },
      verified: true,
      rating: 4.7,
      projects: 16,
      isFavorite: false,
    },
    {
      id: 8,
      name: 'ანდრია ჩ.',
      profession: 'DevOps Engineer',
      description: 'Cloud და DevOps სპეციალისტი',
      skills: ['Docker', 'AWS'],
      salary: {
        min: 4500,
        max: 6500,
      },
      verified: true,
      rating: 4.9,
      projects: 24,
      isFavorite: true,
    },
    {
      id: 9,
      name: 'ელენე რ.',
      profession: 'QA Engineer',
      description: 'Software ტესტირების სპეციალისტი',
      skills: ['Cypress', 'Postman'],
      salary: {
        min: 2500,
        max: 3800,
      },
      verified: false,
      rating: 4.6,
      projects: 11,
      isFavorite: false,
    },
    {
      id: 10,
      name: 'ირაკლი ჯ.',
      profession: 'Data Analyst',
      description: 'მონაცემთა ანალიზის სპეციალისტი',
      skills: ['SQL', 'Power BI'],
      salary: {
        min: 3000,
        max: 4500,
      },
      verified: true,
      rating: 4.8,
      projects: 19,
      isFavorite: false,
    },
  ]);
  public currentPage = signal<number | null>(null);
  public startDisplayingDataFrom = signal(0);
  public endDisplayingDataTo = signal(3);
  public readonly dropdownData = signal<any>([
    {
      id: 1,
      title: 'მაგალითი 1',
    },
    {
      id: 2,
      title: 'მაგალითი 2',
    },
    {
      id: 3,
      title: 'მაგალითი 3',
    },
    {
      id: 4,
      title: 'მაგალითი 4',
    },
    {
      id: 5,
      title: 'მაგალითი 5',
    },
    {
      id: 6,
      title: 'მაგალითი 6',
    },
    {
      id: 7,
      title: 'მაგალითი 7',
    },
    {
      id: 8,
      title: 'მაგალითი 8',
    },
    {
      id: 9,
      title: 'მაგალითი 9',
    },
    {
      id: 10,
      title: 'მაგალითი 10',
    },
  ]);

  protected isShownProfilePopup = signal<boolean>(false);

  protected onPageChange(page: number) {
    this.currentPage.set(page);
    if (page === 1) {
      this.startDisplayingDataFrom.set(0);
      this.endDisplayingDataTo.set(3);
    }
    this.startDisplayingDataFrom.set(3 * (page - 1));
    this.endDisplayingDataTo.set(3 * page);
    console.log(this.currentPage());
  }

  public showPopup(e: any): void{
    this.isShownProfilePopup.set(true);
  }
}

export interface ProfileCard {
  id: number;
  name: string;
  profession: string;
  description: string;
  skills: string[];
  salary: {
    min: number;
    max: number;
  };
  verified: boolean;
  rating: number;
  projects: number;
  isFavorite: boolean;
}
