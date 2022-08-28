import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
// import 'svg2pdf.js'


function EditableCanvas() {
    const ref = useRef();
  
    const [canvasState, setCanvasState] = useState('');
    const [downloadLink, setDownloadLink] = useState('')
    const [downloadName, setDownloadName] = useState('')
  
    const canvas = useRef(null);
  
    useEffect(() => {
      canvas.current = initCanvas();
  
      canvas.current.on("mouse:over", () => {
        console.log('hello')
      }, []);
  
      return () => {
        canvas.current.dispose();
        canvas.current = null;
      };
    }, []);
  
    const initCanvas = () => (
      new fabric.Canvas('canvas', {
        height: 800,
        width: 800,
        backgroundColor: 'pink',
        selection: false,
        renderOnAddRemove: true,
      })
    );
  
    function addTextToCanvas(e) {
      let textBox = new fabric.IText("I'm a text piece", { left: 100, top: 100 });
      canvas.current.add(textBox);
    }
  
    function importFromJson(e) {
      axios.get('http://localhost:8080/v1/events/json/')
        .then(response => {
          canvas.current.loadFromJSON(response.data);
          setCanvasState(response.data);
        });
    }
  
    function exportToJson(e) {
      console.log(JSON.stringify(canvas.current))
    }
  
    function submitURL(e) {
      let url = document.getElementById("input").value;
      fabric.Image.fromURL(
        url,
        function (img) {
          var oImg = img.set({ left: 50, top: 100 }).scale(0.9);
          canvas.current.add(oImg).renderAll();
        },
        { crossOrigin: "anonymous" }
      );
    }
  
    function convertToImg(e) {
    //   const svg = canvas.current.toSVG();
      setDownloadLink(canvas.current.toDataURL({
        format: "png"
      }));
  
      setDownloadName("canvas.png");
    }
  
    function showAsHTML(e) {
      const svg = canvas.current.toSVG();
      console.log(svg);
    }
    
    return (
      <>
        <div ref={ref}>
          <canvas id="canvas" />
          <button onClick={addTextToCanvas}>Add Text</button>
          <button onClick={importFromJson}>Import</button>
          <button onClick={exportToJson}>Export</button>
        </div>
        <form>
          <label>Enter Image Url here : </label>
          <input id="input"></input>
          <button onClick={submitURL} type="button">Add Image With Url</button>
        </form>
        <a href={downloadLink} download={downloadName} onClick={convertToImg}>Print As Image</a>
        <button onClick={showAsHTML}>Show as HTML</button>
      </>
    );
  }
  
  export default EditableCanvas;
