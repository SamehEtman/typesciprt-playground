import { Eventing } from './models/Eventing';

const events = new Eventing();

events.on('change', () => {
  console.log('doing a change event');
});

const btnNode = document.createElement('button');
btnNode.onclick = () => {
  events.trigger('change');
};
btnNode.innerText = 'click me daddy';
document.body.appendChild(btnNode);

// events.trigger('change');
