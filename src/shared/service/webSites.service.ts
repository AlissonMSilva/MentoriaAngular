import { Injectable } from '@angular/core';
import { WebSitesApi } from '../api/webSites.api';
import { WebSitesDto } from '../models/WebSitesDto';

@Injectable({
  providedIn: 'root'
})
export class WebSitesService {

constructor(private _webSitesApi:WebSitesApi) { }

  public buscarWebSites():WebSitesDto[]
  {
    let webSites = this._webSitesApi.buscarWebSites();
    return webSites;
  }

}
