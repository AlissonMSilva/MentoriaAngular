export class WebSitesDto {
  nome:string;
  url:string;
  descricao:string;

  constructor(nome: string, url: string, descricao: string)
  {
    this.nome = nome;
    this.url = url;
    this.descricao = descricao;
  }
}
