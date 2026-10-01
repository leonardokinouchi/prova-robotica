# Verificação da versão

Verificado em 1º de outubro de 2026.

Preparação para Vercel: `npm run build` gera `dist` com 40 páginas, assets e quatro PDFs, sem dependências npm ou Python no build de deploy. Links e âncoras da saída foram validados com `tools/check.py --root dist`. A verificação automatizada no Chrome também passou servindo a pasta `dist`, sem erros de JavaScript. Os oito testes de lógica passaram. A publicação na Vercel depende da importação do repositório na conta do usuário.

- Leitura dos quatro PDFs: 229 páginas reconhecidas por OCR, com inspeção visual de panoramas e páginas de fórmulas e atividades. A extração foi usada como apoio; equações e divergências relevantes foram conferidas visualmente.
- 40 páginas HTML: documentação completa, 30 capítulos e páginas de estudo/prática. Referências locais e âncoras verificadas por `tools/check.py`.
- 30 capítulos cobertos por 71 questões; explicações, temas e índices de respostas verificados.
- Oito testes de lógica passaram: direta/inversa, alcance, singularidade, redução e potência, encoder, bateria/PWM/garra, seleção equilibrada e correção com respostas em branco.
- Verificação automatizada no Chrome com Playwright: navegação, busca, filtros, resposta comentada, persistência de notas e progresso, simulado sem gabarito durante a tentativa, retomada das escolhas, correção, prazo vencido, revisão por cartões e campos inválidos do laboratório.
- Layouts de 390, 768 e 1440 pixels verificados, com correções para filtros, tabelas e barra do simulado. Capturas de início, capítulo e laboratório inspecionadas.
- Modo de impressão verificado para ocultar navegação e manter todos os 30 capítulos. Não foi produzido um PDF separado: o usuário pode salvar a documentação com a função de impressão do navegador.
- Abertura direta por `file://` confirmada para o portal e laboratório. Fontes de sistema permitem leitura sem Google Fonts; links externos precisam de rede.

Limites: exercícios e simulados são autorais; o formato e os pesos da prova real não foram fornecidos. Calculadoras usam modelos didáticos explícitos. Dados locais do navegador não são sincronizados e podem ser apagados pelo próprio navegador. Navegadores e políticas diferentes podem restringir armazenamento em `file://`; o servidor local é a opção mais previsível.
