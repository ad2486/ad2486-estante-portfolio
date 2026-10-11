import { getCollection, type CollectionEntry } from "astro:content";

export const portfolioUrl = "https://arthur-duarte-portfolio.com.br/pt/";

export const tagLabel = { diario: "Diário", tecnico: "Técnico" } as const;

export const formatDate = (d: Date) =>
  d.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export const hasReview = (b: CollectionEntry<"livros">) => Boolean(b.body?.trim());

export async function getPosts() {
  const all = await getCollection("posts", (p) => !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLivros() {
  const all = await getCollection("livros");
  return all.sort((a, b) => b.data.finished.valueOf() - a.data.finished.valueOf());
}
