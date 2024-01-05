import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private http: HttpClient) {}

  creerEmploye(model) {
    return this.http.post(environment.baseAPI + '/creer-employe', model);
  }

  listEmployes() {
    return this.http.get(environment.baseAPI + '/employes');
  }
}
