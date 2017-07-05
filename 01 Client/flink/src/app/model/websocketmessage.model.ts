import {MessageTopic} from './messagetopic.enum'

export class WebsocketMessage {
  constructor(
    public id: string,
    public topic: MessageTopic,
    public data: any
  ) {}
}
