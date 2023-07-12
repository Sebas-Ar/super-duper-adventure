import { atom } from 'recoil'

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'Este es el estado inicial del atomo' // default value (aka initial value)
})
