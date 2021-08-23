//fonctionnalité 1
document.getElementsByTagName("footer")[0].addEventListener("click", footerFunction);
let a = 1

function footerFunction() {
    console.log('clique');
    console.log('clic numéro ' + a++);
}

//fonctionalité 2
document.querySelectorAll("button.navbar-toggler")[0].addEventListener("click", burgerFunction);

function burgerFunction() {
    document.getElementById("navbarHeader").classList.toggle("collapse");
}

//fonctionnalité 3
document.querySelectorAll("button.btn-outline-secondary")[0].addEventListener("click", editFirstButton);

function editFirstButton() {
    document.querySelector("div.card-body").style.color = "red";
}

//fonctionnalité 4
document.querySelectorAll("button.btn-outline-secondary")[1].addEventListener("click", editSecondButton);

function editSecondButton() {
    let x = document.querySelectorAll("p.card-text")[1];
    if (x.style.color == "green") {
        x.style.color = "";
    } else {
        x.style.color = "green";
    }
}

//fonctionnalité 5
document.getElementsByTagName("header")[0].addEventListener("dblclick", nuclearFunction);

function nuclearFunction() {
    let css = document.querySelector('head>link');
    if (css.disabled) {
        css.disabled = false;
    } else {
        css.disabled = true;
    }
}

//fonctionnalité 6
let cards = document.getElementsByClassName("card");
let button_view = document.getElementsByClassName("btn-success");
for (let i = 0; i < cards.length; i++) {
    function transormCard() {
        if (cards[i].getElementsByClassName("card-text")[0].style.display != "none") {
            cards[i].getElementsByClassName("card-text")[0].style.display = "none";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "20%";
        } else {
            cards[i].getElementsByClassName("card-text")[0].style.display = "block";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
    }
    button_view[i].addEventListener("mouseover", transormCard);
}

//fonctionnalité 7
let right_btn = document.getElementsByClassName("btn-secondary")[0];
right_btn.addEventListener("click", card_right);

function card_right() {
    const parent = document.getElementsByClassName("row")[1];
    parent.insertBefore(parent.lastElementChild, parent.firstElementChild);
};

//fonctionnalité 8
let left_btn = document.getElementsByClassName("btn-primary")[0];
left_btn.setAttribute("href", "#");
left_btn.addEventListener("click", card_left);

function card_left() {
    const parent = document.getElementsByClassName("row")[1];
    parent.insertBefore(parent.firstElementChild, parent.firstElementChild.nextSbling);
};

//fonctionnalité 9
let bodyIsReady = "";

function handleEvent(e) {
    bodyIsReady = true;
    let bodyClass = document.getElementsByTagName('body')[0].classList;
    if (bodyIsReady === true && e.keyCode === 65) {
        document.getElementsByTagName('body')[0].removeAttribute("class");
        bodyClass.add('col-4');
    } else if (bodyIsReady === true && e.keyCode === 89) {
        document.getElementsByTagName('body')[0].removeAttribute("class");
        bodyClass.add('offset-md-4', 'col-4');
    } else if (bodyIsReady === true && e.keyCode === 80) {
        document.getElementsByTagName('body')[0].removeAttribute("class");
        bodyClass.add('offset-md-8', 'col-4');
    } else if (bodyIsReady === true && e.keyCode === 66) {
        document.getElementsByTagName('body')[0].removeAttribute("class");
    } else {
        bodyIsReady = false;
    }
    bodyIsReady = false;
    e.stopPropagation();
}
document.getElementsByTagName('strong')[0].addEventListener("click", handleEvent);
document.getElementsByTagName('header')[0].addEventListener("keydown", handleEvent);