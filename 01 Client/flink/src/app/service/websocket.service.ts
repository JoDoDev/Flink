import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs/Rx';
import {WebsocketMessage} from "../model/websocketmessage.model";
@Injectable()
export class WebsocketService {

  private websocketConnection: WebSocket;
  private messageObservable: Observable<WebsocketMessage>;

  constructor() {
    this.websocketConnection = new WebSocket('wss://echo.websocket.org');
    this.messageObservable = Observable.create(
      (observer: Observer<MessageEvent>) => {
        this.websocketConnection.onmessage = observer.next.bind(observer);
        this.websocketConnection.onerror = observer.error.bind(observer);
        this.websocketConnection.onclose = observer.complete.bind(observer);
        return this.websocketConnection.close.bind(this.websocketConnection);
      }
    );
  }
}
