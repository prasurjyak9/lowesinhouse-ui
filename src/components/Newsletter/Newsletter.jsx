import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
// import 'svg2pdf.js'
import CommentsSection from '../CommentsSection/CommentsSection';


function NewsLetter(props) {
    const ref = useRef();
  
    const [canvasState, setCanvasState] = useState('')
  
    const canvas = useRef(null);
  
    useEffect(() => {
      //console.log("hello = ", props.content)

      // let url = props.url
      // axios
      //   .get(url)
      //   .then((response) => {
      //     setCanvasState(response.data)
      //     canvas.current.loadFromJSON(response.data);
      //   })
  
      canvas.current = initCanvas();
      canvas.current.on("mouse:over", () => {
        console.log('doing')
      }, []);

      canvas.current.loadFromJSON(props.content);
  
      return () => {
        canvas.current.dispose();
        canvas.current = null;
      };
    }, []);
  
    const initCanvas = () => (
      new fabric.StaticCanvas(props.id, {
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
          <canvas id={props.id} />
          <CommentsSection comments={props.comments}/>
        </div>
      </>
    )
  }
  
  export default NewsLetter;
