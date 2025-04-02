// app/basic/page.tsx
import { executeQuery } from "@/lib/datocms/executeQuery";
import { graphql } from "@/lib/datocms/graphql";
import Image from "next/image"; // Import Next.js Image component

// Define the interface for the Forsida data
interface Forsida {
  title: string;
  text: string;
  cover: {
    id: string;
    url: string;
  };
}

// Define the query result shape
interface QueryResult {
  allForsidas: Forsida[];
}

// Define the GraphQL query
const forsidaQuery = graphql(`
  query AllForsidas {
    allForsidas {
      title
      text
      cover {
        id
        url
      }
    }
  }
`) as import("gql.tada").TadaDocumentNode<QueryResult, Record<string, never>>;

export default async function HomePage() {
  // Fetch the data
  const { allForsidas } = await executeQuery<QueryResult, Record<string, never>>(
    forsidaQuery,
    {}
  );

  // Handle case where no data is found
  if (!allForsidas || allForsidas.length === 0) {
    return (
      <div className="container">
        <h1>Forsíða</h1>
        <p>Engin gögn fundust.</p>
      </div>
    );
  }

  // Take the first Forsida item
  const forsida = allForsidas[0];

  return (
    <div className="container">
      <h1>{forsida.title}</h1>
      <section className="photo-section">
        <p>{forsida.text}</p>
        <Image
          src={forsida.cover.url}
          alt="Forsíða mynd"
          width={1000} 
          height={800} 
          className="homepage-image"
          priority // Optional: Prioritize LCP for the homepage image
        />
      </section>
    </div>
  );
}