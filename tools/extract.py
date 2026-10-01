from pathlib import Path
import sys
import pymupdf, numpy as np
from rapidocr import RapidOCR

out = Path('tmp/pdfs'); out.mkdir(parents=True, exist_ok=True)
engine = RapidOCR(params={'EngineConfig.onnxruntime.intra_op_num_threads': 2, 'EngineConfig.onnxruntime.inter_op_num_threads': 1, 'Global.use_cls': False})
paths = [Path(p) for p in sys.argv[1:]] if len(sys.argv)>1 else list(Path('.').glob('*.pdf'))
for path in paths:
    doc = pymupdf.open(path)
    dest = out / (path.stem + '-ocr.txt')
    previous = dest.read_text(encoding='utf-8') if dest.exists() else ''
    start = previous.count('--- PAGINA ')
    with dest.open('a', encoding='utf-8') as f:
        for i, page in enumerate(doc):
            if i < start: continue
            pix = page.get_pixmap(matrix=pymupdf.Matrix(1.5,1.5), alpha=False)
            result = engine(np.frombuffer(pix.samples,dtype=np.uint8).reshape(pix.height,pix.width,3))
            content = '\n'.join(result.txts or [])
            f.write(f'\n--- PAGINA {i+1} ---\n{content}\n'); f.flush()
            if i % 10 == 0: print(path.name,i+1,'/',len(doc),flush=True)
            if i in [1, 9, 18, 29]: pix.save(str(out/(path.stem+f'-p{i+1}.png')))
