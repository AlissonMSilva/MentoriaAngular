export class WebSitesDto {
  nome?:string;
  url?:string;
  descricao?:string;

  constructor(init?: Partial<WebSitesDto>)
  {
    Object.assign(this, init);
  }
}
