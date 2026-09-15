# Eurotrip 2026 · v2 · cinema escuro

Segunda versão do caderno de bordo. Mesma estrutura e conteúdo da v1 (Netlify), linguagem visual nova: sala escura, letterbox 2.39:1, timecode, claquete, ordem do dia.

Publicado em **https://mendesamd-png.github.io/eurotrip-2026-v2/** via GitHub Pages (workflow em `.github/workflows/deploy.yml`, roda a cada push na `main`).

```bash
npm install
npm run dev      # http://localhost:4321/eurotrip-2026-v2/
npm run build
```

- `src/data/trip.ts` · conteúdo (capítulos, dias, lugares, rota)
- `src/data/url.ts` · prefixo de base para o GitHub Pages e cores de acento por capítulo
- `private/` · não versionado. `BORDO_PASSWORD='…' npm run bordo:encrypt` gera `public/bordo.enc`
