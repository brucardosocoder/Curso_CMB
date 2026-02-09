// DADOS DO CURSO

const courseData = {
    title: 'Recebimento de Notas - Selo COMEM CMB',
    lessons: [
        {
            id: 1,
            title: 'Introdução e Pré-requisitos',
            subtitle: 'Visão geral do processo de recebimento',
            content: `
                <h2>Visão Geral do Processo</h2>
                <p>O processo de recebimento de notas fiscais é fundamental para a operação da Casa da Moeda do Brasil. Compreender cada etapa garante que o procedimento seja executado corretamente e sem divergências.</p>
                
                <h3>Atores Principais</h3>
                <p>Existem três atores principais neste processo:</p>
                <ul>
                    <li><strong>Casa da Moeda (CMB):</strong> Gera a nota fiscal (DANFE)</li>
                    <li><strong>GSUP - Fiscal de Contrato:</strong> Gera o número do pedido no ERP (O7)</li>
                    <li><strong>Solução Fiscal (CS - VIFIC - DETRI):</strong> Valida e processa os documentos fiscais</li>
                </ul>

                <h3>Pré-requisitos Essenciais</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Importante:</strong> Para recebimento também precisamos do encaminhamento da PAUTA PARA PODERMOS EFETUAR A DISTRIBUIÇÃO. Somente encaminhamos o recibo após recebermos a pauta de distribuição e também da efetiva expedição.</p>
                </div>

                <h3>Fluxo Básico</h3>
                <ol>
                    <li>Receber nota da CMB por e-mail (DANFE + XML)</li>
                    <li>Encaminhar XML para solução fiscal</li>
                    <li>Receber número do pedido (O7) do fiscal</li>
                    <li>Preencher planilha de validação</li>
                    <li>Importar dados no ERP</li>
                    <li>Monitorar status de validação</li>
                    <li>Efetuar recebimento da nota</li>
                </ol>

                <h3>Contatos Importantes</h3>
                <p><strong>Email para envio de XML:</strong> documentofiscal@correios.com.br</p>
                <p><strong>Solução Fiscal:</strong> CS - VIFIC - DETRI - Documentos Fiscais - Caixa Postal</p>
            `,
            videoUrl: null
        },
        {
            id: 2,
            title: 'Preenchimento da Planilha e Importação no ERP',
            subtitle: 'Preparando os dados para o sistema',
            content: `
                <h2>Planilha de Validação</h2>
                <p>A planilha de validação é o documento intermediário que facilita a importação dos dados no ERP. Ela deve ser preenchida com informações precisas do documento fiscal.</p>

                <h3>Localização da Planilha</h3>
                <p>A planilha está disponível na pasta compartilhada da SADM com o nome <strong>"INSTRUÇÕES PARA PREENCHIMENTO DE PLANILHA"</strong>. Siga as orientações contidas no documento para preencher corretamente.</p>

                <h3>Campos Obrigatórios</h3>
                <ul>
                    <li>Número do Documento Fiscal (DANFE)</li>
                    <li>Série do DF (normalmente "2" para CMB)</li>
                    <li>Fornecedor (AN8: CMB – 120779)</li>
                    <li>Data de Emissão</li>
                    <li>Valor Total</li>
                    <li>Quantidade</li>
                </ul>

                <h3>Importação no ERP</h3>
                <div class="highlight-box">
                    <p><strong>Passo 1:</strong> Acessar o ERP-JDE</p>
                    <p><strong>Passo 2:</strong> Menu CORREIOS → GESTÃO DE COMPRAS E AGC → RECEBIMENTO SIMPLIFICADO E ENTRADA DE DADOS → CONSULTA E ENTRADA PARA RECEBIMENTO SIMPLIFICADO</p>
                    <p><strong>Passo 3:</strong> Clicar no ícone de importação</p>
                    <p><strong>Passo 4:</strong> Informar a SE dos documentos fiscais (número 50)</p>
                </div>

                <h3>Processo de Cópia e Cola</h3>
                <ol>
                    <li>Selecionar todos os dados da planilha (colunas/linhas) <strong>COM EXCEÇÃO DO CABEÇALHO</strong></li>
                    <li>Copiar os dados (Ctrl + C)</li>
                    <li>Clicar em "FERRAMENTAS" → "IMPORTAR DADOS DE GRADE"</li>
                    <li>Selecionar "IMPORTAR DA ÁREA DE TRANSFERÊNCIA"</li>
                    <li>Colar os dados (Ctrl + V) na grade do ERP</li>
                    <li>Clicar em "CONTINUAR"</li>
                </ol>

                <h3>Validação dos Dados</h3>
                <p>Após a importação, o ERP verificará se todas as informações estão corretas. Se houver algum erro, o sistema emitirá uma mensagem em vermelho sinalizando o campo com problema.</p>
            `,
            videoUrl: null
        },
        {
            id: 3,
            title: 'Validação no Polo de Operações Fiscais',
            subtitle: 'Monitorando o status de validação',
            content: `
                <h2>Monitoramento no Polo de Operações Fiscais</h2>
                <p>Após enviar os dados para validação, é necessário monitorar o status do documento fiscal no ERP para garantir que foi processado corretamente.</p>

                <h3>Acessando a Consulta</h3>
                <ol>
                    <li>Menu CORREIOS → FISCAL TRIBUTÁRIO → POLO DE OPERAÇÕES FISCAIS</li>
                    <li>Selecionar "CONSULTA DOCUMENTO FISCAL ENVIADO PARA VALIDAÇÃO"</li>
                </ol>

                <h3>Campos para Preenchimento</h3>
                <ul>
                    <li><strong>NÚMERO DO DOCUMENTO FISCAL:</strong> Será o número da DANFE</li>
                    <li><strong>SÉRIE DO DF:</strong> No caso da DANFE CMB será "2"</li>
                    <li><strong>FORNECEDOR (AN8):</strong> CMB – 120779</li>
                </ul>

                <p>Após preencher, clicar na lupa para pesquisar.</p>

                <h3>Status do Processo</h3>
                <div class="highlight-box">
                    <p><strong>Status Inicial:</strong> "10 – DF ENVIADO AO POLO DE OPERAÇÕES FISCAIS"</p>
                    <p><strong>Status Esperado:</strong> "20 – DF VALIDADO PELO POLO DE OPERAÇÕES FISCAIS"</p>
                    <p>Você deve aguardar a mudança de status antes de prosseguir com o recebimento dos selos no ERP.</p>
                </div>

                <h3>Validação Normalmente Realizada</h3>
                <p>Em regra, a validação da DANFE é efetuada até o final do dia em que foi enviada. Caso isso não ocorra, deverá ser aberta uma interação via HELPDESK solicitando priorização da validação da nota, através do formulário <strong>05.60 – PRIORIZAÇÃO DE VALIDAÇÃO DE DOCUMENTO FISCAL</strong>.</p>

                <h3>Próximas Etapas</h3>
                <p>Após atingir o status "20 – DF VALIDADO", você está pronto para prosseguir com o recebimento efetivo dos selos no ERP!</p>
            `,
            videoUrl: null
        },
        {
            id: 4,
            title: 'Conferência de Estoque e Conversão',
            subtitle: 'Verificando quantidades e conversões',
            content: `
                <h2>Verificação de Estoque</h2>
                <p>Antes de efetuar o recebimento, é essencial conferir se a quantidade de selos no ERP corresponde ao que foi informado na nota fiscal.</p>

                <h3>Acessando a Disponibilidade de Item</h3>
                <ol>
                    <li>Inserir o código do item (exemplo: 852012659 - <strong>sem pontos</strong>)</li>
                    <li>Filial/FÁBRICA: "00018055" (pesquisar na lupa)</li>
                    <li>Selecionar a linha</li>
                    <li>Clicar em "LINHA" → "disponibilidade de item"</li>
                    <li>Clicar em "apenas sintético" + "procurar!"</li>
                </ol>

                <p>Aparecerá a quantidade total de unidades (UN) no campo "NO RECEBIMENTO", o que significa que está pendente de recebimento.</p>

                <h3>Verificação de Conversão</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Importante para Selos Novos:</strong> Você deve observar a conversão para verificar o número de selos por folha.</p>
                </div>

                <h3>Acessando as Conversões</h3>
                <ol>
                    <li>Marcar a linha do item</li>
                    <li>Clicar em "LINHA" → "cadastro de itens (I)"</li>
                    <li>Clicar em "LINHA" → "Revisão de item" → "TELA"</li>
                    <li>Clicar em "CONVERSÕES"</li>
                </ol>

                <h3>Confrontação com Ficha Técnica</h3>
                <p>Verificar e confrontar se a conversão bate com a quantidade descrita na <strong>Ficha Técnica</strong> do respectivo selo que encontra-se no SEI.</p>

                <h3>Caso de Divergência</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Atenção:</strong> CASO OCORRA A DIVERGÊNCIA, INFORMAR A GSUP PARA QUE SEJA SANADA, ANTES DE RECEBER A NOTA.</p>
                </div>

                <p>Não prossiga com o recebimento se houver qualquer divergência na conversão. Sempre comunique o fiscal de contrato para resolução do problema.</p>
            `,
            videoUrl: null
        },
        {
            id: 5,
            title: 'Efetivando o Recebimento',
            subtitle: 'Lançamento no ERP e fechamento da nota',
            content: `
                <h2>Recebimento Efetivo da Nota</h2>
                <p>Após todas as verificações, você está pronto para efetuar o recebimento da nota no ERP. Este é o passo que confirma a entrada dos selos no estoque.</p>

                <h3>Inserindo o Número do Pedido</h3>
                <ol>
                    <li>Inserir o número do pedido (exemplo: 1774) no seu respectivo campo</li>
                    <li>Manter o O7 (número do pedido do fiscal)</li>
                    <li>Clicar em "PROCURAR"</li>
                </ol>

                <h3>Conferência de Dados</h3>
                <div class="highlight-box">
                    <p><strong>Verificar:</strong> NF x ERP → VALOR e Quantidade (lembre-se: "," é ponto)</p>
                    <p><strong>Importante:</strong> QUANDO O PEDIDO É GERADO EM DUAS LINHAS TEMOS QUE SOMAR AS INFORMAÇÕES.</p>
                </div>

                <p>Caso haja divergência, <strong>NÃO PROSSEGUIR</strong> e acionar o fiscal de contrato imediatamente.</p>

                <h3>Preenchimento de Dados</h3>
                <ol>
                    <li>Data Receb (significa Data de Emissão da NF)</li>
                    <li>Marcar a linha</li>
                    <li>Conferir a conversão</li>
                    <li>Opção de Rec.: "1" em cada linha (se houver mais de uma)</li>
                </ol>

                <h3>Processamento no ERP</h3>
                <p>Se aparecer alerta em amarelo, pode desconsiderar. O sistema irá para a tela de revisão de notas fiscais.</p>

                <h3>Fechamento da Nota</h3>
                <ol>
                    <li>Clicar em "OK" até sair da tela de revisão</li>
                    <li>Clicar em "TELA" → "FECHAR NOTA"</li>
                    <li>Confirmar com "OK"</li>
                    <li>Pode sair e fechar o sistema</li>
                </ol>

                <div class="highlight-box">
                    <p><strong>✓ Sucesso!</strong> Nota recebida com sucesso! Para confirmar, você pode verificar pelo bizu do estoque - estará no EXISTENTE!!!</p>
                </div>
            `,
            videoUrl: null
        },
        {
            id: 6,
            title: 'Disponibilização de Estoque',
            subtitle: 'Preparando o estoque para distribuição',
            content: `
                <h2>Disponibilização de Estoque</h2>
                <p>Após o recebimento da nota, o próximo passo é disponibilizar o estoque para que possa ser distribuído aos centros de distribuição.</p>

                <h3>Acessando a Consulta de Estoque</h3>
                <ol>
                    <li>Inserir: NÚMERO DO ITEM (exemplo: 852012659 - <strong>sem pontos</strong>)</li>
                    <li>FILIAL/FÁBRICA: 00018055</li>
                    <li>Clicar em "PROCURAR"</li>
                </ol>

                <h3>Marcação da Linha</h3>
                <ol>
                    <li>Marcar a linha do item com "T" (T de "Transferência")</li>
                    <li>Selecionar a linha</li>
                </ol>

                <h3>Limpeza do Código de Status</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Atenção:</strong> QUANDO FOR PEDIDO DE DUAS LINHAS, TEM QUE TIRAR/SELECIONAR AS DUAS LINHAS COM O "T" + informação.</p>
                </div>

                <p>Na tela que aparecerá, atentar ao campo: "CÓDIGO DE STATUS DO LOTE". Delete o "T" que aparece dentro do campo.</p>

                <h3>Dica Profissional</h3>
                <p>Se for mais de uma linha, terá que fazer o DELETE em cada uma. Como somos espertos, vamos clicar em "PROCURAR" (lupa)! Aí o T ou T's irão desaparecer das segundas ou linhas seguintes, só aparecendo na primeira.</p>

                <h3>Status Final</h3>
                <p>Isso quer dizer que já está disponível pra gerar as notas de distribuição provisórias. Na consulta de estoque aparecerá: <strong>DISPONÍVEL!!!</strong> Significa que podemos gerar os pedidos de transferência para os CDs.</p>
            `,
            videoUrl: null
        },
        {
            id: 7,
            title: 'Geração de Distribuição (Pedidos de Transferência)',
            subtitle: 'Criando pedidos para os centros de distribuição',
            content: `
                <h2>Geração de Pedidos de Distribuição</h2>
                <p>Após disponibilizar o estoque, o próximo passo é gerar os pedidos de transferência para os centros de distribuição (CDs).</p>

                <h3>Preparação Inicial</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Importante:</strong> Mas antes temos que ter o espelho que fica disponível no verso das notas, com atestos e demais informações!!!!!</p>
                </div>

                <h3>Legenda de Preenchimento</h3>
                <ul>
                    <li><strong>RECEBIMENTO:</strong> Edvaldo</li>
                    <li><strong>CARREGAMENTO:</strong> lançamento sistema ERP</li>
                    <li><strong>ATESTO:</strong> liberação da inspeção ou Laudo de inspeção</li>
                </ul>

                <p>Preencher a DATA DO CARREGAMENTO (RECEBIMENTO/LIBERAÇÃO) NO VERSO DA NOTA!!!</p>

                <h3>Criação do Pedido</h3>
                <ol>
                    <li>Clicar em "incluir"</li>
                    <li>As tarefas serão feitas pela distribuição</li>
                    <li>Se for só um local, só uma vez</li>
                    <li>Caso tenha distribuição pros 3 locais, esta ação será executada 3 vezes</li>
                </ol>

                <h3>Preenchimento dos Campos</h3>
                <ul>
                    <li><strong>DE/Filial/fábr:</strong> SDPR – "00018055" (NOSSO MCU)</li>
                    <li><strong>P/Filial/fábr:</strong> CD LESTE – "00049748" (1º a ser feito é sempre)</li>
                    <li><strong>CD OESTE:</strong> "00004010" (2º a ser feito é sempre)</li>
                    <li><strong>Quant. Pedida:</strong> "DE FOLHAS!!" (exemplo: 15275 - sem ponto)</li>
                    <li><strong>UM:</strong> "Quando for folhas "FL" (sempre em maiúsculo)</li>
                    <li><strong>Nº do Item:</strong> Exemplo: 852012659 (sem ponto)</li>
                </ul>

                <h3>Anotação de Dados</h3>
                <p>Anotar os dados (Somente o TO: Ex: 4819) da tela apresentada e inserir no campo da NF no verso respectivo.</p>

                <h3>Próximas Etapas</h3>
                <p>Após criar os pedidos de transferência, você prosseguirá com a geração das notas fiscais provisória e definitiva.</p>

                <div class="highlight-box">
                    <p><strong>Obs:</strong> PARA ACVD SERÁ OUTRO BIZÚ!!! (Procedimento diferente)</p>
                </div>
            `,
            videoUrl: null
        },
        {
            id: 8,
            title: 'Geração de Notas Fiscais (Provisória e Definitiva)',
            subtitle: 'Finalizando o processo com emissão de NFs',
            content: `
                <h2>Geração de Notas Fiscais</h2>
                <p>A geração de notas fiscais é a etapa final do processo. Envolve criar a NF provisória, remeter para a solução fiscal e gerar a NF definitiva.</p>

                <h3>Geração da NF Provisória</h3>
                <ol>
                    <li>Clicar em "SELEÇÃO DE DADOS" → "SUBMETER"</li>
                    <li>No campo "nulo" → Selecionar "Literal"</li>
                    <li>No campo "Valor Literal": Inserir o T0 (exemplo: 4819)</li>
                    <li>Na próxima tela → Selecionar novamente</li>
                    <li>Clicar em "exibir status de Job"</li>
                </ol>

                <h3>Verificação do Status</h3>
                <div class="highlight-box">
                    <p><strong>⚠️ Atenção:</strong> Quase sempre será o primeiro da lista. Tem que estar com o status "concluído"</p>
                </div>

                <ol>
                    <li>Clicar em "Exib. Saída" → Abre PDF que será gerado</li>
                    <li>Conferir as informações!!!!</li>
                    <li>Anotar o NA que aparece e inserir (de lápis) no verso da NF!!</li>
                </ol>

                <h3>Remessa para Solução Fiscal</h3>
                <ol>
                    <li>Clicar em "SELEÇÃO DE DADOS" → "SUBMETER"</li>
                    <li>No campo "nulo" → Selecionar "Literal"</li>
                    <li>No campo "Valor Literal": Inserir o T0 (exemplo: 4819)</li>
                    <li>Na próxima tela → Selecionar novamente</li>
                    <li>Clicar em "exibir status de Job"</li>
                    <li>Clicar no item do campo: "EXIBIR SAÍDA"</li>
                </ol>

                <h3>Verificação da NF Provisória</h3>
                <ol>
                    <li>CIA: 50</li>
                    <li>Unid. Negócios: 00018055</li>
                    <li>Clicar em procurar</li>
                    <li>Inserir o número da nota provisória (exemplo: 129718)</li>
                    <li>Clicar em procurar</li>
                </ol>

                <div class="highlight-box">
                    <p><strong>Status Esperado:</strong> Tem que esperar mudar para o status "4 - Sucesso"</p>
                </div>

                <h3>Geração da NF Definitiva</h3>
                <ol>
                    <li>Clicar em "SELEÇÃO DE DADOS" → "SUBMETER"</li>
                    <li>No campo "nulo" → Selecionar "Literal"</li>
                    <li>No campo "Valor Literal": Inserir o NA (exemplo: 789759)</li>
                    <li>Na próxima tela → Selecionar novamente</li>
                    <li>Clicar em "exibir status de Job"</li>
                    <li>Clicar em "Exib. Saída"</li>
                    <li>Anotar o NOTA FISCAL que aparece e inserir (de lápis) no verso da NF!!</li>
                </ol>

                <h3>Impressão do DANFE</h3>
                <ol>
                    <li>CIA: 50</li>
                    <li>Unid. Negócios: 00018055</li>
                    <li>Inserir o Nº da NF-e de Transferência (exemplo: 1066)</li>
                    <li>Clicar em procurar</li>
                    <li>Selecionar a linha em que a nota apareceu</li>
                    <li>Clicar em LINHA → VISUALIZAR DANFE</li>
                    <li>Conferir as informações básicas → TUDO OK?!</li>
                </ol>

                <div class="highlight-box">
                    <p><strong>✓ Sucesso!</strong> FECHOU!!!!!!!!!!! SALVA A NOTA NA PASTA DE NF DE DISTRIBUIÇÃO / TRANSFERÊNCIA!!</p>
                    <p><strong>Próximo Passo:</strong> ENCAMINHA O E-MAIL E AGUARDEMOS AS CENAS DOS PRÓXIMOS CAPÍTULOS!!</p>
                </div>
            `,
            videoUrl: null
        }
    ],
    quiz: [
        {
            question: 'Quem gera o número do pedido no ERP?',
            options: [
                'Casa da Moeda (CMB)',
                'GSUP - Fiscal de Contrato',
                'Solução Fiscal',
                'Departamento de Estoque'
            ],
            correct: 1
        },
        {
            question: 'Qual é o email para envio de XML para a solução fiscal?',
            options: [
                'suporte@correios.com.br',
                'documentofiscal@correios.com.br',
                'fiscal@cmb.gov.br',
                'nfe@receita.gov.br'
            ],
            correct: 1
        },
        {
            question: 'Qual é o status inicial do documento fiscal no Polo de Operações Fiscais?',
            options: [
                '5 - DF Rejeitado',
                '10 - DF Enviado ao Polo de Operações Fiscais',
                '20 - DF Validado',
                '30 - DF Processado'
            ],
            correct: 1
        },
        {
            question: 'Qual é o código do fornecedor (AN8) para CMB?',
            options: [
                '100000',
                '120779',
                '150000',
                '200000'
            ],
            correct: 1
        },
        {
            question: 'Em quanto tempo normalmente a validação da DANFE é efetuada?',
            options: [
                'Até 2 horas',
                'Até o final do dia em que foi enviada',
                'Até 3 dias úteis',
                'Até 1 semana'
            ],
            correct: 1
        },
        {
            question: 'Qual é a unidade de medida (UM) quando se trata de folhas de selos?',
            options: [
                'UN (Unidade)',
                'FL (Folhas)',
                'CX (Caixa)',
                'PC (Peça)'
            ],
            correct: 1
        },
        {
            question: 'Qual é o código da filial/fábrica para SDPR?',
            options: [
                '00004010',
                '00049748',
                '00018055',
                '00050000'
            ],
            correct: 2
        },
        {
            question: 'Qual é o código da filial para CD LESTE?',
            options: [
                '00018055',
                '00049748',
                '00004010',
                '00050000'
            ],
            correct: 1
        },
        {
            question: 'Qual é o status esperado após a validação no Polo de Operações Fiscais?',
            options: [
                '10 - DF Enviado',
                '15 - DF Em Processamento',
                '20 - DF Validado',
                '25 - DF Aceito'
            ],
            correct: 2
        },
        {
            question: 'Qual é o percentual mínimo de acerto necessário para obter o certificado?',
            options: [
                '50%',
                '60%',
                '70%',
                '80%'
            ],
            correct: 2
        }
    ]
};

