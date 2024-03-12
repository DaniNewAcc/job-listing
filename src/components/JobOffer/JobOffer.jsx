import './JobOffer.css'

const JobOffer = ({
  company,
  logo,
  newOffer,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filterBy,
}) => {
  const skills = [role, level, ...languages, ...tools];
  return (
    <div className={`container-fluid bg-light d-lg-flex justify-content-between py-lg-4 my-3 rounded-2 job__shadow ${featured === true ? ' is-featured' : ''}`}>
      <div className="container-fluid translate d-lg-flex ms-lg-3">
        <img className="logo object-fit-contain" src={logo} alt="" />
        <div className="d-flex flex-column justify-content-center row-gap-2 row-gap-lg-0 ms-lg-4 pt-lg-3">
          <div className="d-flex gap-2">
            <span className='job__company me-3 me-lg-1'>{company}</span>
            {newOffer && <span className='job__new rounded-4'>NEW!</span>}
            {featured && <span className='job__featured rounded-4'>FEATURED</span>}
          </div>
          <div className="d-flex">
            <span className='job__position'>{position}</span>
          </div>
          <ul className="job__details-wrapper d-flex gap-4">
            <li><small className='job__details'>{postedAt}</small></li>
            <li><small className='job__details'>{contract}</small></li>
            <li><small className='job__details'>{location}</small></li>
          </ul>
        </div>
      </div>
        <div className="job__skill-wrapper container-fluid translate d-flex align-items-lg-center row-gap-lg-2 gap-lg-3 mx-lg-4">
          {skills.map((skill) => (
            <p className='job__skill rounded-2' key={skill} onClick={filterBy.bind(this, skill)}>{skill}</p>
          ))}
        </div>
    </div>
  )
}

export default JobOffer