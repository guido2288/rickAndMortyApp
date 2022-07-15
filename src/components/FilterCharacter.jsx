

export const FilterCharacter = ({ onFilter }) => {

  const onFilterLive = () => {
    onFilter('alive')
  };

  const onFilterDead = () => {
    onFilter('dead')
  };

  const onFilterUnknown = () => {
    onFilter('unknown ')
  };

  return (
    <div className="mt-3 mb-3">
      <div className="form-check ">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={onFilterLive} />
        <label className="form-check-label" htmlFor="flexRadioDefault1" >
          Live
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={onFilterDead} />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Dead
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={onFilterUnknown} />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Unknown
        </label>
      </div>
    </div>
  )
}
