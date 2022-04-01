import { getMonsterList } from "../../services/api-calls";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const MonsterList = (props) => {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    getMonsterList()
    .then(monsterData => setMonsterList(monsterData.results))
  }, [])

  return ( 
    <>
      <h3>Monster List</h3>
      {monsterList.length ? 
      <>
        {monsterList.map((monster) => (
          <div key={monster.index}>
            <Link
              to="/monster"
              state={{ monster }}
            >
              {monster.name}
            </Link><br/>
          </div>
        ))}
      </>
      :
      <>
        <h2>Loading scary monsters...</h2>
      </>}
    </>
  );
}
 
export default MonsterList;