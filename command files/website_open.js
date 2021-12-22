import {
    speak,
    display
} from "../main/functions.js"
export const webopener = {
    'open website *tag': async (site) => {
        site = site.toLowerCase();
        site = site.replace(' ', '')
        speak('opening website ' + site)
        display('opening website ' + site)
        try {
            switch (site) {
                case "wikipedia":
                    window.open('https://en.wikipedia.org', "popup", '"width=900,height=600"');
                    break;
                case "youtube":
                    window.open('https://youtube.com', "popup", '"width=900,height=600"')
                    break;
                case "amazon":
                    window.open('https://amazon.com', "popup", ' "width=900,height=600"')
                    break;
                case "facebook":
                    window.open('https://facebook.com', "popup", '"width=900,height=600"')
                    break
                case "twitter":
                    window.open('https://twitter.com', "popup", '"width=900,height=600"')
                    break;
                case "fandom":
                    window.open('https://fandom.com', "popup", '"width=900,height=600"')
                    break;
                case "pinterest":
                    window.open('https://pinterest.com', "popup", '"width=900,height=600"')
                    break
                case "imdb":
                    window.open('https://imdb.com', "popup", '"width=900,height=600"')
                    break
                case "reddit":
                    window.open('https://reddit.com', "popup", '"width=900,height=600"');
                    break;
                case "yelp":
                    window.open('https://yelp.com', "popup", '"width=900,height=600"');
                    break;
                case "instagram":
                    window.open('https://instagram.com', "popup", '"width=900,height=600"');
                    break;
                case "ebay":
                    window.open('https://ebay.com', "popup", '"width=900,height=600"');
                    break;
                case "walmart":
                    window.open('https://walmart.com', "popup", '"width=900,height=600"');
                    break;
                case "craigslist":
                    window.open('https://craigslist.org', "popup", '"width=900,height=600"');
                    break;
                case "healthline":
                    window.open('https://healthline.com', "popup", '"width=900,height=600"');
                case "tripadvisor":
                    window.open('https://tripadvisor.com', "popup", '"width=900,height=600"');
                    break;
                case "linkedin":
                    window.open('https://linkedin.com', "popup", '"width=900,height=600"');
                    break;
                case "webmd":
                    window.open('https://webmd.com', "popup", '"width=900,height=600"');
                    break;
                case "apple":
                    window.open('https://apple.com', "popup", '"width=900,height=600"');
                    break;
                case "yahoo mail":
                    window.open('https://mail.yahoo.com', "popup", '"width=900,height=600"');
                    break;
                case "cnn":
                    window.open('https://cnn.com', "popup", '"width=900,height=600"');
                    break;
                case "etsy":
                    window.open('https://etsy.com', "popup", '"width=900,height=600"');
                    break;
                case "google":
                    window.open('https://google.com', "popup", '"width=900,height=600"');
                    break;
                case "yahoo":
                    window.open('https://yahoo.com', "popup", '"width=900,height=600"');
                    break;
                case "indeed":
                    window.open('https://indeed.com', "popup", '"width=900,height=600"');
                    break;
                case "target":
                    window.open('https://target.com', "popup", '"width=900,height=600"');
                    break;
                case "microsoft":
                    window.open('https://microsoft.com', "popup", '"width=900,height=600"');
                    break;
                case "new work times":
                    window.open('https://nytimes.com', "popup", '"width=900,height=600"');
                    break;
                case "mayo clinic":
                    window.open('https://mayoclinic.com', "popup", '"width=900,height=600"');
                    break;
                case "espn":
                    window.open('https://espn.com', "popup", '"width=900,height=600"');
                    break;
                case "usps":
                    window.open('https://usps.com', "popup", '"width=900,height=600"');
                    break;
                case "quizlet":
                    window.open('https://quizlet.com', "popup", '"width=900,height=600"');
                    break;
                case "gamepedia":
                    window.open('https://gamepedia.com', "popup", '"width=900,height=600"');
                    break;
                case "lowes":
                    window.open('https://lowes.com', "popup", '"width=900,height=600"');
                    break;
                case "dictionary":
                    window.open('https://merriam-webster.com', "popup", '"width=900,height=600"');
                    break;
                case "steampowered":
                    window.open('https://steampowered.com', "popup", '"width=900,height=600"');
                    break;
                case "map quest":
                    window.open('https://mapquest.com', "popup", '"width=900,height=600"');
                    break;
                case "fox news":
                    window.open('https://foxnews.com', "popup", '"width=900,height=600"')
                    break;
                case "all recipes":
                    window.open('https://allrecipes.com', "popup", '"width=900,height=600"');
                    break;
                case "quora":
                    window.open('https://quora.com', "popup", '"width=900,height=600"');
                    break;
                case "aol":
                    window.open('https://aol.com', "popup", '"width=900,height=600"');
                    break;
                case "britannica":
                    window.open('https://britannica.com', "popup", '"width=900,height=600"');
                    break;
                case "ms live":
                    window.open('https://live.com', "popup", '"width=900,height=600"');
                    break;
                case "best buy":
                    window.open('https://bestbuy.com', "popup", '"width=900,height=600"');
                    break;
                case "rotten tomatoes":
                    window.open('https://rottentomatoes.com', "popup", '"width=900,height=600"');
                    break;
                case "google play":
                    window.open('https://play.google.com', "popup", '"width=900,height=600"');
                    break;
                default:
                    break;
            }
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'search google for *tag': async (varia) => {
        try {
            if (varia == "neom pictures" || varia == "neon pictures") {
                window.open("https://www.google.com/search?q=NEOM&rlz=1C5CHFA_enGB952GB952&source=lnms&tbm=isch&sa=X&ved=2ahUKEwismYPCien0AhUNhP0HHUTcDlAQ_AUoBHoECAEQBg&biw=1775&bih=1243&dpr=2");
            }
            else {
                window.open(`https://www.google.com/search?q=${varia}`, 'popup', 'width=900,height=600')
            }

            speak('searching google for ' + varia)
            display('searching google for ' + varia)
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'search youtube for *tag': async (varia) => {
        try {
            window.open(`https://www.youtube.com/results?search_query=${varia}`, 'popup', 'width=900,height=600')
            speak('searching youtube for ' + varia)
            display('searching youtube for ' + varia)
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'locate *tag': async (varia) => {
        try {
            window.open(`https://www.google.com/maps/place/${varia}`, 'popup', 'width=900,height=600')
            speak('Locating ' + varia)
            display('Locating ' + varia)
        } catch (error) { }
    },
    'where is *tag': async (varia) => {
        try {
            window.open(`https://www.google.com/maps/place/${varia}`, 'popup', 'width=900,height=600')
            speak('Locating ' + varia)
            display('Locating ' + varia)
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'distance of *tag': async (varia) => {
        try {
            let spdir = varia.split('from')
            window.open(`https://www.google.com/maps/dir/${spdir[0]}/${spdir[1]}`, 'popup', 'width=900,height=600')
            speak('Let me open the map for you' + varia)
            display('Let me open the map for you' + varia)
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'information on *tag': (vari) => {
        try {
            vari = vari.replace(' ', '_')
            window.open(`https://en.wikipedia.org/wiki/${vari}`, 'popup', 'width=900,height=600')
            vari = vari.replace('_', ' ')
            speak('here is  complete information on ' + vari + 'from wikipedia')
            display('here is  complete information on ' + vari + 'from wikipedia')
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'what is the latest neom news': () => {
        try {
            speak('here is the latest news')
            window.open(`https://www.neom.com/en-us/newsroom`, 'popup', 'width=900,height=600')
        } catch (error) {
            speak('something went wron try again')
        }

    },
    'what is the latest neon news': () => {
        try {
            speak('here is the latest news')
            window.open(`https://www.neom.com/en-us/newsroom`, 'popup', 'width=900,height=600')
        } catch (error) {
            speak('something went wron try again')
        }

    },
    'whats the latest neon news': () => {
        try {
            speak('here is the latest news')
            window.open(`https://www.neom.com/en-us/newsroom`, 'popup', 'width=900,height=600')
        } catch (error) {
            speak('something went wron try again')
        }

    },
    'whats the latest neon news': () => {
        try {
            speak('here is the latest news')
            window.open(`https://www.neom.com/en-us/newsroom`, 'popup', 'width=900,height=600')
        } catch (error) {
            speak('something went wron try again')
        }

    },
    'play neom line video': () => {
        try {
            speak("Here result is :")
            window.open("https://www.youtube.com/watch?v=TtSMz-_h_cw");
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'play neon line video': () => {
        try {
            speak("Here result is :")
            window.open("https://www.youtube.com/watch?v=TtSMz-_h_cw");
        } catch (error) {
            speak('something went wron try again')
        }
    },
    'what can i invest in saudi arabia': () => {
        try {
            speak("showing you the results")
            window.open("https://neom.com");
        }
        catch (error) {
            speak('something went wron try again')
        }
    },
    'can i invest in property in neom': () => {
        try {
            speak("yes you can, showing you some results ")
            window.open("https://neom.com");
        }
        catch (error) {
            speak('something went wron try again')
        }
    },
    'can i invest in property in neon': () => {
        try {
            speak("yes you can, showing you some results ")
            window.open("https://neom.com");
        }
        catch (error) {
            speak('something went wron try again')
        }
    },
    'why is it attractive to invest in neom': () => {
        try {
            speak("Because its too good")
        }
        catch (error) {
            speak('something went wron try again')
        }
    },
    'why is it attractive to invest in neon': () => {
        try {
            speak("Because its too good")
        }
        catch (error) {
            speak('something went wrong try again')
        }
    },
    'add milk to my shopping list': () => {
        try {
            speak("sure thing done, anything else")

        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'whats my monthly balance': () => {
        try {
            speak("Your monthly balance is 9245.57 dollars ")
        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'order my favourite breakfast for morning eight': () => {
        try {
            speak("sure thing done")
        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'show me the latest job vacancies': () => {
        try {
            speak("sure, showing you the results")
            window.open("https://neom.com/en-us/be-part-of-neom");
        } catch (error) {
            speak('something went wrong try again')

        }
    },
    'show me the latest job vacancy': () => {
        try {
            speak("sure, showing you the results")
            window.open("https://neom.com/en-us/be-part-of-neom");
        } catch (error) {
            speak('something went wrong try again')

        }
    },
    'tell me something good': () => {
        try {
            speak("you look great today")
        } catch (error) {
            speak('something went wrong try again')

        }
    },
    'what is the latest sports news': () => {
        try {
            speak("opening latest sports news")
            window.open("https://albiladdaily.com/category/%d8%b1%d9%8a%d8%a7%d8%b6%d8%a9/");
        } catch (error) {
            speak('something went wrong try again')

        }
    },
    'take me to the newsroom': () => {
        try {
            speak( "yeah sure, taking you to the newsroom" )
        window.open( "https://neom.com/en-us/newsroom " );
        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'how many people live in neom': () => {
        try {
            speak( "its around one million people" )
        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'how many people live in neon': () => {
        try {
            speak( "its around one million people" )
        } catch (error) {
            speak('something went wrong try again')
        }
    },
    'i want to know more about oxygen': () => {
        try {
            speak( "here result is:" )
            window.open( "https://www.neom.com/en-us/regions/oxagon" );
        } catch (error) {
            speak('something went wrong try again')
        }
        
    },

}