const DATA = {
  "modules": [
    {
      "id": "fundamentos",
      "title": "O que é um robô?",
      "group": "Fundamentos",
      "summary": "Entenda automação, autonomia e a relação entre mecânica, eletrônica e software.",
      "recall": "Todo sistema automático é autônomo?",
      "answer": "Não. Executar uma sequência fixa automaticamente não implica decidir como agir diante de mudanças no ambiente."
    },
    {
      "id": "historia",
      "title": "História da robótica",
      "group": "Fundamentos",
      "summary": "Ligue os marcos históricos às capacidades que eles introduziram.",
      "recall": "Por que Shakey é um marco diferente de um braço industrial que repete posições?",
      "answer": "Porque combina percepção do ambiente e planejamento para orientar a navegação, enquanto a repetição industrial pode usar posições previamente ensinadas."
    },
    {
      "id": "computacao-ficcao",
      "title": "Computação, autômatos e ficção",
      "group": "Fundamentos",
      "summary": "Entenda cartões perfurados, Babbage, Asimov e o nascimento da IA.",
      "recall": "Qual projeto de Babbage é associado a propósito geral?",
      "answer": "A máquina analítica. A máquina diferencial foi concebida para cálculo de tabelas por diferenças."
    },
    {
      "id": "paradigmas",
      "title": "Paradigmas e arquitetura de decisões",
      "group": "Fundamentos",
      "summary": "Compare percepção–ação, planejamento e arquitetura híbrida.",
      "recall": "Que parte de uma arquitetura híbrida deve responder a um obstáculo inesperado próximo?",
      "answer": "A camada local de percepção e reação/controle, integrada às prioridades de segurança; o plano global pode ser atualizado depois."
    },
    {
      "id": "matematica",
      "title": "Matemática e física essenciais",
      "group": "Bases de apoio",
      "summary": "Revise unidades, trigonometria, vetores, energia e torque antes das contas.",
      "recall": "Um motor a 60 rpm gira a quantos rad/s?",
      "answer": "A uma volta por segundo, ou 2π rad/s, aproximadamente 6,283 rad/s."
    },
    {
      "id": "estrutura",
      "title": "Estrutura mecânica e anatomia",
      "group": "Mecânica",
      "summary": "Identifique base, elos, juntas, punho e efetuador.",
      "recall": "Qual é a diferença entre punho e órgão terminal?",
      "answer": "O punho orienta a extremidade por suas juntas; o órgão terminal é a garra ou ferramenta que realiza a tarefa."
    },
    {
      "id": "juntas",
      "title": "Juntas e graus de liberdade",
      "group": "Mecânica",
      "summary": "Conte movimentos independentes e traduza as notações dos materiais.",
      "recall": "Por que uma junta de parafuso tem um GL?",
      "answer": "Porque rotação e translação são vinculadas pelo passo do parafuso; não podem ser escolhidas de forma independente."
    },
    {
      "id": "configuracoes",
      "title": "Tipos de manipuladores",
      "group": "Mecânica",
      "summary": "Compare cartesiano, cilíndrico, polar, SCARA, articulado e paralelo.",
      "recall": "Polar e SCARA podem ser RRP. Como distingui-los?",
      "answer": "Pela disposição dos eixos e pela geometria dos movimentos. A sequência de letras não descreve sozinha a arquitetura inteira."
    },
    {
      "id": "workspace",
      "title": "Espaço de trabalho e orientação",
      "group": "Mecânica",
      "summary": "Calcule volumes idealizados e distinga alcance de destreza.",
      "recall": "Um ponto alcançável pode não aceitar a orientação pedida?",
      "answer": "Sim. A posição pode estar no espaço alcançável, mas fora do conjunto de poses permitidas pelos limites de juntas e pela geometria."
    },
    {
      "id": "garras",
      "title": "Garras e ferramentas",
      "group": "Mecânica",
      "summary": "Escolha a preensão e dimensione a força em um modelo de atrito.",
      "recall": "Se o atrito cair pela metade, o que acontece à força normal exigida nesse modelo?",
      "answer": "Ela dobra, mantendo massa, número de contatos, aceleração e margem constantes."
    },
    {
      "id": "atuadores",
      "title": "Atuadores elétricos, hidráulicos e pneumáticos",
      "group": "Mecânica",
      "summary": "Entenda como energia vira movimento e compare as alternativas.",
      "recall": "Qual grandeza mais diretamente relaciona área do pistão e força em um cilindro ideal?",
      "answer": "A diferença de pressão: F = Δp × A."
    },
    {
      "id": "motores",
      "title": "Motores CC, BLDC, passo e servos",
      "group": "Eletrônica",
      "summary": "Entenda comutação, passos, PWM e realimentação.",
      "recall": "Mais micro passos garantem proporcionalmente mais precisão?",
      "answer": "Não. Eles subdividem o comando, mas atrito, carga, torque incremental e erros mecânicos limitam a precisão real."
    },
    {
      "id": "transmissoes",
      "title": "Redutores e transmissões",
      "group": "Mecânica",
      "summary": "Calcule velocidade, torque, eficiência e efeitos da folga.",
      "recall": "Um redutor 10:1 com eficiência de 90% entrega quanto torque para uma entrada de 2 N·m?",
      "answer": "18 N·m, usando N = 10 e τ_saída = ηNτ_entrada."
    },
    {
      "id": "sensores",
      "title": "Sensores e aquisição de dados",
      "group": "Eletrônica",
      "summary": "Compare o que cada sensor mede e os erros que introduz.",
      "recall": "Por que alta resolução não garante uma boa medida?",
      "answer": "Porque calibração, viés, ruído, montagem, temperatura e atraso podem produzir erros maiores que o incremento digital."
    },
    {
      "id": "encoders",
      "title": "Encoders, resolver e código Gray",
      "group": "Eletrônica",
      "summary": "Calcule incrementos e entenda posição absoluta, quadratura e referência.",
      "recall": "Com 1.000 ciclos por volta e leitura x4, qual é o incremento angular?",
      "answer": "Há 4.000 contagens por volta; o incremento é 360/4.000 = 0,09°."
    },
    {
      "id": "controle",
      "title": "Malhas de controle e PID",
      "group": "Controle",
      "summary": "Construa a realimentação e calcule os três termos do controlador.",
      "recall": "Se Ts = 5 ms, qual a frequência de amostragem?",
      "answer": "Ts = 0,005 s; f_s = 1/0,005 = 200 Hz."
    },
    {
      "id": "embarcados",
      "title": "Controladores, firmware e tempo real",
      "group": "Computação",
      "summary": "Distribua tarefas entre microcontrolador, computador e supervisão.",
      "recall": "Por que um processador rápido pode não atender tempo real?",
      "answer": "Porque atrasos imprevisíveis, bloqueios e escalonamento podem impedir o cumprimento dos prazos, mesmo com alta capacidade média de processamento."
    },
    {
      "id": "potencia",
      "title": "Drivers, ponte H e alimentação",
      "group": "Eletrônica",
      "summary": "Separe sinal de controle de potência e estime energia disponível.",
      "recall": "Uma bateria de 24 V e 5 Ah tem aproximadamente quantos Wh nominais?",
      "answer": "120 Wh, usando 24 × 5. A energia realmente utilizável depende das condições e dos limites da bateria."
    },
    {
      "id": "comunicacao",
      "title": "Comunicação e ROS",
      "group": "Computação",
      "summary": "Escolha interfaces por distância, ruído e prazo; entenda mensagens robóticas.",
      "recall": "Qual interface ROS combina meta, progresso e cancelamento?",
      "answer": "Uma action, útil para tarefas demoradas como navegação até um destino."
    },
    {
      "id": "cinematica",
      "title": "Cinemática direta e inversa",
      "group": "Matemática aplicada",
      "summary": "Calcule um braço planar e entenda transformações de referenciais.",
      "recall": "Um alvo em (3 m, 0) pode ser alcançado por dois elos de 1 m?",
      "answer": "Não. O alcance máximo geométrico é 2 m; o cálculo dá |c2| > 1."
    },
    {
      "id": "jacobiano",
      "title": "Jacobiano, singularidades e redundância",
      "group": "Matemática aplicada",
      "summary": "Relacione velocidades e reconheça configurações problemáticas.",
      "recall": "Pode-se aplicar det(J) = 0 a qualquer Jacobiano?",
      "answer": "Não. Determinante é definido para matrizes quadradas. Para Jacobianos retangulares, avalie o posto e critérios apropriados."
    },
    {
      "id": "desempenho",
      "title": "Resolução, precisão e repetibilidade",
      "group": "Controle",
      "summary": "Separe incremento, proximidade do alvo e dispersão das repetições.",
      "recall": "Um robô que sempre para 3 mm à direita do alvo tem necessariamente má repetibilidade?",
      "answer": "Não. Ele pode repetir muito bem a mesma posição incorreta; apresenta um desvio sistemático em relação ao alvo."
    },
    {
      "id": "dinamica",
      "title": "Dinâmica, trajetórias e complacência",
      "group": "Controle",
      "summary": "Entenda torque, aceleração, estabilidade e deformação sob carga.",
      "recall": "O que acontece à deformação ao dobrar a rigidez, com a mesma força?",
      "answer": "Ela cai pela metade no modelo linear δ = F/k."
    },
    {
      "id": "programacao",
      "title": "Programação, PTP e trajetória contínua",
      "group": "Computação",
      "summary": "Entenda ensino de pontos, interpolação e integração com a célula.",
      "recall": "Qual controle é mais adequado para seguir um cordão de solda?",
      "answer": "Trajetória contínua (CP), com controle do percurso e perfil de movimento; chegar apenas aos pontos extremos não garante o cordão desejado."
    },
    {
      "id": "visao",
      "title": "Visão computacional e percepção",
      "group": "Percepção",
      "summary": "Passe de pixels a informação e entenda calibração.",
      "recall": "Detectar o centro de um objeto em pixels basta para posicionar uma garra em metros?",
      "answer": "Não. São necessárias informações geométricas, calibração, profundidade ou um modelo adequado e transformação entre referenciais."
    },
    {
      "id": "navegacao",
      "title": "Localização, SLAM e navegação",
      "group": "Percepção",
      "summary": "Separe mapa, estimativa de posição, planejamento e controle.",
      "recall": "Por que SLAM é mais do que desenhar um mapa?",
      "answer": "Porque estima simultaneamente o mapa e a posição do próprio robô, tratando a dependência entre essas duas informações."
    },
    {
      "id": "ia",
      "title": "Inteligência artificial na robótica",
      "group": "Computação",
      "summary": "Entenda classificação, reforço, sim-to-real e integração com controle.",
      "recall": "Qual é o principal risco de testar só com os dados de treinamento?",
      "answer": "Confundir memorização ou ajuste aos exemplos conhecidos com capacidade de generalizar para situações novas."
    },
    {
      "id": "seguranca",
      "title": "Segurança, colaboração e confiabilidade",
      "group": "Aplicações",
      "summary": "Entenda riscos, diagnósticos e limites de sistemas colaborativos.",
      "recall": "Um cobot é seguro em qualquer aplicação?",
      "answer": "Não. Segurança depende do conjunto da aplicação, ferramenta, peça, movimento, ambiente e medidas verificadas."
    },
    {
      "id": "aplicacoes",
      "title": "Aplicações e critérios de engenharia",
      "group": "Aplicações",
      "summary": "Conecte indústria, medicina, agricultura, serviços e exploração.",
      "recall": "Por que um robô mais rápido pode não aumentar a produção de uma célula?",
      "answer": "Porque o gargalo pode estar em outra etapa, como alimentação de peças, máquina de processo ou inspeção."
    },
    {
      "id": "projeto",
      "title": "Projete um robô autônomo",
      "group": "Aplicações",
      "summary": "Siga o desafio da aula com requisitos, arquitetura e dimensionamento.",
      "recall": "Quais são os três cálculos mínimos do desafio?",
      "answer": "Potência mecânica P = τω; energia E = Pt; velocidade linear de roda v = ωr, usando unidades compatíveis e hipóteses declaradas."
    }
  ],
  "questions": [
    {
      "id": "q01",
      "topic": "fundamentos",
      "level": "Conceito",
      "prompt": "Qual característica é central na definição de manipulador industrial apresentada na aula?",
      "options": [
        "Reprogramabilidade para diferentes tarefas",
        "Ter forma humana",
        "Usar uma rede neural",
        "Operar sem fonte de energia"
      ],
      "correct": 0,
      "why": "A definição enfatiza um manipulador reprogramável e multifuncional. Aparência humana e IA não são requisitos."
    },
    {
      "id": "q02",
      "topic": "fundamentos",
      "level": "Aplicação",
      "prompt": "Uma célula repete posições ensinadas sem decidir uma nova rota. Como descrevê-la?",
      "options": [
        "É necessariamente teleoperada",
        "Automaticamente executa um programa",
        "É necessariamente autônoma em ambiente desconhecido",
        "Não pode ser robótica"
      ],
      "correct": 1,
      "why": "Execução automática de uma sequência não implica autonomia para decidir diante de mudanças."
    },
    {
      "id": "q03",
      "topic": "historia",
      "level": "Conceito",
      "prompt": "O que distingue Shakey nos marcos da aula?",
      "options": [
        "Criação das leis de Asimov",
        "Uso obrigatório de seis juntas industriais",
        "Percepção e planejamento para navegação",
        "Primeiro uso de cartões em um tear"
      ],
      "correct": 2,
      "why": "Shakey é associado à integração de percepção, modelo e planejamento em um robô móvel."
    },
    {
      "id": "q04",
      "topic": "historia",
      "level": "Conceito",
      "prompt": "Qual associação histórica aparece no material?",
      "options": [
        "Aibo — primeiro tear perfurado",
        "Jacquard — robô em Marte",
        "Sojourner — máquina diferencial",
        "PUMA — manipulador para montagem"
      ],
      "correct": 3,
      "why": "A aula apresenta PUMA como Programmable Universal Machine for Assembly. Sojourner está ligado à missão Pathfinder."
    },
    {
      "id": "q05",
      "topic": "computacao-ficcao",
      "level": "Conceito",
      "prompt": "Qual correção é necessária ao estudar o slide sobre Babbage?",
      "options": [
        "Distinguir máquina diferencial de máquina analítica",
        "Atribuir ambas ao século XX",
        "Tratar ambas como redes neurais",
        "Afirmar que cartões não representam instruções"
      ],
      "correct": 0,
      "why": "A diferencial foi concebida para tabelas; a analítica é associada a computação programável de propósito geral."
    },
    {
      "id": "q06",
      "topic": "computacao-ficcao",
      "level": "Aplicação",
      "prompt": "As três leis de Asimov substituem a análise de riscos de um robô?",
      "options": [
        "Sim, se o robô reconhecer pessoas",
        "Não; são regras de ficção",
        "Sim, se escritas no código em C",
        "Sim, em qualquer cobot"
      ],
      "correct": 1,
      "why": "As leis são narrativas. Segurança técnica exige avaliação da aplicação, medidas e validação."
    },
    {
      "id": "q07",
      "topic": "paradigmas",
      "level": "Aplicação",
      "prompt": "Um planejador escolhe a rota e uma camada local evita obstáculos. Qual arquitetura representa isso?",
      "options": [
        "Exclusivamente teleoperada",
        "Somente deliberativa sem reação local",
        "Híbrida",
        "Somente sequência mecânica fixa"
      ],
      "correct": 2,
      "why": "Combina planejamento global com resposta local ao ambiente."
    },
    {
      "id": "q08",
      "topic": "paradigmas",
      "level": "Conceito",
      "prompt": "Qual robô da aula utiliza percepção–ação?",
      "options": [
        "SOFIA",
        "ASIMOV, exclusivamente",
        "ASIMO, identificado com ASIMOV",
        "PINÓQUIO"
      ],
      "correct": 3,
      "why": "PINÓQUIO é apresentado como percepção–ação; SOFIA como percepção–planejamento–ação e ASIMOV como híbrido."
    },
    {
      "id": "q09",
      "topic": "matematica",
      "level": "Cálculo",
      "prompt": "Uma carga de 2 kg está a 0,4 m do eixo com braço horizontal. Usando g = 9,81 m/s², qual torque equilibra só essa carga?",
      "options": [
        "7,848 N·m",
        "0,8 N·m",
        "19,62 N·m",
        "78,48 N·m"
      ],
      "correct": 0,
      "why": "τ = mgr = 2 × 9,81 × 0,4 = 7,848 N·m. A conta não inclui braço, atrito ou aceleração."
    },
    {
      "id": "q10",
      "topic": "matematica",
      "level": "Cálculo",
      "prompt": "60 rpm equivalem a:",
      "options": [
        "360 rad/s",
        "2π rad/s",
        "60 rad/s",
        "π/60 rad/s"
      ],
      "correct": 1,
      "why": "60 rpm é uma volta por segundo. Uma volta corresponde a 2π rad."
    },
    {
      "id": "q11",
      "topic": "estrutura",
      "level": "Conceito",
      "prompt": "Qual componente executa diretamente a tarefa de soldar ou agarrar?",
      "options": [
        "Elo de entrada de qualquer junta",
        "Rolamento de suporte",
        "Órgão terminal",
        "Base"
      ],
      "correct": 2,
      "why": "O órgão terminal é a ferramenta ou garra conectada à extremidade do robô."
    },
    {
      "id": "q12",
      "topic": "estrutura",
      "level": "Aplicação",
      "prompt": "Uma transmissão leva movimento de um motor na base até uma junta distante. Qual efeito ela pode trazer?",
      "options": [
        "Eliminar toda deformação estrutural",
        "Garantir precisão infinita",
        "Eliminar a necessidade de controle",
        "Reduzir massa móvel, mas introduzir perdas e elasticidade"
      ],
      "correct": 3,
      "why": "Mover o motor para a base pode reduzir massa em movimento, mas a transmissão precisa ser avaliada por perdas, folga e elasticidade."
    },
    {
      "id": "q13",
      "topic": "juntas",
      "level": "Conceito",
      "prompt": "Por que uma junta helicoidal ideal tem um grau de liberdade?",
      "options": [
        "Rotação e translação são vinculadas pelo passo",
        "Não permite translação",
        "Tem dois motores independentes",
        "Todo mecanismo com rotação tem três GL"
      ],
      "correct": 0,
      "why": "Uma coordenada determina ambos os movimentos. A independência, e não a quantidade de movimentos visíveis, define GL."
    },
    {
      "id": "q14",
      "topic": "juntas",
      "level": "Cálculo",
      "prompt": "Uma cadeia aberta RRPS, sem vínculos adicionais, tem quantos GL? S é esférica.",
      "options": [
        "7",
        "6",
        "4",
        "5"
      ],
      "correct": 1,
      "why": "R + R + P + S = 1 + 1 + 1 + 3 = 6. A junta esférica ideal permite três rotações independentes."
    },
    {
      "id": "q15",
      "topic": "juntas",
      "level": "Conceito",
      "prompt": "Qual afirmação sobre juntas planares respeita as convenções?",
      "options": [
        "Uma planar geral nunca gira",
        "As duas convenções significam sempre o mesmo mecanismo",
        "A geral tem 3 GL; a combinação de duas P da apostila tem 2",
        "Toda planar tem exatamente 2 GL em qualquer texto"
      ],
      "correct": 2,
      "why": "Uma junta planar geral permite x, y e rotação. A apostila chama de planar um arranjo de duas prismáticas."
    },
    {
      "id": "q16",
      "topic": "configuracoes",
      "level": "Conceito",
      "prompt": "Qual arquitetura possui três juntas principais prismáticas ortogonais?",
      "options": [
        "Polar",
        "Articulada vertical",
        "SCARA",
        "Cartesiana"
      ],
      "correct": 3,
      "why": "PPP é a configuração cartesiana ideal. Polar e SCARA podem ser RRP, com eixos dispostos de formas diferentes."
    },
    {
      "id": "q17",
      "topic": "configuracoes",
      "level": "Aplicação",
      "prompt": "Por que RRP sozinho não distingue polar de SCARA?",
      "options": [
        "É necessário saber a orientação dos eixos",
        "Polar tem obrigatoriamente seis P",
        "SCARA não possui nenhuma rotação",
        "As letras identificam o fabricante"
      ],
      "correct": 0,
      "why": "A ordem dos tipos de junta não informa toda a geometria. O arranjo dos eixos muda o movimento e o volume."
    },
    {
      "id": "q18",
      "topic": "configuracoes",
      "level": "Aplicação",
      "prompt": "O gráfico qualitativo da aula 06 permite concluir velocidades reais de fabricantes?",
      "options": [
        "Somente para o Delta",
        "Não; ele é um índice didático ilustrativo",
        "Sim, cada barra está em m/s",
        "Sim, basta multiplicar por 100"
      ],
      "correct": 1,
      "why": "O próprio slide indica que a comparação é qualitativa e não representa especificações de fabricantes."
    },
    {
      "id": "q19",
      "topic": "workspace",
      "level": "Cálculo",
      "prompt": "Um pórtico tem cursos de 0,5 m, 0,4 m e 0,3 m. Qual volume ideal?",
      "options": [
        "0,6 m³",
        "0,12 m³",
        "0,06 m³",
        "1,2 m³"
      ],
      "correct": 2,
      "why": "V = 0,5 × 0,4 × 0,3 = 0,06 m³, usando eixos ortogonais e cursos independentes. Limites e interferências reduzem a região utilizável."
    },
    {
      "id": "q20",
      "topic": "workspace",
      "level": "Cálculo",
      "prompt": "Uma região cilíndrica de volta completa tem r_max = 0,8 m, r_min = 0,2 m, h = 0,5 m. Qual volume?",
      "options": [
        "0,32π m³",
        "0,6π m³",
        "π m³",
        "0,3π m³"
      ],
      "correct": 3,
      "why": "V = π(0,8² − 0,2²)0,5 = π(0,64 − 0,04)0,5 = 0,3π m³."
    },
    {
      "id": "q21",
      "topic": "workspace",
      "level": "Aplicação",
      "prompt": "Um alvo é alcançável, mas não com a orientação exigida. O que isso mostra?",
      "options": [
        "Alcance de posição e destreza de orientação são diferentes",
        "A cinemática inversa é sempre única",
        "O robô tem resolução zero",
        "Não existe espaço de trabalho"
      ],
      "correct": 0,
      "why": "Posição alcançável não garante todas as orientações desejadas naquela posição."
    },
    {
      "id": "q22",
      "topic": "garras",
      "level": "Cálculo",
      "prompt": "Dois dedos seguram 1 kg verticalmente, μ = 0,3 e margem S = 2. Sem aceleração, qual normal mínima por dedo? g = 9,81.",
      "options": [
        "9,81 N",
        "32,7 N",
        "65,4 N por dedo",
        "3,27 N"
      ],
      "correct": 1,
      "why": "N ≥ Smg/(pμ) = 2×1×9,81/(2×0,3) = 32,7 N por contato. A soma das normais é 65,4 N."
    },
    {
      "id": "q23",
      "topic": "garras",
      "level": "Aplicação",
      "prompt": "Qual escolha exige verificar porosidade e vazamentos do objeto?",
      "options": [
        "Encoder absoluto",
        "Potenciômetro de junta",
        "Ventosa",
        "Toda engrenagem do redutor"
      ],
      "correct": 2,
      "why": "Uma ventosa depende da manutenção de diferença de pressão e vedação; porosidade pode comprometer a preensão."
    },
    {
      "id": "q24",
      "topic": "atuadores",
      "level": "Cálculo",
      "prompt": "Δp = 500 kPa e área efetiva = 0,001 m². Qual força ideal do cilindro?",
      "options": [
        "0,5 N",
        "500 kg",
        "5.000 N",
        "500 N"
      ],
      "correct": 3,
      "why": "500 kPa = 500.000 Pa. F = ΔpA = 500 N. Quilograma mede massa, não força."
    },
    {
      "id": "q25",
      "topic": "atuadores",
      "level": "Conceito",
      "prompt": "O que caracteriza acionamento indireto?",
      "options": [
        "Um mecanismo transmite o movimento entre atuador e junta",
        "O motor não recebe energia",
        "Não há controlador",
        "A junta deixa de se mover"
      ],
      "correct": 0,
      "why": "Redutores, cabos, correias e outros mecanismos podem transmitir e adaptar o movimento."
    },
    {
      "id": "q26",
      "topic": "motores",
      "level": "Cálculo",
      "prompt": "Motor com passo completo de 1,8°. Quantos passos completos fazem uma volta?",
      "options": [
        "2.000",
        "200",
        "180",
        "360"
      ],
      "correct": 1,
      "why": "360/1,8 = 200. Microstepping muda a quantidade de comandos, não essa definição de passo completo."
    },
    {
      "id": "q27",
      "topic": "motores",
      "level": "Aplicação",
      "prompt": "Um motor de passo em malha aberta perde passos. O que pode acontecer?",
      "options": [
        "O encoder absoluto é obrigatório para existir movimento",
        "A precisão aumenta",
        "A posição estimada por contagem fica diferente da real",
        "O controlador sempre detecta automaticamente"
      ],
      "correct": 2,
      "why": "Sem medição apropriada, o software pode continuar contando comandos como se todos fossem executados."
    },
    {
      "id": "q28",
      "topic": "motores",
      "level": "Conceito",
      "prompt": "No modelo da aula τ = Kt i, aumentar corrente produz qual tendência?",
      "options": [
        "Diminui sempre o torque",
        "Muda apenas o número de bits do encoder",
        "Elimina a força contraeletromotriz",
        "Aumenta o torque no modelo, respeitando limites"
      ],
      "correct": 3,
      "why": "Torque é proporcional à corrente no modelo simplificado. Limites térmicos e do driver continuam importantes."
    },
    {
      "id": "q29",
      "topic": "transmissoes",
      "level": "Cálculo",
      "prompt": "τ_motor = 1 N·m, N = 50 e η = 0,8. Torque idealizado de saída:",
      "options": [
        "40 N·m",
        "50 N·m",
        "0,016 N·m",
        "62,5 N·m"
      ],
      "correct": 0,
      "why": "τ_saída = ηNτ_motor = 0,8×50×1 = 40 N·m."
    },
    {
      "id": "q30",
      "topic": "transmissoes",
      "level": "Cálculo",
      "prompt": "Motor a 3.000 rpm com redução N = 50. Velocidade de saída:",
      "options": [
        "50 rpm",
        "60 rpm",
        "150.000 rpm",
        "600 rpm"
      ],
      "correct": 1,
      "why": "ω_saída = ω_motor/N = 3.000/50 = 60 rpm."
    },
    {
      "id": "q31",
      "topic": "transmissoes",
      "level": "Conceito",
      "prompt": "Após inverter o motor, a saída demora a responder devido a espaço entre dentes. Qual efeito?",
      "options": [
        "Amostragem de câmera",
        "Código Gray",
        "Folga / backlash",
        "Cinemática inversa"
      ],
      "correct": 2,
      "why": "Backlash é um intervalo de movimento de entrada antes da resposta da saída, especialmente nas reversões."
    },
    {
      "id": "q32",
      "topic": "sensores",
      "level": "Conceito",
      "prompt": "Qual sensor é mais diretamente associado à variação de resistência por deformação?",
      "options": [
        "Encoder incremental óptico",
        "Câmera RGB",
        "Tacômetro ideal",
        "Strain gauge"
      ],
      "correct": 3,
      "why": "O strain gauge varia resistência com deformação e pode integrar uma medição de força após calibração."
    },
    {
      "id": "q33",
      "topic": "sensores",
      "level": "Cálculo",
      "prompt": "Eco ultrassônico leva 4 ms. Com c = 343 m/s, qual distância ao alvo?",
      "options": [
        "0,686 m",
        "1,372 m",
        "68,6 m",
        "0,343 m"
      ],
      "correct": 0,
      "why": "d = ct/2 = 343×0,004/2 = 0,686 m. O tempo inclui ida e volta."
    },
    {
      "id": "q34",
      "topic": "encoders",
      "level": "Cálculo",
      "prompt": "Um encoder absoluto tem 12 bits por volta. Quantas posições e qual incremento aproximado?",
      "options": [
        "4.096 posições; 12°",
        "4.096 posições; 0,0879°",
        "12 posições; 30°",
        "1.024 posições; 0,3516°"
      ],
      "correct": 1,
      "why": "2¹² = 4.096; 360/4.096 ≈ 0,0879°. Isso não é automaticamente a precisão absoluta."
    },
    {
      "id": "q35",
      "topic": "encoders",
      "level": "Cálculo",
      "prompt": "1.000 ciclos por volta em quadratura, contagem x4. Quantas contagens por volta?",
      "options": [
        "250",
        "2.000",
        "4.000",
        "1.000"
      ],
      "correct": 2,
      "why": "Na definição dada, x4 conta quatro bordas por ciclo. Sempre confirme como o fabricante define PPR/CPR."
    },
    {
      "id": "q36",
      "topic": "encoders",
      "level": "Conceito",
      "prompt": "O que distingue posições vizinhas em código Gray?",
      "options": [
        "Todos os bits mudam",
        "Nunca há erro elétrico",
        "O código é sempre uma medida analógica",
        "Apenas um bit muda"
      ],
      "correct": 3,
      "why": "A mudança de um bit reduz ambiguidade de transições; não elimina todo ruído."
    },
    {
      "id": "q37",
      "topic": "controle",
      "level": "Cálculo",
      "prompt": "Referência 100°, medição 97°. Para e = r − y, qual erro?",
      "options": [
        "3°",
        "−3°",
        "197°",
        "0°"
      ],
      "correct": 0,
      "why": "e = 100 − 97 = 3°. O sinal informa o sentido do desvio nessa convenção."
    },
    {
      "id": "q38",
      "topic": "controle",
      "level": "Conceito",
      "prompt": "Qual termo do PID acumula o erro?",
      "options": [
        "Driver",
        "Integral",
        "Proporcional",
        "Derivativo"
      ],
      "correct": 1,
      "why": "I acumula erro ao longo do tempo. Windup pode ocorrer quando a ação satura e a integral continua crescendo."
    },
    {
      "id": "q39",
      "topic": "controle",
      "level": "Cálculo",
      "prompt": "Ts = 5 ms. Qual frequência de amostragem?",
      "options": [
        "0,2 Hz",
        "5.000 Hz",
        "200 Hz",
        "5 Hz"
      ],
      "correct": 2,
      "why": "Converta 5 ms para 0,005 s. f_s = 1/Ts = 200 Hz."
    },
    {
      "id": "q40",
      "topic": "controle",
      "level": "Cálculo",
      "prompt": "e = 2, e_anterior = 1, Ts = 0,1; I_anterior = 0; Kp = 3, Ki = 1, Kd = 0,2. Qual u discreto antes de saturação?",
      "options": [
        "6,2",
        "2,2",
        "10",
        "8,2"
      ],
      "correct": 3,
      "why": "I = 0,2; D = (2−1)/0,1 = 10. u = 3×2 + 1×0,2 + 0,2×10 = 8,2."
    },
    {
      "id": "q41",
      "topic": "embarcados",
      "level": "Conceito",
      "prompt": "O requisito principal de tempo real é:",
      "options": [
        "Cumprir prazos de resposta definidos",
        "Ter a maior frequência de CPU",
        "Usar obrigatoriamente Linux",
        "Processar imagens em toda tarefa"
      ],
      "correct": 0,
      "why": "Tempo real trata de prazos e previsibilidade, não apenas velocidade média de processamento."
    },
    {
      "id": "q42",
      "topic": "embarcados",
      "level": "Aplicação",
      "prompt": "Por que separar visão e controle de motor entre computador e microcontrolador?",
      "options": [
        "Para tornar a fonte desnecessária",
        "Para distribuir processamento e preservar prazos do controle",
        "Para eliminar toda comunicação",
        "Para dispensar sensores"
      ],
      "correct": 1,
      "why": "Visão pode demandar processamento variável, enquanto tarefas locais precisam responder em intervalos definidos."
    },
    {
      "id": "q43",
      "topic": "potencia",
      "level": "Cálculo",
      "prompt": "Quatro motores consomem 24 V × 5 A cada um. Qual soma nesses pontos de operação?",
      "options": [
        "20 W",
        "96 W",
        "480 W",
        "120 W"
      ],
      "correct": 2,
      "why": "Cada motor consome 120 W. Quatro somam 480 W, antes de outras cargas e perdas."
    },
    {
      "id": "q44",
      "topic": "potencia",
      "level": "Cálculo",
      "prompt": "Bateria 12 V, 10 Ah, 80% utilizável, carga média 60 W. Autonomia estimada:",
      "options": [
        "2 h",
        "0,16 h",
        "8 h",
        "1,6 h"
      ],
      "correct": 3,
      "why": "E nominal = 120 Wh; utilizável = 96 Wh; t = 96/60 = 1,6 h."
    },
    {
      "id": "q45",
      "topic": "potencia",
      "level": "Aplicação",
      "prompt": "Qual componente adapta sinais lógicos para controlar corrente de um motor?",
      "options": [
        "Driver de potência",
        "Encoder",
        "TCP",
        "Elemento finito"
      ],
      "correct": 0,
      "why": "O driver controla potência. A saída lógica do microcontrolador não deve alimentar diretamente um motor de vários amperes."
    },
    {
      "id": "q46",
      "topic": "potencia",
      "level": "Cálculo",
      "prompt": "PWM ideal entre 0 e 12 V com duty cycle de 25%. Qual tensão média?",
      "options": [
        "9 V",
        "3 V",
        "12 V",
        "0,25 V"
      ],
      "correct": 1,
      "why": "Média ideal = DV = 0,25×12 = 3 V. O sinal instantâneo continua chaveando, e velocidade não é necessariamente 25%."
    },
    {
      "id": "q47",
      "topic": "comunicacao",
      "level": "Aplicação",
      "prompt": "Qual interface ROS é apropriada para navegação com feedback e cancelamento?",
      "options": [
        "Um fio de alimentação",
        "Um ADC",
        "Action",
        "Somente um service curto"
      ],
      "correct": 2,
      "why": "Actions organizam metas demoradas com feedback, resultado e possibilidade de cancelamento."
    },
    {
      "id": "q48",
      "topic": "comunicacao",
      "level": "Conceito",
      "prompt": "Qual afirmação sobre RS-485 é correta?",
      "options": [
        "É uma linguagem de programação",
        "Garante qualquer prazo de tempo real",
        "Dispensa considerar terminação e rede",
        "Define uma camada elétrica; é preciso definir também o protocolo"
      ],
      "correct": 3,
      "why": "RS-485 define sinalização elétrica; estrutura de mensagens e comportamento da aplicação exigem regras adicionais."
    },
    {
      "id": "q49",
      "topic": "cinematica",
      "level": "Cálculo",
      "prompt": "Braço planar L1 = L2 = 1 m, q1 = 0°, q2 relativo = 90°. Qual posição?",
      "options": [
        "(1, 1) m",
        "(2, 0) m",
        "(0, 2) m",
        "(0, 0) m"
      ],
      "correct": 0,
      "why": "x = cos 0 + cos 90 = 1; y = sen 0 + sen 90 = 1."
    },
    {
      "id": "q50",
      "topic": "cinematica",
      "level": "Conceito",
      "prompt": "A cinemática inversa sempre tem uma solução única?",
      "options": [
        "Não pode ter nenhuma solução em qualquer caso",
        "Não; pode ter zero, uma, várias ou famílias de soluções",
        "Sim, para qualquer pose",
        "Sim, se existir um encoder"
      ],
      "correct": 1,
      "why": "Alcance, limites, redundância e geometria definem a existência e quantidade de soluções."
    },
    {
      "id": "q51",
      "topic": "jacobiano",
      "level": "Conceito",
      "prompt": "O Jacobiano relaciona diretamente:",
      "options": [
        "Massa e número de pixels",
        "Apenas posições absolutas sem configuração",
        "Velocidades das juntas e do efetuador",
        "Preço e potência da bateria"
      ],
      "correct": 2,
      "why": "ẋ = J(q)q̇ é uma relação local que depende da configuração q."
    },
    {
      "id": "q52",
      "topic": "jacobiano",
      "level": "Aplicação",
      "prompt": "Para um Jacobiano retangular, como identificar singularidade?",
      "options": [
        "Usar obrigatoriamente det(J)",
        "Contar apenas letras R",
        "Medir Ah da bateria",
        "Investigar perda de posto"
      ],
      "correct": 3,
      "why": "Determinante é um critério para matrizes quadradas. O conceito geral envolve posto e capacidade de movimento."
    },
    {
      "id": "q53",
      "topic": "jacobiano",
      "level": "Conceito",
      "prompt": "Um braço com 7 GL pode ser redundante para qual tarefa?",
      "options": [
        "Pose espacial com seis variáveis independentes",
        "Qualquer tarefa com oito variáveis independentes",
        "Somente uma tarefa sem movimento",
        "Nenhuma, pois redundância é impossível"
      ],
      "correct": 0,
      "why": "Redundância é relativa às exigências da tarefa. Sete coordenadas podem exceder as seis necessárias à pose espacial."
    },
    {
      "id": "q54",
      "topic": "desempenho",
      "level": "Aplicação",
      "prompt": "Alvo 100 mm; resultados 102,0; 102,1; 102,0 mm. Qual leitura é mais adequada?",
      "options": [
        "Resolução infinita",
        "Bom agrupamento, com desvio sistemático do alvo",
        "Má repetibilidade necessariamente",
        "Precisão absoluta perfeita"
      ],
      "correct": 1,
      "why": "As repetições ficam próximas entre si, mas a média está cerca de 2 mm além do alvo."
    },
    {
      "id": "q55",
      "topic": "desempenho",
      "level": "Cálculo",
      "prompt": "r = 0,5 m e pequeno Δθ = 0,1°. Quanto vale rΔθ aproximadamente?",
      "options": [
        "0,05 mm",
        "87,3 mm",
        "0,873 mm",
        "50 mm"
      ],
      "correct": 2,
      "why": "0,1° = 0,001745 rad; 0,5×0,001745 = 0,000873 m = 0,873 mm."
    },
    {
      "id": "q56",
      "topic": "dinamica",
      "level": "Cálculo",
      "prompt": "Rigidez k = 10.000 N/m e força F = 20 N. Qual deformação linear?",
      "options": [
        "200 mm",
        "0,2 m",
        "20 mm",
        "2 mm"
      ],
      "correct": 3,
      "why": "δ = F/k = 20/10.000 = 0,002 m = 2 mm. A relação usa um modelo linear em uma direção; outras posturas podem ter rigidez diferente."
    },
    {
      "id": "q57",
      "topic": "dinamica",
      "level": "Conceito",
      "prompt": "Por que um deslocamento curto pode ter perfil triangular de velocidade?",
      "options": [
        "Não há distância suficiente para atingir e manter a velocidade máxima",
        "O motor não tem corrente",
        "O caminho precisa ter três cantos",
        "Toda junta é esférica"
      ],
      "correct": 0,
      "why": "Aceleração e desaceleração ocupam o movimento sem um patamar de velocidade constante."
    },
    {
      "id": "q58",
      "topic": "programacao",
      "level": "Aplicação",
      "prompt": "Para pintura ao longo de uma curva, qual aspecto precisa ser controlado?",
      "options": [
        "Somente o número de elos",
        "O percurso contínuo e seu perfil de movimento",
        "Só os pontos inicial e final",
        "Apenas o nome do robô"
      ],
      "correct": 1,
      "why": "Pintura precisa do controle do percurso. PTP sozinho não especifica o caminho cartesiano entre extremos."
    },
    {
      "id": "q59",
      "topic": "programacao",
      "level": "Cálculo",
      "prompt": "Duas juntas movem 90° e 45° no mesmo tempo, sem aceleração. Qual relação entre velocidades?",
      "options": [
        "São iguais",
        "A primeira precisa ficar parada",
        "A segunda tem metade da velocidade da primeira",
        "A segunda tem o dobro"
      ],
      "correct": 2,
      "why": "Velocidade = deslocamento/tempo. Com tempo igual, 45/90 = 1/2. Isso não garante trajetória cartesiana reta."
    },
    {
      "id": "q60",
      "topic": "visao",
      "level": "Conceito",
      "prompt": "Qual parâmetro pertence à calibração extrínseca?",
      "options": [
        "Quantidade de Ah da bateria",
        "Somente distorção da lente",
        "Duty cycle da ponte H",
        "Pose da câmera em relação ao robô"
      ],
      "correct": 3,
      "why": "Extrínsecos relacionam referenciais. Distância focal, ponto principal e distorção pertencem ao modelo intrínseco."
    },
    {
      "id": "q61",
      "topic": "visao",
      "level": "Aplicação",
      "prompt": "Um limiar fixo separa bem uma linha sob uma luz e falha sob outra. Qual explicação é razoável?",
      "options": [
        "A iluminação alterou as intensidades e a separação",
        "A câmera necessariamente virou um encoder",
        "O PID elimina toda alteração de imagem",
        "Pixels são sempre medidas exatas em metros"
      ],
      "correct": 0,
      "why": "Limiarização depende da distribuição de intensidades. Mudanças de iluminação podem exigir adaptação ou outro método."
    },
    {
      "id": "q62",
      "topic": "navegacao",
      "level": "Cálculo",
      "prompt": "Roda de raio 0,05 m a 120 rpm, sem deslizamento. Qual velocidade linear?",
      "options": [
        "120 m/s",
        "0,628 m/s",
        "6 m/s",
        "0,1 m/s"
      ],
      "correct": 1,
      "why": "ω = 120×2π/60 = 4π rad/s; v = ωr = 0,2π ≈ 0,628 m/s."
    },
    {
      "id": "q63",
      "topic": "navegacao",
      "level": "Conceito",
      "prompt": "O que o SLAM estima simultaneamente?",
      "options": [
        "Preço e vida útil",
        "Apenas torque de uma garra",
        "Mapa e posição do robô",
        "Somente corrente e tensão"
      ],
      "correct": 2,
      "why": "SLAM é localização e mapeamento simultâneos; as duas estimativas dependem uma da outra."
    },
    {
      "id": "q64",
      "topic": "ia",
      "level": "Conceito",
      "prompt": "Em aprendizado por reforço, a política é:",
      "options": [
        "Sempre uma tabela de tensão de bateria",
        "Um conjunto de cartões perfurados obrigatório",
        "A posição física de uma junta",
        "A regra aprendida de escolha de ações"
      ],
      "correct": 3,
      "why": "A política determina ações a partir de estado ou observação, visando recompensa acumulada."
    },
    {
      "id": "q65",
      "topic": "ia",
      "level": "Aplicação",
      "prompt": "Uma política funciona em simulação e falha no robô. Qual problema é compatível?",
      "options": [
        "Diferenças sim-to-real em dinâmica, ruído ou atrasos",
        "Prova de que toda simulação é inútil",
        "Ausência obrigatória de qualquer algoritmo",
        "Garantia de que a falha é só na câmera"
      ],
      "correct": 0,
      "why": "A simulação aproxima o mundo. Diferenças de atrito, parâmetros e sensores podem reduzir a robustez."
    },
    {
      "id": "q66",
      "topic": "seguranca",
      "level": "Aplicação",
      "prompt": "Um braço colaborativo recebe uma ferramenta cortante. O que é necessário considerar?",
      "options": [
        "Usar as leis de Asimov como única proteção",
        "Reavaliar os riscos da aplicação completa",
        "Presumir que o nome cobot garante segurança",
        "Retirar sensores por ter baixa potência"
      ],
      "correct": 1,
      "why": "Ferramenta, peça, ambiente e movimento modificam riscos. Segurança pertence à aplicação completa."
    },
    {
      "id": "q67",
      "topic": "seguranca",
      "level": "Aplicação",
      "prompt": "Ao perder comunicação, qual comportamento exige definição no projeto?",
      "options": [
        "Ignorar o erro se houver IA",
        "Desligar tudo sem avaliar a carga",
        "O estado seguro e a resposta ao timeout",
        "Continuar sempre à última velocidade"
      ],
      "correct": 2,
      "why": "A resposta deve ser adequada ao risco; parar, manter estabilidade ou reter carga pode exigir ações específicas."
    },
    {
      "id": "q68",
      "topic": "aplicacoes",
      "level": "Cálculo",
      "prompt": "Uma peça por ciclo, ciclo de 12 s e 80% de tempo produtivo. Qual produção estimada?",
      "options": [
        "300 peças/h efetivas",
        "80 peças/h",
        "3.600 peças/h",
        "240 peças/h"
      ],
      "correct": 3,
      "why": "Ideal = 3.600/12 = 300; estimativa com 80% = 240 peças/h, sem incluir outros fatores."
    },
    {
      "id": "q69",
      "topic": "aplicacoes",
      "level": "Aplicação",
      "prompt": "Para um robô agrícola, qual requisito distingue o ambiente de uma bancada controlada?",
      "options": [
        "Variação de terreno, luz e características das plantas",
        "Ausência garantida de ruído",
        "Mesma iluminação em todos os horários",
        "Não precisar perceber o ambiente"
      ],
      "correct": 0,
      "why": "Ambientes agrícolas introduzem variabilidade que precisa orientar percepção e locomoção."
    },
    {
      "id": "q70",
      "topic": "projeto",
      "level": "Conceito",
      "prompt": "Quais cálculos são pedidos na etapa de dimensionamento da aula?",
      "options": [
        "Apenas quantidade de pixels",
        "P = τω; E = Pt; v = ωr",
        "Somente soma dos preços",
        "Apenas número de integrantes"
      ],
      "correct": 1,
      "why": "A atividade solicita ao menos potência, energia e velocidade, com unidades e hipóteses."
    },
    {
      "id": "q71",
      "topic": "projeto",
      "level": "Aplicação",
      "prompt": "Qual requisito é mais verificável para uma proposta de logística?",
      "options": [
        "Resolver todos os problemas industriais",
        "Ter muitos sensores",
        "Transportar até 2 kg a 0,5 m/s em piso plano por 2 h",
        "Ser o robô mais inteligente"
      ],
      "correct": 2,
      "why": "Carga, velocidade, ambiente e autonomia são critérios mensuráveis que orientam o projeto."
    }
  ]
};
