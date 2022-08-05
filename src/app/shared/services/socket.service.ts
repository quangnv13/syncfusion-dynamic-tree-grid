import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export enum ESocketStatus {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socketIO!: Socket;
  statusSubject = new Subject<ESocketStatus>();
  status$ = this.statusSubject.asObservable();

  constructor() {}

  connect(uri: string, options: Partial<ManagerOptions & SocketOptions>) {
    this.socketIO = io(uri, options);
    this.socketIO.on('connect', () => {
      this.statusSubject.next(ESocketStatus.CONNECTED);
    });
    this.socketIO.on('connect_error', () => {
      this.statusSubject.next(ESocketStatus.ERROR);
    });
    this.socketIO.on('disconnect', () => {
      this.statusSubject.next(ESocketStatus.DISCONNECTED);
    });
  }

  disconnect() {
    this.socketIO.disconnect();
  }

  listen<T>(event: string) {
    const subject = new Subject<T>();
    this.socketIO.on(event, (data: T) => {
      subject.next(data);
    });
    return subject.asObservable();
  }

  emit<T>(event: string, data: T) {
    this.socketIO.emit(event, data);
  }
}
