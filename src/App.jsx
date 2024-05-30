import './App.css'
import './utils/variables.css';
import { useEffect, useState } from 'react';
import listings from './data.json'
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import JobOffer from './components/JobOffer/JobOffer';


function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    document.body.classList.add('basic-styling')
  }, [])

  useEffect(() => {
    setData(listings)
  }, [])

  const filterHandler = (item) => {
    if (category.includes(item)) {
      return;
    }
    setCategory((prev) => [...prev, item])
  }

  const removeItem = (item) => {
    setCategory((prev) => prev.filter((active) => active !== item))
  }

  const clearFilter = () => {
    setCategory([]);
  }

  const filteredData = data.filter((data) => {
    const skill = [data.role, data.level, ...data.languages, ...data.tools];
    return category.some((value) => skill.includes(value));
  });
  const isFiltered = category.length === 0 ? data : filteredData

  return (
    <>
      <Header />
      {category.length !== 0 && <FilterBar filter={category} onRemove={removeItem} onClear={clearFilter} />}
      <section className={`wrapper${category.length !== 0 ? ' filter-active' : ''}`}>
        {isFiltered.map((data) => (
          <JobOffer 
            key={data.id}
            company={data.company}
            logo={data.logo}
            newOffer={data.new}
            featured={data.featured}
            position={data.position}
            role={data.role}
            level={data.level}
            postedAt={data.postedAt}
            contract={data.contract}
            location={data.location}
            languages={data.languages}
            tools={data.tools}
            filterBy={filterHandler}
          />
        ))}
      </section>
    </>
  )
}

export default App