// VARIÁVEIS GLOBAIS

let currentLessonId = 1;
let currentQuestionIndex = 0;
let quizAnswers = {};
let completedLessons = new Set();
let studentName = 'Aluno';

// INICIALIZAÇÃO

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderLessonsList();
    renderLesson(currentLessonId);
    setupEventListeners();
    updateProgressBar();
});

// FUNÇÕES DE ARMAZENAMENTO

function saveToLocalStorage() {
    localStorage.setItem('courseProgress', JSON.stringify({
        currentLessonId,
        completedLessons: Array.from(completedLessons),
        quizAnswers,
        studentName
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('courseProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentLessonId = data.currentLessonId;
        completedLessons = new Set(data.completedLessons);
        quizAnswers = data.quizAnswers || {};
        studentName = data.studentName || 'Aluno';
    }
    document.getElementById('userName').textContent = studentName;
}

// RENDERIZAÇÃO DE AULAS

function renderLessonsList() {
    const list = document.getElementById('lessonsList');
    list.innerHTML = '';

    courseData.lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.className = 'lesson-item';
        if (lesson.id === currentLessonId) li.classList.add('active');
        if (completedLessons.has(lesson.id)) li.classList.add('completed');

        li.innerHTML = `Aula ${lesson.id}: ${lesson.title}`;
        li.onclick = () => {
            currentLessonId = lesson.id;
            renderLessonsList();
            renderLesson(lesson.id);
            saveToLocalStorage();
        };

        list.appendChild(li);
    });
}

function renderLesson(lessonId) {
    const lesson = courseData.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    document.getElementById('lessonTitle').textContent = `Aula ${lesson.id}: ${lesson.title}`;
    document.getElementById('lessonSubtitle').textContent = lesson.subtitle;
    document.getElementById('lessonContent').innerHTML = lesson.content;

    // Mostrar/ocultar botões de navegação
    document.getElementById('prevBtn').style.display = lessonId > 1 ? 'inline-flex' : 'none';
    document.getElementById('nextBtn').style.display = lessonId < courseData.lessons.length ? 'inline-flex' : 'none';

    // Atualizar status de conclusão
    updateCompletionStatus(lessonId);

    // Scroll para o topo
    document.querySelector('.content').scrollTop = 0;
}

function updateCompletionStatus(lessonId) {
    const status = document.getElementById('completionStatus');
    if (completedLessons.has(lessonId)) {
        status.textContent = '✓ Aula Concluída';
        status.style.color = 'var(--success-color)';
        document.getElementById('completeBtn').textContent = '✓ Aula Já Concluída';
        document.getElementById('completeBtn').disabled = true;
    } else {
        status.textContent = '';
        document.getElementById('completeBtn').textContent = '✓ Marcar como Concluída';
        document.getElementById('completeBtn').disabled = false;
    }
}

// FUNÇÕES DE QUIZ

function renderQuiz() {
    document.getElementById('lessonView').style.display = 'none';
    document.getElementById('quizView').style.display = 'block';
    document.getElementById('resultView').style.display = 'none';

    renderQuestion();
}

function renderQuestion() {
    const question = courseData.quiz[currentQuestionIndex];
    const card = document.getElementById('questionCard');

    card.innerHTML = `
        <div class="question-text">${question.question}</div>
        <ul class="options-list">
            ${question.options.map((option, index) => `
                <li class="option-item ${quizAnswers[currentQuestionIndex] === index ? 'selected' : ''}">
                    <input 
                        type="radio" 
                        id="option-${index}" 
                        name="answer" 
                        value="${index}"
                        ${quizAnswers[currentQuestionIndex] === index ? 'checked' : ''}
                        onchange="selectAnswer(${index})"
                    >
                    <label for="option-${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;

    // Atualizar progresso
    const progress = ((currentQuestionIndex + 1) / courseData.quiz.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `Questão ${currentQuestionIndex + 1} de ${courseData.quiz.length}`;

    // Mostrar/ocultar botões
    document.getElementById('prevQuestionBtn').style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
    document.getElementById('nextQuestionBtn').style.display = currentQuestionIndex < courseData.quiz.length - 1 ? 'inline-flex' : 'none';
    document.getElementById('submitQuizBtn').style.display = currentQuestionIndex === courseData.quiz.length - 1 ? 'inline-flex' : 'none';
}

function selectAnswer(index) {
    quizAnswers[currentQuestionIndex] = index;
    saveToLocalStorage();
    renderQuestion();
}

function submitQuiz() {
    let correctCount = 0;
    const results = [];

    courseData.quiz.forEach((question, index) => {
        const isCorrect = quizAnswers[index] === question.correct;
        if (isCorrect) correctCount++;
        results.push({
            question: question.question,
            selected: question.options[quizAnswers[index]],
            correct: question.options[question.correct],
            isCorrect
        });
    });

    const percentage = (correctCount / courseData.quiz.length) * 100;
    const passed = percentage >= 70;

    showResults(correctCount, percentage, passed, results);
}

function showResults(correctCount, percentage, passed, results) {
    document.getElementById('lessonView').style.display = 'none';
    document.getElementById('quizView').style.display = 'none';
    document.getElementById('resultView').style.display = 'block';

    const scoreCircle = document.createElement('div');
    scoreCircle.className = `score-circle ${passed ? 'success' : 'fail'}`;
    scoreCircle.textContent = Math.round(percentage) + '%';

    document.getElementById('resultScore').innerHTML = '';
    document.getElementById('resultScore').appendChild(scoreCircle);

    document.getElementById('resultMessage').textContent = passed ? 'Parabéns! Você passou!' : 'Você não atingiu a pontuação mínima';

    const details = document.getElementById('resultDetails');
    details.innerHTML = `
        <div class="result-detail-item">
            <span class="result-detail-label">Questões Corretas:</span>
            <span class="result-detail-value">${correctCount} de ${courseData.quiz.length}</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">Percentual:</span>
            <span class="result-detail-value">${Math.round(percentage)}%</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">Status:</span>
            <span class="result-detail-value" style="color: ${passed ? 'var(--success-color)' : 'var(--danger-color)'}">
                ${passed ? '✓ Aprovado' : '✗ Reprovado'}
            </span>
        </div>
    `;

    const certificateSection = document.getElementById('certificateSection');
    if (passed) {
        certificateSection.style.display = 'block';
        triggerConfetti();
    } else {
        certificateSection.style.display = 'none';
    }
}

// CERTIFICADO

function downloadCertificate() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Fundo com gradiente
    const gradient = ctx.createLinearGradient(0, 0, 1200, 800);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(1, '#8b5cf6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);

    // Borda decorativa
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 15;
    ctx.strokeRect(50, 50, 1100, 700);

    // Texto
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICADO DE CONCLUSÃO', 600, 150);

    ctx.font = '30px Roboto';
    ctx.fillText('Curso: Recebimento de Notas - Selo COMEM CMB', 600, 250);

    ctx.font = 'bold 40px Roboto';
    ctx.fillText(studentName, 600, 380);

    ctx.font = '24px Roboto';
    ctx.fillText('Completou com sucesso todas as aulas e atingiu 70% ou mais na avaliação final', 600, 480);

    const date = new Date().toLocaleDateString('pt-BR');
    ctx.font = '20px Roboto';
    ctx.fillText(`Data: ${date}`, 600, 600);

    ctx.fillText('Certificado válido como comprovante de conclusão do curso', 600, 700);

    // Download
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `Certificado_${studentName.replace(/\s+/g, '_')}.png`;
    link.click();
}

// CONFETTI

function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 5 + 5,
            color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.1 - 0.05
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += 0.1; // gravidade
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        if (particles.some(p => p.y < canvas.height)) {
            requestAnimationFrame(animate);
        } else {
            canvas.style.display = 'none';
        }
    }

    canvas.style.display = 'block';
    animate();
}

