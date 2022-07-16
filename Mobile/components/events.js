import {EventEmitter} from 'events';

var clientEvents=new EventEmitter();

var cardEvents=new EventEmitter();

export {clientEvents, cardEvents};