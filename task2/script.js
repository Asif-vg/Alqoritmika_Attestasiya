class Message{
    constructor(authorName,messageText){
        this.authorName = authorName;
        this.messageText = messageText;
        this.date = this.getCustomTime();
    }
    getCustomTime(){
        let current = new Date();
        return `${current.getHours()}:${current.getMinutes()}`
    }
    toString(){
        return `${this.date} ${this.authorName}:${this.messageText}`
    }
}

class Messnger{
    constructor(){
        this.messageHistory = [];
    }
    
    show_history(){
        this.messageHistory.forEach((message) =>{
            console.log(message.toString());
       });
    }

    send(author,text){
        const message = new Message(author,text);
        this.messageHistory.push(message);
    }
}

let messenger = new Messnger();
messenger.send("Adsiz", "Geri qalanin omrunun ilk gunudu. ona gore yasa ");
messenger.send("kimse", "yep");
messenger.show_history();