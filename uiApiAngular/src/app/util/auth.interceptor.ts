import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{

  shared: SharedService;

  constructor(){
    this.shared = SharedService.getInstance();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest: any;

    if(this.shared.isLoggdIn()){
      authRequest = req.clone({
        setHeaders: {
          'auth': this.shared.token
        }
      });
      return next.handle(authRequest);
    }else{
      return next.handle(req);
    }

  }


}