// EVENT LISTENERS

function setupEventListeners() {
    // Navegação de Aulas
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentLessonId > 1) {
            currentLessonId--;
            renderLessonsList();
            renderLesson(currentLessonId);
            saveToLocalStorage();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentLessonId < courseData.lessons.length) {
            currentLessonId++;
            renderLessonsList();
            renderLesson(currentLessonId);
            saveToLocalStorage();
        }
    });

    // Conclusão de Aula
    document.getElementById('completeBtn').addEventListener('click', () => {
        completedLessons.add(currentLessonId);
        saveToLocalStorage();
        renderLessonsList();
        updateCompletionStatus(currentLessonId);
        updateProgressBar();
        triggerConfetti();
    });

    // Quiz
    document.getElementById('goToQuizBtn').addEventListener('click', () => {
        currentQuestionIndex = 0;
        renderQuiz();
    });

    document.getElementById('prevQuestionBtn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    });

    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        if (currentQuestionIndex < courseData.quiz.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        }
    });

    document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);

    document.getElementById('downloadCertificateBtn').addEventListener('click', downloadCertificate);

    document.getElementById('restartBtn').addEventListener('click', () => {
        quizAnswers = {};
        currentQuestionIndex = 0;
        saveToLocalStorage();
        document.getElementById('resultView').style.display = 'none';
        document.getElementById('lessonView').style.display = 'block';
        renderLesson(currentLessonId);
    });
}

// BARRA DE PROGRESSO

function updateProgressBar() {
    const total = courseData.lessons.length;
    const completed = completedLessons.size;
    const percentage = (completed / total) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressPercentage').textContent = Math.round(percentage) + '%';
}

// REDIMENSIONAMENTO DE JANELA

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    if (canvas.style.display !== 'none') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
