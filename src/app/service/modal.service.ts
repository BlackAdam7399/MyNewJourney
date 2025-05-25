import { ElementRef, Injectable, ViewChild } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  openModal(modalRef: ElementRef): void {
    modalRef.nativeElement.classList.add('show');
    modalRef.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  closeModal(modalRef: ElementRef): void {
    modalRef.nativeElement.classList.remove('show');
    modalRef.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
  constructor() { }
}
