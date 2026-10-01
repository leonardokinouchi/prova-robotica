// Uso: NODE_PATH=/caminho/node_modules node tools/browser-check.cjs
// Pode usar pacote Playwright instalado no ambiente; não é dependência do site.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const base=process.env.ROBOTICA_TEST_URL||'http://127.0.0.1:8080';
(async()=>{
const browser=await chromium.launch({headless:true,...(process.env.ROBOTICA_BROWSER_PATH?{executablePath:process.env.ROBOTICA_BROWSER_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('tmp/qa',{recursive:true});
for(const url of ['index.html','guia.html','conteudos.html','documentacao.html','atividades.html','questoes.html','simulado.html','laboratorio.html','revisao.html','fontes.html']){
 await page.goto(`${base}/${url}`);await page.waitForLoadState('domcontentloaded');
 assert.equal(await page.locator('h1').first().count(),1);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),`overflow ${url}`);
}
await page.goto(`${base}/index.html`);await page.screenshot({path:'tmp/qa/inicio-desktop.png',fullPage:true});
await page.goto(`${base}/conteudos.html`);await page.locator('#module-search').fill('encoder');assert.equal(await page.locator('[data-module]:visible').count(),1);
await page.goto(`${base}/conteudos/encoders.html`);await page.locator('[data-complete]').click();await page.locator('[data-note]').fill('Minha dúvida de teste');await page.reload();assert.match(await page.locator('[data-complete]').innerText(),/estudado/);assert.equal(await page.locator('[data-note]').inputValue(),'Minha dúvida de teste');
await page.goto(`${base}/questoes.html`);await page.locator('#question-topic').selectOption('potencia');assert.equal(await page.locator('.question').count(),4);const correct=await page.evaluate(()=>DATA.questions.find(q=>q.id===document.querySelector('.question').id).correct);await page.locator(`.question input[value="${correct}"]`).first().check();await page.locator('[data-correct]').first().click();assert.match(await page.locator('.feedback').first().innerText(),/Resposta correta/);await page.reload();assert.match(await page.locator('.feedback').first().innerText(),/Resposta correta/);
await page.goto(`${base}/simulado.html`);assert.equal(await page.locator('#exam-bar').isVisible(),false);await page.locator('#exam-start').click();assert.equal(await page.locator('.question').count(),30);assert.equal(await page.locator('.feedback').count(),0);
const ids=await page.evaluate(()=>JSON.parse(localStorage.getItem('robotica:exam')).ids);
for(let i=0;i<3;i++){const q=await page.evaluate(id=>DATA.questions.find(q=>q.id===id),ids[i]);await page.locator(`#${q.id} input[value="${q.correct}"]`).check();}
await page.reload();assert.equal(await page.locator('input:checked').count(),3);assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('robotica:exam')).ids),ids);await page.locator('#exam-submit').click();assert.match(await page.locator('#exam-result').innerText(),/3 de 30/);assert.equal(await page.locator('.feedback').count(),30);assert.equal(await page.locator('.question input:disabled').count(),120);
await page.locator('#exam-new').click();await page.locator('#exam-count').selectOption('20');await page.locator('#exam-start').click();await page.evaluate(()=>{const s=JSON.parse(localStorage.getItem('robotica:exam'));s.end=Date.now()-1000;localStorage.setItem('robotica:exam',JSON.stringify(s));});await page.reload();assert.match(await page.locator('#exam-result').innerText(),/Tempo esgotado/i);
await page.goto(`${base}/laboratorio.html`);assert.match(await page.locator('#arm-output').innerText(),/1,000 m/);await page.locator('#solve-ik').click();assert.match(await page.locator('#ik-output').innerText(),/90,0/);await page.locator('#target-x').fill('3');await page.locator('#target-y').fill('0');await page.locator('#solve-ik').click();assert.match(await page.locator('#ik-output').innerText(),/fora do alcance/);await page.locator('#arm-controls input[name="q2"]').fill('0');assert.match(await page.locator('#arm-output').innerText(),/singular/);await page.locator('[data-calculator="battery"] input[name="watts"]').fill('0');assert.match(await page.locator('[data-calculator="battery"] [data-output]').innerText(),/Revise/);await page.locator('[data-calculator="battery"] input[name="watts"]').fill('60');assert.match(await page.locator('[data-calculator="battery"] [data-output]').innerText(),/1,60 h/);await page.screenshot({path:'tmp/qa/laboratorio-desktop.png',fullPage:true});
await page.goto(`${base}/revisao.html`);assert.equal(await page.locator('#flash-answer').isVisible(),false);await page.locator('#flash-reveal').click();assert.equal(await page.locator('#flash-answer').isVisible(),true);await page.locator('#flash-next').click();assert.equal(await page.locator('#flash-answer').isVisible(),false);
await page.goto(`${base}/atividades.html`);await page.locator('[data-note="projeto-0"]').fill('Projeto de teste');await page.reload();assert.equal(await page.locator('[data-note="projeto-0"]').inputValue(),'Projeto de teste');
for(const width of [390,768]){await page.setViewportSize({width,height:844});for(const url of ['index.html','conteudos.html','conteudos/juntas.html','simulado.html','laboratorio.html','questoes.html','documentacao.html']){await page.goto(`${base}/${url}`);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),`overflow ${url} em ${width}`);}await page.goto(`${base}/index.html`);await page.screenshot({path:`tmp/qa/inicio-${width}.png`,fullPage:true});}
await page.setViewportSize({width:390,height:844});await page.locator('.nav-toggle').click();assert.equal(await page.locator('.nav').isVisible(),true);
await page.setViewportSize({width:1440,height:1000});await page.goto(`${base}/documentacao.html`);await page.emulateMedia({media:'print'});assert.equal(await page.locator('.topbar').isVisible(),false);assert.equal(await page.locator('.doc-chapter').count(),30);
// A versão local deve abrir também sem servidor.
await page.emulateMedia({media:'screen'});await page.goto('file:///'+path.resolve('index.html').replaceAll('\\','/'));assert.match(await page.title(),/Robótica Lab/);await page.goto('file:///'+path.resolve('laboratorio.html').replaceAll('\\','/'));assert.match(await page.locator('#arm-output').innerText(),/1,000/);
assert.deepEqual(errors,[]);await browser.close();console.log('OK: páginas, persistência, banco, correção, retomada, expiração, laboratório, revisão, modo de impressão e layouts 390/768/1440. Sem erros de JavaScript.');
})().catch(e=>{console.error(e);process.exit(1)});
