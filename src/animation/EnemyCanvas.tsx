import { useRef, useLayoutEffect } from "react";
import Ghost from "../assets/image/Ghoust.png"
import Egg from "../assets/image/EvilEgg.png"
import { GAME_CANVAS_HEIGHT,GAME_CANVAS_WIDTH } from "../constants";
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;


const EnemyCanvas: React.FC<CanvasProps> = ({ children, ...props }) => { 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvas = canvasRef.current; 
    const ctx = canvas?.getContext("2d")
    const EnemyImage1 = new Image()
    EnemyImage1.src = Egg
    const EnemyNumber = 20;
    const EnemiesArray: any = [] 
    let GameFrame = 0
    class Enemy {
        x: number;
        y: number;
        width: number;
        height: number;
        speed: number;
        spriteWidth: number;
        spriteHeight: number;
        frame: number;
        ghostSpeed: number;
        constructor() {
            this.speed = Math.random() * 4 - 2;
            this.spriteWidth = 180;
            this.spriteHeight = 163;
            this.width = this.spriteWidth / 1.5;
            this.height = this.spriteHeight / 1.5;
            this.x = Math.random() * (GAME_CANVAS_HEIGHT - this.height-100);
            this.y = Math.random() *( GAME_CANVAS_WIDTH - this.width-100);
            this.frame = 0;
            this.ghostSpeed = Math.floor(Math.random() * 3 + 1);

        }
        update() {
            this.x += Math.random() * 5 - 2.5;
            this.y += Math.random() * 5 - 2.5;
            if (GameFrame % this.ghostSpeed === 0) {
                this.frame > 9 ? this.frame = 0 : this.frame++;
            }
        }
        draw() {

            ctx?.drawImage(EnemyImage1, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
        }


    };

    for (let i = 0; i < EnemyNumber; i++) {
        EnemiesArray.push(new Enemy())
    }
    const EnemyAnimate = () => {
        ctx?.clearRect(0, 0, GAME_CANVAS_WIDTH,GAME_CANVAS_HEIGHT );
        EnemiesArray.forEach((enemy: any) => {
            enemy.update();
            enemy.draw();

        })
        GameFrame++;
        requestAnimationFrame(EnemyAnimate)
    };

    useLayoutEffect(() => {
        EnemyAnimate()
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

export default EnemyCanvas;