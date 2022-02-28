import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  name = 'kanishk'

  constructor(private httpClient: HttpClient) { }

  public getAvatarList():Observable<any> {
    return this.httpClient.get("assets/data.json")
  }
}
