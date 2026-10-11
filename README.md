# estante

Site pessoal (posts e livros lidos) em Astro, servido em https://estante.arthur-duarte-portfolio.com.br.

## Escrever

Pelo painel em `/admin/` (Sveltia CMS): "Sign in with Token" com um fine-grained token do GitHub
(só este repo, permissão Contents: read and write). Cada post salvo vira um commit na `main`,
e o workflow `deploy` publica sozinho em ~1 min.

Também dá pra escrever direto em `src/content/posts/` e `src/content/livros/` (formato em `src/content.config.ts`).
Livro sem texto no corpo só aparece na estante; com texto, ganha página de resenha.

## Desenvolvimento

```bash
npm i
npm run dev
```

## Deploy

Automático pelo GitHub Actions (`.github/workflows/deploy.yml`). Secrets do repo:

- `DEPLOY_SSH_KEY`: chave privada que tem acesso à VM
- `DEPLOY_HOST`: `usuario@ip`
- `DEPLOY_KNOWN_HOSTS`: saída de `ssh-keyscan <ip>`

nginx: `deploy/nginx.conf`.
