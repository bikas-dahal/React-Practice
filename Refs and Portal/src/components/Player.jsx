import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef()

  const [name, setName] = useState('Noob');
  // const [submitted, setSubmitted] = useState(false);


  // function handleChange(e) {
  //   setSubmitted(false);
  //   setName(e.target.value);
  // }

  function handleClick(){
    setName(playerName.current.value);
  }


  return (
    <section id="player">
      <h2>Welcome {name ?? 'Noob'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
