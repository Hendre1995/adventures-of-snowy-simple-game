import React from 'react';
import SpriteCanvas from './animation/SpriteCanvas';
import BackGroundCanvas from './animation/BackGroundCanvas';

const CANVAS_HEIGHT = 200;
const CANVAS_WIDTH = 200;
const GAME_CANVAS_HEIGHT = window.innerHeight / 1.1;
const GAME_CANVAS_WIDTH = window.innerWidth / 1.01;

function App() {

  return (
    <div style={{ height: window.innerHeight, backgroundColor: "#041ae0" }}>
      <BackGroundCanvas width={GAME_CANVAS_WIDTH} height={GAME_CANVAS_HEIGHT} />
      <SpriteCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />

    </div >
  );
}
export default App;
