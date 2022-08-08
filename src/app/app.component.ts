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
        : this.router.navigate(['auth/login']);
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
