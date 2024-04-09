function MovieItem(props) {
    const { movie } = props;
    const { primaryImage , titleText , releaseDate , ratingsSummary ,plot} = movie;
    return ( <>
      <div className="card p-2 shadow-lg">
        <img src={ primaryImage.imageUrl } alt="" />
        <h3 className="text font-bold">{ titleText.text }</h3>
        <h4>Released: {releaseDate.day}/{releaseDate.month}/{releaseDate.year}</h4>
        <h4>Rating:  { ratingsSummary.aggregateRating }</h4>
        <p>{plot.plotText.plainText}</p>
      </div>
    </> );
}

export default MovieItem;