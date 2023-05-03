import React from 'react';
import Canvas from './animation/Canvas';

const CANVAS_HEIGHT=window.innerHeight
function App() {
  const drawArt = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "blue"
    context.fillRect(0, 0, 100, 100)
    context.strokeRect(200, 60, 50, 50)
  };
  return (
    <div style={{display:'flex', flexDirection: 'column', width: "100%"}}>
      <Canvas draw={drawArt} width={window.innerWidth/1} height={CANVAS_HEIGHT/3}/>
      <Canvas draw={drawArt} width={window.innerWidth/1} height={CANVAS_HEIGHT/3} />
    </div>
  );
}
export default App;
