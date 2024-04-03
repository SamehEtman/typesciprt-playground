type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] | undefined } = {};

  on = (eventName: string, callback: Callback): void => {
    let eventHandlers = this.events[eventName];
    if (eventHandlers instanceof Array) {
      eventHandlers.push(callback);
    } else {
      eventHandlers = [callback];
    }
    this.events[eventName] = eventHandlers;
  };

  trigger = (eventName: string): void => {
    const eventHandlers = this.events[eventName] || [];
    for (const eventHandler of eventHandlers) {
      eventHandler();
    }
  };
}
