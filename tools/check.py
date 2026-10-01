"""Verifica referências locais, âncoras e cobertura editorial sem dependências."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import argparse, re, sys
from curriculum import MODULES
import curriculum_extra
from questions import QUESTIONS
args=argparse.ArgumentParser(description=__doc__)
args.add_argument('--root',type=Path,help='Diretório de saída a verificar (por exemplo, dist)')
options=args.parse_args()
ROOT=(options.root or Path(__file__).resolve().parent.parent).resolve()
class Inspect(HTMLParser):
    def __init__(self): super().__init__(); self.links=[]; self.ids=[]; self.lang=None
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html': self.lang=a.get('lang')
        if 'id' in a: self.ids.append(a['id'])
        for k in ('href','src'):
            if k in a:self.links.append(a[k])
errors=[];pages={}
for path in ROOT.rglob('*.html'):
    if any(part in {'tmp','node_modules','dist'} for part in path.relative_to(ROOT).parts):continue
    parser=Inspect();parser.feed(path.read_text(encoding='utf-8'));pages[path]=parser
    if parser.lang!='pt-BR':errors.append(f'{path.name}: idioma incorreto')
    if len(parser.ids)!=len(set(parser.ids)):errors.append(f'{path.name}: ids duplicados')
for path,p in pages.items():
    for link in p.links:
        parsed=urlsplit(link)
        if parsed.scheme or parsed.netloc:continue
        target=(path.parent/unquote(parsed.path)).resolve() if parsed.path else path
        if not target.exists():errors.append(f'{path.name}: referência inexistente {link}')
        if parsed.fragment and target in pages and parsed.fragment not in pages[target].ids:errors.append(f'{path.name}: âncora inexistente {link}')
ids={m['id'] for m in MODULES}
assert len(ids)==len(MODULES)
for q in QUESTIONS:
    if q['topic'] not in ids:errors.append(f'{q["id"]}: assunto inexistente')
    if not 0<=q['correct']<len(q['options']):errors.append(f'{q["id"]}: gabarito inválido')
    if len(q['why'])<40:errors.append(f'{q["id"]}: explicação insuficiente')
for m in MODULES:
    if not any(q['topic']==m['id'] for q in QUESTIONS):errors.append(f'{m["id"]}: sem questão')
if errors:
    print('\n'.join(errors));sys.exit(1)
print(f'OK: {len(pages)} páginas HTML; links e âncoras locais válidos; {len(MODULES)} capítulos cobertos por {len(QUESTIONS)} questões.')
