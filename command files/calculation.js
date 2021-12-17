import {
    speak,
    display
} from '../main/functions.js'

export var calculate = {
    'calculate *tag': (vari) => {
        if (vari.includes('+')) {
            vari = vari.toLowerCase();
            vari = vari.replace('plus', '+');
            let splitted = vari.split('+');
            let first = parseInt(splitted[0]);
            let second = parseInt(splitted[1])
            let result = (first + second);
            speak(`the ${vari} is ${result}`)
            display(`the ${vari} is ${result}`)
        } else if (vari.includes('-')) {
            vari = vari.toLowerCase();
            vari = vari.replace('minus', '-');
            let splitted = vari.split('-');
            let first = parseInt(splitted[0]);
            let second = parseInt(splitted[1])
            let result = (first - second);
            speak(`the ${vari} is ${result}`)
            display(`the ${vari} is ${result}`)

        } else if (vari.includes('x')) {
            vari = vari.toLowerCase();
            vari = vari.replace('multiply', 'x');
            vari = vari.replace('into', 'x');
            let splitted = vari.split('x');
            let first = parseInt(splitted[0]);
            let second = parseInt(splitted[1])
            let result = (first * second);
            speak(`the ${vari} is ${result}`)
            display(`the ${vari} is ${result}`)

        } else if (vari.includes('/')) {
            vari = vari.toLowerCase();
            vari = vari.replace('devided', '/');
            vari = vari.replace('devide', 'x');
            let splitted = vari.split('/');
            let first = parseInt(splitted[0]);
            let second = parseInt(splitted[1])
            let result = (first / second);
            speak(`the ${vari} is ${result}`)
            display(`the ${vari} is ${result}`)

        }
    },
    'hello world': () => {
        alert('hello fahad vai')
    }
}