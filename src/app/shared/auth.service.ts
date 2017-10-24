import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  /* Le BehaviorSubject est un type de Subject particulier
   de RxJs qui a constamment une valeur, ce qui fait
   que lorsqu'on se subscribe dessus, on recevra la
   dernière valeur qui a été poussée dans le flux.
   Ce type de subject a besoin d'une valeur par défaut
   au moment de son instanciation, on pourra ensuite
   lui pousser des valeurs avec la méthode .next(value)

  */
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  urlAPI:string = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { 
    //Quand le service est créé, il va vérifier dans le localStorage si un user s'y trouve déjà, et si oui, il le récupère et le pousse dans le flux de user
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }


  login(username:string,pass:string):Observable<boolean> {
    
    return this.http.get<User[]>(this.urlAPI+'?username='+username+'&password='+pass)
    .map((users) => {
      if(users.length === 1) {
        //On stock le user en localStorage (c'est pas 
        //très très bien de faire ça, en soit on voudrait
        //plutôt stocker juste une clef token en localStorage et pas tout le user)
        localStorage.setItem('user', JSON.stringify(users[0]));
        //On pousse le user dans le flux de User qu'est notre BehaviorSubject
        this.user.next(users[0]);
        return true;
      }
      return false;
    });
  }

  logout():void {
    //Au logout, on supprime le user des localStorage
    localStorage.removeItem('user');
    this.user.next(null);
  }

  signup(user:User): Observable<User> {
    return this.http.post<User>(this.urlAPI, user);
  }

  getByUsername(username:string):Observable<User[]> {
    return this.http.get<User[]>(this.urlAPI+'?username='+username);
  }

}
