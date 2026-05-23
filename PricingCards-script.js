const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Plan selected: " +
            btn.parentElement.querySelector("h2").innerText);

    });

});