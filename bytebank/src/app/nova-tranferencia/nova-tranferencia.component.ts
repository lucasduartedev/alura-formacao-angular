import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaCoponent {

  valor: number = 0;
  destino: number = 153;

  transferir() {
    console.log(' ===== Botao transferir! ===== ');
    console.log(`Valor: ${this.valor}`)
    console.log(`Destino: ${this.destino}`)
  }
}
