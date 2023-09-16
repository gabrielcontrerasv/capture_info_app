import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getAndRenderInfo(): Promise<string> {
    try {
      const { data } = await axios.get('http://localhost:4001/api/v1/store');

      if (data.length < 1) {
        return '<h1 style="text-align: center;">No hay registros en la base de datos</h1>';
      }

      const html = `
      <h1 style="text-align: center;">Datos recibidos y Almacenados</h1>
      <table border="1" style="margin: 0 auto; width: 80%; border-collapse: collapse;">
        <tr>
          <th style="background-color: #f2f2f2; font-weight: bold; padding: 8px; text-align: center;">ID de Mongo</th>
          <th style="background-color: #f2f2f2; font-weight: bold; padding: 8px; text-align: center;">Contenido</th>
        </tr>
        ${data
          .map(
            (item: { _id: string; data: string }) => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item._id}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.data}</td>
          </tr>
        `,
          )
          .join('')}
      </table>
    `;
      return html;
    } catch (error) {
      console.error('Error al obtener datos del servicio externo', error);
      throw new Error('No se pudieron obtener los datos del servicio externo');
    }
  }
}
