class EventEmitter {
    subscribers = {};
    constructor() {

    }
    pub(event, data) {
        if (this.subscribers[event]) {
            console.log(this.subscribers)
            this.subscribers[event].forEach(subscriber => {
                subscriber(data);
            });
        }
    }
    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }
    unsubscribe(event) {
        if (this.subscribers[event]) {
            delete this.subscribers[event];
        }
        console.log(this.subscribers);
    }
}
const logTemperature = (temp) => {
    console.log(temp);
}
const textLog = (text) => {
    console.log(text);
}
const eventemitter = new EventEmitter();
eventemitter.subscribe('logTemperature', logTemperature);
eventemitter.pub('logTemperature', { temperature: 20 });
eventemitter.subscribe('textLog', textLog);
eventemitter.pub('logTemperature', { text: 'I am new text' });
eventemitter.unsubscribe('textLog');
