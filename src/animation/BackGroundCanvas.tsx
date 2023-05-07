import { useRef, useLayoutEffect } from "react";
import BackGroundImage from "../assets/image/GameBack.png"
import MidGroundImge from '../assets/image/GameMidGround.png'
import SlowClouds from "../assets/image/SlowClouds.png"
import FastCoulds from "../assets/image/FastClouds.png"
import ForGroundImage from "../assets/image/forGroundNew.png"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;
const GAME_CANVAS_HEIGHT = window.innerHeight / 1.1;
const GAME_CANVAS_WIDTH = window.innerWidth / 1.01;
const BackGroundCanvas: React.FC<CanvasProps> = ({ children, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d")
  const BackGroundImage1 = new Image()
  BackGroundImage1.src = BackGroundImage;
  const BackGroundTree = new Image();
  BackGroundTree.src = MidGroundImge; 
  const SlowCloudsGround = new Image();
  SlowCloudsGround.src = SlowClouds; 
  const FastCloudsGround = new Image();
  FastCloudsGround.src = FastCoulds;
  const ForGroundTrees = new Image();
  ForGroundTrees.src = ForGroundImage;
 // walking speed 5 run and slide speed 8
  let GameSpeed = 8
  class Layer {
    image: HTMLImageElement;
    width: number;
    height: number;
    speedModifier: number;
    speed: number;
    x2: number;
    x: number;
    y: number;
    constructor(image: HTMLImageElement, speedModifier: number) {
      this.x = 0;
      this.y = 0;
      this.width = 6000;
      this.height = 750; 
      this.x2 = this.width;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = GameSpeed * this.speedModifier;

    }
    update() {
      this.speed = GameSpeed * this.speedModifier;
      if (this.x <= - this.width) {
        this.x = this.width + this.x2 - this.speed;
      }
      if (this.x2 <= - this.width) {
        this.x2 = this.width + this.x - this.speed;
      }
      this.x = Math.floor(this.x - this.speed);
      this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
      ctx?.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx?.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
  }
  const layer1 = new Layer(BackGroundImage1, 0.09);
  const layer2 = new Layer(SlowCloudsGround, 0.25);
  const layer3 = new Layer(BackGroundTree, 0.6);
  const layer4 = new Layer(FastCloudsGround, 0.45);
  const layer5 = new Layer(ForGroundTrees, 0.8);


  const GameObject = [
    layer1, layer2, layer3, layer4, layer5
  ]
  const BackGrounAnimate = () => {
    ctx?.clearRect(0, 0, GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT);
    GameObject.forEach(Object => {
      Object.update();
      Object.draw();
    })

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