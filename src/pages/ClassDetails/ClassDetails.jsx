import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    // This is where the API call will go
    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  }, [])

  return (
    <>
      <div>
        <h3>Class Details</h3>
        {classDetails.name ?
          <>
            <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
            <h2>{classDetails.name}</h2>
            <div>Hit die: d{classDetails.hit_die}</div>
            <h3>Proficiencies:</h3>
            {classDetails.proficiencies.map((proficiency) => (
              <div key={proficiency.index}>{proficiency.name}</div>
            ))}
          </>
          :
          <>
            <h2>Loading class details...</h2>
          </>
        }
      </div>
    </>
  );
}
 
export default ClassDetails;
