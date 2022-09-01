import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
// import 'svg2pdf.js'
import CommentsSection from '../CommentsSection/CommentsSection';
import { Grid, Tile } from '@backyard/react';
import "./Newsletter.css";

function NewsLetter(props) {
  const ref = useRef();

  const [canvasState, setCanvasState] = useState('')

  const canvas = useRef(null);

  useEffect(() => {
    console.log("Inside newsletter")

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
        <div className="newsletterouterbox">
          <Grid.Container >
            <Grid.Row>
              <center>
                <Tile variant="card" color="surface" className="canvasholder2">
                  <canvas id={props.id} className="textplace2" />
                </Tile>
              </center>
            </Grid.Row>
            { props.comments != "null" &&
              <Grid.Row>
                <CommentsSection comments={props.comments} newsletterid={props.newsletterid} />
              </Grid.Row>
            }
          </Grid.Container>
        </div>
      </div>
    </>
  )
}

export default NewsLetter;