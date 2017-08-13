import React from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box'
import Dustbin from './Dustbin'

export default function() {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div>
        <div style={{ overflow: 'hidden' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    </DragDropContextProvider>
  )
}
