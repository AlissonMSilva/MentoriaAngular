import { Component, Input, OnInit } from '@angular/core';
import { WebSitesDto } from '../../shared/models/WebSitesDto';
import { WebSitesService } from 'src/shared/service/webSites.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{
  @Input() valorPesquisadoWebSite: string = '';
  public valorFiltradoCache: string = '';
  public webSitesFiltrados: WebSitesDto[] = [];
  public webSiteDto: WebSitesDto[] = [];

  constructor(private _webSiteService: WebSitesService)
  {
    this.webSiteDto = this._webSiteService.buscarWebSites();
  }

  ngOnInit(){
    //deve iniciar o skeleton

  }

  ngOnChanges()
  {
    if(this.valorPesquisadoWebSite != '' && this.valorPesquisadoWebSite != this.valorFiltradoCache)
    {
      console.log("Filtrar por valor de pesquisa");
      this.FiltraListaSitesDisponiveis();
    }

  }

  public FiltraListaSitesDisponiveis()
  {
    //inicia o Skeleton
    this.valorFiltradoCache = this.valorPesquisadoWebSite;
    this.webSitesFiltrados = this.webSiteDto.filter(x => x.nome?.toLocaleLowerCase().includes(this.valorPesquisadoWebSite.toLocaleLowerCase()) || x.descricao?.toLocaleLowerCase().includes(this.valorPesquisadoWebSite.toLocaleLowerCase()));
    // apos xtime para Skeleton
  }
}
