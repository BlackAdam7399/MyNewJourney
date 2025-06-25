import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor(private modalService: ModalService) { }

  @ViewChild('experienceModal1') experienceModal1!: ElementRef;
  @ViewChild('experienceModal2') experienceModal2!: ElementRef;
  @ViewChild('experienceModal3') experienceModal3!: ElementRef;
  @ViewChild('experienceModal4') experienceModal4!: ElementRef;

  jobs = [
    {
      title: 'Associate',
      company: 'Accenture, Navi Mumbai',
      duration: 'Feb 2021 – Nov 2024',
      description: '',
      modalId: 'experienceModal1'
    },
    {
      title: 'Trainee Associate',
      company: 'WNS, Navi Mumbai',
      duration: 'Jun 2019 - Jun 2020',
      description: '',
      modalId: 'experienceModal2'
    },
    {
      title: 'Neem Trainee',
      company: 'TCS, Mumbai',
      duration: 'Feb 2019 - Mar 2019',
      description: 'Participated in TCS training program to develop technical skills. Developed technical skills under NEEM program at TCS.',
      modalId: 'experienceModal3'
    },
    {
      title: 'Data Reviewer',
      company: 'UTI, Navi Mumbai',
      duration: 'May 2018 - Oct 2018',
      description: 'Reviewed and validated data for accuracy and completeness.',
      modalId: 'experienceModal4'
    }
  ];

  openModal(modalId: string) {
    const modalMap: { [key: string]: ElementRef } = {
      experienceModal1: this.experienceModal1,
      experienceModal2: this.experienceModal2,
      experienceModal3: this.experienceModal3,
      experienceModal4: this.experienceModal4,
    };
    const elementRef = modalMap[modalId];
    if (elementRef) {
      this.modalService.openModal(elementRef);
    } else {
      console.error('Invalid modalId passed:', modalId);
    }
  }

  closeModal(modalId: string) {
    const modalMap: { [key: string]: ElementRef } = {
      experienceModal1: this.experienceModal1,
      experienceModal2: this.experienceModal2,
      experienceModal3: this.experienceModal3,
      experienceModal4: this.experienceModal4,
    };

    const elementRef = modalMap[modalId];

    if (elementRef) {
      this.modalService.closeModal(elementRef);
    }
  }
}