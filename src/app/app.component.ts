import { Component, OnInit } from '@angular/core';
import { WebSitesDto } from './Dto/WebSitesDto';
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
  public falhaAoPesquisar = false;
  public tabelaSites!: TabelaComponent;

  ngOnInit(): void {
    this.tabelaSites.webSites;
    throw new Error('Method not implemented.');
  }

  public MonstrarDiv()
  {
    if(this.textoPesquisa)
      this.tabelaSites.FiltrarListaSitesDisponiveis();

    if(this.textoPesquisa && !this.showDiv)
    {
      this.showDiv = true;
      this.falhaAoPesquisar = false;
    }else if(!this.textoPesquisa)
    {
      this.showDiv = false;
      this.falhaAoPesquisar = true;
    }

  }
}
