import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  private backendUrl: string = 'http://localhost:3333/api';

  constructor(
    private http: HttpClient) { }

  listComments(callback: any): void {
    let apiURL = this.backendUrl + '/comments'
    this.http.get(apiURL)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise()
      .then(callback);
  }

  postComment(campos: object) {
    return this.http
      .post(this.backendUrl + '/comments', campos)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  postContact(campos: object) {

    return this.http
      .post(this.backendUrl + '/contact', campos)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  errorHandling (err) {
    console.log(err);
    alert('Erro na transação!');

    throw new Error;
  }

  list(callback: any, errorCallback?: any) {
    let apiURL = this.backendUrl + '/comments'
    this.http.get(apiURL)
      // .pipe(
      //   catchError(this.handleError)
      // )
      .toPromise()
      .then(callback)
      .catch(errorCallback);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    console.log(error);
    
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    

    return new Observable();
  };
}
