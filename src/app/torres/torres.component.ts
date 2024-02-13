import { Component } from '@angular/core';
import { Mesas } from '../interfaz/newMesas';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'


@Component({
  selector: 'app-torres',
  standalone: true,
  imports: [ CdkDropList, CdkDrag, DxDataGridModule, DxButtonModule,DxListModule],
  templateUrl: './torres.component.html',
  styleUrl: './torres.component.css'
})
export class TorresComponent {
  mesas: Mesas [] = [
    {
      mesas: '1',
      ancho: '2',
      alto: '3',
      position: { x: 100, y: 50 },
      rotation: true,
  
    },
    {
      mesas: '2',
      ancho: '4',
      alto: '5',
      position: { x: 200, y: 100 },
      rotation: false,
  
    },
    {
      mesas: '3',
      ancho: '6',
      alto: '7',
      position: { x: 300, y: 150 },
      rotation: false,
  
    },
    {
      mesas: '4',
      ancho: '8',
      alto: '9',
      position: { x: 400, y: 200 },
      rotation: false,
  
    },
    {
      mesas: '5',
      ancho: '10',
      alto: '10',
      position: { x: 500, y: 250 },
      rotation: false,
  
    },
  
  ];

  bodegaMesas: Mesas[] = []  ;

  mostrarMesas(event: any){
    const item: Mesas = event;
    this.bodegaMesas.push(item);
    
    const index = this.mesas.indexOf(item);
      
    // Eliminar el elemento del arreglo this.torres
    if (index > -1) {
        this.mesas.splice(index, 1);
    }
  }
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
    'Mesas',
    'Sillas',
    'Palets'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mesas, event.previousIndex, event.currentIndex);
  }

}