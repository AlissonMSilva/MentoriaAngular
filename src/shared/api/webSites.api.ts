import { Injectable } from '@angular/core';
import { WebSitesDto } from '../models/WebSitesDto';

@Injectable({
  providedIn: 'root'
})
export class WebSitesApi {

constructor() { }


  public buscarWebSites():WebSitesDto[]
  {
    let webSiteDto: WebSitesDto[] = [];

    webSiteDto.push({nome:'Angular.io', url:'https://angular.io', descricao:'Documentação oficial do Angular, com guias, tutoriais e exemplos'});
    webSiteDto.push({nome:'Angular Blog', url:'https://blog.angular.io', descricao:'Blog oficial do Angular, com atualizações, anúncios e artigos'});
    webSiteDto.push({nome:'Scotch.io', url:'https://scotch.io/tag', descricao:'Artigos, tutoriais e dicas sobre desenvolvimento Angular'});
    webSiteDto.push({nome:'AngularInDepth', url:'https://indepth.dev/tag/angular', descricao:'Artigos técnicos aprofundados sobre Angular'});
    webSiteDto.push({nome:'Angular University', url:'https://blog.angular-university.io', descricao:'Recursos educacionais, tutoriais e cursos sobre Angular'});

    return webSiteDto;
  }


}
