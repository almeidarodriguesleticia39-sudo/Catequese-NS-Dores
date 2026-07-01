const btnEditar = document.getElementById("btnEditar");
const conteudo = document.getElementById("conteudo");

btnEditar.addEventListener("click", mostrarListaAlunos);

function mostrarListaAlunos() {

    conteudo.innerHTML = `

        <h2>Selecione um catequizando</h2>

        <div class="lista-alunos">

            ${alunos.map(aluno => `

                <button
                    class="btn-aluno"
                    data-id="${aluno.id}">

                    <strong>👦 ${aluno.nome}</strong>

                    <br>

                    <small>📚 ${aluno.turma}</small>

                </button>

            `).join("")}

        </div>

    `;

    document
        .querySelectorAll(".btn-aluno")
        .forEach(botao => {

            botao.addEventListener("click", function(){

                abrirAluno(Number(this.dataset.id));

            });

    });

}

function abrirAluno(id){

    const aluno = alunos.find(a => a.id === id);

conteudo.innerHTML = `

<div class="info-card">

    <h2>👦 ${aluno.nome}</h2>

    <p><strong>📚 Turma:</strong> ${aluno.turma}</p>

    <p><strong>👤 Responsável:</strong> ${aluno.responsavel.nome}</p>

    <p><strong>📞 Telefone:</strong> ${aluno.responsavel.telefone}</p>

    <p><strong>🗓 Última atualização:</strong> ${aluno.ultimaAtualizacao}</p>

    <hr>

    <label>💬 Observações</label>

    <textarea id="observacao" rows="5">${aluno.observacoes}</textarea>

    <hr>

    <label>⭐ Comportamento (uma linha por item)</label>

    <textarea id="comportamento" rows="3">${aluno.comportamento.join("\n")}</textarea>

    <hr>

    <label>📚 Tema do encontro</label>

    <input id="tema" value="${aluno.ultimoEncontro.titulo}">

    <hr>

    <label>📢 Avisos (um por linha)</label>

    <textarea id="aviso" rows="3">${aluno.avisos.map(a=>a.descricao).join("\n")}</textarea>

    <hr>

    <h3>📅 Presenças</h3>

    <div id="listaPresencas">

        ${aluno.presencas.map((p,index)=>`

            <label style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">

                <input
                    type="checkbox"
                    class="chkPresenca"
                    data-index="${index}"
                    ${p.presente ? "checked" : ""}>

                ${p.data}

            </label>

        `).join("")}

    </div>

    <div class="botoes-admin">

        <button
            id="btnVoltar"
            class="btn-secundario">

            ← Voltar

        </button>

        <button id="btnSalvar">

            💾 Salvar

        </button>

    </div>
    <hr>

    <button id="btnGerar">

        📄 Gerar dados.js

    </button>

    <div id="codigoGerado" style="display:none; margin-top:20px;">

        <label>Copie o conteúdo abaixo:</label>

        <textarea
            id="saidaCodigo"
            rows="18"
            readonly></textarea>

        <button id="btnCopiar">

            📋 Copiar

        </button>

    </div>

</div>

`;

    document.getElementById("btnSalvar").addEventListener("click", function(){

    aluno.observacoes =
        document.getElementById("observacao").value;

    aluno.comportamento =
        document.getElementById("comportamento")
        .value
        .split("\n")
        .filter(x=>x.trim());

    aluno.ultimoEncontro.titulo =
        document.getElementById("tema").value;

    aluno.avisos =
        document.getElementById("aviso")
        .value
        .split("\n")
        .filter(x=>x.trim())
        .map(a=>({
            titulo:"Aviso",
            descricao:a
        }));

    document
        .querySelectorAll(".chkPresenca")
        .forEach(chk=>{

            const i = chk.dataset.index;

            aluno.presencas[i].presente = chk.checked;

        });

    aluno.ultimaAtualizacao =
        new Date().toLocaleDateString("pt-BR");

    alert("Alterações salvas!");

        });

    document
        .getElementById("btnVoltar")
        .addEventListener("click", mostrarListaAlunos);

    document
        .getElementById("btnGerar")
        .addEventListener("click", gerarArquivo);        

}

function gerarArquivo(){

    const codigo =
    `const alunos = ${JSON.stringify(alunos, null, 4)};`;

    document
        .getElementById("codigoGerado")
        .style.display = "block";

    document
        .getElementById("saidaCodigo")
        .value = codigo;

    document
        .getElementById("btnCopiar")
        .onclick = function(){

            navigator.clipboard.writeText(codigo);

            alert("dados.js copiado!");

        };

}