export default async function getPopularActors() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/person/day?language=en-US",
    options
  );
  const data = await res.json();
  return data;
}
