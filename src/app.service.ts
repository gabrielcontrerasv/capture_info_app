import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return `
    <h1 style="text-align: center;">Datos recibidos y Almacenados</h1>
    <table border="1" style="margin: 0 auto; width: 80%; border-collapse: collapse;">
      <tr>
        <th style="background-color: #f2f2f2; font-weight: bold; padding: 8px; text-align: center;">ID de Mongo</th>
        <th style="background-color: #f2f2f2; font-weight: bold; padding: 8px; text-align: center;">Contenido</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">valor desde la base de datos</td>
      </tr>
    </table>
  `;
  }
}
