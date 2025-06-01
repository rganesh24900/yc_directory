import SearchForm from "@/Components/SearchForm";

interface HomeProps{
  searchParams:Promise<{query?:string}>
}

export default async function Home({searchParams}:HomeProps) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch Your Startup,<br/> Connect with Entrpreneurs</h1>
    <p className="sub-heading !max-w-3xl">
      Submit ideas ,vote on pitches and get noticed in virtual competitions
    </p>
    <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semi-bold">
        {query? `Search Results for ${query}`:"All Startups"}
      </p>
      <ul className="mt-7 card-grid"></ul>
    </section>
    </>
  );
}
