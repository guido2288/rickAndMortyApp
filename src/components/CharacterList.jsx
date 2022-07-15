import { useEffect, useState } from "react";
import { Character } from "./Character";
import { FilterCharacter } from "./FilterCharacter";
import { NavPage } from "./NavPage";
import { SearchBar } from "./SearchBar";


export const CharacterList = () => {


  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [pageNumber, setPageNumber] = useState(42);

  const [searchResult, setSearchResult] = useState('');

  const [filter, setFilter] = useState('');

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchResult}&status=${filter}`)

      const data = await response.json();

      // console.log(data.info)
      setPageNumber(data.info.pages)
      setLoading(false);
      setCharacters(data.results);

    };

    fetchData();

  }, [page, searchResult, filter]);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  const onSearch = (e) => {
    setSearchResult(e)
  };

  const onFilter = (e) => {
    setFilter(e)
  };

  return (
    <div className="container">

      <h2 className="text-center display-9 py-1">Character List</h2>

      <SearchBar
        onSearch={onSearch}
      />

      <h3 className="mt-3">Filter</h3>

      <FilterCharacter onFilter={onFilter} />

      <div className="row">
        {
          characters.map((character) => {
            return (
              <div className="col-md-3 col-sm-6" key={character.id}>
                <Character
                  character={character}
                />
              </div>
            )
          })}
      </div>

      <NavPage
        page={page}
        setPage={setPage}
        pageNumber={pageNumber}
      />

    </div>
  )
}
