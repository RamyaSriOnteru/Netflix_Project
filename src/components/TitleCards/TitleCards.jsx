import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjcwOTQwYjI2MGZhOWRmZjk3ZWQ3NThiM2QwODQ2NyIsIm5iZiI6MTczMzkwNjU4OC42NzM5OTk4LCJzdWIiOiI2NzU5NTA5YzJiZTE1ODExYjQ0ZjAzMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u0SZOvbgqO0L5gAgdKUYuQ75UbFtpiMZebUM3FQ4sLU",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    // cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title_cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards_list">
        {apiData.map((item, index) => {
          console.log(item.id);

          return (
            <>
              <Link
                to={`/player/${item.id}`}
                className="card"
                ref={cardsRef}
                key={index}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500` + item.backdrop_path}
                  alt=""
                />
                <p>{item.original_title}</p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
