import classes from "./Artists.module.css";

function Artists(props) {
  const artists = props.artists;

  return (
    <div className={classes.container}>
      {artists.map((artist) => (
        <div className={classes.artist} key={artist.id}>
          <div className={classes.photo}>
            {artist.images.length ? (
              <img width={"100%"} src={artist.images[0].url} alt="" />
            ) : (
              <div className={classes.noimg}>No image</div>
            )}
            <div className={classes.art}>
              <div className={classes.artname}>{artist.name}</div>
              <div className={classes.artgenre}>{artist.genres[0]} </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Artists;
