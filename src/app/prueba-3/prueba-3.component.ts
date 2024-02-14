import { Component } from '@angular/core';
import { NgFor,NgIf, NgClass, CommonModule  } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag, CdkDragEnd, moveItemInArray  } from '@angular/cdk/drag-drop';
import { Mesas } from '../interfaz/newMesas';

@Component({
  selector: 'app-prueba-3',
  standalone: true,
  imports: [NgFor, NgIf, CdkDrag, NgClass, DxDataGridModule, DxButtonModule,DxListModule,CommonModule ],
  templateUrl: './prueba-3.component.html',
  styleUrl: './prueba-3.component.css'
})
export class Prueba3Component {
 
  positions: { x: number, y: number }[] = [];
  bodegaMesas: Mesas[] = []  ;

  mesas: Mesas [] = [
      {
        mesas: '1',
        ancho: '2',
        alto: '3',
        position: { x: 200, y: 110 },
        rotation: false,
      },
      {
        mesas: '2',
        ancho: '4',
        alto: '5',
        position: { x: 300, y: 200 },
        rotation: false,
      },
      {
        mesas: '3',
        ancho: '6',
        alto: '7',
        position: { x: 400, y: 250 },
        rotation: false,
      },
      {
        mesas: '4',
        ancho: '8',
        alto: '9',
        position: { x: 500, y: 300 },
        rotation: false,
      },
      {
        mesas: '5',
        ancho: '10',
        alto: '10',
        position: { x: 600, y: 400 },
        rotation: false,
      },
      {
        mesas: '5',
        ancho: '10',
        alto: '10',
        position: { x: 600, y: 400 },
        rotation: false,
      },
      
    ];
  mensajes: string[] = [];

  drop(event: any) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
  
    if (typeof previousIndex === 'number' && typeof currentIndex === 'number') {
      const newPosition = event.distance;
      console.log('newPosition:', newPosition); // Agregar esta línea
      const isValidDrop = this.verificarSuperposicion(newPosition, currentIndex, 0);
  
      // Verificar si la nueva posición está ocupada por otra mesa
      const isPositionOccupied = this.positions.some(position => {
        return position && position.x === newPosition.x && position.y === newPosition.y;
      });
  
      if (!isPositionOccupied) {
        if (isValidDrop) {
          moveItemInArray(this.mesas, previousIndex, currentIndex);
          this.recorrerArray();
        } else {
          moveItemInArray(this.mesas, currentIndex, previousIndex);
          alert('¡No se puede colocar una mesa encima de otra!');
        }
      } else {
        alert('¡Esta posición ya está ocupada por otra mesa!');
      }
    }
  }

  
  verificarSuperposicion(newPosition: { x: number, y: number }, currentIndex: number, rotation: number): boolean {
    const draggedMesa = this.mesas[currentIndex];
    const draggedMesaPosition = this.positions[currentIndex];

    const newLeft = newPosition.x - (draggedMesa.ancho / 2) * Math.cos(rotation);
    const newTop = newPosition.y - (draggedMesa.alto / 2) * Math.sin(rotation);
    const newRight = newLeft + draggedMesa.ancho * Math.cos(rotation);
    const newBottom = newTop + draggedMesa.alto * Math.sin(rotation);

    const margen = 10;

    for (let i = 0; i < this.mesas.length; i++) {
      if (i !== currentIndex) {
        const otherMesa = this.mesas[i];
        const otherMesaPosition = this.positions[i];

        if (draggedMesaPosition && otherMesaPosition &&
          newLeft === otherMesaPosition.x && newTop === otherMesaPosition.y) {
          return false;
        }

        const otherRight = otherMesaPosition.x + otherMesa.ancho * Math.cos(rotation);
        const otherBottom = otherMesaPosition.y + otherMesa.alto * Math.sin(rotation);

        if (
          newLeft + margen < otherRight - margen &&
          newRight - margen > otherMesaPosition.x + margen &&
          newTop + margen < otherBottom - margen &&
          newBottom - margen > otherMesaPosition.y + margen
        ) {
          return false;
        }
      } 
      console.log('newLeft:', newLeft);
      console.log('newTop:', newTop);
      console.log('newRight:', newRight);
      console.log('newBottom:', newBottom);
    }
    return true;
  }

mouseDown($event: any){
  console.log($event);
}

onDragEndedMesas(event: CdkDragEnd, index: number): void {
  const draggedElement = event.source.element.nativeElement;
  const { top, left } = draggedElement.getBoundingClientRect();
  const id:number =  Number(draggedElement.id);
  const newValue: Mesas = this.bodegaMesas[id];
  console.log(draggedElement.getBoundingClientRect())  
  newValue.location = { x: left, y: top };
  this.bodegaMesas[index]
  console.log('posicion',top,left,id );

  this.positions[index] = { x: left, y: top };

  console.log('positions:', this.positions); // Agregar esta línea
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
    const mesa = this.mesas[i];
    console.log(`Mesa ${mesa.mesas}: ancho ${mesa.ancho}, alto ${mesa.alto}, posición (${mesa.position?.x}, ${mesa.position?.y})`);
  }
}


}
