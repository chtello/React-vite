function Card({ peli }) {
    return (
        <div className="card">
            <h2>{peli.Title}</h2>
            <p>{peli.Year}</p>
            <img src={peli.Poster} alt={peli.Title} />
        </div>
    );
}
export default Card;
