import { Component } from '@angular/core';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss'],
})
export class MediaGridComponent {
  mediaGridData: GridCardData[] = [
    {
      imgName: 'Kivu 1 square.jpg',
      title: 'USMLOPS Kivu',
      spanText: "N'Ziwasogo",
    },
    {
      imgName: 'Kivu 2 square.jpg',
      title: 'USMLOPS Kivu',
      spanText: "N'Ziwasogo",
    },
    {
      imgName: 'Escudo de Paz 1 square.jpg',
      title: 'Operacion Escudo de Paz',
      spanText: 'Misión no oficial',
    },
    {
      imgName: 'Escudo de Paz 2 square.jpg',
      title: 'Operacion Escudo de Paz',
      spanText: 'Misión no oficial',
    },
    {
      imgName: 'Napf 1 square.png',
      title: 'USMLOPS',
      spanText: 'Napf',
    },
    {
      imgName: 'Napf 2 square.jpg',
      title: 'USMLOPS',
      spanText: 'Napf',
    },
    {
      imgName: 'Napf 4 square.jpg',
      title: 'USMLOPS',
      spanText: 'Napf',
    },
    {
      imgName: 'Rosario 1 square.jpg',
      title: 'Operación Rosario',
      spanText: 'Misión no oficial',
    },
    {
      imgName: 'Rosario 2 square.jpg',
      title: 'Operación Rosario',
      spanText: 'Misión no oficial',
    },
  ];
}
interface GridCardData {
  imgName: string;
  title: string;
  spanText: string;
}
// type GridCardData = Array<{
//   imgName: string;
//   title: string;
//   spanText: string;
// }>;
