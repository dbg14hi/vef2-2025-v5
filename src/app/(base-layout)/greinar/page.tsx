import { executeQuery } from "@/lib/datocms/executeQuery";
import { graphql } from "@/lib/datocms/graphql";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Greinar {
  id: string;
  slug: string;
  title: string;
  text: string;
  date: string;
}

const query = graphql(`
  query AllGreinars {
    allGreinars {
      id
      slug
      title
      text
      date
    }
  }
`);

export default async function GreinarPage() {
  // Explicitly casting the result from executeQuery
  const { allGreinars }: { allGreinars: Greinar[] } = await executeQuery(query) as { allGreinars: Greinar[] };

  if (!allGreinars || allGreinars.length === 0) {
    return notFound();
  }

  return (
    <div className="container">
      <h3>Greinar</h3>
      <ul className="greinar-list">
        {allGreinars.map((greinar) => (
          <li key={greinar.id}>
            <Link href={`/greinar/${greinar.slug}`}>
              <h4>{greinar.title}</h4>
            </Link>
            <p>{greinar.text}</p>
            <small>{new Date(greinar.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}