const form = document.getElementById('form');
const send = document.getElementById('send');
let messageBox = document.getElementById('messageBox');
const history = document.querySelector('.history');

class Message {
    constructor (authorName,messageText) {
        this.authorName = authorName;
        this.messageText = messageText;
        this.date = this.gettime();
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toHtml() {
        return `<p>${this.date} ${this.authorName}: ${this.messageText}</p><br/>`;
    }
}

class Messenger {
    messagesHistory = [];
    
    show_history() {
        history.innerHTML = '';
        console.log(this.messagesHistory);
        this.messagesHistory.map(message => {
            const p = document.createElement('p');
            p.innerHTML = message.toHtml();
            history.append(p);
        });
    }

    send(author, text) {
        const message = new Message(author, text);
        this.messagesHistory.push(message);
    }
}

const messenger = new Messenger();

send.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    messenger.send(String(formData.get('author')), String(formData.get('text')));
    messageBox.value = '';
    messenger.show_history();
});
