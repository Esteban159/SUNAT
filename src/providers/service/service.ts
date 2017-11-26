import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ServiceProvider {
    url:string = "ejemplo";//cuando se agregen los servicios aqui debe ir la direccion http

    constructor(public http: Http) {}
    
    public login(credentials) {
        if (credentials.username == null || credentials.password === null || credentials.ruc == null) {
          return Observable.throw("por favor ingrese los campos ");
        }else{
            return Observable.create(observer => {
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                console.log("ir a providers/service/service.ts para cambiar la direccion url");
                let data = {
                  ruc: credentials.ruc,
                  username: credentials.username,
                  password: credentials.password
                };
          
                this.http.post('http://localhost:8000/login/', JSON.stringify(data), {headers: headers})
                  .subscribe(dat => {
                    let response = dat.json();
                    if (response.success) {
                        window.localStorage.setItem("credentials", JSON.stringify(response));
                    }
                    observer.next(response);
                    observer.complete();
                  });
              });
        }
      }
}