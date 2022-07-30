// ------------------let ----------------------------------

let but = document.getElementById("but");
let text = document.getElementById("text");
let textspan = document.querySelector("#but span");
let icon = document.querySelector("#but i");
let lyer = document.querySelector(".lyer");
let img1 = document.querySelector("#img1");
let google = document.querySelector("#googles");
let texttrn = document.querySelector("#texttrn");
let trn = document.querySelectorAll(".nav li");
let body = document.querySelector("body")
let audio = document.querySelector("audio")
let x = "texttrn";
let spe = false;
// let aud =audio.getAttribute()
rec = new p5.SpeechRec();
// console.log(rec)

// setLang(“ar-SA”)
// swal --------------------------
// swal({
//     title: " تحذير ",
//     text: "  لا تقل كلمة خوارزمي في صندوق البحث ",
//     // icon: "success",
// });
swal({
    title: "تحذير",
    text: "لا تقل كلمة خوارزمي في صندوق البحث ",
    icon: "warning",
    className: "waran",
});

// onlode -----------------------
window.onload = _ => text.focus();

// --------------------- fun Remove style ------------------------
function RemoveSty() {

    but.style.color = " "
    but.style.transform = "none";
    but.style.background = "";
    img1.style.display = "none ";



}



// --------------------------------  Fun druing speeck   ------------------------------------
function druingSpe() {
    but.style.color = "#ffff"
    but.style.transform = "scale(1.06)";
    but.style.backgroundimage = "lineargradient( #a152f5,#a152f5))";
    textspan.innerHTML = "listens";
    img1.style.display = "block";

}


// ---------------------------------- fun after speeck  -------------------------------------
function afterSpe() {
    but.style.color = "#111"
    but.style.transform = "none";
    but.style.background = "";
    textspan.innerHTML = "speech";
    text.innerHTML = rec.resultString;

    // -------------- if -------------------
    if (x === "texttrn") {
        text.innerHTML = rec.resultString
        console.log("texttrnsd111")

    }
    else if (x === "gooles") {
        if (rec.resultString === "خوارزمي") {
            body.style.backgroundImage = ' url("./img/A3d7.gif")';
            audio.play()



        }


        else {
            window.open("https://www.google.com/search?q=" + rec.resultString);
        }


    }
}

// audio.style.display = "block";



// ------------------------------ slect ------------------

function slect() {

    trn.forEach(e => {
        e.addEventListener("click", m => {
            x = e.getAttribute("id");
            console.log(e)
            icon.setAttribute("class", "fa-solid")

            if (x === "texttrn") {
                lyer.style.transform = "translateX(0px)";
                text.innerHTML = "  تحدث  عن اي شي  ... "
                spe = false;
                textspan.innerHTML = " speech "
                icon.classList.add("fa-microphone")

            }
            else if (x === "gooles") {
                lyer.style.transform = "translateX(-100px)";
                text.innerHTML = "  ابحث عن اي شي  ... "
                spe = false;
                textspan.innerHTML = " Search "
                icon.classList.add("fa-magnifying-glass")



            } else {
                lyer.style.transform = "translateX(-190px)";
                text.innerHTML = "   اكتب اي شي  في اللغة الانكلزية ... "
                spe = true
                textspan.innerHTML = " writing ";
                icon.classList.add("fa-pen-to-square")

                // < i class="fa-solid fa-pen-to-square" ></i >
            }

        })
    })

}



// --------------------------------------   speek ---------------------------
let voice = new p5.Speech();
// window.SpeechSynthesisVoice
// console.log(n)
function speek() {
    let sp = text.value;
    let hh = text.innerHTML;

    voice.speak(sp)
    voice.speak(hh)
    console.log(sp)
}


// body.style.backgroundImage = " url('/img/80225.jpg)";
// body.style.backgroundmage = "url('./img/80225.jpg')";


// /---------------------------------  cheang peg ----------------------
// console.log(stop())
slect()
but.onclick = _ => {
    if (spe === true) {
        RemoveSty()
        speek();
    }

    else {
        rec.start();
        druingSpe()
        rec.onResult = _ => {
            if (rec.resultValue === true) {
                afterSpe()
                RemoveSty()
            }

        }
    }

}
RemoveSty()


// trst fun =====================

// RemoveSty();
// druingSpe();
// afterSpe();
// scale();
// speek();

