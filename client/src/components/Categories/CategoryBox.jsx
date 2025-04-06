/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';


const CategoryBox = ({ label, icon: Icon }) => {
  // getting clicked category value from url
  const [params, setParams] = useSearchParams();
  
  const category = params.get('category');
 


  const navigate = useNavigate()
  const handleClick = () => {
    //1. creating custom query string for search bar url
    let currentQuery = { category: label }
    const url = queryString.stringifyUrl({
      url: '/',
      query: currentQuery
    })
    //2.  url output ----> /?category=label
    navigate(url)/* It will set the category added url to searchbar  */
  }
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${category === label && "border-b-neutral-700"} `} /* Ading border to selected category if selected category and url category mathed */
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox



/* ----------------------Mastered------------------------ */
/* ----------------------Date :01/04/2025 ------------------------ */