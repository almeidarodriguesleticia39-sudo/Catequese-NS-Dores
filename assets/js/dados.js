const alunos = [
    {
        id: 1,
        nome: "Gabriel Almeida",
        turma: "Pré-Eucaristia",

        responsavel: {
            nome: "Maria Almeida",
            telefone: "(11) 99999-1111"
        },

        presencas: [
            { data: "08/03/2026", presente: true },
            { data: "15/03/2026", presente: true },
            { data: "22/03/2026", presente: false },
            { data: "29/03/2026", presente: true }
        ],

        tema: {
            titulo: "O Bom Pastor",
            data: "29/03/2026"
        },

        avisos: [
            {
                titulo: "Material",
                descricao: "Trazer Bíblia no próximo encontro."
            },
            {
                titulo: "Missa",
                descricao: "Participar da missa de domingo."
            }
        ],

        comportamento: [
            "Participativo",
            "Respeitoso"
        ],

        observacoes: `
        Gabriel tem participado muito bem dos encontros.
        
        Está respeitando os colegas, demonstra interesse nas atividades e responde às perguntas durante a catequese.

        Continuem incentivando a leitura da Bíblia em casa.`,

        ultimaAtualizacao: "30/06/2026"
    },

    {
        id: 2,
        nome: "Maria Eduarda",
        turma: "Pré-Eucaristia",

        responsavel: {
            nome: "Ana Souza",
            telefone: "(11) 99999-2222"
        },

        presencas: [
            { data: "08/03/2026", presente: true },
            { data: "15/03/2026", presente: true },
            { data: "22/03/2026", presente: true },
            { data: "29/03/2026", presente: true }
        ],

        tema: {
            titulo: "A Criação",
            data: "29/03/2026"
        },

        avisos: [
            {
                titulo: "Material",
                descricao: "Levar lápis de cor."
            }
        ],

        comportamento: [
            "Muito dedicada",
            "Educada"
        ],

        observacoes: `
        Maria é bastante dedicada e sempre entrega as atividades.

        Parabéns pelo incentivo da família.`,

        ultimaAtualizacao: "30/06/2026"
    },

    {
        id: 3,
        nome: "Pedro Henrique",
        turma: "Pré-Eucaristia",

        responsavel: {
            nome: "Carlos Henrique",
            telefone: "(11) 99999-3333"
        },

        presencas: [
            { data: "08/03/2026", presente: true },
            { data: "15/03/2026", presente: false },
            { data: "22/03/2026", presente: false },
            { data: "29/03/2026", presente: true }
        ],

        tema: {
            titulo: "Jesus nos ama",
            data: "29/03/2026"
        },

        avisos: [
            {
                titulo: "Horário",
                descricao: "Chegar 15 minutos antes do encontro."
            }
        ],

        comportamento: [
            "Participativo"
        ],

        observacoes: `
        Pedro tem potencial, mas precisa melhorar a frequência.

        A presença constante é importante para acompanhar os conteúdos da catequese.`,

        ultimaAtualizacao: "30/06/2026"
    },
    {
        id: 4,
        nome: "Ikaro Rennan",
        turma: "Pré-Eucaristia",

        responsavel: {
            nome: "Verificar nome",
            telefone: "(61) 00000-0000"
        },

        presencas: [
            { data: "08/03/2026", presente: true },
            { data: "15/03/2026", presente: false },
            { data: "22/03/2026", presente: false },
            { data: "29/03/2026", presente: true },
            { data: "01/07/2026", presente: true }
        ],

        tema: {
            titulo: "Em breve"
            //data: "29/03/2026"
        },

        avisos: [
            {
                //titulo: "Em breve",
                descricao: "Em breve."
            }
        ],

        comportamento: [
            "Participativo",
            "Respeitoso"          
        ],

        observacoes: `
        Ikaro tem potencial, mas precisa melhorar a frequência.

        A presença constante é importante para acompanhar os conteúdos da catequese.`,

        ultimaAtualizacao: "01/07/2026"
    }
];