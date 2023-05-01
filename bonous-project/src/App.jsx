import React, { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async () => {
    const response = await fetch(`https://api.npms.io/v2/search?q=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  const handleFavorite = (packageName) => {
    const description = prompt('Why this is your fevorite package?');
    setFavorites([...favorites, { name: packageName, description }]);
  };

  const handleRemoveFavorite = (packageName) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.name !== packageName);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <div className='container'>
      <h1>Favorite NPM Packages</h1>
      <input type="text" placeholder="React or any package" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((result) => (
          <div key={result.package.name}>
            <h2>{result.package.name}</h2>
            <p>{result.package.description}</p>
            <button onClick={() => handleFavorite(result.package.name)}>Add to Favorites</button>
          </div>
        ))}
      </div>
      <hr />
      <h2>Favorites</h2>
      </div>
     
      <div className='result'>
        <div className='result-container'>
        {favorites.map((favorite) => (
          <div key={favorite.name}>
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <button onClick={() => handleRemoveFavorite(favorite.name)}>Remove from Favorites</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
