import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of } from 'rxjs';
import { storage } from 'src/app/shared/utilities/storage';
import { environment } from 'src/environments/environment';

// export interface IDataLogin {}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUserSubject = new BehaviorSubject<any>([]);
  public currentAccount$ = this.currentUserSubject.asObservable();
  public loading: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login(body: { username: string; password: string }) {
    this.loading = true;
    storage.clear();
    this.httpClient.post(`${environment.baseUrl}/user/login`, body).subscribe(
      (x: any) => {
        this.loading = false;
        this.currentUserSubject.next(x.data.token);
        this.toastr.success('Login successfully!');
        environment.production
          ? this.router.navigate(['task/test'])
          : this.router.navigate(['task/demo']);
      },
      (error) => {
        this.loading = false;
        this.toastr.error(error.error.message);
        return of();
      }
    );
  }
}

export interface IError {
  code: string;
  errors: Array<{
    field: string;
    description: string;
  }>;
  message: string;
}
