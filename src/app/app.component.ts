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
      extraHeaders: { Authorization:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1YW5nMTMiLCJpYXQiOjE2NTk1OTYzNTh9.hJ62NT3YKEuaCQL-w7ESW_E8oIUs1boCsvK0nbW4ndM'|| storage.get('currentAccount') },
    });
  }
}
