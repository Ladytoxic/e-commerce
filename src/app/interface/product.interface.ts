export interface Producto {
  id?: string;
  marca?: string;
  img?: string;
  nombre: string;
  precio: number;
  descripcion: string;
  categoria: string;
  stock: number;
  descuento?: number;
}
