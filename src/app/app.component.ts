import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocketService } from './shared/services/socket.service';
import { storage } from './shared/utilities/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mgm-poc';
  constructor(private socketSerice: SocketService) {}
  ngOnInit(): void {
    this.socketSerice.connect(environment.baseSocketIo, {
      extraHeaders: { Authorization: storage.get('currentAccount') },
    });
  }
}
