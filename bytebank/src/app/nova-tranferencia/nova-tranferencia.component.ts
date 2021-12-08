import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaCoponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 153;

  transferir() {
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos()
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
