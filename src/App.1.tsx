import React from 'react';
import SpriteCanvas from './animation/SpriteCanvas';
import BackGroundCanvas from './animation/BackGroundCanvas';
import EnemyCanvas from './animation/EnemyCanvas';
import { GAME_CANVAS_HEIGHT,GAME_CANVAS_WIDTH } from './constants';
const CANVAS_HEIGHT = 200;
const CANVAS_WIDTH = 200;

function App() {

  return (
    <div style={{ height: window.innerHeight, backgroundColor: "#041ae0" }}>
      <BackGroundCanvas width={GAME_CANVAS_WIDTH} height={GAME_CANVAS_HEIGHT} />
      <EnemyCanvas width={GAME_CANVAS_WIDTH} height={GAME_CANVAS_HEIGHT} />
      <SpriteCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />

    </div >
  );
}
export default App;
