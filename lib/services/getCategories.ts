export default async function getCategories() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=e",
    options
  );
  const data = await res.json();
  return data;
}
