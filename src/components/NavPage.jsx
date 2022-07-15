export const NavPage = ({ page, setPage, pageNumber }) => {

  const pages = [];

  for (let i = 1; i <= pageNumber; i++) {

    pages.push(i)

  };

  const onNextPage = () => {
    setPage(page + 1)
  };

  const onPreviousPage = () => {
    if (page == 1) return setPage(1);
    setPage(page - 1)
  };


  return (
    <div className="d-flex justify-content-between align-items-center">

      <nav >
        <ul className="pagination d-flex flex-wrap ">
          <li className="page-item">
            <button className="page-link" tabIndex="-1" aria-disabled="true" onClick={onPreviousPage}>Previous</button>
          </li>
          {pages.map(number => (
            <li key={number} className="page-item mb-2">
              <button className="page-link" onClick={() => setPage(number)}>{number}</button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={onNextPage}>Next</button>
          </li>
        </ul>
      </nav>

    </div >
  )
}
