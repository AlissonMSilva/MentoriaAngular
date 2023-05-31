import { Component, Input, OnInit } from '@angular/core';
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
  public webSitesDto: WebSitesDto[] = [];
  public sitesFiltrados: any;

  ngOnInit(): void {
    this.GerarListaSites();
    throw new Error('Method not implemented.');
  }

  public GerarListaSites()
  {
    this.webSitesDto = [
      {nome:'Angular.io', url:'https://angular.io', descricao:'Documentação oficial do Angular, com guias, tutoriais e exemplos'},
      {nome:'Angular Blog', url:'https://blog.angular.io', descricao:'Blog oficial do Angular, com atualizações, anúncios e artigos'},
      {nome:'Scotch.io', url:'https://scotch.io/tag', descricao:'Artigos, tutoriais e dicas sobre desenvolvimento Angular'},
      {nome:'AngularInDepth', url:'https://indepth.dev/tag/angular', descricao:'Artigos técnicos aprofundados sobre Angular'},
      {nome:'Angular University', url:'https://blog.angular-university.io', descricao:'Recursos educacionais, tutoriais e cursos sobre Angular'},
    ]
  }

  public FiltraListaSitesDisponiveis()
  {
    this.sitesFiltrados = this.webSitesDto.filter(x => x.nome.includes(this.textoPesquisa) || x.descricao.includes(this.textoPesquisa.toLowerCase()));
  }

  public MonstrarDiv()
  {
    this.FiltraListaSitesDisponiveis();
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
