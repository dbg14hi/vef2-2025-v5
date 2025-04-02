import { notFound } from "next/navigation";
import Link from "next/link";
import { executeQuery } from "@/lib/datocms/executeQuery";
import { graphql } from "@/lib/datocms/graphql";

const query = graphql(`
  query GreinarBySlug($slug: String!) {
    greinar(filter: { slug: { eq: $slug } }) {
      id
      title
      text
      date
      slug
      hofundir {
        nafn
      }
    }
  }
`);

interface Hofundur {
  nafn: string;
}

interface Greinar {
  id: string;
  title: string;
  text: string;
  date: string;
  slug: string;
  hofundir: Hofundur[]; // Make sure it's an array
}

interface QueryResult {
  greinar: Greinar | null;
}

export default async function GreinarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  console.log("Slug received:", slug);

  if (!slug || typeof slug !== "string") {
    console.error("Slug is missing or invalid:", slug);
    notFound();
  }

  const result = await executeQuery(query, { variables: { slug } });
  const greinar = (result as QueryResult).greinar;

  if (!greinar) {
    return notFound();
  }

  return (
    <div className="container">
      <main>
        <article className="greinar-article">
          <h1>{greinar.title}</h1>
          {greinar.hofundir.length > 0 && (
            <h2>
              Höfundur:{" "}
              {greinar.hofundir.map((hofundur) => hofundur.nafn).join(", ")}
            </h2>
          )}
          <p>{new Date(greinar.date).toLocaleDateString()}</p>
          <p>{greinar.text}</p>
        </article>
        <div>
          <Link href="/greinar" className="button">
            ← Til baka
          </Link>
        </div>
      </main>
    </div>
  );
} 
