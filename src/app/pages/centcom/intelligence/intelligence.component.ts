import { Component } from '@angular/core';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.scss'],
})
export class IntelligenceComponent {
  intelligenceRecord: missionRecord[] = [
    {
      title: '22/06/2023',
      text: 'Con la ayuda de 7 unidades se realizo una operacion al norte a las afueras del aeropuerto, donde la resistencia fue alta, nos encontramos con puestos de carretera y patrullas en todo el sector norte, nuestros vehiculos aereos fueron atacados por unidades antiaereas, las cuales fueron neutrailizadas con movimientos sable y artilleria. sable logro aproximarse 1.2 kms a su objetivo inicial para luego iniciar una retirada ordenada hacia las montañas, se reporto 1 baja durante  el tiroteo inicial las imagenes del evento presentan flechas al norte , en ralidad deberian apuntar al sur',
    },
  ];
}

type missionRecord = {
  title: string,
  text: string
}