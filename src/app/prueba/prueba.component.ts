import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [NgIf, NgFor,FormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {

  mesas: { mesa: string, ancho: number, largo: number }[] = [];
  codigo: string = '';
  ancho: number = 0;
  largo: number = 0;
  anchoPalet: number = 0;
  largoPalet: number = 0


  agregarMesa(codigo: string, ancho: number, largo: number) {
    this.mesas.push({ mesa: codigo, ancho: ancho, largo: largo });
    this.codigo = ''; // Limpiamos los campos después de agregar la mesa
    this.ancho = 0;
    this.largo = 0;
  }

  actualizarDimensiones(){}

  actualizarAlto() {}

  actualizarAncho() {}
}
