// Criar um função para não poluir o escopo global
function meuEscopo(){
    
    // Capturação do evento de submit do formulário
    const form = document.querySelector("#form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Gravando em variaveis o peso e a altura digitada no input
        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector("#altura"); 
        
        // Verificação se o peso ou altura é válido
        // Caso a converção retorne um NaN ira para as condições
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        
        if(!peso && !altura){
            setResultado("Peso e Altura inválido. Digite uma altura e um peso válido.",false);
            return;
        }

        if(!peso){
            setResultado("Peso inválido. Digite um peso válido.",false);
            return;
        }

        if(!altura){
            setResultado("Altura inválido. Digite uma altura válida.",false);
            return;
        }

        // Calculo de imc
        const imc = getImc(peso, altura);   
        const classificaoIMC = gatClassificaoIMC(imc);   

        const msg = `Seu IMC é ${imc} e você esta ${classificaoIMC}.`; 

        setResultado(msg, true);
    });

    // Função para definir a classificação do IMC
    function gatClassificaoIMC (imc){
        const classificao = ["Abaixo do peso" , "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

        if(imc >= 39.9) return classificao[5];
        if(imc >= 34.9) return classificao[4];
        if(imc >= 29.9) return classificao[3];        
        if(imc >= 24.9) return classificao[2];
        if(imc >= 18.5) return classificao[1];
        if(imc < 18.5) return  classificao[0];
    }

    // Função para o calculo de IMC
    function getImc(peso,altura){
        imc = peso/(altura**2);
        return imc.toFixed(2);
    }

    // Criação de paragrafos
    function setParagrafos(className){
        const p = document.createElement("p");
        return p;
    }

    // Adicionar texto ao resultado
    function setResultado(msg, isValid){
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = " ";
        
        const p = setParagrafos();
        if(isValid) {
            p.classList.add("paragrafo-resultado-valido");
        }else if(!isValid){
            p.classList.add("paragrafo-resultado-Nvalido");
        } 
        
        p.innerHTML = msg;
        resultado.appendChild(p);
    };

}

meuEscopo();