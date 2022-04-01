import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { spellSearch } from '../../services/api-calls';
import SpellCard from '../../components/SpellCard/SpellCard';

const SpellSearch = (props) => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = formData => {
    spellSearch(formData)
    .then(spellResults => setSpells(spellResults.results))
  }

  return (
    <>
      <h3>Such Spellz</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ? 
        <>
          {spells.map(spell => 
            <SpellCard key={spell.index} spell={spell} />
          )}
        </>
        :
        <h3>Please search for a spell!</h3>
      }
    </>
  );
}
 
export default SpellSearch;