import { Component } from '@angular/core';
import { Torres } from '../interfaz/newTorres';
import { NgFor,NgIf, NgClass } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dibujo-bodega',
  standalone: true,
  imports: [NgFor, NgIf, CdkDrag, NgClass, DxDataGridModule, DxButtonModule,DxListModule, DibujoBodegaComponent],
  templateUrl: './dibujo-bodega.component.html',
  styleUrl: './dibujo-bodega.component.css',
})
export class DibujoBodegaComponent {

  // Arreglo para almacenar la información de las torres
  torres: Torres[] = [
    {
      torres: '1',
      columnas: '7',
      anaqueles: '4',
      position: { x: 100, y: 30 },
      rotation: true,
    },
    {
      torres: '2',
      columnas: '7',
      anaqueles: '5',
      position: { x: 200, y: 119 },
      rotation: false,
    },
    {
      torres: '3',
      columnas: '7',
      anaqueles: '5',
      position: { x: 300, y: 190 },
      rotation: false,
    },
    {
      torres: '4',
      columnas: '7',
      anaqueles: '5',
      position: { x: 400, y: 253 },
      rotation: false,
    },
    {
      torres: '5',
      columnas: '7',
      anaqueles: '6',
      position: { x: 500, y: 331 },
      rotation: false,
    },
    {
      torres: '6',
      columnas: '5',
      anaqueles: '6',
      position: { x: 600, y: 403 },
      rotation: false,
    },
    {
      torres: '7',
      columnas: '5',
      anaqueles: '5',
      position: { x: 275, y: 473 },
      rotation: false,
    },
    {
      torres: '8',
      columnas: '5',
      anaqueles: '5',
      position: { x: 608, y: 472 },
      rotation: false,
    },
    {
      torres: '9',
      columnas: '5',
      anaqueles: '5',
      position: { x: 935, y: 516 },
      rotation: false,
    },
    {
      torres: '10',
      columnas: '8',
      anaqueles: '6',
      position: { x: 559, y: 578 },
      rotation: false,
    },
  ];
  bodega: Torres[]  = []  ;

  onDragEnded(event: CdkDragEnd): void {
    const draggedElement = event.source.element.nativeElement;
    const { top, left } = draggedElement.getBoundingClientRect();
    const id:number =  Number(draggedElement.id);
    const newValue: Torres = this.bodega[id];
    console.log(draggedElement.getBoundingClientRect())  
    newValue.location = { x: left, y: top };
    console.log('posicion',top,left,id );

  }

 generarColumnas(columnas: number): number[] {
    let arrayColumnas = [];
    for (let i = 0; i < columnas; i++) {
      arrayColumnas.push(i);
    }
    return arrayColumnas;
  }

  rotateTower(index: number): void {
    this.bodega[index].rotation = !this.bodega[index].rotation; // Rotar en la dirección indicada
  }

  mostrarTorres(event: any){
  const item: Torres = event;
  this.bodega.push(item);
  
  const index = this.torres.indexOf(item);
    
  // Eliminar el elemento del arreglo this.torres
  if (index > -1) {
      this.torres.splice(index, 1);
  }
}

remoteTorre(torre: any) {

  const item:Torres | undefined = this.bodega[torre];
  console.log(item.torres, item)
  this.torres.push(item);

  this.bodega.splice(torre, 1);
  this.torres.sort((a: Torres, b: Torres) => Number(a.torres) - Number(b.torres));
 
  const item2:Torres  = this.torres.find((x:Torres) =>x.torres === item.torres )!;
  item2.position.x= item2.location!.x;
  item2.position.y= item2.location!.y;

  console.log(item2);
  
}

}
