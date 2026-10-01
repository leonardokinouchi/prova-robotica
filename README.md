# Robótica Lab

Portal de estudo em português criado a partir dos quatro PDFs da disciplina e de pesquisa em fontes técnicas oficiais. Inclui assuntos de apoio — história, computação, matemática e eletrônica — além da robótica.

## Abrir e estudar

Abra `index.html` no navegador. Não é necessário instalar bibliotecas ou iniciar servidor. Para servir localmente, com Python instalado:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Acesse `http://127.0.0.1:8080`. A interface usa fontes opcionais do Google Fonts, com fallback local. Conteúdo e funções de estudo funcionam offline; pesquisa externa precisa de internet.

## Conteúdo

- **Trilha** (`guia.html`): sequência de estudo e sessões sugeridas.
- **Documentação** (`documentacao.html`): cerca de 10.000 palavras, 30 capítulos, referências e modo de impressão. Use “Imprimir / salvar como PDF” no navegador para uma cópia.
- **Biblioteca** (`conteudos.html`): busca e filtro; cada capítulo tem uma página independente, recuperação ativa e notas.
- **Atividades** (`atividades.html`): 12 atividades com resolução e projeto autônomo preenchível, baseado nas páginas 71–82 da aula 03.
- **Questões** (`questoes.html`): 71 questões de conceito, cálculo e aplicação, com gabarito explicado e filtro por tema.
- **Simulado** (`simulado.html`): 20/30/40 questões, tempo configurável, sorteio entre assuntos, retomada e diagnóstico por tema.
- **Laboratório** (`laboratorio.html`): braço 2R, inversa, redutores, encoders, bateria, PWM e garra por atrito em seis experimentos.
- **Revisão** (`revisao.html`): 30 cartões, fórmulas e histórico.
- **Fontes** (`fontes.html`): mapa dos PDFs, fontes externas e diferenças de convenção.

Notas, respostas, progresso e histórico são salvos no `localStorage` do navegador. Não há envio a servidor. O comportamento de armazenamento em `file://` depende do navegador; para armazenamento mais previsível, use o servidor local. Dados não são sincronizados entre dispositivos. O botão de download nas atividades exporta resoluções e projeto para texto.

O relógio do simulado usa um horário de término absoluto: sair da página não pausa a prova. Ao retornar após o prazo, a tentativa é finalizada. Questões em branco contam como incorretas. Os simulados são autorais e não antecipam o conteúdo ou os pesos da prova real, que não foram informados.

## Fontes e convenções

Os PDFs originais são preservados na raiz, com atribuição ao Prof. Carlos Formigoni / UNAERP. A apostila identifica base em Valdemir Carrara; a aula introdutória identifica material do Prof. Reinaldo Bianchi / FEI. Direitos dos materiais permanecem com os autores e titulares.

A numeração nos links conta desde a capa. As explicações discutem diferenças sobre máquina diferencial/analítica, datas históricas, junta planar, resolução, complacência, volumes e Jacobiano. Diagramas SVG e explicações do portal são originais. Veja `fontes.html` para links técnicos e associação por capítulo.

## Manutenção e validação

O site final é HTML/CSS/JS estático. Conteúdo editorial em `tools/curriculum.py` e `tools/curriculum_extra.py`; banco em `tools/questions.py`; páginas geradas por `tools/build.py`. Alterações editoriais devem ser feitas nesses arquivos e regeneradas, para manter documentação e capítulos consistentes.

Requer Python 3.12+ para o gerador e Node.js 18+ para os testes:

```powershell
python tools/build.py
python tools/check.py
node --test tests/engine.test.cjs
```

`tools/check.py` verifica páginas, referências e cobertura. Os testes verificam resultados físicos, cinemática inversa, correção e distribuição dos simulados. `tools/extract.py` é uma ferramenta opcional de leitura local dos PDFs, usando PyMuPDF, RapidOCR e NumPy; OCR não é necessário para gerar ou usar o portal. Arquivos temporários não entram no Git.

O script `tools/browser-check.cjs` faz verificações de navegador com Playwright quando disponível, incluindo respostas, retomada, expiração e responsividade. Capturas ficam em `tmp/qa` e não entram no repositório. Veja `VALIDACAO.md` para o resultado da verificação desta versão.
