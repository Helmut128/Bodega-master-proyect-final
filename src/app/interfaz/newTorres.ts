export interface Torres {
  torres: string;
  columnas: any;
  anaqueles: string;
  position: { x: number; y: number };
  rotation: boolean; // Nueva propiedad para almacenar la rotación
  location?: { x: number; y: number };
}
