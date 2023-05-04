import { useRef, useLayoutEffect } from "react";
import Cat from "../assets/image//CatSprite.png"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;
type Frame = any;

const SPRITE_PLAYER_HEIGHT = 200;
const SPRITE_PLAYER_WIDTH = 200;
const spriteWidth = 186
const spriteHeight = 163
const staggerFrames = 7;
const spriteAnimations: any = [];
const AnimationStates = [
  {
    name: "Hurt",
    frames: 10
  },
  {
    name: "Dead",
    frames: 10
  },
  {
    name: "Fall",
    frames: 8
  },
  {
    name: "Idle",
    frames: 10
  },
  {
    name: "Jump",
    frames: 8
  },
  {
    name: "Run",
    frames: 8
  },
  {
    name: "Slide",
    frames: 10
  },
  {
    name: "Walk",
    frames: 10
  },
];

let gameFrame = 0;
let playerState = "Dead"
AnimationStates.forEach((state, index) => {
  let frames: Frame = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames
});
const Canvas: React.FC<CanvasProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d")
  const playerImage = new Image();
  playerImage.src = Cat

  const animate = () => {
    ctx?.clearRect(300, 400, SPRITE_PLAYER_WIDTH, SPRITE_PLAYER_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx?.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 300, 400, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate)
  };

  useLayoutEffect(() => {
    animate()
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

export default Canvas;