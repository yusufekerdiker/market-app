import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  path = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap((data) => {
        console.log(JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu! ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata!';
    }

    return throwError(errorMessage);
  }
}
