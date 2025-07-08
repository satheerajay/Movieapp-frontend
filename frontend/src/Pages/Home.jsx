import MovieCard from "../Components/MovieCard";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
function Home() {
  const movies = [
    {
      id: 1,
      url: movie1,
      title: "Coco",
      rating: "6.6",
      releaseDate: "21/09/2022",
    },
    {
      id: 2,
      url: movie2,
      title: "Poos in Boots",
      rating: "8.9",
      releaseDate: "12/05/2021",
    },
    {
      id: 3,
      url: movie3,
      title: "Luca",
      rating: "7.5",
      releaseDate: "15/03/2020",
    },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard Movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
