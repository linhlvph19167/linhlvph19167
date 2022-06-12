
const button = document.getElementById("button");
            const menu = document.getElementById("main-menu");

            button.addEventListener("click", function () {
                console.log("object")
                menu.classList.toggle("hidden");
            });
