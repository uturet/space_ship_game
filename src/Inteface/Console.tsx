import React from 'react'
import { type Window } from './types'

interface ConsoleProps {
  setIsDraggableOverConsole: React.Dispatch<React.SetStateAction<boolean>>
  focusConsole: () => void
  consoleHistory: string[]
  active: Window
  isDraggableOverConsole: boolean
  consoleRef?: React.RefObject<HTMLInputElement>
  setConsoleHistory: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Console ({
  setIsDraggableOverConsole, focusConsole, consoleHistory, active, isDraggableOverConsole, consoleRef, setConsoleHistory
}: ConsoleProps): JSX.Element {
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setIsDraggableOverConsole(true)
      }}
      onDragLeave={() => {
        setIsDraggableOverConsole(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
      }}
      onClick={() => { focusConsole() }}

      className={'overflow-y-scroll flex-grow p-3 flex flex-col justify-end ' +
         (active === 'script' ? 'hidden ' : '') +
         (isDraggableOverConsole ? 'shadow-[inset_3px_3px_0_0_rgba(132,204,22,0.5)]' : '')}>
      {consoleHistory.map((v, i) => (<div
        className="text-white text-left pointer-events-none"
        key={i.toString()}>{v}</div>))
      }
      <div className='text-white text-left'> {' > '}
        <span
          id="console"
          ref={consoleRef}
          onKeyDown={(e) => {
            if (e.code === 'Enter' && consoleRef?.current != null) {
              e.preventDefault()
              const tmpValue = consoleRef.current.innerText
              consoleRef.current.innerText = ''
              setConsoleHistory((h) => [...h, tmpValue])
            }
          }}
          className="ml-1 focus-outline-none outline-none"
          contentEditable={true}></span>
      </div>
    </div>
  )
}
