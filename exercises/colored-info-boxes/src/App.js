import React from 'react';
import './App.css';
import Boxes from './components/boxes'

function App() {
  return (
    <div className="App">
      <Boxes background="blue" title="title" subtitle="subtitle" information="information" />
      <Boxes background="purple" title="title" subtitle="subtitle" information="information" />
      <Boxes background="green" title="title" subtitle="subtitle" information="information" />
      <Boxes background="yellow" title="title" subtitle="subtitle" information="information" />
      <Boxes background="dodgerblue" title="title" subtitle="subtitle" information="information" />
      <Boxes background="deeppink" title="title" subtitle="subtitle" information="information" />
      <Boxes background="cyan" title="title" subtitle="subtitle" information="information" />
      <Boxes background="red" title="title" subtitle="subtitle" information="information" />
      <Boxes background="orange" title="title" subtitle="subtitle" information="information" />
      <Boxes background="grey" title="title" subtitle="subtitle" information="information" />
    </div>
  );
}

export default App;
