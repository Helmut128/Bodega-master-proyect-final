import { Component } from '@angular/core';
import { DxTabsModule, DxSelectBoxModule, DxMultiViewModule } from 'devextreme-angular';
import { NgFor, NgIf } from '@angular/common';
import { Torres } from '../interfaz/newTorres';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [DxTabsModule,DxSelectBoxModule,DxMultiViewModule,NgFor,NgIf,FormsModule],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css'
})
export class MesasComponent {
  alto: number = 0;
  ancho: number = 0;
  anchoPalet: number = 0;
  largoPalet: number = 0
  
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

  actualizarDimensiones() { }
  actualizarAlto() {}

  actualizarAncho() {}

  opcionSeleccionada: string | null = null;

  seleccionarOpcion(event: any) {
    this.opcionSeleccionada = event.target.value;
    console.log(this.opcionSeleccionada)
}

  generarColumnas(columnas: number): number[] {
    let arrayColumnas = [];
    for (let i = 0; i < columnas; i++) {
      arrayColumnas.push(i);
    }
    return arrayColumnas;
  }

}
