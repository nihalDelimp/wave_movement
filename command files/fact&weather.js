import {
    weather,
    wear,
    user_said,
    display,
    speak
} from '../main/functions.js'

export const weather_fact = {
    'weather update *tag': (cityname) => {
        weather(cityname)

    },

    'current bitcoin price': () => {

        var obj;
        try {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(res => res.json())
                .then(data => obj = data.bpi.USD.rate)
                .then(() => {
                    speak(`the current bitcoin price is ${obj} dollars`)
                    display(`the current bitcoin price is ${obj} dollars`)
                    user_said()

                })

        } catch (error) {
            speak('something went wron try again')

        }
    },
    'my ip address': () => {
        var obj;
        try {
            fetch('https://api.ipify.org/?format=json')
                .then(res => res.json())
                .then(data => obj = data.ip)
                .then(() => {
                    user_said()

                    speak(`your ip adress is ${obj}`)
                    display(`your ip adress is ${obj}`)
                })

        } catch (error) {
            speak('something went wron try again')

        }
    },
    'random amazing fact': () => {
        var obj;
        fetch('https://uselessfacts.jsph.pl//random.json')
            .then(res => res.json())
            .then(data => console.log(obj = data.text))
            .then(() => {
                speak(`ok, ${obj}`)
                user_said()

            })
    },
    'i am feeling bored': () => {
        var obj;
        fetch('https://www.boredapi.com/api/activity')
            .then(res => res.json())
            .then(data => console.log(obj = data.activity))
            .then(() => {
                speak(`you should ${obj}`)
                user_said()
                display(`you should ${obj}`)

            })
    },
    'what is the time': () => {
        var dateWithouthSecond = new Date();
        let tem = dateWithouthSecond.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        });
        speak('the time is ' + tem)
        display('the time is ' + tem)
    },
    'whats *tag': (def) => {
        if(def=="the latest neom news" || def=="the latest neon news"){
            speak('here is neom news')
            window.open(`https://www.neom.com/en-us/newsroom`, 'popup', 'width=900,height=600')
        }
        else{
            var obj;
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + def)
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                } else {
                    speak('i don\'t know what is ' + def + '. let me search it on google')
                    setTimeout(() => {
                        window.open('https://www.google.com/search?q=' + def, "popup", '"width=900,height=600"');
                    }, 4000);
                }
            })
            .then(data => obj = data[0].meanings[0].definitions[0].definition)
            .then(() => {
                // speak(`The ${def} is ${obj}`)
                if (obj.split('.')[1] && obj.split('.')[1] !== '') {
                    speak(obj.split('.')[0])
                    display(obj.split('.')[0])
                } else {
                    user_said()
                    speak(obj)
                    display(obj)

                }
                // display(`The ${def} is ${obj}`)
                user_said()

            }).catch(err => setTimeout(() => console.clear()))
        }
    },
    'definition of *tag': (def) => {

        var obj;
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + def)
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                } else {
                    speak('i don\'t know what is ' + def + '. let me search it on google')
                    setTimeout(() => {
                        window.open('https://www.google.com/search?q=' + def, "popup", '"width=900,height=600"');
                    }, 4000);



                }
            })
            .then(data => obj = data[0].meanings[0].definitions[0].definition)
            .then(() => {
                // speak(`The ${def} is ${obj}`)
                if (obj.split('.')[1] && obj.split('.')[1] !== '') {
                    speak(`the definition of ${def} is ${obj.split('.')[0]}`)
                    display(`the definition of ${def} is ${obj.split('.')[0]}`)
                } else {
                    user_said()
                    speak('the definition of ' + def + ' is ' + obj)
                    display('the definition of ' + def + ' is ' + obj)

                }
                // display(`The ${def} is ${obj}`)
                user_said()

            }).catch(err => setTimeout(() => console.clear()))




    },
    'what should i wear today': () => {
        wear()
    },
    'toss a coin': () => {
        let state = Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails'
        // var audio = new Audio('../coin.wav');
        // audio.play()
        speak("It's " + state)
        display("It's " + state)
    }
}