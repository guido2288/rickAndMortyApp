
import { useForm } from "../hooks/useForm";


export const SearchBar = ({ onSearch }) => {



  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    onSearch(searchText);
    onResetForm()
  }

  const onReload = () => {
    return location.reload();
  }

  return (
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        name="searchText"
        autoComplete="off"
        value={searchText}
        onChange={onInputChange}
      />
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary mt-2">Search</button>

        <button className="btn btn-outline-danger mt-2 mr-2" onClick={onReload}>Reset</button>
      </div>
    </form>
  )
}
