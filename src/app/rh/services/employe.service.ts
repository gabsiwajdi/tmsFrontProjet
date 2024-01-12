import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Employe } from '../classes/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private http: HttpClient) {}

  creerEmploye(model) {
    return this.http.post(environment.baseAPI + '/creer_employe', model);
  }

  listEmployes() {
    return this.http.get(environment.baseAPI + '/employes');
  }

  //supprimer un employe
  supprimerEmploye(formData) {
    return this.http
      .delete(environment.baseAPI + '/supprimer-employe', {
        params: {
          idEmploye: formData,
        },
        observe: 'body',
      })
      .pipe(catchError(this.gererErreur));
  }

  // filtre liste Employe
  filtrerEmploye() {}

  // modifier Employe

  modifierEmploye(model: any) {
    return this.http
      .put(environment.baseAPI + '/modifier-employe', model)
      .pipe(catchError(this.gererErreur));
  }

  //get employe par id
  employById(id: any) {
    return this.http
      .get(environment.baseAPI + '/employe', {
        params: {
          idEmployee: id,
        },
        observe: 'body',
      })
      .pipe(catchError(this.gererErreur));
  }

  // filtre

  /*  filtreEmploye(
    nom: any,
    prenom: any,
    posteEmploye: any,
    categoriePermis: any,
    ville: any
  ) {
    return this.http
      .get<Employe[]>(environment.baseAPI + '/filtre-employe', {
        params: {
          nom: nom,
          prenom: prenom,
          posteEmploye: posteEmploye,
          categoriePermis: categoriePermis,
          ville: ville,
        },
        observe: 'body',
      })
      .pipe(catchError(this.handleError));
  }
 */
  filtre(
    champ1: string,
    valeur1: string,
    champ2: any,
    valeur2: any,
    champ3: any,
    valeur3: any,
    champ4: any,
    valeur4: any,
    champ5: any,
    valeur5: any
  ) {
    return this.http
      .get(environment.baseAPI + '/filtre-employe', {
        params: {
          Champ1: champ1,
          Valeur1: valeur1,
          Champ2: champ2,
          Valeur2: valeur2,
          Champ3: champ3,
          Valeur3: valeur3,
          Champ4: champ4,
          Valeur4: valeur4,
          Champ5: champ5,
          Valeur5: valeur5,
        },
        observe: 'body',
      })
      .pipe(catchError(this.handleError));
  }

  // handelError function
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  //fonction gerer erreur
  private gererErreur(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error(
        'Une erreur s' + "'" + 'est produite:',
        error.error.message
      );
    } else {
      console.error(
        `Code renvoyé par le backend ${error.status}, ` +
          `le contenu était: ${error.error}`
      );
    }
    return throwError('Veuillez réessayer plus tard.');
  }
}
