import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../interface/user/user.model'; // ajusta esta ruta
import { API_BASE_URL } from '../../tokens/api-base-url.token';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);



  get(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

}
