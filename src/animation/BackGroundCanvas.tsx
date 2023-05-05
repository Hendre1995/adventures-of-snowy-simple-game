import { useRef, useLayoutEffect } from "react";
import Cat from "../assets/image//CatSprite.png"
import BackGroundImage from "../assets/image/GameBack.png"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;
const GAME_CANVAS_HEIGHT = window.innerHeight/1.1;
const GAME_CANVAS_WIDTH = window.innerWidth/1.01;
const BackGroundCanvas: React.FC<CanvasProps> = ({ children,...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d")
  const BackGroundImage1 = new Image()
  BackGroundImage1.src = BackGroundImage  
  const playerImage = new Image();
  playerImage.src = Cat

  
  let x =0
  let GameSpeed=1
  const BackGrounAnimate = () => {
    ctx?.clearRect(0, 0, GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT);
    ctx?.drawImage(BackGroundImage1, x, 0);
if(x<-5000)x=0;
else x-=GameSpeed
    
    requestAnimationFrame(BackGrounAnimate)
  };

  useLayoutEffect(() => {
    BackGrounAnimate()
  }, [])

  return <canvas
    width={props.width}
    height={props.height}
    ref={canvasRef}
    style={{
      border: "1px solid black",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }} />

}

export default BackGroundCanvas;