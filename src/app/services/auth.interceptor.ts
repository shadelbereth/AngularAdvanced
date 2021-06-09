import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ headers: req.headers.set('Authorization', 'sophroch') });
    let started = new Date().getMilliseconds();
    return next.handle(authReq).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        let elapsedTime = new Date().getMilliseconds() - started;
        console.log(`Request time was ${elapsedTime} ms`);
      }
    }));
  }
}
