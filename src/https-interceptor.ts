import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clonar la solicitud y cambiar el protocolo a HTTPS
    const secureReq = req.clone({
      url: req.url.replace(/^http:/, 'https:')
    });
    return next.handle(secureReq);
  }
}
