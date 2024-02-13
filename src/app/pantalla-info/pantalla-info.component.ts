import { Component } from '@angular/core';
import { Torres } from '../interfaz/newTorres';
import { NgFor,NgIf, NgClass } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag } from '@angular/cdk/drag-drop';
import { Palets } from '../interfaz/newPalet';
import { Mesas } from '../interfaz/newMesas';


@Component({
  selector: 'app-pantalla-info',
  standalone: true,
  imports: [DxButtonModule, NgFor,NgClass, DxDataGridModule, DxListModule, CdkDrag,NgIf ],
  templateUrl: './pantalla-info.component.html',
  styleUrl: './pantalla-info.component.css'
})
export class PantallaInfoComponent {

   // Arreglo para almacenar la información de las torres
  torres: Torres[] = [
    {
      torres: '1',
      columnas: '7',
      anaqueles: '4',
      position: { x: 1400, y: 690 },
      rotation: true,
    },
    {
      torres: '2',
      columnas: '7',
      anaqueles: '5',
      position: { x: 1400, y: 600 },
      rotation: false,
    },
    {
      torres: '3',
      columnas: '7',
      anaqueles: '5',
      position: { x: 1400, y: 550 },
      rotation: false,
    },
    {
      torres: '4',
      columnas: '7',
      anaqueles: '5',
      position: { x: 1400, y: 460 },
      rotation: false,
    },
    {
      torres: '5',
      columnas: '7',
      anaqueles: '6',
      position: { x: 1400, y: 419 },
      rotation: false,
    },
    {
      torres: '6',
      columnas: '5',
      anaqueles: '6',
      position: { x: 1400, y: 325 },
      rotation: false,
    },
    {
      torres: '7',
      columnas: '5',
      anaqueles: '5',
      position: { x: 1400, y: 280 },
      rotation: false,
    },
    {
      torres: '8',
      columnas: '5',
      anaqueles: '5',
      position: { x: 1400, y: 190 },
      rotation: false,
    },
    {
      torres: '9',
      columnas: '5',
      anaqueles: '5',
      position: { x: 1400, y: 145 },
      rotation: false,
    },
    {
      torres: '10',
      columnas: '8',
      anaqueles: '6',
      position: { x: 1400, y: 10 },
      rotation: false,
    },
  ];

  palet: Palets [] = [ //ARRAY PALESTS
    {
      palet: '3',
      anchoPalet: '3',
      altoPalet: '2',
      position: { x: 1690, y: 180 },
      rotation: true,
    },

    {
      palet: '3',
      anchoPalet: '3',
      altoPalet: '3',
      position: { x: 1690, y: 240 },
      rotation: true,
    },
    {
      palet: '3',
      anchoPalet: '4',
      altoPalet: '4',
      position: { x: 1690, y: 300 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 1300, y: 120 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 1220, y: 120 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 1140, y: 120 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 1060, y: 120 },
      rotation: true,
    },
  
    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 980, y: 120 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 900, y: 120 },
      rotation: true,
    },

    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 815, y: 120 },
      rotation: true,
    },
    {
      palet: '1',
      anchoPalet: '8',
      altoPalet: '5',
      position: { x: 735, y: 120 },
      rotation: true,
    },
  

  ];

  mesas: Mesas [] = [
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 1340 },
      rotation: false,
    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 1260 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 1180 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 1100 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 1020 },
      rotation: false,

    },

    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 940 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 855 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 775 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 695 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 615 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 535 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 455 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 375 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 295 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 215 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 140 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 65 },
      rotation: false,

    },
    {
      mesas: '12',
      ancho: 100,
      alto: 200,
      position: { x: 200, y: 0 },
      rotation: false,

    },

  ];

 generarColumnas(columnas: number): number[] {
    let arrayColumnas = [];
    for (let i = 0; i < columnas; i++) {
      arrayColumnas.push(i);
    }
    return arrayColumnas;
  }
  generarMesas(mesas: number): number[] {
    let arrayMesas = [];
    for (let i = 0; i < mesas; i++) {
      arrayMesas.push(i);
    }
    return arrayMesas;
  }

  generarPalets(palet: number): number[] {
    let arrayPalet = [];
    for (let i = 0; i < palet; i++) {
      arrayPalet.push(i);
    }
    return arrayPalet;
  }
}
