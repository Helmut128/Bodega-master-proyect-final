import { Component } from '@angular/core';
import { DxTabsModule, DxSelectBoxModule, DxMultiViewModule } from 'devextreme-angular';
import { NgFor, NgIf } from '@angular/common';
import { Torres } from '../interfaz/newTorres';
import { FormsModule } from '@angular/forms'; 
import { Palets } from '../interfaz/newPalet';
import { Mesas } from '../interfaz/newMesas';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [DxTabsModule,DxSelectBoxModule,DxMultiViewModule,NgFor,NgIf,FormsModule],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css'
})
export class MesasComponent {

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
      palet: '1',
      anchoPalet: '2',
      altoPalet: '2',
      position:  { x: 0, y: 0 },
    },

    {
      palet: '2',
      anchoPalet: '3',
      altoPalet: '3',
      position:  { x: 0, y: 0 },

    },
    {
      palet: '3',
      anchoPalet: '4',
      altoPalet: '4',
      position:  { x: 0, y: 0 },

    },
    {
      palet: '4',
      anchoPalet: '5',
      altoPalet: '5',
      position:  { x: 0, y: 0 },

    },
    {
      palet: '5',
      anchoPalet: '6',
      altoPalet: '6',
      position:  { x: 0, y: 0 },

    },

  ];

  mesas: Mesas [] = [
    {
      mesas: '1',
      ancho: '2',
      alto: '3',
      position: { x: 0, y: 0 },
      rotation: false,

    },
    {
      mesas: '2',
      ancho: '4',
      alto: '5',
      position: { x: 0, y: 0 },
      rotation: false,

    },
    {
      mesas: '3',
      ancho: '6',
      alto: '7',
      position: { x: 0, y: 0 },
      rotation: false,
    },
    {
      mesas: '4',
      ancho: '8',
      alto: '9',
      position: { x: 0, y: 0 },
      rotation: false,

    },
    {
      mesas: '5',
      ancho: '10',
      alto: '11',
      position: { x: 0, y: 0 },
      rotation: false,

    },

  ];

  // Variables para la información de la interfaz MESA 1
  cajaColumna: string[] = []; // Almacena la información mostrada en el for (en el HTML) para las columnas
  cajaAnaquel: string[] = []; // Almacena la información mostrada en el for (en el HTML) para los anaqueles
  newTorre: string = '1'; // Variable para la nueva torre
  newColumn = 1; // Variable para la nueva columna
  newAnaquel = 1; // Variable para el nuevo anaquel

  //MESA 2 - VARIABLES
  ancho: number = 0;
  largo: number = 0;
  alto: number = 0;
  codigo: string = '';
 
  cajaAncho: string [] = []; //Almacena info de la cajaAncho Mesa2
  cajaAlto: string [] = [];

  newTable: string = '1'; //Variable nueva Mesa
  newWidth = 1;
  newHeight = 1;

    //MESA 3 - VARIABLES
  anchoPalet: number = 0;
  largoPalet: number = 0;
  altoPalet: number = 0;
  
  cajaAnchoPalet: string [] = []; //Almacena info de la cajaAncho Mesa2
  cajaAltoPalet: string [] = [];
    
  newPalet: string = '1'; //Variable nueva Mesa
  newWidthPalet = 1;
  newHeightPalet = 1; 


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
    console.log(this.mostrarDetallesMesas);
    

      //MESAS
      this.mostrarDetallesMesas(); // Llama a la función para mostrar los detalles de la primera MESA al iniciar el componente
      this.llenarDatosMesas(this.newWidth, this.newHeight); // Llena la Mesa de alto y ancho al iniciar el componente
    
      //PALETS
      this.mostrarDetallesPalet();
      this.llenarDatosPalets(this.newWidthPalet, this.newHeightPalet);
  }

  // -------------------------------------------------------------------------------------------------------------------------------------//
  //MESA 2 - FUNCIONES

    // Función para llenar los arreglos de alto y ancho --Listo 
    llenarDatosMesas(ancho: number, alto: number) {
      this.cajaAncho = []; // Vacía el arreglo de ancho
      this.cajaAlto = []; // Vacía el arreglo de alto
  
      // Llena el arreglo de columnas con valores hasta el número de ancho especificado
      for (let i = 0; i < ancho; i++) {
        this.cajaAncho[i] = i.toString();
      }
  
      // Llena el arreglo de anaqueles con valores hasta el número de alto  especificado
      for (let j = 0; j < alto; j++) {
        this.cajaAlto[j] = j.toString();
      }
  
      this.agregarMesas(); // Llama a la función para agregar una torre
    } //LISTO 

    agregarMesas() { //LISTO
      if (this.newWidth !== null) {
        const nuevaMesa: Mesas = {
          mesas: this.newTable.toString(),
          ancho: this.newWidth.toString(),
          alto: this.newHeight.toString(),
          position: { x: 0, y: 0 },
          rotation: false,
      
        };
  
        // Busca si ya existe una torre con el mismo nombre
        const indiceMesaExistente = this.mesas.find(
          (mesa) => mesa.mesas === this.newTable.toString()
        );
  
        // Si la torre ya existe, actualiza la cantidad de columnas y anaqueles
        if (indiceMesaExistente) {
          indiceMesaExistente.ancho = this.newWidth.toString();
          indiceMesaExistente.alto = this.newHeight.toString();
        } else {
          // Si la torre no existe, la agrega al arreglo
          this.mesas.push(nuevaMesa);
        }
        console.log(this.mesas);
      }
    }

    onWidthChange(event: any) { //LISTO 
      const newWidthValue = parseInt(event); // Convertir el valor a número entero
      console.log('Nuevo valor de ancho:', newWidthValue); // Mostrar el nuevo valor de la columna en la consola
  
      if (newWidthValue !== this.newWidth) {
        // Verificar si el valor ha cambiado
        this.newWidth = newWidthValue; // Actualizar el valor de la columna
  
        // Agregar una pequeña pausa antes de llamar a llenarCaja()
        setTimeout(() => {
          this.llenarDatosMesas(this.newWidth, this.newHeight); // Llamar a llenarCaja solo si el valor ha cambiado
        });
      }
    }

    onHeightChange(event: any) {  //LISTO 
      const newHeightValue = parseInt(event); // Convertir el valor a número entero
      console.log('Nuevo valor de anaquel:', newHeightValue); // Mostrar el nuevo valor del anaquel en la consola
  
      if (newHeightValue !== this.newHeight) {
        // Verificar si el valor ha cambiado
        this.newHeight = newHeightValue; // Actualizar el valor del anaquel
  
        // Agregar una pequeña pausa antes de llamar a llenarCaja()
        setTimeout(() => {
          this.llenarDatosMesas(this.newWidth, this.newHeight); // Llamar a llenarCaja solo si el valor ha cambiado
        });
      }
    }

     // Función para mostrar los detalles de la torre seleccionada
  mostrarDetallesMesas() {
    if (this.newTable) {
      const mesa = this.mesas.find(
        (mesa) => mesa.mesas === this.newTable.toString()
      );
      if (mesa) {
        // Si se encuentra la torre en el arreglo, actualiza los valores de columnas y anaqueles
        this.newHeight = parseInt(mesa.alto);
        this.newWidth = parseInt(mesa.ancho);
      } else {
        // Si no se encuentra la torre, se establecen valores predeterminados
        this.newHeight = 1;
        this.newWidth = 1;
      }
    }
  }

  // Función que se llama cuando cambia el valor de la torre seleccionada
  onTableChange(event: any) {
    this.newTable = event;
    this.mostrarDetallesMesas(); // Llama a la función para mostrar los detalles de la torre
    this.llenarDatosMesas(this.newWidth, this.newHeight); // Actualiza la caja de anaqueles cuando cambia la torre seleccionada
}

