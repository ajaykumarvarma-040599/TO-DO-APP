let btn = document.getElementById("btn")
let clrbtn = document.getElementById("clrbtn")
let input = document.getElementById("input")
let output = document.querySelector(".output")

btn.addEventListener("click", () => {
    if (input.value == "") {
        alert("enter the task")
    }
    else {
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${input.value} <button>Remove</button>`;
        output.appendChild(newEle)
        input.value = "";
        newEle.querySelector("button").addEventListener("click", remove)
        function remove() {
            newEle.remove();


        }

    }
})
