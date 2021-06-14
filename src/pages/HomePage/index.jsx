import React, { useState } from 'react';
import { Header } from '../../components/Header';

function Home() {
  const [hiddenMenu, setHiddenMenu] = useState('invisible');

  return (
    <>
      <Header visiblity={hiddenMenu} setVisiblity={setHiddenMenu} />
    </>
  );
}

export default Home;