//-----------------------MESA 3 --FUNCIONES ---------------------------------------------------------------------------------------------
    
  // Función para llenar los arreglos de columnas y anaqueles
  llenarDatosPalets(anchoPalet: number, largoPalet: number) {
    this.cajaAnchoPalet = []; // Vacía el arreglo de columnas
    this.cajaAltoPalet = []; // Vacía el arreglo de anaqueles

    // Llena el arreglo de columnas con valores hasta el número de columnas especificado
    for (let i = 0; i < anchoPalet; i++) {
      this.cajaAnchoPalet[i] = i.toString();
    }

    // Llena el arreglo de anaqueles con valores hasta el número de anaqueles especificado
    for (let j = 0; j <this.altoPalet; j++) {
      this.cajaAltoPalet[j] = j.toString();
    }

    this.agregarPalets(); // Llama a la función para agregar una torre
  }

 // Función que se llama cuando cambia el valor de la columna
 onAnchoChange(event: any) {
  const newAnchoValue = parseInt(event); // Convertir el valor a número entero
  console.log('Nuevo valor de columna:', newAnchoValue); // Mostrar el nuevo valor de la columna en la consola

  if (newAnchoValue !== this.altoPalet) {
    // Verificar si el valor ha cambiado
    this.altoPalet = newAnchoValue; // Actualizar el valor de la columna

    // Agregar una pequeña pausa antes de llamar a llenarDatosPalets()
    setTimeout(() => {
      this.llenarDatosPalets(this.altoPalet, this.anchoPalet); // Llamar a llenarDatosPalets solo si el valor ha cambiado
    });
  }
}

