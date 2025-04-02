<!--datocms-autoinclude-header start-->
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---
<!--datocms-autoinclude-header end-->


### Vefforritun 2, 2025, verkefni 5: Next.js og CMS kerfi

Forsíðan, /greinar notar graphql
Contact, er með enga virkni

### Hýsing



#### Set up environment variables

- `DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN`: CDA Only (Published)
- `DATOCMS_DRAFT_CONTENT_CDA_TOKEN`: CDA Only (Draft)
- `DATOCMS_CMA_TOKEN`: CMA Only (Admin)

Then set `SECRET_API_TOKEN` as a secure string

#### Run your project locally

```bash
npm install
npm run dev
```

Your website should be up and running on [http://localhost:3000](http://localhost:3000)!


## Updating the GraphQL schema

```
npm run generate-schema
```

