import { Component } from '@angular/core';
import { Torres } from '../interfaz/newTorres';
import { Palets } from '../interfaz/newPalet';
import { NgFor,NgIf, NgClass } from '@angular/common';
import { DxButtonModule ,DxDataGridModule,DxListModule  } from 'devextreme-angular'
import { CdkDrag, CdkDragEnd, } from '@angular/cdk/drag-drop';
import { Mesas } from '../interfaz/newMesas';

@Component({
  selector: 'app-dibujo-bodega',
  standalone: true,
  imports: [NgFor, NgIf, CdkDrag, NgClass, DxDataGridModule, DxButtonModule,DxListModule, DibujoBodegaComponent,],
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

  palets: Palets [] = [ //ARRAY PALESTS
  {
    palet: '1',
    anchoPalet: '3',
    altoPalet: '2',
    position: { x: 400, y: 180 },
    rotation: false,
  },

  {
    palet: '2',
    anchoPalet: '1',
    altoPalet: '1',
    position: { x: 500, y: 240 },
    rotation: false,
  },
  {
    palet: '3',
    anchoPalet: '1',
    altoPalet: '1',
    position: { x: 600, y: 300 },
    rotation: false,
  },

  {
    palet: '4',
    anchoPalet: '1',
    altoPalet: '1',
    position: { x: 700, y: 120 },
    rotation: false,
  },

  {
    palet: '5',
    anchoPalet: '2',
    altoPalet: '2',
    position: { x: 800, y: 120 },
    rotation: false,
  },

  {
    palet: '6',
    anchoPalet: '3',
    altoPalet: '3',
    position: { x: 900, y: 120 },
    rotation: false,
  },

  {
    palet: '7',
    anchoPalet: '3',
    altoPalet: '3',
    position: { x: 1000, y: 120 },
    rotation: false,
  },

];

bodegaPalets: Palets[]  = []  ;
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

];

//-----------------------------------------------------------------------
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
  this.torres.splice(index, 1);
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

//PALETS FUNCIONS ---------------------------------------------------------------
 
onDragEndedPalet(event: CdkDragEnd): void {
  const draggedElement = event.source.element.nativeElement;
  const { top, left } = draggedElement.getBoundingClientRect();
  const id:number =  Number(draggedElement.id);
  const newValue: Palets = this.bodegaPalets[id];
  console.log(draggedElement.getBoundingClientRect())  
  newValue.location! = { x: left, y: top };
  console.log('posicion',top,left,id );
}

generarPalets(Palets: number): number[] {
  let arrayPalet = [];
  for (let i = 0; i < Palets; i++) {
    arrayPalet.push(i);
  }
  return arrayPalet;
}

rotateTowerPalet(index: number): void {
  this.bodegaPalets[index].rotation = !this.bodegaPalets[index].rotation; // Rotar en la dirección indicada
}

mostrarPalets(event: any){
  const item: Palets = event;
  this.bodegaPalets.push(item);
  
  const index = this.palets.indexOf(item);
    
  // Eliminar el elemento del arreglo this.palet
  if (index > -1) {
      this.palets.splice(index, 1);
  }
  console.log(index);
  
}

remotePalet(palet: any) {

  const item:Palets | undefined = this.bodegaPalets[palet];
  console.log(item.palet, item)
  this.palets.push(item);

  this.bodegaPalets.splice(palet, 1);
  this.palets.sort((a: Palets, b: Palets) => Number(a.palet) - Number(b.palet));
 
  const item2:Palets  = this.palets.find((x:Palets) =>x.palet === item.palet )!;
  item2.position!.x= item2.location!.x;
  item2.position!.y= item2.location!.y;
  console.log(this.bodegaPalets);
  console.log(item2);
  
}



//-------------------Interfaz 3 --------------------------------------------//


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

}
