import { Component } from '@angular/core';
import { NgFor,NgIf, NgClass } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag, CdkDragEnd,  moveItemInArray, CdkDragDrop  } from '@angular/cdk/drag-drop';
import { Mesas } from '../interfaz/newMesas';

@Component({
  selector: 'app-prueba-3',
  standalone: true,
  imports: [NgFor, NgIf, CdkDrag, NgClass, DxDataGridModule, DxButtonModule,DxListModule],
  templateUrl: './prueba-3.component.html',
  styleUrl: './prueba-3.component.css'
})
export class Prueba3Component {

  bodegaMesas: Mesas[] = []  ;

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
    {
      mesas: '5',
      ancho: '10',
      alto: '10',
      position: { x: 500, y: 250 },
      rotation: false,
    },
    
  ];

  mensajes: string[] = [];

  drop(event: any) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
  
    if (typeof previousIndex === 'number' && typeof currentIndex === 'number') {
      moveItemInArray(this.mesas, previousIndex, currentIndex);
      this.recorrerArray();
    }
  }
onDragEndedMesas(event: CdkDragEnd): void {
  const draggedElement = event.source.element.nativeElement;
  const { top, left } = draggedElement.getBoundingClientRect();
  const id:number =  Number(draggedElement.id);
  const newValue: Mesas = this.bodegaMesas[id];
  console.log(draggedElement.getBoundingClientRect())  
  newValue.location = { x: left, y: top };
  console.log('posicion',top,left,id );
}

generarMesas(mesas: number): number[] {
  let arrayMesas = [];
  for (let i = 0; i < mesas; i++) {
    arrayMesas.push(i);
  }
  return arrayMesas;
}

rotateTowerMesas(index: number): void {
  this.bodegaMesas[index].rotation = !this.bodegaMesas[index].rotation; // Rotar en la dirección indicada
}

mostrarMesas(event: any){
  const item: Mesas = event;
  this.bodegaMesas.push(item);
  const index = this.mesas.indexOf(item);
  // Eliminar el elemento del arreglo this.torres
  if (index > -1) {
      this.mesas.splice(index, 1);
  }
}

remoteMesas(mesas: any) {
  const item:Mesas | undefined = this.bodegaMesas[mesas];
  console.log(item?.mesas, item)
  this.mesas.push(item);
  this.bodegaMesas.splice(mesas, 1);
  this.mesas.sort((a: Mesas, b: Mesas) => Number(a.mesas) - Number(b.mesas));
  const item2:Mesas  = this.mesas.find((x:Mesas) =>x.mesas === item.mesas )!;
  item2.position!.x= item2.location!.x;
  item2.position!.y= item2.location!.y;
  console.log(this.bodegaMesas);
  console.log(item);
  
}

ngOnInit() {
  this.recorrerArray();
}

recorrerArray() {
  for (let i = 0; i < this.mesas.length; i++) {
    const mesaActual = this.mesas[i];

    for (let j = i + 1; j < this.mesas.length; j++) {
      const otraMesa = this.mesas[j];

      if (mesaActual.position && otraMesa.position &&
          mesaActual.position.x === otraMesa.position.x && 
          mesaActual.position.y === otraMesa.position.y) {
          this.mensajes.push(`La mesa en la posición ${i} tiene la misma posición que la mesa en la posición ${j}`);

        console.log("La mesa en la posición", i, "tiene la misma posición que la mesa en la posición", j);
      }
    }
  }
}

}
