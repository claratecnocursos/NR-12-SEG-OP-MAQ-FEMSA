/**
 * Manifesto de narração a partir de question-screen-data.js.
 *
 *   node audio-data.js
 *   const { buildManifest } = require('./audio-data');
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const T = require('./narration-text.js');

const ROOT = __dirname;
const OUTPUT_DIR = path.join(ROOT, 'audios');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');
const DATA_FILE = path.join(ROOT, 'question-screen-data.js');

function ttsSpeak(text) {
  if (!text) return '';
  let t = String(text);
  t = t.replace(/[\u2014\u2013]/g, ', ');
  t = t.replace(/\bNR[-\s]?12\b/gi, 'N R doze');
  t = t.replace(/\bSESMT\b/g, 'S E S M T');
  t = t.replace(/\bEPIs\b/g, 'E P Is');
  t = t.replace(/\bEPI\b/g, 'E P I');
  t = t.replace(/\bLOTO\b/g, 'L O T O');
  t = t.replace(/\bGLP\b/g, 'G L P');
  t = t.replace(/\bINMETRO\b/g, 'I N M E T R O');
  t = t.replace(/100%/g, 'cem por cento');
  t = t.replace(/\b50\s*[×xX]\s*200\s*mm\b/gi, 'cinquenta por duzentos milímetros');
  t = t.replace(/\b850\s*mm\b/gi, 'oitocentos e cinquenta milímetros');
  t = t.replace(/\b120\s*mm\b/gi, 'cento e vinte milímetros');
  t = t.replace(/\b80\s*mm\b/gi, 'oitenta milímetros');
  t = t.replace(/\b200\s*mm\b/gi, 'duzentos milímetros');
  t = t.replace(/\b50\s*[×xX]\s*50\s*cm\b/gi, 'cinquenta por cinquenta centímetros');
  t = t.replace(/\b60\s*[×xX]\s*60\s*cm\b/gi, 'sessenta por sessenta centímetros');
  t = t.replace(/\b60\s*a\s*100\s*cm\b/gi, 'sessenta a cem centímetros');
  t = t.replace(/\b12\.11\.3\b/g, 'doze ponto onze ponto três');
  t = t.replace(/\b12\.5\.1\.1\b/g, 'doze ponto cinco ponto um ponto um');
  t = t.replace(/\b12\.5\.15\b/g, 'doze ponto cinco ponto quinze');
  t = t.replace(/\b12\.5\.14\b/g, 'doze ponto cinco ponto quatorze');
  t = t.replace(/\b12\.5\.13\b/g, 'doze ponto cinco ponto treze');
  t = t.replace(/\b12\.5\.9\b/g, 'doze ponto cinco ponto nove');
  t = t.replace(/\b12\.5\.8\b/g, 'doze ponto cinco ponto oito');
  t = t.replace(/\b12\.5\.7\b/g, 'doze ponto cinco ponto sete');
  t = t.replace(/\b12\.5\.6\b/g, 'doze ponto cinco ponto seis');
  t = t.replace(/\b12\.5\.4\b/g, 'doze ponto cinco ponto quatro');
  t = t.replace(/\b12\.5\.3\b/g, 'doze ponto cinco ponto três');
  t = t.replace(/\bISO\s*12100\b/gi, 'I S O doze mil e cem');
  t = t.replace(/\bIEC\s*60204-1\b/gi, 'I E C sessenta mil duzentos e quatro hífen um');
  t = t.replace(/\bNBR\s*14153\b/gi, 'N B R quatorze mil cento e cinquenta e três');
  t = t.replace(/\bABNT\b/g, 'A B N T');
  t = t.replace(/\b4 perguntas\b/gi, 'quatro perguntas');
  t = t.replace(/\b5 casos\b/gi, 'cinco casos');
  t = t.replace(/\b5 perguntas\b/gi, 'cinco perguntas');
  t = t.replace(/\b3 afirmações\b/gi, 'três afirmações');
  t = t.replace(/\bmínimo\s+3\b/gi, 'mínimo três');
  t = t.replace(/\bmínimo\s+4\b/gi, 'mínimo quatro');
  t = t.replace(/\bmínimo\s+2\b/gi, 'mínimo dois');
  t = t.replace(/\b50 pontos\b/gi, 'cinquenta pontos');
  t = t.replace(/\bquatro módulos\b/gi, 'quatro módulos');
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

/** Textos falados (já no jeito da voz). Fonte UTF-8. */
const RAW_OVERRIDES = {
  home:
    'Abertura do treinamento. NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Requisitos Técnicos, Proteções e Prevenção de Riscos em Máquinas e Equipamentos. São quatro módulos completos, em treinamento cem por cento online.',

  'menu-1':
    'NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Um módulo por vez. Ao concluir, o próximo é liberado. Módulo um de quatro, Fundamentos da NR-12, Escopo e Mapeamento de Zonas de Perigo. Toque em iniciar módulo.',
  'menu-2':
    'NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Um módulo por vez. Ao concluir, o próximo é liberado. Módulo dois de quatro, Proteções de Máquinas, Sistemas de Intertravamento e Meios de Acesso. Toque em iniciar módulo.',
  'menu-3':
    'NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Um módulo por vez. Ao concluir, o próximo é liberado. Módulo três de quatro, Intervenções Seguras, Bloqueio de Energias, LOTO, e Permissão de Trabalho. Toque em iniciar módulo.',
  'menu-4':
    'NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Um módulo por vez. Ao concluir, o próximo é liberado. Módulo quatro de quatro, Diagnóstico Prático no Chão de Fábrica, Anexos Setoriais e Conscientização. Toque em iniciar módulo.',
  'menu-done':
    'NR-12, Segurança no Trabalho em Máquinas e Equipamentos. Treinamento concluído. Você pode revisar o módulo um.',

  'm1-cover':
    'Módulo um. Fundamentos da NR-12, Escopo e Mapeamento de Zonas de Perigo. Compreender a fundamentação legal da NR-12, aplicabilidade e o mapeamento de zonas de perigo.',
  'm1-v-conceito':
    'Vídeo um. Conceito, Objetivos e Abrangência da NR-12. Assista ao vídeo. Avance quando concluir.',
  'm1-ciclo':
    'O ciclo de vida da máquina. A NR-12 vale em todas as fases, não só na operação do dia a dia. Projeto: os requisitos de segurança começam no desenho da máquina. Fabricação: a construção precisa nascer com proteções e distâncias corretas. Uso no chão de fábrica: operação, manutenção e intervenção seguem a mesma norma. Comercialização: importação, venda e cessão a qualquer título também entram no alcance. A NR-12 protege a saúde e a integridade física, prevenindo acidentes e doenças do trabalho, e vale para máquinas novas e usadas.',
  'm1-v-isencoes':
    'Vídeo dois. Onde a NR-12 não se aplica. Assista ao vídeo. Avance quando concluir.',
  'm1-v-perigo':
    'Vídeo três. A diferença entre perigo e risco. Assista ao vídeo. Avance quando concluir.',
  'm1-perigo-risco':
    'Perigo não é a mesma coisa que risco. Cada perigo gera um risco. Toque em um par para ler a explicação. Perigo: altura. Risco: queda. A altura é o perigo. A queda é o risco, surge quando alguém se expõe. Perigo: superfície quente. Risco: queimadura. A superfície quente é o perigo. A queimadura é o risco da exposição. Perigo: tanque de combustível. Risco: explosão. O tanque é o perigo. A explosão é o risco quando há exposição. Perigo é a condição com potencial de dano. Risco surge quando existe exposição.',
  'm1-v-zonas':
    'Vídeo quatro. Riscos mecânicos e zonas de perigo na prática. Assista ao vídeo. Avance quando concluir.',
  'm1-malhas':
    'Item 12.5.1.1, distâncias mínimas. A abertura da malha define a distância até a zona de perigo. Na imagem: distâncias mínimas conforme a malha, 850 mm, 120 mm e 80 mm. Quanto maior o furo da grade, mais longe ela precisa estar do ponto perigoso.',
  'm1-v-dedos':
    'Vídeo cinco. Prevenção contra o acesso involuntário de dedos e mãos. Assista ao vídeo. Avance quando concluir.',
  'm1-quiz-intro':
    'Desafio NR-12, Módulo um. Responda 4 perguntas de múltipla escolha. Você precisa acertar no mínimo 3 para avançar. Cada acerto vale 50 pontos.',
  'm1-q1':
    'Qual é o objetivo principal da NR-12? Opção um: aumentar a produtividade da linha de produção. Opção dois: proteger a saúde e a integridade física, prevenindo acidentes e doenças do trabalho. Opção três: padronizar a cor e a marca das máquinas. Opção quatro: substituir o uso de EPIs em qualquer operação.',
  'm1-q2':
    'Qual opção não se aplica à NR-12? Opção um: serra circular de bancada. Opção dois: torno mecânico industrial. Opção três: paleteira manual movida por força humana. Opção quatro: prensa mecânica.',
  'm1-q3':
    'Qual é a diferença entre perigo e risco? Opção um: são a mesma coisa, só muda o nome. Opção dois: perigo é o estado com potencial de dano; risco surge quando há exposição. Opção três: risco só existe em máquinas novas. Opção quatro: perigo só existe depois que o acidente acontece.',
  'm1-q4':
    'Para uma malha de 50 × 200 mm, qual é a distância mínima de segurança até a zona de perigo? Opção um: 80 mm. Opção dois: 120 mm. Opção três: 850 mm. Opção quatro: 200 mm.',

  'm2-cover':
    'Módulo dois. Proteções de Máquinas, Sistemas de Intertravamento e Meios de Acesso. Especificar e inspecionar barreiras físicas, fixas e móveis, dispositivos de intertravamento, rearme manual e meios de acesso permanentes.',
  'm2-v-requisitos':
    'Vídeo um. Requisitos Gerais dos Sistemas de Segurança e Normas de Referência. Assista ao vídeo. Avance quando concluir.',
  'm2-profissionais':
    'Quem pode projetar e instalar. O sistema de segurança fica sob responsabilidade técnica e só é instalado por quem a empresa autorizar. Habilitado: profissional legalmente habilitado assume a responsabilidade técnica do projeto. Qualificado: formação reconhecida para executar a instalação com segurança. Capacitado: treinado e autorizado pela empresa para a tarefa. Normas de referência: ISO 12100, riscos; IEC 60204-1, elétrica; e NBR 14153, comandos de segurança. O sistema deve dificultar a burla e paralisar movimentos perigosos se houver falha.',
  'm2-v-fixas':
    'Vídeo dois. Proteções Fixas e Cuidados no Projeto de Barreiras. Assista ao vídeo. Avance quando concluir.',
  'm2-v-moveis':
    'Vídeo três. Proteções Móveis e Dispositivos de Intertravamento. Assista ao vídeo. Avance quando concluir.',
  'm2-protecao-fixa':
    'Item 12.5.4, letra A. Proteção fixa. Telas, gradis e carenagens que ficam sempre no lugar, e só saem com ferramenta. Na imagem: proteção fixa em telas, gradil de proteção perimetral e carenagem de partes móveis do motor. Proteção fixa deve ser mantida em sua posição de maneira permanente ou por meio de elementos de fixação que só permitam sua remoção ou abertura com o uso de ferramentas.',
  'm2-protecao-movel':
    'Item 12.5.4, letra B. Proteção móvel. Portas e tampas que abrem sem ferramenta, por isso só valem com intertravamento. Na imagem: porta de proteção móvel em gradil amarelo, com destaque na chave de intertravamento. Proteção móvel pode ser aberta sem o uso de ferramentas, geralmente ligada por elementos mecânicos à estrutura da máquina ou a um elemento fixo próximo, e deve se associar a dispositivos de intertravamento.',
  'm2-v-rearme':
    'Vídeo quatro. Rearme Manual, Reset, Duplo Rearme e Zonas Enclausuradas. Assista ao vídeo. Avance quando concluir.',
  'm2-v-escadas':
    'Vídeo cinco. Meios de Acesso Permanentes e Estrutura de Escadas Industriais. Assista ao vídeo. Avance quando concluir.',
  'm2-partes-escada':
    'Itens 12.5.14 e 12.5.15. Partes da escada industrial. Se a proteção também serve de acesso, ela precisa resistir às duas funções, e você precisa saber nomear cada parte na inspeção. Degrau e base: apoio antiderrapante. Espelho: fundo fechado, item 12.5.15. Patamar: descanso entre lances. Guarda-corpo e corrimão: altura de 60 a 100 cm. Espelho aberto sobre partes móveis é risco grave de acidente.',
  'm2-v-trepadeiras':
    'Vídeo seis. Escadas Trepadeiras e Escadas Tipo Marinheiro. Assista ao vídeo. Avance quando concluir.',
  'm2-acesso-vertical':
    'Comparativo NR-12. Escada trepadeira. Mesma escada, dois resultados na inspeção: a diferença está no patamar, nos degraus e no guarda-corpo. Fora da NR-12: patamar de 50 × 50 cm. Conforme: patamar mínimo 60 × 60 cm. Degraus: superfície antiderrapante. Guarda-corpo: contínuo, com rodapé. Meça o patamar no chão de fábrica: 50 × 50 cm é não conformidade.',
  'm2-marinheiro':
    'Acesso vertical. Escada tipo marinheiro. Acesso vertical fixo para os pontos altos da instalação. Aqui a gaiola é o que segura o trabalhador. Gaiola: proteção perimetral contra queda. Ancoragem: estrutura robusta e fixa. Degraus: antiderrapantes e regulares. Subida: mãos livres, um trabalhador por vez. Com essas diretrizes, cobrimos as proteções físicas e os acessos seguros.',
  'm2-quiz-intro':
    'Inspeção NR-12, Módulo dois. Você é o guardião das proteções. São 5 casos do chão de fábrica: classifique cada um como conforme ou não conforme. Errou, segue para o próximo. Acerte no mínimo 4. Cada acerto vale 50 pontos.',
  'm2-sort':
    'Inspeção no chão de fábrica. Toque em conforme ou não conforme para cada caso. Caso um: proteção de tela presa só com parafusos, sai apenas com ferramenta. Caso dois: porta de gradil que abre com a mão, sem chave de intertravamento. Caso três: o operador fecha a proteção móvel e a máquina religa o movimento sozinha. Caso quatro: escada trepadeira com patamar superior de 50 × 50 cm. Caso cinco: trepadeira com patamar 60 × 60 cm, degraus antiderrapantes e guarda-corpo contínuo com rodapé.',

  'm3-cover':
    'Módulo três. Intervenções Seguras, Bloqueio de Energias, LOTO, e Permissão de Trabalho. Protocolos operacionais e formais para manutenção, inspeção, limpeza, ajustes e desenergização segura.',
  'm3-v-pt':
    'Vídeo um. Requisitos de Intervenção e Permissão de Trabalho. Assista ao vídeo. Avance quando concluir.',
  'm3-v-seccionamento':
    'Vídeo dois. Seccionamento e Purga de Energias Perigosas. LOTO, etapa um. Assista ao vídeo. Avance quando concluir.',
  'm3-v-bloqueio':
    'Vídeo três. Bloqueio Físico Mecânico e Elétrico e Etiquetagem. LOTO, etapa dois. Assista ao vídeo. Avance quando concluir.',
  'm3-energia-zero':
    'Energia acumulada e trava mecânica. LOTO, etapa três. Toque em cada garantia para ler o que a etapa três exige. Energia acumulada: nada perigoso a jusante do corte. O item 12.11.3 determina medidas para garantir que, a jusante dos pontos de corte de energia, não exista qualquer possibilidade de gerar acidentes por energia acumulada. Trava mecânica: retenção com trava é obrigatória. Na manutenção de máquina sustentada por sistema hidráulico ou pneumático, ou com partes articuladas e basculadas abertas, é obrigatório usar sistema de retenção com trava mecânica. Contra a gravidade: sem retorno e sem queda. A trava impede o movimento de retorno acidental e a queda de partes suspensas por ação da gravidade, mesmo que ocorra vazamento de fluido ou perda de pressão. Suporte físico: o que sustenta a estrutura. A trava mecânica é o suporte físico que garante que a estrutura não caia sobre o trabalhador. Pressão zero no sistema não sustenta a carga. Só a trava mecânica sustenta.',
  'm3-dispositivos':
    'Dispositivos de bloqueio e etiquetagem. Toque na foto para ver a próxima. São três pranchas de dispositivos usados no LOTO. Primeira: garras, cadeados, multibloqueador com cabo e caixa de travamento de grupo. Segunda: bloqueio de interruptor, plugues elétricos, cilindro pressurizado e componente pneumático. Terceira: bloqueio de válvulas borboleta, esfera e gaveta.',
  'm3-v-automotiva':
    'Vídeo quatro. Bloqueio e Etiquetagem na Manutenção Automotiva. Assista ao vídeo. Avance quando concluir.',
  'm3-quiz-intro':
    'Modo Sprint. Intervenção Segura e LOTO. Responda 3 afirmações de verdadeiro ou falso sobre Permissão de Trabalho e as etapas do LOTO. Acerte no mínimo 2 para avançar. Cada acerto vale até 50 pontos.',
  'm3-q1':
    'Manutenção, inspeção, reparo, limpeza e ajuste podem ser feitos com a máquina em funcionamento, desde que o trabalhador seja experiente. Opção um: verdadeiro. Opção dois: falso.',
  'm3-q2':
    'Desligar o botão do painel já resolve: não é preciso descarregar o ar comprimido, o óleo sob pressão nem as molas comprimidas. Opção um: verdadeiro. Opção dois: falso.',
  'm3-q3':
    'A etiqueta de bloqueio precisa trazer a data, o horário, o motivo da manutenção e o nome do responsável pela intervenção. Opção um: verdadeiro. Opção dois: falso.',

  'm4-cover':
    'Módulo quatro. Diagnóstico Prático no Chão de Fábrica, Anexos Setoriais e Conscientização. Auditorias visuais de segurança em máquinas industriais, Anexos da NR-12 e cultura preventiva.',
  'm4-v-serra':
    'Vídeo um. Inspeção Prática: Serra Circular e Torno Paralelo. Assista ao vídeo. Avance quando concluir.',
  'm4-v-esmeril':
    'Vídeo dois. Inspeção Prática: Esmeril e Furadeira de Bancada. Assista ao vídeo. Avance quando concluir.',
  'm4-v-prensas':
    'Vídeo três. Inspeção Prática: Prensas Mecânicas e Roscas Transportadoras. Assista ao vídeo. Avance quando concluir.',
  'm4-v-anexos-gerais':
    'Vídeo quatro. Conhecendo os Anexos Gerais da NR-12, Anexos um a quatro. Assista ao vídeo. Avance quando concluir.',
  'm4-anexos-gerais':
    'Anexos gerais da NR-12. Além do corpo da norma, quatro anexos aprofundam regras que valem para qualquer setor. Anexo um: sistemas optoeletrônicos, cortinas de luz, detectores de presença e tabelas de distâncias de segurança. Anexo dois: capacitação, conteúdo programático, carga horária e regras de treinamento. Anexo três: meios de acesso permanentes, escadas, rampas e passarelas. Anexo quatro: glossário oficial, padroniza os termos técnicos de segurança no Brasil. No próximo vídeo entram os anexos setoriais, as regras exclusivas de cada ramo.',
  'm4-v-anexos-setoriais':
    'Vídeo cinco. Anexos Setoriais da NR-12, Anexos cinco a doze. Assista ao vídeo. Avance quando concluir.',
  'm4-anexos-setoriais':
    'Anexos setoriais. Do cinco ao doze, a NR-12 traz regras exclusivas por ramo. Consulte o do seu setor. Cinco e seis: motosserras. Máquinas de panificação e confeitaria. Sete e oito: açougues, mercearias, bares e restaurantes. Prensas e equipamentos similares. Nove e dez: injetoras de plástico. Indústria de calçados e afins. Onze e doze: máquinas agrícolas e florestais. Equipamentos de guindar para trabalho em altura. O anexo certo do seu setor é o que fecha cem por cento de conformidade.',
  'm4-v-cultura':
    'Vídeo seis. Cultura Preventiva e Engajamento de Segurança no Trabalho. Assista ao vídeo. Avance quando concluir.',
  'm4-quiz-intro':
    'Desafio NR-12, Módulo quatro. São 4 perguntas sobre inspeção no chão de fábrica e anexos da NR-12. Acerte no mínimo 3. Cada acerto vale 50 pontos.',
  'm4-q1':
    'Na inspeção da serra circular e do torno paralelo, qual conjunto está conforme a NR-12? Opção um: serra com lâmina e correia expostas; torno com eixão e usinagem livres. Opção dois: serra com proteção fixa na lâmina e motor enclausurado; torno com proteção móvel transparente e intertravamento. Opção três: apenas faixa amarela no chão, sem barreira física nos dois equipamentos. Opção quatro: proteção só na lâmina da serra, deixando o motor e o torno descobertos.',
  'm4-q2':
    'Quais proteções o esmeril e a furadeira de bancada precisam ter? Opção um: esmeril com rebolo exposto; furadeira só com botão de emergência, se a broca for curta. Opção dois: só visor na furadeira, porque a correia e o rebolo ficam fora do alcance. Opção três: esmeril com coifa no rebolo e visor de policarbonato; furadeira com proteção das correias, cogumelo de emergência e proteção acrílica na broca. Opção quatro: lubrificação visível, banco giratório e pedal de avanço nos dois equipamentos.',
  'm4-q3':
    'O que a NR-12 exige nas prensas mecânicas e nas roscas transportadoras? Opção um: volante e engrenagens visíveis na prensa; tampa da rosca pode ficar aberta se o operador for experiente. Opção dois: enclausuramento perimetral com grades intertravadas na prensa; tampas fixas ou intertravadas na rosca. Opção três: sinalização amarela basta, se a máquina tiver menos de dois metros. Opção quatro: a tampa da rosca pode ficar aberta no setup, desde que sinalizada.',
  'm4-q4':
    'Qual anexo geral da NR-12 define conteúdo, carga horária e regras da capacitação? Opção um: Anexo um, sistemas optoeletrônicos e distâncias de segurança. Opção dois: Anexo dois, capacitação e treinamento. Opção três: Anexo três, meios de acesso permanentes. Opção quatro: Anexo quatro, glossário de termos técnicos.',
  'm4-done':
    'Treinamento concluído. Parabéns. Você concluiu o treinamento NR-12, Segurança no Trabalho em Máquinas e Equipamentos. A segurança no trabalho começa com cada um de nós. Tem alguém esperando a sua chegada.'
};

