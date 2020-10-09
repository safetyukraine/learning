let random = Math.floor(Math.random()*100+1);


function show () {
    let npt = document.getElementById("inpt").value;
    if (guess.innerHTML == "") {
        guess.innerHTML = npt;
    }
    else {
        guess.innerHTML += ", " + npt;
    }
    inpt.value="";
    inpt.focus();
    if (npt == random) {
        lowhigh.innerHTML = "CONGRATULATIONS!!!";
        lowhigh.style.background = "#05f005";
    }
    else if (npt > random) {
        lowhigh.innerHTML = "This is too high";
        lowhigh.style.background = "#ff5252";
    }
    else {
        lowhigh.innerHTML = "This is too low";
        lowhigh.style.background = "#fffb80";
    }
}

document.getElementById("btn").addEventListener("click", show)
