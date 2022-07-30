let but = document.getElementById("but");
let text = document.getElementById("text");
let textspan = document.querySelector("#but span");
let lyer = document.querySelector(".lyer");
let img1 = document.querySelector("#img1");
let google = document.querySelector("#googles");
let texttrn = document.querySelector("#texttrn");
let trn = document.querySelectorAll(".nav li");

rec = new p5.SpeechRec();
// let spee = new p5.Speech();
// spee.speak("abdullah diaa")
let x;
// ---------------
// console.log(trn)
trn.forEach(e => {
    e.addEventListener("click", m => {
        x = e.getAttribute("id");
        console.log(e)

        if (x === "texttrn") {
            lyer.style.transform = "translateX(0px)";

        }
        else if (x === "gooles") {
            lyer.style.transform = "translateX(-100px)";

        } else {
            lyer.style.transform = "translateX(-190px)";

            speek();

        }

    })
})

// x = "gooles";
// --------------
but.onclick = _ => {
    but.style.color = "#ffff"
    but.style.transform = "scale(1.06)";
    but.style.backgroundimage = "lineargradient( #a152f5,#a152f5))";
    textspan.innerHTML = "listens";
    img1.style.display = "block";

    // background - image: ;

    but.style.background = "#333";
    // but.style.background = "linear-gradient( rgb(85 8 167), rgb(157 179 240))";


    rec.start();
    rec.onResult = _ => {
        if (rec.resultValue) {
            console.log(rec)
            // www.google.com/search?q=
            // window.open("https://www.google.com/search?q=" + rec.resultString);;
            // window.open("https://www.youtube.com/results?search_query=" + rec.resultString);;
            // window.open("https://www.instagram.com/" + rec.resultString + "/");;
            but.style.color = "#111"
            but.style.transform = "none";
            but.style.background = "";
            textspan.innerHTML = "speech";
            text.innerHTML = rec.resultString;


            // console.log(x)

            if (x === "texttrn") {
                text.innerHTML = rec.resultString
                console.log("texttrnsd111")

            }


            if (x === "gooles") {
                console.log("as")
                window.open("https://www.google.com/search?q=" + rec.resultString);;

            }



        }
    }

}
but.style.color = "#111"
but.style.transform = "none";
but.style.background = "";
img1.style.display = " ";


// -------------------------------

let voice = new p5.Speech();
// voice.setVoice('Alice')
// voice.speak("abdullah diaa")

function speek() {
    let sp = text.value;
    let hh = text.innerHTML;

    voice.speak(sp)
    voice.speak(hh)
    console.log(sp)
}
