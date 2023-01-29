
let input;
let text = document.getElementById("metin");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
const word = ["evet", "hayir", "belki", "asla"]

b1.addEventListener("click", () => {

    input = document.getElementById("input").value

    if (Boolean(input)) {

        b1.classList.add("hidden");
        b2.classList.remove("hidden");

        let random = Math.floor(Math.random() * word.length);
        text.innerText = word[random];

        text.classList.remove("hidden")
    }


});

b2.addEventListener("click", () => {

    document.getElementById("input").value = "";
    b2.classList.add("hidden");
    b1.classList.remove("hidden");

    text.classList.add("hidden")

});



