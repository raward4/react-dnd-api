import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ClassList from './pages/ClassList/ClassList';
import ClassDetails from './pages/ClassDetails/ClassDetails';
import MonsterList from './pages/MonsterList/MonsterList';
import MonsterDetails from './pages/MonsterDetails/MonsterDetails';
import SpellSearch from './pages/SpellSearch/SpellSearch';
import SpellDetails from './pages/SpellDetails/SpellDetails';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"}, 
    {url: "/monster-list", name: "Scary Monsters"}, 
    {url: "/spell-search", name: "Search for Spells"}
  ])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/class-list' element={<ClassList />} />
        <Route path='/class' element={<ClassDetails />} />
        <Route path='/monster-list' element={<MonsterList />} />
        <Route path='/monster' element={<MonsterDetails />} />
        <Route path='/spell-search' element={<SpellSearch />} />
        <Route path='/spell/:spellName' element={<SpellDetails />} />
      </Routes>
    </>
  );
}

export default App;
