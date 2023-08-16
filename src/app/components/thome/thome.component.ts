import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-thome',
  templateUrl: './thome.component.html',
  styleUrls: ['./thome.component.css']
})
export class THomeComponent implements OnInit {

  ngOnInit() : void{
    console.log("Entre a thome");
  }
  
}
