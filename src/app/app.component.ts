import { Component, Input, OnInit } from '@angular/core';
import { WebSitesDto } from '../shared/models/WebSitesDto';
import { TabelaComponent } from './tabela/tabela.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'GUIANDGLE';
  public showDiv: boolean = false;
  public textoPesquisa = "";
  public valorPesquisado = "";
  public falhaAoPesquisar = false;
  public webSitesDto: WebSitesDto[] = [];
  public sitesFiltrados: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public MonstrarDiv()
  {
    if(this.textoPesquisa && !this.showDiv)
    {
      this.showDiv = true;
      this.falhaAoPesquisar = false;

    }else if(!this.textoPesquisa)
    {
      this.showDiv = false;
      this.falhaAoPesquisar = true;
    }
    this.valorPesquisado = this.textoPesquisa;
  }
}
