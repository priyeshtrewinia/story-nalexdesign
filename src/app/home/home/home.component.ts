import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }
  openJourney(journey) {
    this.modalService.open(journey, { size: 'lg' });
  }
  openAbout(about) {
    this.modalService.open(about, { size: 'lg' });
  }
  openWhyAlumunium(aluminium) {
    this.modalService.open(aluminium, { size: 'lg' });
  }
  openWhyNalex(whynalex) {
    this.modalService.open(whynalex, { size: 'lg'});

  }
}