// Función que se llama cuando cambia el valor del anaquel
onLargoChange(event: any) {
  const newLargoValue = parseInt(event); // Convertir el valor a número entero
  console.log('Nuevo valor de anaquel:', newLargoValue); // Mostrar el nuevo valor del anaquel en la consola

  if (newLargoValue !== this.anchoPalet) {
    // Verificar si el valor ha cambiado
    this.anchoPalet = newLargoValue; // Actualizar el valor del anaquel

    // Agregar una pequeña pausa antes de llamar a llenarDatosPalets()
    setTimeout(() => {
      this.llenarDatosPalets(this.anchoPalet, this.altoPalet); // Llamar a llenarDatosPalets solo si el valor ha cambiado
    });
  }
}
// Función que se llama cuando cambia el valor de la torre seleccionada
onPaletChange(event: any) {
  this.newPalet = event;
  this.mostrarDetallesPalet(); // Llama a la función para mostrar los detalles de la torre
  this.llenarDatosPalets(this.newHeightPalet, this.newWidthPalet); // Actualiza la caja de anaqueles cuando cambia la torre seleccionada
}


// Función para agregar una nueva torre
agregarPalets() {
  if (this.newPalet !== null) {
    const newPalet: Palets = {
      palet: this.newPalet.toString(),
      anchoPalet: this.newWidthPalet.toString(),
      altoPalet: this.newHeightPalet.toString(),
      position:{ x: 0, y: 0 },
    
    };

    // Busca si ya existe una torre con el mismo nombre
    const indicePaletExistente = this.palet.find(
      (palet) => palet.palet === this.newPalet.toString()
    );

    // Si la torre ya existe, actualiza la cantidad de columnas y anaqueles
    if (indicePaletExistente) {
      indicePaletExistente.anchoPalet = this.newWidthPalet.toString();
      indicePaletExistente.altoPalet = this.newHeightPalet.toString();
    } else {
      // Si la torre no existe, la agrega al arreglo
      this.palet.push(newPalet);
    }
    console.log(this.palet);
  }
}

 // Función para mostrar los detalles de la torre seleccionada
 mostrarDetallesPalet() {
  if (this.newPalet) {
    const palet = this.palet.find(
      (palet) => palet.palet === this.newPalet.toString()
    );
    if (palet) {
      // Si se encuentra la torre en el arreglo, actualiza los valores de columnas y anaqueles
      this.newWidthPalet = parseInt(palet.anchoPalet);
      this.newHeightPalet = parseInt(palet.altoPalet);
    } else {
      // Si no se encuentra la torre, se establecen valores predeterminados
      this.newHeightPalet = 1;
      this.newWidthPalet = 1;
    }
  }
}
  

  

}
