import React from "react"
import { StlViewer } from "react-stl-viewer"

/*const style = {
  top: 0,
  left: 0,
  width: "40vw",
  height: "40vh",
}*/

export const Model = ({ url }) => {
  return (
    <StlViewer
      //style={style}
      modelProps={{ scale: 2.6, positionX: 0 }}
      orbitControls
      url={url}
      canvasId="model"
    />
  )
}
