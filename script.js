let languageSelector = document.querySelector("#drop-down");

// function timer() {
//     let minute = 0;
//     let sec = 30;
//     setInterval(() => {
//         if (minute > -1) {


//             if (minute == 0 && sec < 20) {
//                 timerScreen.style.color = "red";
//                 timerScreen.innerHTML = minute + " : " + sec;
//             } else {
//                 timerScreen.style.color = "green";
//                 timerScreen.innerHTML = minute + " : " + sec;
//             }

//         }

//         sec--;
//         if (sec == 00) {
//             minute--;
//             sec = 60;
//             if (minute < 0) {
//                 timerScreen.innerHTML = "Time is up!!!";
//                 setInterval(() => {
//                     document.querySelector("#html-questions").style.display = "none";
//                 }, 100);
//             }
//         }
//     }, 1000);
// }





// function timeout(){
//     setTimeout(() => {
//         document.location.reload();
//      }, 3000);

// }

function timer() {
    let sec = 35;
    let min = 0;
    setInterval(() => {
        if (min > -1) {
            if (min == 0 && sec < 30 && sec>10) {
                document.querySelector("#timer-screen").style.color = "red"
                document.querySelector("#timer-screen").innerHTML = min + ":" + sec;

            }
            else if(min == 0 && sec < 10) {
                document.querySelector("#timer-screen").style.animation = "shake 1s 1s infinite"
                document.querySelector("#timer-screen").style.color = "red"
                document.querySelector("#timer-screen").innerHTML = min + ":" + sec;
            } else {
                document.querySelector("#timer-screen").innerHTML = min + ":" + sec;
            }

            sec--;
            if (sec == 00) {
                min--;
                sec = 60
                if (min < 0) {
                    document.querySelector("#timer-screen").innerHTML = "Time is up"
                    setInterval(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

        }



    }, 1000);

}
function reload() {
    setInterval(() => {
        window.location.reload()

    }, 3000);
}




document.getElementById("start-btn").addEventListener("click", function () {

    let option = languageSelector.options[languageSelector.selectedIndex].value;



    if (option === "html") {
        document.querySelector("#timer-section").style.display = "block";
        document.querySelector("#html-questions").style.display = "block";
        window.location.href = "#html-questions"
        document.querySelector("#result-screen").style.display = "block";
        timer();
    } else if (option === "css") {
        document.querySelector("#timer-section").style.display = "block";
        document.querySelector("#css-questions").style.display = "block";
        window.location.href = "#css-questions"
        document.querySelector("#result-screen").style.display = "block";
        timer();
    } else if (option === "javascript") {
        document.querySelector("#timer-section").style.display = "block";
        document.querySelector("#javascript-questions").style.display = "block";
        window.location.href = "#javascript-questions";
        document.querySelector("#result-screen").style.display = "block";
        timer();
    } else {
        document.location.reload();

    }
})
document.querySelector("#btn").addEventListener("click", function () {
    //     if(languageSelector.options[languageSelector.selectedIndex].value==="html"){
    //         console.log("html");
    //     }else if(languageSelector.options[languageSelector.selectedIndex].value==="css"){
    //         console.log("css");
    //     }else if(languageSelector.options[languageSelector.selectedIndex].value==="javascript"){
    //         console.log("java script");
    // }

    switch (languageSelector.options[languageSelector.selectedIndex].value) {
        case 'html': {


            let aAnswer = "a";
            let bAnswer = "a";
            let cAnswer = "d";
            let dAnswer = "a";
            let eAnswer = "b";
            let fAnswer = "a";
            let aScore = 0;
            let bScore = 0;
            let cScore = 0;
            let dScore = 0;
            let eScore = 0;
            let fScore = 0;
            a = document.querySelector('input[name="q1"]:checked')
            b = document.querySelector('input[name="q2"]:checked')
            c = document.querySelector('input[name="q3"]:checked')
            d = document.querySelector('input[name="q4"]:checked')
            e = document.querySelector('input[name="q5"]:checked')
            f = document.querySelector('input[name="q6"]:checked')
            if (a.value === aAnswer) {
                aScore = 1

            }
            if (b.value === bAnswer) {
                bScore = 1
            }
            if (c.value === cAnswer) {
                cScore = 1
            }
            if (d.value === dAnswer) {
                dScore = 1
            }
            if (e.value === eAnswer) {
                eScore = 1
            }
            if (f.value === fAnswer) {
                fScore = 1
            }
            let sum = aScore + bScore + cScore + dScore + eScore + fScore;
            if (sum <= 3) {
                document.getElementsByClassName("result-screen")[0].style.color = "red"
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();
            } else {
                document.getElementsByClassName("result-screen")[0].style.color = "green"
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();
            }




            break;
        }
        case 'css': {
            let aAnswer = "a";
            let bAnswer = "b";
            let cAnswer = "a";
            let dAnswer = "b";
            let eAnswer = "c";
            let fAnswer = "c";
            let aScore = 0;
            let bScore = 0;
            let cScore = 0;
            let dScore = 0;
            let eScore = 0;
            let fScore = 0;
            a = document.querySelector('input[name="q1"]:checked')
            b = document.querySelector('input[name="q2"]:checked')
            c = document.querySelector('input[name="q3"]:checked')
            d = document.querySelector('input[name="q4"]:checked')
            e = document.querySelector('input[name="q5"]:checked')
            f = document.querySelector('input[name="q6"]:checked')
            if (a.value === aAnswer) {
                aScore = 1

            }
            if (b.value === bAnswer) {
                bScore = 1
            }
            if (c.value === cAnswer) {
                cScore = 1
            }
            if (d.value === dAnswer) {
                dScore = 1
            }
            if (e.value === eAnswer) {
                eScore = 1
            }
            if (f.value === fAnswer) {
                fScore = 1
            }
            let sum = aScore + bScore + cScore + dScore + eScore + fScore;
            if (sum <= 3) {
                document.getElementsByClassName("result-screen")[0].style.color = "red"
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();

            } else {
                document.getElementsByClassName("result-screen")[0].style.color = "green";
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();
            }


            break;
        }
        case 'javascript': {
            let aAnswer = "a";
            let bAnswer = "b";
            let cAnswer = "c";
            let dAnswer = "b";
            let eAnswer = "a";
            let fAnswer = "d";
            let aScore = 0;
            let bScore = 0;
            let cScore = 0;
            let dScore = 0;
            let eScore = 0;
            let fScore = 0;
            a = document.querySelector('input[name="q1"]:checked')
            b = document.querySelector('input[name="q2"]:checked')
            c = document.querySelector('input[name="q3"]:checked')
            d = document.querySelector('input[name="q4"]:checked')
            e = document.querySelector('input[name="q5"]:checked')
            f = document.querySelector('input[name="q6"]:checked')
            if (a.value === aAnswer) {
                aScore = 1

            }
            if (b.value === bAnswer) {
                bScore = 1
            }
            if (c.value === cAnswer) {
                cScore = 1
            }
            if (d.value === dAnswer) {
                dScore = 1
            }
            if (e.value === eAnswer) {
                eScore = 1
            }
            if (f.value === fAnswer) {
                fScore = 1
            }
            let sum = aScore + bScore + cScore + dScore + eScore + fScore;
            if (sum <= 3) {
                document.getElementsByClassName("result-screen")[0].style.color = "red"
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();

            } else {
                document.getElementsByClassName("result-screen")[0].style.color = "green"
                document.getElementsByClassName("result-screen")[0].innerHTML = sum;
                reload();
            }

            break;

        }
    }


})






















// let dropDown = document.querySelector('#drop-down');
// let resultScreen=document.querySelector('#result-screen');

//  function timer() {
//     var minute = 0;
//     var sec = 60;
//     setInterval(function() {
//       console.log(minute+":"+sec);
//       sec--;
//       if (sec == 00) {
//         minute --;
//         sec = 60;
//         if (minute == 0) {
//           minute = 0;
//         }
//       }
//     }, 1000);
//   }
//   timer();

// document.getElementById('start-btn').addEventListener('click', function () {
//         resultScreen.style.display="block";
//     html = document.getElementById('html');
//     css = document.getElementById('css');
//     if (dropDown.options[dropDown.selectedIndex].value === "a") {
//         html.style.display = "block";
//         window.location.href = '#html';

//     } else if (dropDown.options[dropDown.selectedIndex].value === "b") {
//         css.style.display = "block"
//         window.location.href = '#css';

//     } else {
//         document.location.reload()
//     }

// })



// document.getElementById('btn').addEventListener('click', function () {
//     let aAnswer = "a";
//     let bAnswer = "a";
//     let cAnswer = "d";
//     let dAnswer = "a";
//     let eAnswer = "b";
//     let fAnswer = "a";
//     let aScore = 0;
//     let bScore = 0;
//     let cScore = 0;
//     let dScore = 0;
//     let eScore = 0;
//     let fScore = 0;
//     if (languageSelector.options[languageSelector.selectedIndex].value === "html") {

//         // if (!document.querySelector('input[name="q1"]:checked')) {

//         // }
//         // if (!document.querySelector('input[name="q2"]:checked')) {

//         // }
//         // if (!document.querySelector('input[name="q3"]:checked')) {

//         // }
//         // if (!document.querySelector('input[name="q4"]:checked')) {

//         // }
//         // if (!document.querySelector('input[name="q5"]:checked')) {

//         // }
//         // if (!document.querySelector('input[name="q6"]:checked')) {

//         // }

//         a = document.querySelector('input[name="q1"]:checked');
//         b = document.querySelector('input[name="q2"]:checked');
//         c = document.querySelector('input[name="q3"]:checked');
//         d = document.querySelector('input[name="q4"]:checked');
//         e = document.querySelector('input[name="q5"]:checked');
//         f = document.querySelector('input[name="q6"]:checked');


//         if (a.value === aAnswer) {
//             aScore = 1;
//         }
//         if (b.value === bAnswer) {
//             bScore = 1;
//         }
//         if (c.value === cAnswer) {
//             cScore = 1;
//         }
//         if (d.value === dAnswer) {
//             dScore = 1;
//         }
//         if (e.value === eAnswer) {
//             eScore = 1;

//         }
//         if (f.value === fAnswer) {
//             fScore = 1;
//         }



//         let sum = 0;
//         sum = aScore + bScore + cScore + dScore + eScore + fScore;
//         if (sum <= 3) {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'red';
//             screen.innerHTML = sum;
//         } else {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'green';
//             screen.innerHTML = sum;
//         }
//     } else if (languageSelector.options[languageSelector.selectedIndex].value === "css") {
//         a = document.querySelector('input[name="q1"]:checked');
//         b = document.querySelector('input[name="q2"]:checked');
//         c = document.querySelector('input[name="q3"]:checked');
//         d = document.querySelector('input[name="q4"]:checked');
//         e = document.querySelector('input[name="q5"]:checked');
//         f = document.querySelector('input[name="q6"]:checked');
//         let aAnswer = "a";
//         let bAnswer = "a";
//         let cAnswer = "d";
//         let dAnswer = "a";
//         let eAnswer = "a";
//         let fAnswer = "b";
//         let aScore = 0;
//         let bScore = 0;
//         let cScore = 0;
//         let dScore = 0;
//         let eScore = 0;
//         let fScore = 0;
//         if (a.value === aAnswer) {
//             aScore = 1;
//         }
//         if (b.value === bAnswer) {
//             bScore = 1;
//         }
//         if (c.value === cAnswer) {
//             cScore = 1;
//         }
//         if (d.value === dAnswer) {
//             dScore = 1;
//         }
//         if (e.value === eAnswer) {
//             eScore = 1;

//         }
//         if (f.value === fAnswer) {
//             fScore = 1;
//         }

//         let sum = aScore + bScore + cScore + dScore + eScore + fScore;
//         if (sum <= 3) {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'red';
//             screen.innerHTML = sum;

//         } else {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'green';
//             screen.innerHTML = sum;
//         }



//     } else if (languageSelector.options[languageSelector.selectedIndex].value === "javascript") {
//         a = document.querySelector('input[name="q1"]:checked');
//         b = document.querySelector('input[name="q2"]:checked');
//         c = document.querySelector('input[name="q3"]:checked');
//         d = document.querySelector('input[name="q4"]:checked');
//         e = document.querySelector('input[name="q5"]:checked');
//         f = document.querySelector('input[name="q6"]:checked');
//         let aAnswer = "a";
//         let bAnswer = "a";
//         let cAnswer = "d";
//         let dAnswer = "a";
//         let eAnswer = "a";
//         let fAnswer = "b";
//         let aScore = 0;
//         let bScore = 0;
//         let cScore = 0;
//         let dScore = 0;
//         let eScore = 0;
//         let fScore = 0;
//         if (a.value === aAnswer) {
//             aScore = 1;
//         }
//         if (b.value === bAnswer) {
//             bScore = 1;
//         }
//         if (c.value === cAnswer) {
//             cScore = 1;
//         }
//         if (d.value === dAnswer) {
//             dScore = 1;
//         }
//         if (e.value === eAnswer) {
//             eScore = 1;

//         }
//         if (f.value === fAnswer) {
//             fScore = 1;
//         }

//         let sum = aScore + bScore + cScore + dScore + eScore + fScore;
//         if (sum <= 3) {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'red';
//             screen.innerHTML = sum;
//         } else {
//             screen = document.getElementsByClassName('result-screen')[0];
//             screen.style.color = 'green';
//             screen.innerHTML = sum;
//         }

//     }

// })
