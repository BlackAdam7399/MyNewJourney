import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent {
  awards = [
    {
      title: "Performer For Period",
      company: "Accenture",
      year: "2023",
      description: "exceptional performance, achieving a perfect 100% audit score over four consecutive weeks. Stepped up as a team lead during unforeseen absences, efficiently handling challenges and consistently completing daily and weekly tasks ahead of schedule while exceeding management expectations."
    },
    {
      title: "Performer For Period",
      company: "Accenture",
      year: "2022",
      description: "outstanding performance, maintaining a perfect 100% audit score over four consecutive weeks. Provided strong team support during unexpected absences, fostered a positive work environment, and consistently delivered tasks ahead of schedule while meeting all management expectations. Also contributed creative client-facing ideas, offering fresh and valuable perspectives."
    },
    {
      title: "Star of the Quarter",
      company: "WNS",
      year: "2020",
      description: "earning the Star of the Quarter award, recognizing outstanding performance across four consecutive weeks with a perfect 100% audit score. Provided strong support during unexpected team absences, upheld a positive work environment, and contributed innovative client solutions with measurable impact."
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
