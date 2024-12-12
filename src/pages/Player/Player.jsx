import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjcwOTQwYjI2MGZhOWRmZjk3ZWQ3NThiM2QwODQ2NyIsIm5iZiI6MTczMzkwNjU4OC42NzM5OTk4LCJzdWIiOiI2NzU5NTA5YzJiZTE1ODExYjQ0ZjAzMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u0SZOvbgqO0L5gAgdKUYuQ75UbFtpiMZebUM3FQ4sLU",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to="/">
        <img src={back_arrow_icon} alt="" />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
