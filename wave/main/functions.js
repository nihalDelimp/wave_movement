
// function for making alberta speak //
export const speak = ( word ) => {
    const newBody = {
        "audioConfig": {
            "audioEncoding": "LINEAR16",
            "pitch": 0,
            "speakingRate": 1
        },
        "input": {
            "text": word
        },
        "voice": {
            "languageCode": "en-US",
            "name": "en-US-Wavenet-F"
        }
    }
    fetch( 'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyD341VcHBuNtTVDRBoSn78zX-ZNsUdBWxE', { method: 'POST', body: JSON.stringify( newBody ) }
    ).then( data => data.json()
    ).then( res => {
        console.log( res.audioContent )
        var audio = document.getElementById( 'audio' );
        audio.src = `data:audio/mp3;base64,${res.audioContent}`;
        let worddata = word.split( " " );
        let startjob = 0;
        let intervaldt = setInterval( () => {
            render( ( worddata[startjob].length ) + 40 );
            console.log( "hhhhhhhhhhhh", worddata[startjob].length )
            // console.log("W W :",worddata.length,worddata[startjob])
            startjob++;
            console.log( startjob, "Nihals" )
            // console.log(startjob)
            if ( startjob >= worddata.length ) clearInterval( intervaldt );
        }, 100 )
    } )
    let utterance = new SpeechSynthesisUtterance();
    // console.log(utterance, "utterance")
    utterance.lang = "en-US"
    // utterance.voice = "en-US-Wavenet-F"
    //const voicec = speechSynthesis.getVoices()
    //console.log( utterance,"voice")
    //change the number for voice changing
    //utterance.voice = voicec['2']
    //speechSynthesis.speak(utterance);

    // console.log(utterance, "voice")
    // loop(word.length*5)
    // utterance.onstart = function (event) {


    //     let worddata = word.split(" ");
    //     let startjob = 0;
    //     let intervaldt = setInterval(() => {
    //         makeParticle((worddata[startjob].length) + 20);
    //         //console.log("W W :",worddata.length,worddata[startjob])
    //         startjob++;
    //         if (startjob >= worddata.length) clearInterval(intervaldt);
    //     }, 150)
    // };

    utterance.onend = function ( e ) {
        console.log( "End", e );
        makeParticle( 0 );
    }

    utterance.onmark = function ( e ) {
        console.log( "Mark", e );
    }

    utterance.onresume = function ( e ) {
        console.log( "Resume", e );
    }
    utterance.onboundary = function ( e ) {
        console.log( "On Boundary", e );
    }

    utterance.text = word;


}
// function for displaying alberta's response on screen
export const display = ( word ) => {
    console.log( word )
}
// function for displaying user's's response on screen

export const user_said = () => {
    annyang.addCallback( 'resultMatch', function ( userSaid, commandText, phrases ) {
        // console.log("User : ", userSaid)
        //console.log("Command :",commandText)
        // document.getElementById('usersaid').innerHTML = '<img src="./UI/mic.ico"/>' + userSaid;
        // setTimeout(function() {
        //     document.getElementById('usersaid').innerHTML = '<img src="./UI/mic.ico"/> User Said';
        // }, 10000)
    } );

    annyang.addCallback( 'resultNoMatch', function ( userSaid ) {
        console.log( userSaid )
    } );

}
//Function for picking random answer on conversation
export const random = ( first, second ) => {
    const rep = [first, second];
    const repy = rep[Math.floor( Math.random() * rep.length )];
    speak( repy )
    display( repy )
}

// weather update function

export const weather = ( cityID ) => {
    try {
        var key = 'cb5f6fb7ae8f481566633834f3de497d';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&appid=${key}&units=metric`;
        var obj;
        var temp;
        try {
            fetch( url )
                .then( res => res.json() )
                .then( data => obj = data )
                .then( () => {
                    ( obj )
                    temp = obj.main.temp
                    user_said()
                    speak( `the current tempereture in ${cityID} is ${temp} Degree Celsius` )
                    display( `the current tempereture in ${cityID} is ${temp} Degree Celsius` )

                } )
        } catch ( error ) {
            speak( 'sorry i didn\'t understand the city name' )
        }

    } catch ( error ) {
        speak( 'something went wrong try again' )

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
        fetch( url )
            .then( res => res.json() )
            .then( data => obj = data )
            .then( () => {
                // console.log(obj)
                forc = obj.weather[0].main
                switch ( forc ) {
                    case 'Clear':
                        speak( 'Sky is Clear,you can wear a t-shirt and shorts ' )
                        display( 'Sky is Clear,you can wear a t-shirt and shorts ' )
                        break;
                    case 'snow' || 'Snow':
                        speak( 'you can wear a scarf and gloves, maybe its snowing outside ' )
                        diasplay( 'you can wear a scarf and gloves, maybe its snowing outside ' )
                        break;
                    case 'snow' || 'Snow':
                        speak( 'you can wear a scarf and gloves, maybe its snowing outside ' )
                        display( 'you can wear a scarf and gloves, maybe its snowing outside ' )
                        break;
                    case 'sun' || 'Sun':
                        speak( 'wear some light clothes and don\'t forget sunglasses' )
                        display( 'wear some light clothes and don\'t forget sunglasses' )
                        break;
                    case 'Wind':
                        speak( 'you can wear jumper' )
                        display( 'you can wear jumper' )
                        break;

                    case 'Mist':
                        speak( 'whetever you want with a hat ' )
                        display( 'whetever you want with a hat ' )
                        break;
                    case 'Rain' || 'Rainy':
                        speak( 'Better wear a jacket and don\'t forget umbrella' )
                        display( 'Better wear a jacket and don\'t forget umbrella' )
                        break;
                    case 'Haze':
                        speak( 'i am confuse today, wear whatever makes you feel comfortable.' )
                        display( 'i am confuse today, wear whatever makes you feel comfortable.' )
                        break;
                    default:
                        break;
                }
            } )
    } catch ( error ) {
        speak( 'sorry i didn\'t understand the city name' )
        user_said()

    }
}