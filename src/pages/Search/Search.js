import classes from "./Search.module.css";
import { useState } from "react";
import axios from "axios";
import Artists from "../Artists/Artists";

function Search(props) {
  const [searchKey, setSearchKey] = useState("");
  const artists = props.artists;
  const setArtists = props.setArtists;
  let token = props.token;

  const searchArtists = async (event) => {
    event.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data.artists.items);
    setArtists(data.artists.items);
  };

  return (
    <div className={classes.app}>
      <div className={classes.search}>
        <div className={classes.searchLayer}>
          {token ? (
            <form onSubmit={searchArtists}>
              <input
                type="text"
                placeholder="Search artist..."
                onChange={(event) => setSearchKey(event.target.value)}
              />
              <button className={classes.searchBtn} type={"submit"}>
                Search
              </button>
            </form>
          ) : (
            <> </>
          )}
        </div>
        <Artists artists={artists} />
      </div>
    </div>
  );
}

export default Search;
