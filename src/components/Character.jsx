

export const Character = ({ character }) => {

  const dead = "card-subtitle text-danger fs-12";

  const live = "card-subtitle text-success fs-12";

  const unknown = "card-subtitle text-warning fs-12"

  const checkStatus = (status) => {

    switch (status) {
      case "Alive":
        return live;
        break;
      case "Dead":
        return dead;
      case "unknown":
        return unknown;
        break;
    }
  }


  return (
    <div className="card m-2">
      <img className="card-img-top" src={character.image} alt={character.name} />
      <div className="card-body ">

        <h3 className="card-title text-dark text-center text-primary fs-3">{character.name}</h3>
        <div className="d-flex justify-content-center gap-2">

          <p className="card-subtitle text-muted fs-12">{character.species}  </p>
          <p className={checkStatus(character.status)}>{character.status}</p>

        </div>
      </div>
    </div>
  )
}
