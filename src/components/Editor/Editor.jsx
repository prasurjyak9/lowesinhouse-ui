import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
import 'svg2pdf.js'
import { Button, Grid, IconButton } from '@backyard/react';
import { Typography, Tile, Pill } from '@backyard/react'
import './Editor.css';
import './EditorResponsive.css';
import ColourButton from '../ColourButton/ColourButton';
import { useNavigate } from 'react-router-dom';

function EditableCanvas(props) {
  const ref = useRef();

  const navigate = useNavigate();

  const [canvasState, setCanvasState] = useState('');
  const [downloadLink, setDownloadLink] = useState('')
  const [downloadName, setDownloadName] = useState('')
  const [showForm, setShowForm] = useState(false);
  const [canvasColour, setCanvasColour] = useState('white')
  const [fontstyle, setFontstyle] = useState('normal')

  const showFormforImage = () => {
    setShowForm(!showForm);
  }
  const canvas = useRef(null);

  useEffect(() => {
    console.log("props =", props)
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

      borderColor: 'red',
      backgroundColor: canvasColour,
      selection: false,
      renderOnAddRemove: true,
    })
  );

  function addTextToCanvas(e) {
    let textBox = new fabric.IText("I'm a text piece", {
      left: 100,
      top: 100,
      fontSize: 20,
      fontStyle: fontstyle,
      fontFamily: 'sans-serif'
    });
    canvas.current.add(textBox);
  }
  function addHorizontalLine(e) {
    canvas.current.add(new fabric.Line([300, 250, 100, 250], {

      left: 170,
      top: 150,
      stroke: 'black'
    }));
  }
  function addVerticalLine(e) {
    canvas.current.add(new fabric.Line([250, 100, 250, 300], {
      left: 170,
      top: 150,
      stroke: 'black'
    }));
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
    const svg = canvas.current.toSVG();
    setDownloadLink(canvas.current.toDataURL({
      format: "png"
    }));

    setDownloadName("canvas.png");
  }

  function showAsHTML(e) {
    const svg = canvas.current.toSVG();
    console.log(svg);
  }
  function changeColour(e, colour) {
    canvas.current.set('backgroundColor', colour).renderAll()
  }

  function makeItalic(e) {
    setFontstyle('italic')
  }

  function makeOblique(e) {
    setFontstyle('oblique')
  }

  function showActiveElement(e) {
    //console.log(canvas.current.getActiveObject())
    navigate("/", {token: "ttookkeenn"})
  }

  function deleteElement(e) {
    canvas.current.remove(canvas.current.getActiveObject());
  }

  function handleRadio(e) {
    console.log(e)
  }

  function handleDivChange(e) {
    if (e.target.id == "normal") {
      setFontstyle('normal')
    } else {
      setFontstyle('italic')
    }
  }

  function saveNewsletter(e) {
    let canvasJSON = JSON.stringify(canvas.current)
    let url = "http://localhost:8080/designer/newsletter"

    let token = localStorage.getItem("token")

    const config = {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' 
      }
    };

    console.log("Inside save function")

    axios.post(url, {
      newsletterId: 909199,
      newsletterUserName: "4525440",
      status: 0,
      content: canvasJSON,
      tag: 'leap'
    }, config)

  }

  return (
    <>
      <div className="editorouterdiv">
        <Grid.Container >
          <div className="editorpage" ref={ref}>
            <Grid.Row className="editorouterpage"
              gutter="size_8">

              <Grid.Column sm={7}>
                <Tile variant="card" color="surface">
                  <div className="canvasholder">
                    <canvas id="canvas" className="textplace" />
                  </div>
                </Tile>
              </Grid.Column>
              <Grid.Column sm={4}>
                <Tile variant="card" color="surface">
                  <div id="componentstoadd">
                    <Grid.Container>
                      <Grid.Row>
                        <Typography variant="h1" align="center">
                          <span id="heading"> Components</span>
                        </Typography>
                      </Grid.Row>
                      <hr className="solid"></hr>
                      <div id="editortoolsbox" >
                        <Grid.Row>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={addTextToCanvas}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Text  </Button>
                            </div>
                          </Grid.Column>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={showFormforImage}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Image</Button>
                              {showForm && (
                                <form>
                                  <label>Enter Image Url here : </label>
                                  <input id="input"></input>
                                  <button onClick={submitURL} type="button">Add Image With Url</button>
                                </form>
                              )}
                            </div>
                          </Grid.Column>


                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" width="8em" onClick={addHorizontalLine}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Horizontal <br /> Line</Button>
                            </div>
                          </Grid.Column>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={makeItalic}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Italic <br /> Font </Button>
                            </div>
                          </Grid.Column>


                        </Grid.Row>


                        <Grid.Row>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={makeOblique}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Oblique</Button>
                            </div>
                          </Grid.Column>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={saveNewsletter}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Save<br /> </Button>
                            </div>
                          </Grid.Column>


                        </Grid.Row>

                        <Grid.Row>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={addVerticalLine} >
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Vertcial<br />Lines</Button>
                            </div>
                          </Grid.Column>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <a href={downloadLink} download={downloadName} onClick={convertToImg}>
                                <Button className="toolsbuttons" elevation color="red" variant="tertiary">
                                  <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                  Print
                                </Button>
                              </a>
                            </div>
                          </Grid.Column>


                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={deleteElement}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Delete<br />Element</Button>
                            </div>
                          </Grid.Column>
                          <Grid.Column>
                            <div id="toolscomponents">
                              <Button className="toolsbuttons" elevation variant="tertiary" color="neutral" onClick={showActiveElement}>
                                <img className="iconsimage" src="https://stage.carbon.lowes.com/bds/v3/documentation/downloads/icons/notes-filled.svg" height="80" width="80" />
                                Logout<br /> </Button>
                            </div>
                          </Grid.Column>


                        </Grid.Row>
                      </div>
                      <hr class="solid"></hr>

                      <Grid.Row>
                        <div className="backgroundcolorsrow">

                          <IconButton className="backgroundcolorbtns action-green-subdued-hover" variant="secondary" color="neutral" onClick={(e) => changeColour(e, 'hsl(141, 61%, 94%, 1)')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns surface-blue-inverse " color="neutral" variant="secondary" onClick={(e) => changeColour(e, 'hsl(196, 78%, 61%, 1)')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns surface-gold" color="neutral" variant="secondary" onClick={(e) => changeColour(e, 'hsl(41, 91%, 57%, 1)')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns icon-tertiary-inverse " variant="secondary" color="neutral" onClick={(e) => changeColour(e, 'white')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns text-disabled" color="neutral" variant="secondary" onClick={(e) => changeColour(e, 'hsl(0, 0%, 0%, .32)')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns marketing-dark-blue" color="neutral" variant="secondary" onClick={(e) => changeColour(e, 'hsl(222, 98%, 21%, 1)')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns marketing-red" color="red" color="neutral" variant="secondary" onClick={(e) => changeColour(e, '#f55')} >
                          </IconButton>
                          <IconButton className="backgroundcolorbtns black" color="red" color="black" variant="secondary" onClick={(e) => changeColour(e, 'black')} >
                          </IconButton>


                        </div>
                      </Grid.Row>
                      <hr class="solid"></hr>
                      <Grid.Row>
                        <div onChange={handleDivChange}>
                          <input type="radio" id="normal" name="contact" value="normal" onchange={handleRadio} />
                          <label for="normal">Normal</label>

                          <input type="radio" id="italic" name="contact" value="italic" onchange={handleRadio} />
                          <label for="italic">Italic</label>
                        </div>
                      </Grid.Row>
                      <hr class="solid"></hr>

                      <Grid.Row spacing="size_8">
                      </Grid.Row>
                    </Grid.Container>
                  </div>
                </Tile>
              </Grid.Column>
            </Grid.Row>

          </div>


        </Grid.Container>
      </div>
    </>
  );
}

export default EditableCanvas;
