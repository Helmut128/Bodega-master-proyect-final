import { Component } from '@angular/core';
import {
  DxBoxModule,
  DevExtremeModule,
  DxTreeListModule,
} from 'devextreme-angular';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Torres } from '../interfaz/newTorres';


@Component({
  selector: 'app-bodega',
  standalone: true,
  imports: [
    DxBoxModule,
    DevExtremeModule,
    DxTreeListModule,
    FormsModule,
    NgFor,
    NgIf,
    NgClass,   
  ],
  templateUrl: './bodega.component.html',
  styleUrl: './bodega.component.css',
})
export class BodegaComponent {
  // Arreglo para almacenar la información de las torres
  torres: Torres[] = [
    {
      torres: '1',
      columnas: '7',
      anaqueles: '4',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '2',
      columnas: '7',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '3',
      columnas: '7',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '4',
      columnas: '7',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '5',
      columnas: '7',
      anaqueles: '6',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '6',
      columnas: '5',
      anaqueles: '6',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '7',
      columnas: '5',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '8',
      columnas: '5',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '9',
      columnas: '5',
      anaqueles: '5',
      position: { x: 5, y: 2 },
      rotation: false,
    },
    {
      torres: '10',
      columnas: '8',
      anaqueles: '6',
      position: { x: 5, y: 2 },
      rotation: false,
    },
  ];

  alto: number = 0;
  ancho: number = 0;
  anchoPalet: number = 0;
  largoPalet: number = 0

  opcionSeleccionada: string | null = null;
  

  // Variables para la información de la interfaz MESA 1
  cajaColumna: string[] = []; // Almacena la información mostrada en el for (en el HTML) para las columnas
  cajaAnaquel: string[] = []; // Almacena la información mostrada en el for (en el HTML) para los anaqueles
  newTorre: string = '1'; // Variable para la nueva torre
  newColumn = 1; // Variable para la nueva columna
  newAnaquel = 1; // Variable para el nuevo anaquel

  actualizarDimensiones() { }
  actualizarAlto() {}

  actualizarAncho() {}

//SELECCIONAR OPCIONES MENU
  seleccionarOpcion(event: any) {
    this.opcionSeleccionada = event.target.value;
    console.log(this.opcionSeleccionada)
}


//------------MESA 1 --------------------------------------------------------------------------------------------
  // Función para llenar los arreglos de columnas y anaqueles
  llenarCaja(columna: number, anaquel: number) {
    this.cajaColumna = []; // Vacía el arreglo de columnas
    this.cajaAnaquel = []; // Vacía el arreglo de anaqueles

    // Llena el arreglo de columnas con valores hasta el número de columnas especificado
    for (let i = 0; i < columna; i++) {
      this.cajaColumna[i] = i.toString();
    }

    // Llena el arreglo de anaqueles con valores hasta el número de anaqueles especificado
    for (let j = 0; j < anaquel; j++) {
      this.cajaAnaquel[j] = j.toString();
    }

    this.agregarTorre(); // Llama a la función para agregar una torre
  }

  // Función que se llama cuando cambia el valor de la columna
  onColumnaChange(event: any) {
    const newColumnValue = parseInt(event); // Convertir el valor a número entero
    console.log('Nuevo valor de columna:', newColumnValue); // Mostrar el nuevo valor de la columna en la consola

    if (newColumnValue !== this.newColumn) {
      // Verificar si el valor ha cambiado
      this.newColumn = newColumnValue; // Actualizar el valor de la columna

      // Agregar una pequeña pausa antes de llamar a llenarCaja()
      setTimeout(() => {
        this.llenarCaja(this.newColumn, this.newAnaquel); // Llamar a llenarCaja solo si el valor ha cambiado
      });
    }
  }

  // Función que se llama cuando cambia el valor del anaquel
  onAnaquelChange(event: any) {
    const newAnaquelValue = parseInt(event); // Convertir el valor a número entero
    console.log('Nuevo valor de anaquel:', newAnaquelValue); // Mostrar el nuevo valor del anaquel en la consola

    if (newAnaquelValue !== this.newAnaquel) {
      // Verificar si el valor ha cambiado
      this.newAnaquel = newAnaquelValue; // Actualizar el valor del anaquel

      // Agregar una pequeña pausa antes de llamar a llenarCaja()
      setTimeout(() => {
        this.llenarCaja(this.newColumn, this.newAnaquel); // Llamar a llenarCaja solo si el valor ha cambiado
      });
    }
  }

  // Función que se llama cuando cambia el valor de la torre seleccionada
  onTorreChange(event: any) {
    this.newTorre = event;
    this.mostrarDetallesTorre(); // Llama a la función para mostrar los detalles de la torre
    this.llenarCaja(this.newColumn, this.newAnaquel); // Actualiza la caja de anaqueles cuando cambia la torre seleccionada
  }

  // Función para agregar una nueva torre
  agregarTorre() {
    if (this.newTorre !== null) {
      const nuevaTorre: Torres = {
        torres: this.newTorre.toString(),
        columnas: this.newColumn.toString(),
        anaqueles: this.newAnaquel.toString(),
        position: { x: 0, y: 0 },
        rotation: false,
      };

      // Busca si ya existe una torre con el mismo nombre
      const indiceTorreExistente = this.torres.find(
        (torre) => torre.torres === this.newTorre.toString()
      );

      // Si la torre ya existe, actualiza la cantidad de columnas y anaqueles
      if (indiceTorreExistente) {
        indiceTorreExistente.columnas = this.newColumn.toString();
        indiceTorreExistente.anaqueles = this.newAnaquel.toString();
      } else {
        // Si la torre no existe, la agrega al arreglo
        this.torres.push(nuevaTorre);
      }
      console.log(this.torres);
    }
  }

  // Función para mostrar los detalles de la torre seleccionada
  mostrarDetallesTorre() {
    if (this.newTorre) {
      const torre = this.torres.find(
        (torre) => torre.torres === this.newTorre.toString()
      );
      if (torre) {
        // Si se encuentra la torre en el arreglo, actualiza los valores de columnas y anaqueles
        this.newColumn = parseInt(torre.columnas);
        this.newAnaquel = parseInt(torre.anaqueles);
      } else {
        // Si no se encuentra la torre, se establecen valores predeterminados
        this.newColumn = 1;
        this.newAnaquel = 1;
      }
    }
  }

  ngOnInit(): void {
    this.mostrarDetallesTorre(); // Llama a la función para mostrar los detalles de la primera torre al iniciar el componente
    this.llenarCaja(this.newColumn, this.newAnaquel); // Llena la caja de columnas y anaqueles al iniciar el componente
  }

}
