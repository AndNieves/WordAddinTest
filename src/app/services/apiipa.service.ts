import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Reference} from '../entities/reference';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiipaService {
  private apiUrl = 'http://localhost:8082/references';

  constructor(private http: HttpClient) {
  }

  getReferences(): Observable<Reference[]> {
    console.log('heY!');

    this.http
      .get(this.apiUrl)
      .subscribe(data => console.log(data));

    return this.http
      .get<Reference[]>(this.apiUrl);
  }
}
