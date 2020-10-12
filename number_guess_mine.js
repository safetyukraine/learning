let random = Math.floor(Math.random()*100)+1;

function show () {
    
    let npt = document.getElementById("inpt").value;

    lwh = document.querySelector("#lowhigh");
    lwh.style.width = "fit-content";

    if (guess.innerHTML == "") {
        guess.innerHTML = "These are your numbers: " + npt;
    }
    else {
        guess.innerHTML += ", " + npt;
    }
    
    inpt.value="";
    inpt.focus();

    if (npt == random) {
        lwh.textContent = "CONGRATULATIONS!!!";
        lwh.style.background = "#05f005";
        inpt.disabled = true;
        btn.disabled = true;
        reloadButton = document.createElement("button");
        reloadButton.textContent = "Start new game";
        document.body.append(reloadButton);
        reloadButton.addEventListener("click", gameReload);
    }
    else if (npt > random) {
        lwh.textContent = "This is too high";
        lwh.style.background = "#ff5252";
    }
    else {
        lwh.textContent = "This is too low";
        lwh.style.background = "#fffb80";
    }
}

function gameReload () {
    const pReset = document.querySelectorAll(".inform p");
    for (let i = 0; i < pReset.length; i++) {
        pReset[i].textContent = "";
    }
    inpt.disabled = false;
    btn.disabled = false;
    reloadButton.parentNode.removeChild(reloadButton);
    random = Math.floor(Math.random()*100)+1;
}

document.getElementById("btn").addEventListener("click", show)