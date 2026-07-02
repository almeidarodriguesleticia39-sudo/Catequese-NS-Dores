const form = document.getElementById("formPesquisa");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    buscarAluno();
});

function buscarAluno() {

    const texto = document
        .getElementById("pesquisa")
        .value
        .trim()
        .toLowerCase();

    if (texto === "") {
        return;
    }

    const encontrados = alunos.filter(a =>
        a.nome.toLowerCase().includes(texto)
    );

    if (encontrados.length === 0) {
        mostrarNaoEncontrado();
        return;
    }

    if (encontrados.length === 1) {
        mostrarAluno(encontrados[0]);
        return;
    }

    mostrarLista(encontrados);
}

function calcularFrequencia(aluno) {

    const total = aluno.presencas.length;

    const presentes = aluno.presencas.filter(p => p.presente).length;

    return Math.round((presentes / total) * 100);
}

function mostrarAluno(aluno) {

    const frequencia = calcularFrequencia(aluno);

    let status = "";
    let classe = "";

    if (frequencia >= 75) {
        status = "Boa frequência";
        classe = "bom";
    }
    else if (frequencia >= 50) {
        status = "Atenção";
        classe = "atencao";
    }
    else {
        status = "Muitas faltas";
        classe = "ruim";
    }

    resultado.innerHTML = `

    <div class="aluno-header">

        <h2>${aluno.nome}</h2>

        <p>${aluno.turma}</p>

        <span class="status ${classe}">

            ${status}

        </span>

    </div>

    <div class="info-card">

        <h3>📊 Frequência</h3>

        <div class="barra-frequencia">
            <div style="width:${frequencia}%"></div>
        </div>

        <strong>${frequencia}%</strong>

    </div>

    <div class="info-card">

        <h3>📅 Presenças</h3>

        <ul>

            ${aluno.presencas.map(p=>`

                <li>

                    ${p.presente ? "✅" : "❌"}

                    ${p.data}

                </li>

            `).join("")}

        </ul>

    </div>

    <div class="info-card">

        <h3>📚 Tema do encontro</h3>

        <p>

            <strong>${aluno.ultimoEncontro.titulo}</strong>

        </p>

        <small>

            ${aluno.ultimoEncontro.data}

        </small>

    </div>

    <div class="info-card">

        <h3>📢 Avisos</h3>

        <ul>

            ${aluno.avisos.map(a=>`

                <li>

                    <strong>${a.titulo}</strong>

                    <br>

                    ${a.descricao}

                </li>

            `).join("")}

        </ul>

    </div>

    <div class="info-card">

        <h3>⭐ Comportamento</h3>

        <ul>

            ${aluno.comportamento.map(c=>`

                <li>${c}</li>

            `).join("")}

        </ul>

    </div>

    <div class="info-card">

        <h3>💬 Observações da Catequista</h3>

        <p>

            ${aluno.observacoes}

        </p>

    </div>

    <p style="text-align:center;color:#888;font-size:.85rem;">

        Última atualização: ${aluno.ultimaAtualizacao}

    </p>

    `;

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    resultado.style.display = "block";

}

function mostrarNaoEncontrado() {

    resultado.innerHTML = `
        <div class="card">

            <h2>😕 Catequizando não encontrado</h2>

            <p>
                Confira o nome digitado ou tente pesquisar apenas parte do nome.
            </p>

        </div>
    `;

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    resultado.style.display = "block";
}

function mostrarLista(lista) {

    resultado.innerHTML = `
    
        <div class="card">

            <h2>Encontramos ${lista.length} catequizandos</h2>

            <p>Escolha o aluno abaixo:</p>

            <div class="lista-alunos">

                ${lista.map(aluno => `

                    <button
                        class="btn-aluno"
                        data-id="${aluno.id}">

                        👦 ${aluno.nome}

                    </button>

                `).join("")}

            </div>

        </div>

    `;

    resultado.style.display = "block";

    document
        .querySelectorAll(".btn-aluno")
        .forEach(botao => {

            botao.addEventListener("click", function () {

                const id = Number(this.dataset.id);

                const aluno = alunos.find(a => a.id === id);

                mostrarAluno(aluno);

            });

        });

}