import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { THomeComponent } from "./components/thome/thome.component";
import { DetallesComponent } from "./components/detalles/detalles.component";

export const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'avance', component: THomeComponent},
    {path: 'detalles', component: DetallesComponent}
]