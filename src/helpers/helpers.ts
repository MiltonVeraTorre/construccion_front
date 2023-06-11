export function formatearFecha(fecha: string): string {
  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
  return new Date(fecha).toLocaleDateString("es-ES", opciones);
}