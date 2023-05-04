import { useRef, useLayoutEffect } from "react";
import Cat from "../assets/image//CatSprite.png"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;

const CANVAS_HEIGHT = 200;
const CANVAS_WIDTH = 200;

const Canvas: React.FC<CanvasProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d")
  const playerImage = new Image();
  playerImage.src = Cat
  // const spriteWidth = 573
  // const spriteHeigth = 523
  const spriteWidth = 186
  const spriteHeigth = 163
  let frameX = 0;
  let frameY =2;
  let gameFrame=0;
const stageFarmes=7;
  const animate = () => {
    ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx?.drawImage(playerImage, sx, sy, spriteWidth, spriteHeigth, dx, dy, spriteWidth dw, spriteHeigth dh);
   
    ctx?.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeigth, spriteWidth, spriteHeigth, 0, 0, spriteWidth, spriteHeigth);
    if(gameFrame % stageFarmes === 0){
      if(frameX < 7)frameX++;
      else frameX=0;
    }
    gameFrame++;
    requestAnimationFrame(animate)
  };
  useLayoutEffect(() => {
    animate()
  }, [])

  return <canvas width={props.width} height={props.height} ref={canvasRef} style={{ border: "1px solid black", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }} />
}

export default Canvas;