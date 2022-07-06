const [input1, input2] = document.querySelectorAll("input");

const botao = document.querySelector("button");

function mudanca(){

    if(input1.value && input2.value.length >=8){
      
        botao.removeAttribute("disabled");
        botao.style.backgroundColor = "#FF002E"
    }

    else{
        document.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", mudanca);
input2.addEventListener("input", mudanca);