import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-descubri',
  templateUrl: './descubri.component.html',
  styleUrls: ['./descubri.component.css']
})
export class DescubriComponent {

  center: google.maps.LatLngLiteral = {
    lat: -34.6118,
    lng: -58.4173
  };
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }

	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  @ViewChild('terrenosElement', { static: false }) terrenosElementRef!: ElementRef;
  @ViewChild('profesionalesElement', { static: false }) profesionalesElementRef!: ElementRef;
  @ViewChild('materialesElement', { static: false }) materialesElementRef!: ElementRef;
  @ViewChild('serviciosElement', { static: false }) serviciosElementRef!: ElementRef;
  terrenosVisible: boolean = false;
  profesionalesVisible: boolean = false;
  materialesVisible: boolean = false;
  serviciosVisible: boolean = false;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Ajusta el valor según tus necesidades
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(this.terrenosElementRef.nativeElement);
    observer.observe(this.profesionalesElementRef.nativeElement);
    observer.observe(this.materialesElementRef.nativeElement);
    observer.observe(this.serviciosElementRef.nativeElement);
  }

  handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.target === this.terrenosElementRef.nativeElement) {
        this.terrenosVisible = entry.isIntersecting;
      } else if (entry.target === this.profesionalesElementRef.nativeElement) {
        this.profesionalesVisible = entry.isIntersecting;
      } else if (entry.target === this.materialesElementRef.nativeElement) {
        this.materialesVisible = entry.isIntersecting;
      } else if (entry.target === this.serviciosElementRef.nativeElement) {
        this.serviciosVisible = entry.isIntersecting;
      }
    });
  }
  
	open(content: any) {
		this.modalService.open(content);
	}

}