const NARRATION_OVERRIDES = {};
Object.keys(RAW_OVERRIDES).forEach((key) => {
  NARRATION_OVERRIDES[key] = ttsSpeak(RAW_OVERRIDES[key]);
});

function loadSession() {
  const src = fs.readFileSync(DATA_FILE, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: 'question-screen-data.js' });
  const session = sandbox.window.QUESTION_SCREEN_SESSION;
  if (!session) throw new Error('não encontrei QUESTION_SCREEN_SESSION');
  return session;
}

function catalogEntries(session) {
  const entries = [
    { id: T.HOME_KEY, title: 'Abertura' },
    { id: T.menuAudioKey(1), title: 'Menu, módulo 1' },
    { id: T.menuAudioKey(2), title: 'Menu, módulo 2' },
    { id: T.menuAudioKey(3), title: 'Menu, módulo 3' },
    { id: T.menuAudioKey(4), title: 'Menu, módulo 4' },
    { id: T.menuAudioKey(0), title: 'Menu, concluído' }
  ];
  (session.modules || []).forEach((mod) => {
    (mod.screens || []).forEach((screen) => {
      if (screen && screen.id) {
        entries.push({
          id: screen.id,
          title: screen.title || screen.question || screen.id,
          screen
        });
      }
    });
  });
  return entries;
}

