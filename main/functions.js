
// function for making alberta speak //
export const speak = (word) => {
let utterance = new SpeechSynthesisUtterance();
    utterance.lang = "en-US"
    //const voicec = speechSynthesis.getVoices()
    //console.log( utterance,"voice")
    //change the number for voice changing
    //utterance.voice = voicec['2']
    //speechSynthesis.speak(utterance);

    // console.log(utterance, "voice")
    // loop(word.length*5)
    utterance.onstart = function (event) {


        let worddata = word.split(" ");
        let startjob = 0;
        let intervaldt = setInterval(() => {
            makeParticle((worddata[startjob].length) + 20);
            //console.log("W W :",worddata.length,worddata[startjob])
            startjob++;
            if (startjob >= worddata.length) clearInterval(intervaldt);


        }, 150)



        // const voicec = speechSynthesis.getVoices()
        //utterance.voice = speechSynthesis.getVoices()[7];
        // console.log("Voice DAta",voicec);
    };

    utterance.onend = function (e) {
        console.log("End", e);
        makeParticle(0);
    }

    utterance.onmark = function (e) {
        console.log("Mark", e);
    }

    utterance.onresume = function (e) {
        console.log("Resume", e);
    }
    utterance.onboundary = function (e) {
        console.log("On Boundary", e);
    }

    utterance.text = word;
    speechSynthesis.speak(utterance);


}
// function for displaying alberta's response on screen
export const display = (word) => {
    console.log(word)
}
// function for displaying user's's response on screen

export const user_said = () => {
    annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
        console.log("User : ", userSaid)
        //console.log("Command :",commandText)
        // document.getElementById('usersaid').innerHTML = '<img src="./UI/mic.ico"/>' + userSaid;
        // setTimeout(function() {
        //     document.getElementById('usersaid').innerHTML = '<img src="./UI/mic.ico"/> User Said';
        // }, 10000)
    });

    // annyang.addCallback('resultNoMatch', function (userSaid) {
    //     for (var j = 0; j < userSaid.length; j++) {
    //         if (userSaid[j].match("Alexa")) {
    //             utterance.text = "Hey there, How are you?";
    //             speechSynthesis.speak(utterance);
    //             break;
    //         }
    //         else if (userSaid[j].match("I am good") || userSaid[j].match("I am fine")) {
    //             utterance.text = "I am also good, thankyou";
    //             speechSynthesis.speak(utterance);
    //             annyang.removeCallback('resultNoMatch')
    //             break;
    //         }
    //         else if (userSaid[j].match("I am good, How are you") || userSaid[j].match("I am fine, How are you")) {
    //             utterance.text = "I am also good, thankyou";
    //             speechSynthesis.speak(utterance);
    //             annyang.removeCallback('resultNoMatch')
    //             console.log("10 sec")
    //             break;

    //         }
    //         else {
    //             console.log("error")
    //             break;
    //         }
    //     }

    // });
    // annyang.addCallback('start',(userSaid)=>{
    //     console.log("nnihal",userSaid)
    // })

    annyang.addCallback('isListening', function (data) {
        console.log(data, "datas")
    })
    annyang.addCallback('start', function (userSaid, commandText, phrases) {
        // let word = "alexa" || "Alexa";
        // if (word == "alexa") { }
        // console.log("----S User : ", userSaid)
        // console.log("----S Command : ", commandText)
        // console.log("----S phrases : ", phrases)
    });
}
//Function for picking random answer on conversation
export const random = (first, second) => {
    const rep = [first, second];
    const repy = rep[Math.floor(Math.random() * rep.length)];
    speak(repy)
    display(repy)
}

// weather update function

export const weather = (cityID) => {
    try {
        var key = 'cb5f6fb7ae8f481566633834f3de497d';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&appid=${key}&units=metric`;
        var obj;
        var temp;
        try {
            fetch(url)
                .then(res => res.json())
                .then(data => obj = data)
                .then(() => {
                    (obj)
                    temp = obj.main.temp
                    user_said()
                    speak(`the current tempereture in ${cityID} is ${temp} Degree Celsius`)
                    display(`the current tempereture in ${cityID} is ${temp} Degree Celsius`)

                })
        } catch (error) {
            speak('sorry i didn\'t understand the city name')
        }

    } catch (error) {
        speak('something went wrong try again')

    }
}

//what should i wear today function

export const wear = () => {
    const cityID = 'dhaka'
    var key = 'cb5f6fb7ae8f481566633834f3de497d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&appid=${key}&units=metric`;
    var obj;
    var forc;
    user_said()

    try {
        fetch(url)
            .then(res => res.json())
            .then(data => obj = data)
            .then(() => {
                // console.log(obj)
                forc = obj.weather[0].main
                switch (forc) {
                    case 'Clear':
                        speak('Sky is Clear,you can wear a t-shirt and shorts ')
                        display('Sky is Clear,you can wear a t-shirt and shorts ')
                        break;
                    case 'snow' || 'Snow':
                        speak('you can wear a scarf and gloves, maybe its snowing outside ')
                        diasplay('you can wear a scarf and gloves, maybe its snowing outside ')
                        break;
                    case 'snow' || 'Snow':
                        speak('you can wear a scarf and gloves, maybe its snowing outside ')
                        display('you can wear a scarf and gloves, maybe its snowing outside ')
                        break;
                    case 'sun' || 'Sun':
                        speak('wear some light clothes and don\'t forget sunglasses')
                        display('wear some light clothes and don\'t forget sunglasses')
                        break;
                    case 'Wind':
                        speak('you can wear jumper')
                        display('you can wear jumper')
                        break;

                    case 'Mist':
                        speak('whetever you want with a hat ')
                        display('whetever you want with a hat ')
                        break;
                    case 'Rain' || 'Rainy':
                        speak('Better wear a jacket and don\'t forget umbrella')
                        display('Better wear a jacket and don\'t forget umbrella')
                        break;
                    case 'Haze':
                        speak('i am confuse today, wear whatever makes you feel comfortable.')
                        display('i am confuse today, wear whatever makes you feel comfortable.')
                        break;
                    default:
                        break;
                }
            })
    } catch (error) {
        speak('sorry i didn\'t understand the city name')
        user_said()

    }
}