import React, { useState, useEffect } from 'react';

const Clubes = () => {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => setClubes(Object.values(data)));
  }, []);

  return (
    <div className="clubes-container">
      {clubes.map(clube => (
        <div key={clube.id} className="clube-card">
          <img src={clube.escudos['60x60']} alt={`${clube.nome} escudo`} />
          <h2>{clube.nome}</h2>
          <p>{clube.apelido}</p>
        </div>
      ))}
    </div>
  );
};

export default Clubes;