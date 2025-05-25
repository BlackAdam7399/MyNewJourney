import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public modalService: ModalService) { }


  @ViewChild('awardModal1') awardModal1!: ElementRef;
  @ViewChild('awardModal2') awardModal2!: ElementRef;
  @ViewChild('awardModal3') awardModal3!: ElementRef;
  @ViewChild('contactModal') contactModal!: ElementRef;


  openModal(): void {
    this.modalService.openModal(this.contactModal);
  }

  closeModal(): void {
    this.modalService.closeModal(this.contactModal);
  }
}
