import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent implements OnInit {

  @Input() title;
  @Input() contentText;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
}
