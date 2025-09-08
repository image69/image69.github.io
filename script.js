function lightMode() {
    document.getElementById('mainPage').style.backgroundColor = "#f9f9f9";
    document.getElementById('mainPage').style.color = "#333333ff";
    document.getElementById('mainPage').style.fontFamily = "'Times New Roman', Times, serif";

    let headerA = document.getElementsByClassName('headerA');
    for (let i = 0; i < headerA.length; i++) {
        headerA[i].style.backgroundColor = "#cc75d8";
        headerA[i].style.color = "#800080";
    }

    let headerB = document.getElementsByClassName('headerB');
    for (let i = 0; i < headerB.length; i++) {
        headerB[i].style.backgroundColor = "#cc75d8";
        headerB[i].style.color = "#800080";
    }

    document.getElementById('mode').innerHTML = "Light";
}

function darkMode() {
    document.getElementById('mainPage').style.backgroundColor = "#333333ff";
    document.getElementById('mainPage').style.color = "#f9f9f9";
    document.getElementById('mainPage').style.fontFamily = "'Times New Roman', Times, serif";

    let headerA = document.getElementsByClassName('headerA');
    for (let i = 0; i < headerA.length; i++) {
        headerA[i].style.backgroundColor = "#800080";
        headerA[i].style.color = "#cc75d8";
    }

    let headerB = document.getElementsByClassName('headerB');
    for (let i = 0; i < headerB.length; i++) {
        headerB[i].style.backgroundColor = "#800080";
        headerB[i].style.color = "#cc75d8";
    }

    document.getElementById('mode').innerHTML = "Dark";
}

function funkyMode() {
    document.getElementById('mainPage').style.backgroundColor = "#000000";
    document.getElementById('mainPage').style.color = "#00FF00";
    document.getElementById('mainPage').style.fontFamily = "'Courier New', Courier, monospace";

    let headerA = document.getElementsByClassName('headerA');
    for (let i = 0; i < headerA.length; i++) {
        headerA[i].style.backgroundColor = "#00FF00";
        headerA[i].style.color = "#000000";
    }

    let headerB = document.getElementsByClassName('headerB');
    for (let i = 0; i < headerB.length; i++) {
        headerB[i].style.backgroundColor = "#00FF00";
        headerB[i].style.color = "#000000";
    }

    document.getElementById('mode').innerHTML = "Retro";
}