import {
    speak,
    display
} from "../main/functions.js";

export let control = {
    'scroll *tag': (variable) => {
        display('scrolling ' + variable)
        speak('scrolling ' + variable)
        switch (variable) {
            case 'down':
                window.scrollBy(0, 300);
                break;
            case 'up':
                window.scrollBy(0, -300);
                break;
            case 'down faster':
                window.scrollBy(0, 900);
                break;
            case 'up faster':
                window.scrollBy(0, -900);
                break;
            case 'to top':
                window.scrollTo(0, 0);
                break;
            case 'to bottom':
                window.scrollTo(0, document.body.scrollHeight);
                break;
            default:
                break;
        }
    },
    'click on *tag': (variable) => {
        speak(variable + ' clicked')
        display(variable + ' clicked')
        switch (variable) {
            case 'home':
                document.getElementById('pome').click()
                break;
            case 'reload':
                document.getElementById('reload').click()
                break;
            case 'what i do':
                document.getElementById('serv').click()
                break;
            case 'skills':
                document.getElementById('sk').click()
                break;
            case 'testimonials':
                document.getElementById('test').click()
                break;

            default:
                break;
        }
    },
}