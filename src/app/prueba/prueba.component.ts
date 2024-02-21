import { Component, ElementRef, } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Mesas } from '../interfaz/newMesas';
import { CdkDragDrop,moveItemInArray  } from '@angular/cdk/drag-drop'; // Importa DragDropModule

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [NgIf, NgFor,FormsModule ],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent  {

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

constructor() {}

  onDragEnd(event: MouseEvent) {
    const draggedObject = event.target as HTMLElement; // Elemento arrastrado
    const draggedRect = draggedObject.getBoundingClientRect(); // Rectángulo del elemento arrastrado

    // Iterar sobre las mesas para verificar colisiones
    this.mesas.forEach(mesa => {
      if (this.isCollision(draggedRect, mesa)) {
        const newLeft = mesa.position?.x + mesa.ancho + 1; // Nuevo valor de left después de la colisión
        const newTop = mesa.position?.y; // Mantener la misma posición vertical que el área permitida

        draggedObject.style.left = newLeft + 'px';
        draggedObject.style.top = newTop + 'px';
        console.log(`El elemento se ha movido ${newLeft}px a la derecha después de la colisión`);
      }
    });
  }

  isCollision(rect: DOMRect, mesa: Mesas): boolean {
    if (mesa.position) {
      const mesaRect = {
        x: mesa.position.x,
        y: mesa.position.y,
        width: mesa.ancho,
        height: mesa.alto
      };
      return (
        rect.x < (mesaRect.x || 0) + mesaRect.width &&
        rect.x + rect.width > (mesaRect.x || 0) &&
        rect.y < (mesaRect.y || 0) + mesaRect.height &&
        rect.y + rect.height > (mesaRect.y || 0)
      );
    }
    return false;
  }

  onDragStart(event: MouseEvent) {
    const draggedObject = event.target as HTMLElement; // Elemento arrastrable
    draggedObject.style.position = 'absolute'; // Asegurarse de que el elemento tenga posición absoluta
    const initialX = event.clientX - draggedObject.getBoundingClientRect().left;
    const initialY = event.clientY - draggedObject.getBoundingClientRect().top;

    const moveHandler = (e: MouseEvent) => {
      draggedObject.style.left = e.clientX - initialX + 'px';
      draggedObject.style.top = e.clientY - initialY + 'px';
    };

    const stopHandler = () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', stopHandler);
    };
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', stopHandler);
  }

  
  onDrop(event: CdkDragDrop<any[]>) {
    // Implementa la lógica para manejar el evento cdkDropListDropped aquí
    console.log('Elemento soltado:', event);
    // Por ejemplo, puedes mover el elemento dentro del arreglo mesas si es necesario
    moveItemInArray(this.mesas, event.previousIndex, event.currentIndex);
  }
 
}
