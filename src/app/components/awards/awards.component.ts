import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent {
  awards = [
    {
      title: 'Performer For Period',
      company: 'Accenture',
      year: '2023',
    },
    {
      title: 'Performer For Period',
      company: 'Accenture',
      year: '2022',
    },
    {
      title: 'Star of the Quarter',
      company: 'WNS',
      year: '2020',
    },
  ];

  openedModalIndex: number | null = null;

  openModal(index: number): void {
    this.openedModalIndex = index;
  }

  closeModal(): void {
    this.openedModalIndex = null;
  }
}
