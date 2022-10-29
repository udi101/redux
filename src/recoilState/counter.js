import {atom, selector, selectorFamily} from "recoil";

export const counterState = new atom({
    key: 'counter',
    default: 0,
    effects: [({onSet, setSelf}) => {
        onSet((newCounter, oldCounter) => {
            console.log(`The new counter is ${newCounter}, the old one is ${oldCounter}`);
            setSelf(newCounter - 1);
        });
    }]
});

export const showCounterState = new atom({
    key: 'showCounter',
    default: true
})

export const personState = new atom({
    key: 'person',
    default: {name:'Udi', last:'Mazor'},
    effects: [({ onSet, selfSet}) => {
        onSet((newPerson) => ({name:'Mazal', last:'Mazor'}));
    }]
});

// Selectors

export const numCountState = selector({
    key: 'numCount',
    get: ({get}) => {
        const counter = get(counterState);
        return counter + 1;
    },
    set: () => {
    }
})

export const mulByValQuery = selectorFamily({
    key: 'userName',
    get: (userID) => ({get}) => {
        const counter = get(counterState);
        return counter * userID;
    }
});
