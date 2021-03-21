import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  //Create the authorization to be able to make the requests against the api of Unsplash.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID HfShdtTT-I55evG98MofLILhoZUD6pYTgSDGhAefHwU'
      })
    });
    return next.handle(authReq);
  }
}
