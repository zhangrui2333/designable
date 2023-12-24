import { EventEmitter } from 'events';
import { createContext } from 'react';
export const EventContext: React.Context<any> = createContext<any>(null);
export const eventBus: EventEmitter = new EventEmitter();
