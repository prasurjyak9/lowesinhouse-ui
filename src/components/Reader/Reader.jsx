import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
import 'svg2pdf.js'


function Reader() {
    const ref = useRef();
  
    const [canvasState, setCanvasState] = useState('')
  
    const canvas = useRef(null);
  
    useEffect(() => {
      let url = "http://localhost:8080/v1/events/json/"
      axios
        .get(url)
        .then((response) => {
          setCanvasState(response.data)
          console.log("cs=", response.data)
          canvas.current.loadFromJSON(response.data);
        })
  
      canvas.current = initCanvas();
      canvas.current.on("mouse:over", () => {
        console.log('doing')
      }, []);
  
      return () => {
        canvas.current.dispose();
        canvas.current = null;
      };
    }, []);
  
    const initCanvas = () => (
      new fabric.StaticCanvas('canvas', {
        height: 800,
        width: 800,
        backgroundColor: 'pink',
        selection: false,
        renderOnAddRemove: true,
      })
    );
  
    return (
      <>
        <div ref={ref}>
          <canvas id="canvas" />
        </div>
      </>
    )
  }
  
  export default Reader;