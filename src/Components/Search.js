import React, { useState } from "react";
import VideoCard from "./VideoCard";
import "./css/Search.css";
import Spinner from "./Spinner";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setSearch("")
    try {
      const response = await fetch(
        `https://simple-youtube-search.p.rapidapi.com/search?query=${search}&type=video&safesearch=false`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "simple-youtube-search.p.rapidapi.com",
            "x-rapidapi-key":
              "3a716c54bemsh954b201a6bdb153p18a7a1jsne551f8fcc568",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        setData(result.results);
        setTotalResults(data.totalResults);
      }
      console.log(result)
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <>
      <div className="search-container">
        <input className="input-text1"
          placeholder="Search Here ..."
          type="text"
          value={search}
          onChange={(text) => setSearch(text.target.value)}
          name="search"
          onKeyUp={handelKeyPress}
        />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {data.map((information) => {
            return (
              <div className="col-md-4" key={information.id}>
                <VideoCard
                  thumbnails={information.thumbnail.url}
                  title={information.title}
                  url={information.url}
                  icon={information.channel.icon}
                  channelName={information.channel.name}
                  views={information.views}
                  uploaded={information.uploadedAt}
                  duration={information.duration_formatted}
                  id={information.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
