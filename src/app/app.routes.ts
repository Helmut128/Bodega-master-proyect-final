import { Routes } from '@angular/router';
import { BodegaComponent } from './bodega/bodega.component';

import { DibujoBodegaComponent } from './dibujo-bodega/dibujo-bodega.component';
import { PantallaInfoComponent } from './pantalla-info/pantalla-info.component';
import { MesasComponent } from './mesas/mesas.component';
import { PruebaComponent } from './prueba/prueba.component';
import { TorresComponent } from './torres/torres.component';

export const routes: Routes = [
  { path: 'bodega', component: BodegaComponent },

  { path: 'interfaz', component: DibujoBodegaComponent, title: 'Interfaz' },

  { path: 'info', component: PantallaInfoComponent, title: 'info-bodega' },

  { path: 'mesas', component: MesasComponent, title: 'mesas' },

  { path: 'palets', component: PruebaComponent, title: 'palets' },
  
  {path: 'torres', component: TorresComponent, title: 'Torres'}


];
