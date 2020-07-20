import { NewMessage } from './new-message';
import { Db } from './db';
import { Message } from './message.model';
export class App {
    db: Db;
    constructor() {
        this.start();
    }
    start(): void {
        this.db = new Db();
        const newMessage = new NewMessage(this.onNewMessage);
    }
    onNewMessage = (name: string, message: string): void => {
        
      
        this.db.sendMessage({
            name,
            message,
            date: Date.now()
        });
    };
    // renderMessages = (messages: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
    //     const chat = document.querySelector('#chat');
    //     chat.innerHTML= '';
    //     const chatList: Message[] = [];
        
    //     messages.forEach(msg => {
    //         const id = msg.id;
    //         const data = msg.data();
    //         console.log(data);
    //         this.renderSingleMessage(data.name, data.message);
    //     });
    renderMessages = (messages: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
        const chat = document.querySelector('#chat');
        chat.innerHTML = '';
        const chatList: Message[] = [];
        messages.forEach(msg => {
            const id = msg.id;
            const data = msg.data();
            const chat: Message = {
                name: data.name,
                message: data.message,
                date: data.date
            };
            chatList.push(chat);
        });
        chatList.sort((a, b) => a.date - b.date);
        for (const msg of chatList) {
            this.renderSingleMessage(msg);
        }
    };

   
    // renderSingleMessage(name: string, message: string){
    //     const template = `
    //     <div class="message self">
    //     <div class="name">${name}</div>
    //     <div class="content">${message}</div>
    //     </div>
    //     `;
    //     const chat = document.querySelector('#chat');
    //     chat.innerHTML += template;

    // }
    renderSingleMessage(msg: Message): void {
        const name = msg.name;
        const message = msg.message;
        const date = new Date(msg.date);
        const template = `
        <div class="message">
        <div class="name">${name}</div>
        <div class="content">${message}</div>
        <div class="content">${date.toLocaleString()}</div>
        </div>
        `;
        const chat = document.querySelector('#chat');
        chat.innerHTML += template;
    }

}
