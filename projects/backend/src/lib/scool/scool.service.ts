import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoolService {

  constructor(private http: HttpClient) { }

  public getXxxxxx(): Observable<{}> {
    return this.http.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=stripe');
    // return from([1]);
  }
}
