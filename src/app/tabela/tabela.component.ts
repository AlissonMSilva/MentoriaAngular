import { Component, Input } from '@angular/core';
import { WebSitesDto } from '../Dto/WebSitesDto';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  @Input() webSites: WebSitesDto[] = [];
  public siteBuscados: WebSitesDto[] = [];

  ngOnInit(){
    this.FiltrarListaSitesDisponiveis();
  }

  public FiltrarListaSitesDisponiveis()
  {
    console.log("texto");
    this.siteBuscados.splice(0, this.siteBuscados.length);
    // this.siteBuscados = this.webSites.filter(x => x.nome.includes(textoPesquisa));
  }

  enviarValor() {
    console.log("Recibi o valor!");

  }
}
