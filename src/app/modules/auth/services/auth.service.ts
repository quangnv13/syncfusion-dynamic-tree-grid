import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { storage } from 'src/app/shared/utilities/storage';
import { environment } from 'src/environments/environment';

// export interface IDataLogin {}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  private setCurrentAccount(token: string) {
    if (token) {
      storage.set('currentAccount', token);
    }
  }

  login(body: { username: string; password: string }) {
    storage.clear();
    this.httpClient.post(`${environment.baseUrl}/user/login`, body).subscribe(
      (x: any) => {
        this.setCurrentAccount(x.data.token);
        this.router.navigate(['task']);

        this.toastr.success('Login successfully!');
      },
      (error) => {
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
