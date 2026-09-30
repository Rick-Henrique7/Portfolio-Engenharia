# Portfólio v3 · Henrique Santos

Site pessoal de engenharia de software. Next.js (App Router, exportação estática) + TypeScript + Tailwind CSS v4.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publicar

```bash
npm run build      # gera a pasta out/ (HTML estático)
npm run preview    # serve a pasta out/ para conferir
```

Na Vercel: importar o repositório; nenhuma configuração extra é necessária.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, feitos (STAR), projetos, links | `src/content/site.ts` |
| Cores, fontes (tokens) | `src/app/globals.css` (`@theme`) |
| Título e descrição para buscadores | `src/app/layout.tsx` |
| Seções | `src/components/*.tsx` |
| CV em PDF | `public/cv-henrique-santos.pdf` |

## Próximas etapas

- [ ] Preencher os resultados reais dos feitos e trocar o lorem ipsum
- [ ] Foto profissional e GIFs dos projetos
- [ ] Animações (Lenis, GSAP, Motion) mantendo Lighthouse ≥ 95
- [ ] Páginas de estudo de caso (Agro-IoT, ArchExplorer)
- [ ] Versão em inglês
"# Portfolio-Engenharia" 
