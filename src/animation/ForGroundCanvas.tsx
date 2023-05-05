import { useRef, useLayoutEffect } from "react";
import ForGroundImage from "../assets/image/forGroundNew.png"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement
>;
const GAME_CANVAS_HEIGHT = window.innerHeight / 1.1;
const GAME_CANVAS_WIDTH = window.innerWidth / 1.01;


const ForGroundCanvas: React.FC<CanvasProps> = ({ children, ...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d")
    const ForGroundImage1 = new Image()
    ForGroundImage1.src = ForGroundImage
 


    let x = 0
    let x2 = 7000
    let GameSpeed = 3
    const ForGrounAnimate = () => {
        ctx?.clearRect(0, 0, GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT);
        ctx?.drawImage(ForGroundImage1, x, 0);
        ctx?.drawImage(ForGroundImage1, x2, 0);
        if (x < -7000) x = 7000 + x2 - GameSpeed;
        else x -= GameSpeed
        if (x2 < -7000) x2 = 7000 + x - GameSpeed;
        else x2 -= GameSpeed

        requestAnimationFrame(ForGrounAnimate)
    };

    useLayoutEffect(() => {
        ForGrounAnimate()
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

export default ForGroundCanvas;