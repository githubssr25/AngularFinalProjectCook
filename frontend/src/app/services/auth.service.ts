import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, tap } from 'rxjs';
import { FullUserDto } from '../models/full-user.dto';
import { CredentialsDto } from '../models/credentials.dto';
import { UserRequestDto } from '../models/user-request.dto';
import { CompanyDto } from '../models/company.dto';
import { createUserDto } from '../models/createUserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/users';
    private currentUser: FullUserDto | null = null;
  
    constructor(private http: HttpClient) {}
  
    login(credentials: CredentialsDto): Observable<FullUserDto> {
      return this.http.post<FullUserDto>(`${this.apiUrl}/login`, credentials)
        .pipe(
          tap((user: FullUserDto) => this.currentUser = user),
          catchError(this.handleError)
        );
    }
  
    register(userRequest: createUserDto): Observable<any> {
      return this.http.post(`${this.apiUrl}/create`, userRequest)
        .pipe(catchError(this.handleError));
    }
  
    getCurrentUser(): FullUserDto | null {
      return this.currentUser;
    }
  
    private handleError(error: any) {
      console.error('An error occurred', error);
      return throwError(() => new Error('Something went wrong; please try again later.'));
    }
  }