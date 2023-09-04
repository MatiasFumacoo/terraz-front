import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NavComponent } from '../app/components/nav/nav.component';
import { HomeComponent } from '../app/components/home/home.component';
import { DescubriComponent } from './components/descubri/descubri.component';
import { PruebaZoomComponent } from './components/prueba-zoom/prueba-zoom.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { THomeComponent } from './components/thome/thome.component';
import { appRoutingModules } from './app.routing';
import { TzcomponentsComponent } from './components/tzcomponents/tzcomponents.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
import { BtnWppComponent } from './components/btn-wpp/btn-wpp.component';
import { BtnArribaComponent } from './components/btn-arriba/btn-arriba.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DescubriComponent,
    PruebaZoomComponent,
    FooterComponent,
    DetallesComponent,
    THomeComponent,
    TzcomponentsComponent,
    BtnWppComponent,
    BtnArribaComponent,
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    HttpClientModule,
    NgbCollapseModule,
    GoogleMapsModule,
    appRoutingModules,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
