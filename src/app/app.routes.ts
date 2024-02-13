import { Routes } from '@angular/router';
import { BodegaComponent } from './bodega/bodega.component';

import { DibujoBodegaComponent } from './dibujo-bodega/dibujo-bodega.component';
import { PantallaInfoComponent } from './pantalla-info/pantalla-info.component';
import { MesasComponent } from './mesas/mesas.component';
import { PruebaComponent } from './prueba/prueba.component';
import { TorresComponent } from './torres/torres.component';
import { Prueba3Component } from './prueba-3/prueba-3.component';

export const routes: Routes = [
  { path: 'bodega', component: BodegaComponent },

  { path: 'interfaz', component: DibujoBodegaComponent, title: 'Interfaz' },

  { path: 'info', component: PantallaInfoComponent, title: 'info-bodega' },

  { path: 'mesas', component: MesasComponent, title: 'mesas' },

  { path: 'palets', component: PruebaComponent, title: 'palets' },
  
  {path: 'torres', component: TorresComponent, title: 'Torres'},

  {path: 'prueba', component: Prueba3Component, title: 'Prueba'}


];
