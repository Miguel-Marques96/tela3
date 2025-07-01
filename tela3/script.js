const cores = [
            { nome: "vermelho", cor: "red" },
            { nome: "azul", cor: "blue" },
            { nome: "verde", cor: "green" },
            { nome: "amarelo", cor: "yellow" },
            { nome: "roxo", cor: "purple" },
            { nome: "preto", cor: "black" },
            { nome: "laranja", cor: "orange" }
        ];

        const colorName = document.getElementById("colorName");
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const tempoLista = document.getElementById("tempoLista");
        const tempoAtual = document.getElementById("tempoAtual");

        let startTime;

        function novaRodada() {
            let corTexto = cores[Math.floor(Math.random() * cores.length)];
            let corBotaoCerta = corTexto.cor;
            let corBotaoErrada = cores[Math.floor(Math.random() * cores.length)].cor;

            while (corBotaoErrada === corBotaoCerta) {
                corBotaoErrada = cores[Math.floor(Math.random() * cores.length)].cor;
            }

            colorName.textContent = corTexto.nome;
            colorName.style.color = cores[Math.floor(Math.random() * cores.length)].cor;

            if (Math.random() < 0.5) {
                button1.style.backgroundColor = corBotaoCerta;
                button2.style.backgroundColor = corBotaoErrada;
            } else {
                button1.style.backgroundColor = corBotaoErrada;
                button2.style.backgroundColor = corBotaoCerta;
            }

            startTime = new Date();
        }

        function escolherCor(corEscolhida) {
            let tempoDecorrido = ((new Date() - startTime) / 1000).toFixed(2);
            tempoAtual.textContent = `tempo: ${tempoDecorrido}s`;
            if (corEscolhida === cores.find(c => c.nome === colorName.textContent).cor) {
                tempoLista.innerHTML += `<br>${tempoDecorrido}s`;
                novaRodada();
            } else {
                alert("Cor errada! Tente novamente.");
                novaRodada();
            }
        }

        button1.addEventListener("click", () => escolherCor(button1.style.backgroundColor));
        button2.addEventListener("click", () => escolherCor(button2.style.backgroundColor));

        novaRodada();