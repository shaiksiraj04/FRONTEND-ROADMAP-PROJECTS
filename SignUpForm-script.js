const password =
    document.getElementById("password");

const bar =
    document.getElementById("strengthBar");

const text =
    document.getElementById("strengthText");

password.addEventListener(
    "input",
    () => {

        let value = password.value;

        if (value.length < 6) {

            bar.style.width = "33%";
            bar.style.background = "red";

            text.innerText = "Weak";

        }

        else if (value.length < 10) {

            bar.style.width = "66%";
            bar.style.background = "orange";

            text.innerText = "Medium";

        }

        else {

            bar.style.width = "100%";
            bar.style.background = "green";

            text.innerText = "Strong";

        }

    }
);