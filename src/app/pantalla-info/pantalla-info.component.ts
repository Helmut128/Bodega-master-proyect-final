import { Component } from '@angular/core';
import { Torres } from '../interfaz/newTorres';
import { NgFor,NgIf, NgClass } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';

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

 generarColumnas(columnas: number): number[] {
    let arrayColumnas = [];
    for (let i = 0; i < columnas; i++) {
      arrayColumnas.push(i);
    }
    return arrayColumnas;
  }
}
