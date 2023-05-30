import { Component } from '@angular/core';
import { WebSitesDto } from '../Dto/WebSitesDto';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  public webSites: WebSitesDto[] = [];
  public siteBuscados: WebSitesDto[] = [];

  ngOnInit(){
    this.GerarListaSites();
    this.FiltrarListaSitesDisponiveis();
  }

  public GerarListaSites()
  {
    this.webSites = [
      {nome:'Angular.io', url:'https://angular.io', descricao:'Documentação oficial do Angular, com guias, tutoriais e exemplos'},
      {nome:'Angular Blog', url:'https://blog.angular.io', descricao:'Blog oficial do Angular, com atualizações, anúncios e artigos'},
      {nome:'Scotch.io', url:'https://scotch.io/tag', descricao:'Artigos, tutoriais e dicas sobre desenvolvimento Angular'},
      {nome:'AngularInDepth', url:'https://indepth.dev/tag/angular', descricao:'Artigos técnicos aprofundados sobre Angular'},
      {nome:'Angular University', url:'https://blog.angular-university.io', descricao:'Recursos educacionais, tutoriais e cursos sobre Angular'},
    ]
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
