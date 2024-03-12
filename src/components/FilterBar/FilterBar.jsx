import './FilterBar.css'

const FilteredBar = ({filter, onClear, onRemove}) => {
  return (
    <div className='filter-bar filter__shadow bg-light d-flex justify-content-lg-between py-lg-2 border rounded-2'>
          <ul className="item__spacing container-fluid d-flex p-0 flex-wrap row-gap-3 column-gap-3 ms-3 gap-lg-4 mx-lg-5">
          {filter.map((filteredItem) => (
            <div className='d-flex align-items-center' key={filteredItem}>
              <span className='filtered-skill rounded-start-3'>{filteredItem}</span><span className='remove-btn rounded-end-3' onClick={onRemove.bind(this, filteredItem)}><img src="./src/assets/images/icon-remove.svg" alt="" /></span>
            </div>
          ))}
          </ul>
        <button className='clear-btn mx-lg-5' onClick={onClear}>Clear</button>
    </div>
  )
}

export default FilteredBar