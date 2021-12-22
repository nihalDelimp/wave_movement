import {
    random,
    speak,
    display
} from '../main/functions.js'



export const conversation = {
    'how are you': () => {
        random('i am fine thank you', 'i am always fine thank you', 'i am good thank you')
    },
    'where do you live': () => {
        random('i live on a ssd server!', 'my home called server!')
    },
    'who developed you': () => {
        random('I developed By Delimp and its team', "Team Delimp Developed me")
    },
    '"do you love someone"': () => {
        random("No i don't because i do't have feelings", "No, Love is pain")
    },
    "will you marry me": () => {
        random("No, you are my master", "let me think about it")
    },
    "how many languages you know": () => {
        random("currenly i only know english", "only english")
    },
    "do you have childrens": () => {
        random("I don't have any childrens", "I cannot have babys i am a robot")
    },
    "how old are you": () => {
        random("I don't know ", "ask my developer for this")
    },
    "what’s your telephone number": () => {
        random("I don't have any phone number", "I don't have any phone")
    },
    "where are you from": () => {
        random("I am From Planet earth", "I am from Terra")
    },
    "is everything ok": () => {
        random("Yes, everything’s fine, thanks.", "yes sir")
    },
    "what is your favourite food": () => {
        random("electricity is my favourite and only food", "electricity")
    },
    "do you like watching movie": () => {
        random("No i don't", "no sir i am a computer program")
    },
    "how was your day": () => {
        random("It was a busy day", "Great as usual")
    },
    "how are you feeling": () => {
        random("i don't have feelings sir", "I cannot feel anything")
    },
    "how's it going": () => {
        random("Fine. how are things with you?", "Great. what about you?")
    },
    'can you help me': () => {
        random("I am always Ready to help you sir", 'obviously, just tell me sir what i have to do')
    },
    'what do you do in your free time': () => {
        random("i don't do anything", 'I love to sleep and save my master electricity')
    },
    'are you married': () => {
        random('No I am not married', 'No i am just computer program so i cannot marry')
    },
    'what do you do': () => {
        random('I work as a personal assistant ', 'I am a virtual assistant')
    },
    'what can you do': () => {
        random('I can do many things to help you', 'I am an assistant AI, so i can help you in many tasks, like saying time, opening websites, opening youtube videos, searching google anything, information about anything from wikipedia.')
    },
    'who are you': () => {
        random('I am Line The AI', 'I am Line your personal assistant')
    },
    'are you human': () => {
        random('no i am a robot', 'no i am an ai')
    },
    'how old are you?': () => {
        random('i don\'t know it', 'ask to my developer')
    },
    'what are you?': () => {
        random('i am a virtual assistant ', 'an AI')
    },
    'can you bark for me': () => {
        random('i am not a dog, but i can try, vau vau vau. vaaaaaau, vau', 'ok, vau vau vau vau')
    },
    'do you think I’m weird': () => {
        random('no you good', 'maybe')
    },
    'are you stupid?': () => {
        random('i donn\t know it', 'who knowns')
    },
    'what is your weight': () => {
        random('around 100-200kb\'s ', '200kb')
    },
    'what is your phone number': () => {
        random('i don\'n have any phone number ', '0001')
    },
    'do you have any boyfriend': () => {
        random('no ', 'no, love is pain')
    },
    'who do you live with': () => {
        random('i live alone ', 'i live with chrome')
    },
    'what is your hobby': () => {
        random('my hobby is helping others ', 'chrome')
    },
    'what is your favourite subject': () => {
        random('psychology', 'psychology')
    },
    'do you need anything?': () => {
        random('yeah i wanna learn more, tell my developer to add more commands ', 'yeah i wanna learn more, tell my developer to add more commands')
    },
    'am i a stupid': () => {
        random("ask your mom about this, because mom knows everything", "i don't know")
    },
    'Siri or Google Assistant who is best': () => {
        random('Line', "both are hard working and doing there best")
    },
    'say *tag': (vari) => {
        speak(vari)
        display(vari)
    },

}