import { getCollection } from "astro:content";

const postSlug = (id: string) => id.replace(/\.md$/, "");

export async function GET() {
  const posts = [...(await getCollection("blog"))]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => {
      const slug = postSlug(post.id);

      return {
        title: post.data.title,
        date: post.data.date.toISOString().slice(0, 10),
        slug,
        url: `${import.meta.env.BASE_URL}blog/${slug}`,
      };
    });

  return new Response(JSON.stringify({ posts }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
