/**
 * Conteúdo da Trilha NR-12 — Segurança no Trabalho em Máquinas e Equipamentos
 * Tipos: cover | content | video | image | quiz-intro | question
 * Atividades (question) só no FINAL de cada módulo — precedidas por quiz-intro.
 *
 * video: use `video` (mp4) ou `youtube` quando o arquivo existir;
 *        senão aparece o placeholder "Vídeo a gravar".
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR-12 — Máquinas e Equipamentos",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos da NR-12, Escopo e Mapeamento de Zonas de Perigo",
      objective: "Compreender a fundamentação legal da NR-12, a aplicabilidade e o mapeamento de zonas de perigo.",
      meta: "5 vídeos + ícones · 4 perguntas no final",
      titleUnlock: {
        title: "MAPEADOR DE PERIGO",
        body: "Você já reconhece o alcance da NR-12 e sabe identificar zonas de perigo.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "m1-cover",
          type: "cover",
          title: "Módulo 1 — Fundamentos da NR-12, Escopo e Mapeamento de Zonas de Perigo",
          subtitle: "Compreender a fundamentação legal da NR-12, aplicabilidade e o mapeamento de zonas de perigo.",
          image: "assets/fotos/capa-modulo1.png",
          transcript: "Módulo 1: Fundamentos da NR-12, escopo e mapeamento de zonas de perigo."
        },
        {
          id: "m1-v-conceito",
          type: "video",
          kicker: "🎥 Vídeo 1",
          title: "Conceito, Objetivos e Abrangência da NR-12",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2512625b-185a-41cb-82bd-da6bd6e5c287",
          playerId: "panda-2512625b-185a-41cb-82bd-da6bd6e5c287",
          scene: "Título da norma na tela, com ícones do ciclo de vida da máquina",
          brief: "Apresentar o que é a NR-12, seus objetivos e o alcance em todas as fases: projeto, fabricação, importação, comercialização, uso e cessão — em máquinas novas e usadas.",
          transcript: "Vídeo: conceito, objetivos e abrangência da NR-12."
        },
        {
          id: "m1-ciclo",
          type: "content",
          kicker: "📄 Ícones",
          title: "O ciclo de vida da máquina",
          body: "A NR-12 vale em todas as fases — não só na operação do dia a dia.",
          cards: [
            { icon: "📐", title: "Projeto", body: "Os requisitos de segurança começam no desenho da máquina." },
            { icon: "🏭", title: "Fabricação", body: "A construção precisa nascer com proteções e distâncias corretas." },
            { icon: "⚙️", title: "Uso no chão de fábrica", body: "Operação, manutenção e intervenção seguem a mesma norma." },
            { icon: "🛒", title: "Comercialização", body: "Importação, venda e cessão a qualquer título também entram no alcance." }
          ],
          quote: "A NR-12 protege a saúde e a integridade física, prevenindo acidentes e doenças do trabalho — e vale para máquinas novas e usadas.",
          transcript: "Ciclo de vida: projeto, fabricação, uso no chão de fábrica e comercialização."
        },
        {
          id: "m1-v-isencoes",
          type: "video",
          kicker: "🎥 Vídeo 2",
          title: "Onde a NR-12 não se aplica",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e73f25a8-ff58-4cfd-83af-27c6cadee690",
          playerId: "panda-e73f25a8-ff58-4cfd-83af-27c6cadee690",
          scene: "Paleteira manual, eletrodomésticos e selo INMETRO",
          brief: "Mostrar hipóteses de isenção: força humana ou animal, equipamentos estáticos, ferramentas portáteis com norma tipo C, eletrodomésticos e máquinas certificadas pelo INMETRO.",
          transcript: "Vídeo: onde a NR-12 não se aplica."
        },
        {
          id: "m1-v-perigo",
          type: "video",
          kicker: "🎥 Vídeo 3",
          title: "A diferença entre perigo e risco",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3d867064-154f-44a0-9698-390a22c6a317",
          playerId: "panda-3d867064-154f-44a0-9698-390a22c6a317",
          scene: "Diagrama: perigo como estado e risco quando há exposição",
          brief: "Distinguir perigo (potencial de dano) de risco (exposição ao perigo). Citar riscos mecânicos: esmagamento, corte, cisalhamento, enroscamento e arrasto.",
          transcript: "Vídeo: a diferença entre perigo e risco."
        },
        {
          id: "m1-perigo-risco",
          type: "content",
          kicker: "📄 Mapa",
          title: "Perigo não é a mesma coisa que risco",
          body: "Cada perigo gera um risco. Toque em um par para ler a explicação.",
          links: [
            {
              icon: "🪜",
              perigo: "Altura",
              risco: "Queda",
              riscoIcon: "⬇️",
              note: "A altura é o perigo. A queda é o risco — surge quando alguém se expõe."
            },
            {
              icon: "🔥",
              perigo: "Superfície quente",
              risco: "Queimadura",
              riscoIcon: "♨️",
              note: "A superfície quente é o perigo. A queimadura é o risco da exposição."
            },
            {
              icon: "⛽",
              perigo: "Tanque de combustível",
              risco: "Explosão",
              riscoIcon: "💥",
              note: "O tanque é o perigo. A explosão é o risco quando há exposição."
            }
          ],
          quote: "Perigo é a condição com potencial de dano. Risco surge quando existe exposição.",
          transcript: "Perigo gera risco: altura e queda, superfície quente e queimadura, tanque de combustível e explosão."
        },
        {
          id: "m1-v-zonas",
          type: "video",
          kicker: "🎥 Vídeo 4",
          title: "Riscos mecânicos e zonas de perigo na prática",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=79ff381f-d222-42c7-8079-9d9b22ab3d4a",
          playerId: "panda-79ff381f-d222-42c7-8079-9d9b22ab3d4a",
          scene: "Serra circular com lâmina exposta e torno sem barreira de usinagem",
          brief: "Definir zona de perigo e mostrar não conformidades: serra circular desprotegida e torno mecânico sem barreira física.",
          transcript: "Vídeo: riscos mecânicos e zonas de perigo na prática."
        },
        {
          id: "m1-malhas",
          type: "content",
          layout: "figure",
          kicker: "📄 Números",
          title: "Item 12.5.1.1 — distâncias mínimas",
          body: "A abertura da malha define a distância até a zona de perigo.",
          image: "assets/fotos/m1-p10.png",
          imageAlt: "Distâncias mínimas conforme a malha: 850 mm, 120 mm e 80 mm",
          imageFit: "contain",
          quote: "Quanto maior o furo da grade, mais longe ela precisa estar do ponto perigoso.",
          transcript: "Distâncias mínimas: 850 milímetros, 120 milímetros e 80 milímetros, conforme a malha."
        },
        {
          id: "m1-v-dedos",
          type: "video",
          kicker: "🎥 Vídeo 5",
          title: "Prevenção contra o acesso involuntário de dedos e mãos",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ebd78427-77a0-4a24-80cc-e906cfb791e9",
          playerId: "panda-ebd78427-77a0-4a24-80cc-e906cfb791e9",
          scene: "Teste de fresta com símbolo de REPROVADO ao penetrar o dedo",
          brief: "Se o dedo atravessa a carenagem e alcança engrenagem ou ponto de esmagamento, o equipamento está reprovado. Fecha o Módulo 1 e antecipa o Módulo 2.",
          transcript: "Vídeo: prevenção contra o acesso involuntário de dedos e mãos."
        },
        {
          id: "m1-quiz-intro",
          type: "quiz-intro",
          title: "Desafio NR-12 — Módulo 1",
          count: 4,
          minCorrect: 3,
          icon: "🎮",
          transcript: "Desafio final do módulo 1: 4 perguntas."
        },
        {
          id: "m1-q1",
          type: "question",
          question: "Qual é o objetivo principal da NR-12?",
          image: "assets/fotos/m1=p1.png",
          alternatives: [
            { id: "a", text: "Aumentar a produtividade da linha de produção", correct: false },
            { id: "b", text: "Proteger a saúde e a integridade física, prevenindo acidentes e doenças do trabalho", correct: true },
            { id: "c", text: "Padronizar a cor e a marca das máquinas", correct: false },
            { id: "d", text: "Substituir o uso de EPIs em qualquer operação", correct: false }
          ],
          explanation: "A NR-12 define requisitos para o manuseio e a operação segura, com o objetivo de proteger a saúde e a integridade física.",
          review: "O objetivo principal da NR-12",
          transcript: "Atividade final do módulo 1 — pergunta 1."
        },
        {
          id: "m1-q2",
          type: "question",
          question: "Qual opção NÃO se aplica à NR-12?",
          image: "assets/fotos/m1=p2.png",
          alternatives: [
            { id: "a", text: "Serra circular de bancada", correct: false },
            { id: "b", text: "Torno mecânico industrial", correct: false },
            { id: "c", text: "Paleteira manual movida por força humana", correct: true },
            { id: "d", text: "Prensa mecânica", correct: false }
          ],
          explanation: "Equipamentos movidos por força humana ou animal, como a paleteira manual, estão isentos da NR-12.",
          review: "O que fica fora do alcance da NR-12",
          transcript: "Pergunta 2 do módulo 1."
        },
        {
          id: "m1-q3",
          type: "question",
          question: "Qual é a diferença entre perigo e risco?",
          image: "assets/fotos/m1=p3.png",
          alternatives: [
            { id: "a", text: "São a mesma coisa, só muda o nome", correct: false },
            { id: "b", text: "Perigo é o estado com potencial de dano; risco surge quando há exposição", correct: true },
            { id: "c", text: "Risco só existe em máquinas novas", correct: false },
            { id: "d", text: "Perigo só existe depois que o acidente acontece", correct: false }
          ],
          explanation: "A lâmina é o perigo. A mão do operador perto dela, sem proteção, cria o risco de corte.",
          review: "A diferença entre perigo e risco",
          transcript: "Pergunta 3 do módulo 1."
        },
        {
          id: "m1-q4",
          type: "question",
          question: "Para uma malha de 50 × 200 mm, qual é a distância mínima de segurança até a zona de perigo?",
          image: "assets/fotos/m1=p4.png",
          alternatives: [
            { id: "a", text: "80 mm", correct: false },
            { id: "b", text: "120 mm", correct: false },
            { id: "c", text: "850 mm", correct: true },
            { id: "d", text: "200 mm", correct: false }
          ],
          explanation: "Item 12.5.1.1: malha 50 × 200 mm exige 850 mm de distância. Quanto maior a abertura, maior a distância.",
          review: "As distâncias mínimas de segurança conforme a malha",
          transcript: "Pergunta 4 — fim do módulo 1."
        }
      ]
    },
    {
      id: 2,
      title: "Proteções de Máquinas, Sistemas de Intertravamento e Meios de Acesso",
      objective: "Especificar e inspecionar barreiras físicas, intertravamento, rearme e meios de acesso permanentes.",
      meta: "6 vídeos + ícones · inspeção no final",
      titleUnlock: {
        title: "GUARDIÃO DAS PROTEÇÕES",
        body: "Você especifica e inspeciona barreiras físicas, intertravamento, rearme e meios de acesso.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "m2-cover",
          type: "cover",
          title: "Módulo 2 — Proteções de Máquinas, Sistemas de Intertravamento e Meios de Acesso",
          subtitle: "Especificar e inspecionar barreiras físicas (fixas e móveis), dispositivos de intertravamento, rearme manual e meios de acesso permanentes.",
          image: "assets/fotos/m2-p1.png",
          transcript: "Módulo 2: proteções de máquinas, sistemas de intertravamento e meios de acesso."
        },
        {
          id: "m2-v-requisitos",
          type: "video",
          kicker: "🎥 Vídeo 1",
          title: "Requisitos Gerais dos Sistemas de Segurança e Normas de Referência",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=a0447a76-333d-4d97-8b30-2815b9612172",
          playerId: "panda-a0447a76-333d-4d97-8b30-2815b9612172",
          scene: "Capas das normas ABNT NBR ISO 12100, IEC 60204-1 e ABNT NBR 14153, e ilustração dos profissionais habilitado, qualificado e capacitado",
          brief: "Item 12.5.2: seleção do sistema com apreciação de riscos, responsabilidade técnica, instalação por profissionais autorizados e integração ao comando da máquina.",
          transcript: "Vídeo: requisitos gerais dos sistemas de segurança e normas de referência."
        },
        {
          id: "m2-profissionais",
          type: "content",
          kicker: "📄 Ícones",
          title: "Quem pode projetar e instalar",
          body: "O sistema de segurança fica sob responsabilidade técnica e só é instalado por quem a empresa autorizar.",
          cards: [
            { icon: "📜", title: "Habilitado", body: "Profissional legalmente habilitado assume a responsabilidade técnica do projeto." },
            { icon: "🎓", title: "Qualificado", body: "Formação reconhecida para executar a instalação com segurança." },
            { icon: "🛠️", title: "Capacitado", body: "Treinado e autorizado pela empresa para a tarefa." },
            { icon: "📚", title: "Normas de referência", body: "ISO 12100 (riscos), IEC 60204-1 (elétrica) e NBR 14153 (comandos de segurança)." }
          ],
          quote: "O sistema deve dificultar a burla e paralisar movimentos perigosos se houver falha.",
          transcript: "Profissionais habilitado, qualificado e capacitado, e normas de referência."
        },
        {
          id: "m2-v-fixas",
          type: "video",
          kicker: "🎥 Vídeo 2",
          title: "Proteções Fixas e Cuidados no Projeto de Barreiras",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=690955a5-ce60-4566-a15a-9c0bc4f6b5e4",
          playerId: "panda-690955a5-ce60-4566-a15a-9c0bc4f6b5e4",
          scene: "Esquema técnico de proteção fixa: parafusos, ponto de lubrificação, sem arestas cortantes e proteção perimetral de transmissões",
          brief: "Item 12.5.4a e 12.5.9: proteção permanente ou presa por parafusos; transmissões enclausuradas; material resistente e lubrificação sem retirar a barreira.",
          transcript: "Vídeo: proteções fixas e cuidados no projeto de barreiras."
        },
        {
          id: "m2-v-moveis",
          type: "video",
          kicker: "🎥 Vídeo 3",
          title: "Proteções Móveis e Dispositivos de Intertravamento",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b5d0c587-204d-43f5-91d5-15a3f21f0973",
          playerId: "panda-b5d0c587-204d-43f5-91d5-15a3f21f0973",
          scene: "Tela de proteção amarela com chave de intertravamento em destaque",
          brief: "Itens 12.5.4b, 12.5.6 a 12.5.8: proteção que abre sem ferramenta, com intertravamento simples ou com bloqueio quando há inércia.",
          transcript: "Vídeo: proteções móveis e dispositivos de intertravamento."
        },
        {
          id: "m2-protecao-fixa",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Item 12.5.4 a)",
          title: "Proteção fixa",
          body: "Telas, gradis e carenagens que ficam sempre no lugar — e só saem com ferramenta.",
          image: "assets/fotos/fixa.png",
          imageAlt: "Proteção fixa em telas, gradil de proteção perimetral e carenagem de partes móveis do motor",
          imageFit: "contain",
          quote: "a) PROTEÇÃO FIXA, que deve ser mantida em sua posição de maneira permanente ou por meio de elementos de fixação que só permitam sua remoção ou abertura com o uso de ferramentas.",
          transcript: "Proteção fixa: mantida em sua posição de maneira permanente ou por elementos de fixação que só permitam remoção ou abertura com o uso de ferramentas."
        },
        {
          id: "m2-protecao-movel",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Item 12.5.4 b)",
          title: "Proteção móvel",
          body: "Portas e tampas que abrem sem ferramenta — por isso só valem com intertravamento.",
          image: "assets/fotos/movel.png",
          imageAlt: "Porta de proteção móvel em gradil amarelo com destaque na chave de intertravamento instalada na lateral",
          imageFit: "contain",
          quote: "b) PROTEÇÃO MÓVEL, que pode ser aberta sem o uso de ferramentas, geralmente ligada por elementos mecânicos à estrutura da máquina ou a um elemento fixo próximo, e deve se associar a dispositivos de intertravamento.",
          transcript: "Proteção móvel: pode ser aberta sem o uso de ferramentas, geralmente ligada por elementos mecânicos à estrutura da máquina ou a um elemento fixo próximo, e deve se associar a dispositivos de intertravamento."
        },
        {
          id: "m2-v-rearme",
          type: "video",
          kicker: "🎥 Vídeo 4",
          title: "Rearme Manual (Reset), Duplo Rearme e Zonas Enclausuradas",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=85765f1c-e236-4eb7-a2ab-72ecd20b6c58",
          playerId: "panda-85765f1c-e236-4eb7-a2ab-72ecd20b6c58",
          scene: "Painel elétrico com botão de Reset azul e esquema de zona enclausurada",
          brief: "Itens 12.5.3 e 12.5.13: reset fora da zona de perigo, com visão da área; duplo rearme ou sensor se a visão for obstruída; emergência no interior de recintos enclausurados.",
          transcript: "Vídeo: rearme manual, duplo rearme e zonas enclausuradas."
        },
        {
          id: "m2-v-escadas",
          type: "video",
          kicker: "🎥 Vídeo 5",
          title: "Meios de Acesso Permanentes e Estrutura de Escadas Industriais",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=89bea93a-6493-4bdd-a81f-c36de1a26ffd",
          playerId: "panda-89bea93a-6493-4bdd-a81f-c36de1a26ffd",
          scene: "Diagrama das partes da escada e comparação com espelho versus sem espelho",
          brief: "Itens 12.5.14 e 12.5.15: escadas, passarelas e plataformas; proteção no fundo dos degraus (espelhos) quando o pé ou a mão puder alcançar a zona de perigo.",
          transcript: "Vídeo: meios de acesso permanentes e estrutura de escadas industriais."
        },
        {
          id: "m2-partes-escada",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Itens 12.5.14 e 12.5.15",
          title: "Partes da escada industrial",
          body: "Se a proteção também serve de acesso, ela precisa resistir às duas funções — e você precisa saber nomear cada parte na inspeção.",
          image: "assets/fotos/escada.png",
          imageAlt: "Diagrama das partes da escada: corrimão, guarda-corpo de 60 a 100 cm, patamar entre lances, degrau, base ou piso e espelho",
          imageFit: "contain",
          cards: [
            { icon: "🪜", title: "Degrau e base", body: "Apoio antiderrapante." },
            { icon: "⬛", title: "Espelho", body: "Fundo fechado (12.5.15)." },
            { icon: "🛬", title: "Patamar", body: "Descanso entre lances." },
            { icon: "🛡️", title: "Guarda-corpo e corrimão", body: "Altura de 60 a 100 cm." }
          ],
          quote: "Espelho aberto sobre partes móveis é risco grave de acidente.",
          transcript: "Partes da escada industrial: degrau e base ou piso com apoio antiderrapante, espelho com o fundo fechado conforme o item 12.5.15, patamar de descanso entre os lances, e guarda-corpo com corrimão a uma altura de 60 a 100 centímetros. Espelho aberto sobre partes móveis é risco grave de acidente."
        },
        {
          id: "m2-v-trepadeiras",
          type: "video",
          kicker: "🎥 Vídeo 6",
          title: "Escadas Trepadeiras e Escadas Tipo Marinheiro",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7d3c6f74-4500-4fa9-92a3-5fda1e10ca3a",
          playerId: "panda-7d3c6f74-4500-4fa9-92a3-5fda1e10ca3a",
          scene: "Comparativo trepadeira 50×50 cm sem NR-12 versus 60×60 cm com guarda-corpo, e escada marinheiro com gaiola",
          brief: "Trepadeira NR-12: patamar mínimo 60×60 cm, degraus antiderrapantes e guarda-corpo com rodapé. Marinheiro: estrutura robusta e gaiola perimetral.",
          transcript: "Vídeo: escadas trepadeiras e escadas tipo marinheiro."
        },
        {
          id: "m2-acesso-vertical",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Comparativo NR-12",
          title: "Escada trepadeira",
          body: "Mesma escada, dois resultados na inspeção: a diferença está no patamar, nos degraus e no guarda-corpo.",
          image: "assets/fotos/escadas.png",
          imageAlt: "Comparação entre escada trepadeira fora da NR-12, com patamar de 50 × 50 cm, e escada trepadeira conforme, com patamar de 60 × 60 cm",
          imageFit: "contain",
          cards: [
            { icon: "❌", title: "Fora da NR-12", body: "Patamar de 50 × 50 cm." },
            { icon: "✅", title: "Conforme", body: "Patamar mínimo 60 × 60 cm." },
            { icon: "🦶", title: "Degraus", body: "Superfície antiderrapante." },
            { icon: "🛡️", title: "Guarda-corpo", body: "Contínuo, com rodapé." }
          ],
          quote: "Meça o patamar no chão de fábrica: 50 × 50 cm é não conformidade.",
          transcript: "Escada trepadeira: o patamar de 50 por 50 centímetros está fora da NR-12. A trepadeira conforme tem patamar de no mínimo 60 por 60 centímetros, degraus com superfície antiderrapante e guarda-corpo contínuo com rodapé. Meça o patamar no chão de fábrica: 50 por 50 centímetros é não conformidade."
        },
        {
          id: "m2-marinheiro",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Acesso vertical",
          title: "Escada tipo marinheiro",
          body: "Acesso vertical fixo para os pontos altos da instalação — aqui a gaiola é o que segura o trabalhador.",
          image: "assets/fotos/marinheiro.png",
          imageAlt: "Escada tipo marinheiro amarela fixada em pilar, com gaiola de proteção perimetral, instalada por trabalhador em plataforma elevatória",
          imageFit: "contain",
          cards: [
            { icon: "🟡", title: "Gaiola", body: "Proteção perimetral contra queda." },
            { icon: "⚓", title: "Ancoragem", body: "Estrutura robusta e fixa." },
            { icon: "🦶", title: "Degraus", body: "Antiderrapantes e regulares." },
            { icon: "✋", title: "Subida", body: "Mãos livres, um trabalhador por vez." }
          ],
          quote: "Com essas diretrizes, cobrimos as proteções físicas e os acessos seguros.",
          transcript: "Escada tipo marinheiro: acesso vertical fixo com estrutura robusta e ancorada, gaiola de proteção perimetral contra queda e degraus antiderrapantes com espaçamento regular. A subida é feita com as mãos livres e um trabalhador por vez. Com essas diretrizes, cobrimos as proteções físicas e os acessos seguros."
        },
        {
          id: "m2-quiz-intro",
          type: "quiz-intro",
          title: "Inspeção NR-12 — Módulo 2",
          count: 5,
          minCorrect: 4,
          icon: "🛡️",
          body: "Você é o guardião das proteções. São <strong>5 casos</strong> do chão de fábrica: classifique cada um como <strong>conforme</strong> ou <strong>não conforme</strong>. Errou, segue para o próximo. Acerte no mínimo <strong>4</strong>. Cada acerto vale <strong>50 pontos</strong>.",
          transcript: "Desafio do módulo 2: inspeção no chão de fábrica. Classifique 5 casos como conforme ou não conforme."
        },
        {
          id: "m2-sort",
          type: "sort",
          kicker: "🕹️ Inspeção",
          title: "Inspeção no chão de fábrica",
          body: "Toque em conforme ou não conforme para cada caso.",
          time: 50,
          minCorrect: 4,
          left: { id: "nok", label: "Não conforme", icon: "✕" },
          right: { id: "ok", label: "Conforme", icon: "✓" },
          items: [
            {
              text: "Proteção de tela presa só com parafusos — sai apenas com ferramenta.",
              bin: "ok",
              hint: "Proteção fixa pode (e deve) sair só com ferramenta."
            },
            {
              text: "Porta de gradil que abre com a mão, sem chave de intertravamento.",
              bin: "nok",
              hint: "Proteção móvel só vale se estiver associada a intertravamento."
            },
            {
              text: "O operador fecha a proteção móvel e a máquina religa o movimento sozinha.",
              bin: "nok",
              hint: "Fechar a proteção nunca pode dar início ao movimento por si só."
            },
            {
              text: "Escada trepadeira com patamar superior de 50 × 50 cm.",
              bin: "nok",
              hint: "O patamar NR-12 tem no mínimo 60 × 60 cm."
            },
            {
              text: "Trepadeira com patamar 60 × 60 cm, degraus antiderrapantes e guarda-corpo contínuo com rodapé.",
              bin: "ok",
              hint: "Essas são as três marcas da trepadeira conforme."
            }
          ],
          review: "Classificar proteções fixas, móveis, intertravamento e acessos como conforme ou não conforme",
          transcript: "Inspeção: classifique cada caso como conforme ou não conforme."
        }
      ]
    },
    {
      id: 3,
      title: "Intervenções Seguras, Bloqueio de Energias (LOTO) e Permissão de Trabalho",
      objective: "Aplicar protocolos de manutenção, LOTO e Permissão de Trabalho na desenergização segura.",
      meta: "Vídeos + conteúdo · 3 V/F no final",
      titleUnlock: {
        title: "GUARDIÃO DO LOTO",
        body: "Você executa ou audita intervenções com energia zero, bloqueio, etiquetagem e Permissão de Trabalho.",
        icon: "🔒"
      },
      screens: [
        {
          id: "m3-cover",
          type: "cover",
          title: "Módulo 3 — Intervenções Seguras, Bloqueio de Energias (LOTO) e Permissão de Trabalho",
          subtitle: "Protocolos operacionais e formais para manutenção, inspeção, limpeza, ajustes e desenergização segura.",
          image: "assets/fotos/m3-p1.png",
          transcript: "Módulo 3: intervenções seguras, bloqueio de energias LOTO e permissão de trabalho."
        },
        {
          id: "m3-v-pt",
          type: "video",
          kicker: "🎥 Vídeo 1",
          title: "Requisitos de Intervenção e Permissão de Trabalho (PT)",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e95399c7-c31f-44af-84f0-ec585c6f7196",
          playerId: "panda-e95399c7-c31f-44af-84f0-ec585c6f7196",
          scene: "Slide ilustrativo da Permissão de Trabalho (PT) e diretrizes de intervenção no item 12.11.3",
          brief: "Item 12.11.3: autorização formal, capacitação e habilitação para manutenção e intervenção; requisitos, preenchimento e emissão da Permissão de Trabalho antes da tarefa.",
          transcript: "Vídeo: requisitos de intervenção e Permissão de Trabalho."
        },
        {
          id: "m3-v-seccionamento",
          type: "video",
          kicker: "🎥 Vídeo 2",
          title: "Seccionamento e Purga de Energias Perigosas (LOTO — Etapa 1)",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=84dfa77e-72dc-4e56-add4-fe90c6fd8f6f",
          playerId: "panda-84dfa77e-72dc-4e56-add4-fe90c6fd8f6f",
          scene: "Painel elétrico seccionado e purga de linhas hidráulicas e pneumáticas",
          brief: "Primeira etapa do LOTO: seccionar, isolar e purgar ou descarregar todas as fontes de energia — elétrica, hidráulica, pneumática e mecânica.",
          transcript: "Vídeo: seccionamento e purga de energias perigosas, etapa 1 do LOTO."
        },
        {
          id: "m3-v-bloqueio",
          type: "video",
          kicker: "🎥 Vídeo 3",
          title: "Bloqueio Físico Mecânico/Elétrico e Etiquetagem (LOTO — Etapa 2)",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=bd7636e6-811c-4785-9366-2466eced8173",
          playerId: "panda-bd7636e6-811c-4785-9366-2466eced8173",
          scene: "Cadeado no dispositivo de bloqueio e etiqueta preenchida com responsável, data, horário e motivo",
          brief: "Segunda etapa do LOTO: aplicar cadeados e dispositivos físicos de bloqueio, identificar com etiqueta de sinalização e garantir retenção mecânica de partes suspensas ou articuladas.",
          transcript: "Vídeo: bloqueio físico e etiquetagem, etapa 2 do LOTO."
        },
        {
          id: "m3-energia-zero",
          type: "content",
          kicker: "🖐️ Interativo",
          title: "Energia acumulada e trava mecânica (LOTO — Etapa 3)",
          body: "Toque em cada garantia para ler o que a etapa 3 exige.",
          spots: [
            {
              icon: "⚡",
              tag: "Energia acumulada",
              title: "Nada perigoso a jusante do corte",
              body: "O item 12.11.3 determina medidas para garantir que, a jusante dos pontos de corte de energia, não exista qualquer possibilidade de gerar acidentes por energia acumulada."
            },
            {
              icon: "🔧",
              tag: "Trava mecânica",
              title: "Retenção com trava é obrigatória",
              body: "Na manutenção de máquina sustentada por sistema hidráulico ou pneumático, ou com partes articuladas e basculadas abertas, é obrigatório usar sistema de retenção com trava mecânica."
            },
            {
              icon: "⬇️",
              tag: "Contra a gravidade",
              title: "Sem retorno e sem queda",
              body: "A trava impede o movimento de retorno acidental e a queda de partes suspensas por ação da gravidade, mesmo que ocorra vazamento de fluido ou perda de pressão."
            },
            {
              icon: "🛡️",
              tag: "Suporte físico",
              title: "O que sustenta a estrutura",
              body: "A trava mecânica é o suporte físico que garante que a estrutura não caia sobre o trabalhador."
            }
          ],
          quote: "Pressão zero no sistema não sustenta a carga. Só a trava mecânica sustenta.",
          transcript: "Etapa 3 do LOTO: eliminar energia acumulada a jusante do corte e aplicar retenção com trava mecânica em partes suspensas ou articuladas."
        },
        {
          id: "m3-dispositivos",
          type: "content",
          kicker: "🖐️ Interativo",
          title: "Dispositivos de bloqueio e etiquetagem",
          body: "Toque na foto para ver a próxima — são três pranchas de dispositivos usados no LOTO.",
          stack: [
            {
              image: "assets/fotos/CARROSEL1.png",
              imageAlt: "Garra para bloqueios múltiplos, cadeados coloridos, multibloqueador com cabo e caixa de travamento móvel",
              caption: "Garras, cadeados, multibloqueador com cabo e caixa de travamento de grupo"
            },
            {
              image: "assets/fotos/CARROSEL%202.png",
              imageAlt: "Dispositivos de bloqueio de interruptor, plugue elétrico industrial e doméstico, válvula de cilindro pressurizado e componente pneumático",
              caption: "Bloqueio de interruptor, plugues elétricos, cilindro pressurizado e componente pneumático"
            },
            {
              image: "assets/fotos/CARROSEL%203.png",
              imageAlt: "Dispositivos de bloqueio de válvula borboleta, válvula esfera e válvula gaveta, em uso nas tubulações",
              caption: "Bloqueio de válvulas borboleta, esfera e gaveta"
            }
          ],
          transcript: "Dispositivos de bloqueio e etiquetagem: garras, cadeados e caixa de travamento; bloqueio de interruptor, plugues e componentes pneumáticos; bloqueio de válvulas borboleta, esfera e gaveta."
        },
        {
          id: "m3-v-automotiva",
          type: "video",
          kicker: "🎥 Vídeo 4",
          title: "Bloqueio e Etiquetagem na Manutenção Automotiva",
          duration: "1:00",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=22c97e21-85d3-42ed-8ce4-c449066069cc",
          playerId: "panda-22c97e21-85d3-42ed-8ce4-c449066069cc",
          scene: "Bloqueios e etiquetas aplicados na manutenção automotiva",
          brief: "Aplicação dos procedimentos de bloqueio e etiquetagem na manutenção automotiva.",
          transcript: "Vídeo: bloqueio e etiquetagem na manutenção automotiva."
        },
        {
          id: "m3-quiz-intro",
          type: "quiz-intro",
          title: "Modo Sprint — Intervenção Segura e LOTO",
          count: 3,
          minCorrect: 2,
          icon: "🏃",
          body: "Responda <strong>3</strong> afirmações de verdadeiro ou falso sobre Permissão de Trabalho e as etapas do LOTO. Acerte no mínimo <strong>2</strong> para avançar. Cada acerto vale até <strong>50 pontos</strong>.",
          transcript: "Desafio sprint do módulo 3: 3 verdadeiro ou falso sobre permissão de trabalho e LOTO."
        },
        {
          id: "m3-q1",
          type: "question",
          question: "Manutenção, inspeção, reparo, limpeza e ajuste podem ser feitos com a máquina em funcionamento, desde que o trabalhador seja experiente.",
          image: "assets/fotos/m3p9.png",
          imageAlt: "Técnico com prancheta inspecionando a linha de envase em operação, com colega intervindo no equipamento ao fundo",
          alternatives: [
            { id: "a", text: "Verdadeiro", correct: false },
            { id: "b", text: "Falso", correct: true }
          ],
          explanation: "Falso — o item 12.11.3 exige a máquina parada, com trabalhadores capacitados e formalmente autorizados pelo empregador.",
          review: "Quando a intervenção pode ser feita e quem pode executá-la (12.11.3)",
          transcript: "V/F 1 do módulo 3."
        },
        {
          id: "m3-q2",
          type: "question",
          question: "Desligar o botão do painel já resolve: não é preciso descarregar o ar comprimido, o óleo sob pressão nem as molas comprimidas.",
          image: "assets/fotos/m3p10.png",
          imageAlt: "Operador aperta o botão Desliga no painel, com o reservatório de ar comprimido ainda pressurizado ao fundo",
          alternatives: [
            { id: "a", text: "Verdadeiro", correct: false },
            { id: "b", text: "Falso", correct: true }
          ],
          explanation: "Falso — a etapa 1 do LOTO isola e purga todas as fontes: elétrica, pneumática, hidráulica e mecânica acumulada.",
          review: "O seccionamento e a purga de todas as energias (LOTO — etapa 1)",
          transcript: "V/F 2 do módulo 3."
        },
        {
          id: "m3-q3",
          type: "question",
          question: "A etiqueta de bloqueio precisa trazer a data, o horário, o motivo da manutenção e o nome do responsável pela intervenção.",
          image: "assets/fotos/m3p11.png",
          imageAlt: "Cadeado na chave seccionadora com etiqueta Equipamento Bloqueado preenchida com data, horário, motivo e responsável",
          alternatives: [
            { id: "a", text: "Verdadeiro", correct: true },
            { id: "b", text: "Falso", correct: false }
          ],
          explanation: "Verdadeiro — e o cadeado ou a etiqueta de outro trabalhador jamais deve ser removido por você.",
          review: "O que a etiqueta de bloqueio precisa informar (LOTO — etapa 2)",
          transcript: "V/F 3 — fim do módulo 3."
        }
      ]
    },
    {
      id: 4,
      title: "Diagnóstico Prático no Chão de Fábrica, Anexos Setoriais e Conscientização",
      objective: "Auditar máquinas no chão de fábrica, consultar os Anexos da NR-12 e fortalecer a cultura preventiva.",
      meta: "Vídeos + conteúdo · ordenar a rotina no final",
      titleUnlock: {
        title: "AUDITOR DO CHÃO DE FÁBRICA",
        body: "Você identifica conformidade, consulta o anexo certo e multiplica a cultura de segurança.",
        icon: "🏭"
      },
      screens: [
        {
          id: "m4-cover",
          type: "cover",
          title: "Módulo 4 — Diagnóstico Prático no Chão de Fábrica, Anexos Setoriais e Conscientização",
          subtitle: "Auditorias visuais de segurança em máquinas industriais, Anexos da NR-12 e cultura preventiva.",
          image: "assets/fotos/m4-p1.png",
          transcript: "Módulo 4: diagnóstico prático no chão de fábrica, anexos setoriais e conscientização."
        },
        {
          id: "m4-v-monitor",
          type: "video",
          kicker: "🎥 Vídeo 1 de 3",
          title: "Posicionamento do monitor",
          duration: "0:35",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=92df051d-fe73-45f1-a8c9-395f690a41d2",
          playerId: "panda-92df051d-fe73-45f1-a8c9-395f690a41d2",
          scene: "Cena a filmar na retaguarda administrativa",
          brief: "Demonstrar o monitor paralelo à janela lateral — nunca de frente nem de costas — para evitar reflexo e ofuscamento.",
          transcript: "Vídeo: posicionamento do monitor."
        },
        {
          id: "m4-v-olhos",
          type: "video",
          kicker: "🎥 Vídeo 2 de 3",
          title: "Cuidado com os olhos e pausas visuais",
          duration: "0:35",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0d5766c7-bcdf-415c-980a-ab75b51342a3",
          playerId: "panda-0d5766c7-bcdf-415c-980a-ab75b51342a3",
          scene: "Cena a filmar na retaguarda administrativa",
          brief: "Uso prolongado da tela resseca os olhos. Piscar com frequência e, nas pausas, olhar para um ponto a mais de 6 metros.",
          transcript: "Vídeo: pausas visuais."
        },
        {
          id: "m4-v-temp",
          type: "video",
          kicker: "🎥 Vídeo 3 de 3",
          title: "Temperatura ideal do posto",
          duration: "0:25",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=824e4bd6-566b-461d-abf2-33b7c62f6dc5",
          playerId: "panda-824e4bd6-566b-461d-abf2-33b7c62f6dc5",
          scene: "Cena a filmar no posto administrativo",
          brief: "Faixa de conforto 18–25 °C. O ar-condicionado não deve incidir direto sobre o colaborador.",
          transcript: "Vídeo: temperatura do posto."
        },
        {
          id: "m4-reflexao",
          type: "reflect",
          kicker: "💭 Reflexão",
          title: "Uma pausa para pensar",
          prompt: "Quando foi a última vez que você ajustou a posição do seu monitor?",
          choices: [
            { text: "Hoje" },
            { text: "Essa semana" },
            { text: "Nem lembro" }
          ],
          answer: "Um ajuste de poucos segundos evita horas de desconforto no fim do dia.",
          transcript: "Reflexão: ajuste do monitor."
        },
        {
          id: "m4-dicas",
          type: "content",
          kicker: "📄 Texto",
          title: "Dicas rápidas do posto administrativo",
          items: [
            { icon: "🪟", text: "Elimine reflexos: janelas paralelas ao monitor, nunca à frente ou atrás." },
            { icon: "👁️", text: "Olhar muito tempo para a tela reduz o piscar e causa olhos secos — pisque com frequência." },
            { icon: "🌅", text: "Na pausa, evite o computador e olhe para o horizonte, a mais de 6 metros de distância." },
            { icon: "🌡️", text: "Temperatura de conforto: 18 a 25 °C — a saída do ar-condicionado não deve incidir direto sobre o colaborador." },
            { icon: "🔀", text: "Se não for possível redirecionar o ar, reposicione o posto de trabalho." }
          ],
          transcript: "Cinco dicas rápidas do posto administrativo."
        },
        {
          id: "m4-quiz-intro",
          type: "quiz-intro",
          title: "Ordene a Rotina — Módulo 4",
          count: 1,
          minCorrect: 1,
          icon: "🔢",
          body: "Toque nos <strong>3 cuidados</strong> do posto administrativo na ordem que faz mais sentido seguir no seu turno. Você tem <strong>40 segundos</strong>. Acerte e ganhe <strong>50 pontos</strong>.",
          transcript: "Desafio: ordenar a rotina do posto administrativo."
        },
        {
          id: "m4-order",
          type: "order",
          kicker: "🔢 Atividade",
          title: "Ordene a rotina",
          body: "Toque nos cuidados na ordem que você seguiria.",
          time: 40,
          items: [
            { key: "monitor", text: "Posicionar o monitor paralelo à janela", rank: 0 },
            { key: "olhos", text: "Piscar os olhos e olhar um ponto distante nas pausas", rank: 1 },
            { key: "temperatura", text: "Verificar se o ar-condicionado não bate direto em você", rank: 2 }
          ],
          review: "A ordem dos cuidados no posto administrativo",
          transcript: "Ordene os 3 cuidados do posto administrativo."
        }
      ]
    },
    {
      id: 5,
      title: "Ginástica Laboral e Encerramento",
      meta: "Vídeos + conteúdo · jogo de associação no final",
      titleUnlock: {
        title: "CAMPEÃO DO ALONGAMENTO",
        body: "Você leva a ginástica laboral para o turno — e cuida do corpo todos os dias.",
        icon: "🧘"
      },
      screens: [
        {
          id: "m5-cover",
          type: "cover",
          title: "Módulo 5 — Ginástica Laboral",
          subtitle: "Alongamentos simples para antes, durante e depois do turno.",
          image: "assets/fotos/m5-p1.png",
          transcript: "Módulo 5: ginástica laboral."
        },
        {
          id: "m5-v-maos",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Alongamento: mãos, dedos e punhos",
          duration: "1:25",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=bd575f56-1d7e-478e-8a88-dab1b17a8dcc",
          playerId: "panda-bd575f56-1d7e-478e-8a88-dab1b17a8dcc",
          scene: "Cena a filmar — ginástica laboral",
          brief: "Fechar a mão firme contra o pulso e abrir os dedos; entrelaçar os dedos e ondular; girar polegares e punhos.",
          transcript: "Vídeo: alongamento de mãos, dedos e punhos."
        },
        {
          id: "m5-v-bracos",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Alongamento: antebraços e braços",
          duration: "1:25",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=6bf787f2-779f-4bf6-88de-deb9f33a40e9",
          playerId: "panda-6bf787f2-779f-4bf6-88de-deb9f33a40e9",
          scene: "Cena a filmar — ginástica laboral",
          brief: "Braço esticado, palma para fora, puxando com a outra mão (~20 s cada lado). Cotovelo atrás da cabeça e braços entrelaçados atrás do corpo.",
          transcript: "Vídeo: alongamento de antebraços e braços."
        },
        {
          id: "m5-v-pescoco",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Cabeça, pescoço, ombros e tronco",
          duration: "1:15",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=dc6d5dc5-b789-4062-8d71-86e4b7282978",
          playerId: "panda-dc6d5dc5-b789-4062-8d71-86e4b7282978",
          scene: "Cena a filmar — ginástica laboral",
          brief: "Movimentos suaves de sim e não (sem jogar a cabeça para trás), inclinação lateral, elevação e giros de ombro, inclinação lateral do tronco.",
          transcript: "Vídeo: alongamento de pescoço, ombros e tronco."
        },
        {
          id: "m5-ficha",
          type: "content",
          steps: true,
          kicker: "📄 Texto",
          title: "Ficha de consulta — sequência de alongamento",
          items: [
            { n: 1, title: "Mãos:", text: "fechar contra o pulso e abrir — 3×", image: "assets/fotos/alongamentos/m5-maos.png", imageAlt: "Alongamento de mãos" },
            { n: 2, title: "Dedos:", text: "entrelaçar e ondular / girar polegares / estender alternado — 3× cada", image: "assets/fotos/alongamentos/m5-dedos.png", imageAlt: "Alongamento de dedos" },
            { n: 3, title: "Antebraço:", text: "puxar palma para fora — 20 s cada lado, 3×", image: "assets/fotos/alongamentos/m5-antebraco.png", imageAlt: "Alongamento de antebraço" },
            { n: 4, title: "Punhos:", text: "unir palmas no peito e afastar / girar nos dois sentidos", image: "assets/fotos/alongamentos/m5-punhos.png", imageAlt: "Alongamento de punhos" },
            { n: 5, title: "Braços:", text: "cotovelo atrás da cabeça — 20 s cada lado, 3×", image: "assets/fotos/alongamentos/m5-bracos.png", imageAlt: "Alongamento de braços" },
            { n: 6, title: "Braços (atrás do corpo):", text: "dedos entrelaçados, afastar do corpo — 20 s, 3×", image: "assets/fotos/alongamentos/m5-bracos-atras.png", imageAlt: "Alongamento de braços atrás do corpo" },
            { n: 7, title: "Braços (acima da cabeça):", text: "dedos entrelaçados, palmas para cima — 20 s", image: "assets/fotos/alongamentos/m5-bracos-cima.png", imageAlt: "Alongamento de braços acima da cabeça" },
            { n: 8, title: "Cabeça/pescoço:", text: "sim/não e inclinação lateral — 20 s cada lado, 3× (evitar levar a cabeça para trás)", image: "assets/fotos/alongamentos/m5-cabeca.png", imageAlt: "Alongamento de cabeça e pescoço" },
            { n: 9, title: "Ombros:", text: "elevar ao inspirar / girar frente-trás — 3× cada sentido", image: "assets/fotos/alongamentos/m5-ombros.png", imageAlt: "Alongamento de ombros" },
            { n: 10, title: "Tronco:", text: "braço sobre a cabeça, inclinação lateral — 20 s cada lado, 3×", image: "assets/fotos/alongamentos/m5-tronco.png", imageAlt: "Alongamento de tronco" }
          ],
          transcript: "Ficha de consulta dos alongamentos."
        },
        {
          id: "m5-v-final",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Efeitos da má postura e mensagem final",
          duration: "1:05",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2d6e8d25-b86c-4841-9930-4bb3c86292d4",
          playerId: "panda-2d6e8d25-b86c-4841-9930-4bb3c86292d4",
          scene: "Cena a filmar com o instrutor, encerrando o treinamento",
          brief: "Instrutor em corredor da loja transmite a mensagem final. Má postura gera dor e pode evoluir para LER/DORT. Pratique os alongamentos e mantenha a postura neutra.",
          transcript: "Vídeo final: efeitos da má postura."
        },
        {
          id: "m5-quiz-intro",
          type: "quiz-intro",
          title: "Desafio NR 17 — Módulo 5",
          count: 1,
          minCorrect: 1,
          icon: "🧩",
          body: "Associe cada <strong>exercício</strong> à <strong>região do corpo</strong> que ele alonga. São <strong>8 pares</strong> — clique em um exercício e depois na região correspondente. Acerte e ganhe <strong>50 pontos</strong>.",
          transcript: "Desafio: associar exercícios às regiões do corpo."
        },
        {
          id: "m5-match",
          type: "match",
          kicker: "🕹️ Jogo de associação",
          title: "Associe o exercício à região",
          pairs: [
            { ex: "Fechar a mão firme contra o pulso e abrir os dedos", body: "Mãos e dedos" },
            { ex: "Entrelaçar os dedos e fazer movimento ondulatório", body: "Dedos" },
            { ex: "Braço esticado, palma para fora, puxando com a outra mão", body: "Antebraço" },
            { ex: "Unir as palmas no peito e girar os punhos", body: "Punhos" },
            { ex: "Cotovelo atrás da cabeça, em direção ao ombro oposto", body: "Braço" },
            { ex: "Braços atrás do corpo, dedos entrelaçados, afastando do corpo", body: "Ombros e peito" },
            { ex: "Movimento de \"sim\" e \"não\" com a cabeça", body: "Pescoço" },
            { ex: "Braço sobre a cabeça, inclinando lateralmente", body: "Tronco" }
          ],
          review: "Qual região do corpo cada exercício de alongamento trabalha",
          transcript: "Jogo: associe 8 exercícios às regiões do corpo."
        },
        {
          id: "m5-reflexao",
          type: "reflect",
          kicker: "💭 Reflexão",
          title: "Antes de encerrar",
          prompt: "Quando você vai praticar esses alongamentos?",
          choices: [
            { icon: "🌅", text: "Início do turno" },
            { icon: "☕", text: "Na pausa" },
            { icon: "🏠", text: "Antes de casa" }
          ],
          answer: "Não se esqueça de pensar neste assunto todos os dias. Cuidar da sua postura hoje é evitar dores e afastamentos amanhã — pequenos ajustes, repetidos todos os dias, fazem toda a diferença.",
          transcript: "Antes de encerrar: escolha quando praticar os alongamentos."
        },
        {
          id: "m5-done",
          type: "finale",
          kicker: "🏆 Conclusão",
          eyebrow: "Certificado de conclusão",
          title: "Parabéns",
          body: "Você concluiu o treinamento NR 17 — Ergonomia no Comércio e na Logística.",
          quote: "Cuidar da sua postura hoje é proteger a sua energia amanhã. Leve esses cuidados para cada turno — seu corpo agradece.",
          chips: ["NR 17", "Ergonomia", "Comércio e Logística"],
          image: "assets/fotos/capafinal.png",
          transcript: "Parabéns pela conclusão do treinamento. Cuidar da sua postura hoje é proteger a sua energia amanhã."
        }
      ]
    }
  ]
};
