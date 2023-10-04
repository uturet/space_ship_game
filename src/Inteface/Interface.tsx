import React, { useState, useRef, useEffect } from 'react'
import Console from './Console'
import { type Window } from './types'
import ShipComponentsInterface from './ShipComponentsInterface'


function Interface (): JSX.Element {
  const consoleRef = useRef<HTMLInputElement>(null)
  // https://gist.github.com/dferber90/a7e636e6dfa0178c016ed488a6557273
  const [isDraggableOverConsole, setIsDraggableOverConsole] = useState<boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [active, setActive] = useState<Window>('console')
  const [consoleHistory, setConsoleHistory] = useState<string[]>([])

  useEffect(() => {
    if (consoleRef?.current != null) {
      consoleRef.current.focus()
    }
  }, [consoleRef])

  if (isHidden) {
    return <div
      onClick={() => { setIsHidden(false) }}
      className="absolute right-0 bg-gray-900 z-50 bg-opacity-95 p-3 text-white font-bold hover:bg-gray-500">
    Open
    </div>
  }

  return <div
    className="absolute right-0 bg-gray-900 w-1/2 h-screen z-50 bg-opacity-95 flex flex-col">

    <div
      className="flex">
      <div
        onClick={() => { setActive('console') }}
        className={'flex-grow p-3 text-white font-bold hover:bg-gray-500 ' + (active === 'console' ? ' bg-gray-800' : '')}>Console</div>
      <div
        onClick={() => { setActive('script') }}
        className={'flex-grow p-3 text-white font-bold hover:bg-gray-500 ' + (active === 'script' ? ' bg-gray-800' : '')}>Script</div>
      <div
        onClick={() => { setIsHidden(true) }}
        className="w-1/6 p-3 text-white font-bold hover:bg-gray-500">
      Hide
      </div>
    </div>
``
    <ShipComponentsInterface
      isDraggableOverConsole={isDraggableOverConsole}
      setIsDraggableOverConsole={setIsDraggableOverConsole}
      setConsoleHistory={setConsoleHistory}
    />

    <div className="h-5/6 flex flex-col">
      <Console
        setConsoleHistory={setConsoleHistory}
        setIsDraggableOverConsole={setIsDraggableOverConsole}
        isDraggableOverConsole={isDraggableOverConsole}
        active={active}
        consoleHistory={consoleHistory}
        focusConsole={() => {
          if (consoleRef?.current != null) {
            consoleRef.current.focus()
          }
        }}
      />
      <div className={'overflow-hidden flex-grow ' + (active === 'console' ? 'hidden' : '')}>
        script
      </div>
    </div>
  </div>
}


export default Interface
