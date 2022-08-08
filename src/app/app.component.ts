import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/auth/services/auth.service';
import { SocketService } from './shared/services/socket.service';
import { storage } from './shared/utilities/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mgm-poc';
  constructor(
    private socketSerice: SocketService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authService.currentAccount$.subscribe((token) => {
      token.length > 0
        ? this.connectSocketIO(token)
        : environment.production ? this.router.navigate(['auth/login']): this.connectSocketIO('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1YW5nMTIzIiwiaWF0IjoxNjU5NjA3ODI1fQ.1jwJ2zOKx_82wqNfMkG8ki57JrBu6-0Ye3KdeWps8_0');
    });
  }

  connectSocketIO(token: string) {
    this.socketSerice.connect(environment.baseSocketIo, {
      extraHeaders: {
        Authorization: token,
      },
    });
  }
}
