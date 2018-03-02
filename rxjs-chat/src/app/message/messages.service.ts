import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  // tslint:disable-next-line:callable-types
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {

  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  // `messages` is a stream that emits an array of the most up to date messages
  messages: Observable<Message[]>;

 /* `updates` receives _operations_ to be applied to our `messages`
  it's a way we can perform changes on *all* messages (that are currently stored in `messages`)*/
 updates: Subject<any> = new Subject<any>();

 // action streams
 create: Subject<Message> = new Subject<Message>();
 markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      // watch the updates and accumulate operations on the messages
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
               return operation(messages);
             },
            initialMessages)
      // make sure we can share the most recent list of messages across anyone
      // who's interested in subscribing and cache the last known list of
      // messages
      .publishReplay(1)
      .refCount();

      this.create.map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      }).subscribe(this.updates);
    this.newMessages.subscribe(this.create);
   }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages
      .filter((message: Message) => {
        // belongs to this thread
        return (message.thread.id === thread.id) &&
          // and isn't authored by this user
          (message.author.id !== user.id);
      });
  }

}