function fallbackText(session, entry) {
  if (entry.id === T.HOME_KEY) return T.buildHomeText();
  if (entry.id === T.menuAudioKey(0)) return T.buildMenuText(session, 0);
  const menuMatch = /^menu-(\d+)$/.exec(entry.id);
  if (menuMatch) return T.buildMenuText(session, Number(menuMatch[1]));
  if (entry.screen) return T.buildScreenText(entry.screen);
  return '';
}

function buildManifest() {
  const session = loadSession();
  const entries = catalogEntries(session);

  const slides = entries.map((entry, index) => {
    let text = NARRATION_OVERRIDES[entry.id];
    if (!text) text = ttsSpeak(fallbackText(session, entry));
    if (!text) text = ttsSpeak(entry.title || entry.id);

    const fileName = T.audioFileName(entry.id);
    return {
      index,
      id: entry.id,
      title: String(entry.title || entry.id).replace(/<[^>]*>/g, ''),
      file: 'audios/' + fileName,
      text,
      audioReady: fs.existsSync(path.join(OUTPUT_DIR, fileName))
    };
  });

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: 'question-screen-data.js',
    audioDir: 'audios',
    slides
  };
}

function writeManifest(manifest, outputPath = MANIFEST_PATH) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  const jsPath = path.join(path.dirname(outputPath), 'audio-manifest.js');
  fs.writeFileSync(
    jsPath,
    'window.__AUDIO_NARRATION__ = ' + JSON.stringify(manifest, null, 2) + ';\n',
    'utf8'
  );
  return outputPath;
}

if (require.main === module) {
  const manifest = buildManifest();
  const out = writeManifest(manifest);
  console.log('Manifesto gerado: ' + out);
  console.log(manifest.slides.length + ' telas.');
  manifest.slides.forEach((slide) => {
    console.log('  ' + slide.id + ' (' + slide.text.length + ' chars)');
  });
}

module.exports = {
  MANIFEST_PATH,
  OUTPUT_DIR,
  NARRATION_OVERRIDES,
  ttsSpeak,
  buildManifest,
  writeManifest
};
