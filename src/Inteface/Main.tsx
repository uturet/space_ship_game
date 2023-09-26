import React, { useState } from 'react'

type Window = 'console' | 'script'


function Main (): JSX.Element {
  const [isConsoleActive, setIsConsoleActive] = useState<boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [active, setActive] = useState<Window>('console')
  const [consoleHistory, setConsoleHistory] = useState<string[]>([])
  const availableObjects: string[] = [
    'battery',
    'shoot',
    'engine.forvard',
    'engine.left',
    'engine.right',
    'engine.back',
    'radar.selected',
    'radar.select',
    'radar.scan',
    'shield.capacity',
    'shield.status',
    'shield.on',
    'shield.off'
  ]

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

    <div className="flex-grow overflow-y-scroll pt-3 pl-3">
      <div className="flex flex-wrap">
        {availableObjects.map((v, i) => (<div
          className="text-white px-3 py-1 mr-3 mb-3 bg-gray-800 hover:bg-gray-500"
          draggable={true}
          onDragEnd={() => {
            console.log('End')
            if (isConsoleActive) {
              setIsConsoleActive(false)
              setConsoleHistory((h) => [...h, v])
            }
          }}
          onClick={() => { setConsoleHistory((h) => [...h, v]) }}
          key={v}>{v}</div>))
        }
      </div>
    </div>
    <div className="h-5/6 flex flex-col">
      <div
        onDragOver={(e) => {
          e.preventDefault()
          setIsConsoleActive(true)
        }}
        onDragLeave={() => {
          setIsConsoleActive(false)
        }}
        onDrop={(e) => {
          e.preventDefault()
        }}

        className={'overflow-y-scroll flex-grow p-3 ' +
         (active === 'script' ? 'hidden ' : '') +
         (isConsoleActive ? 'shadow-[inset_3px_3px_0_0_rgba(132,204,22,0.5)]' : '')}>
        {consoleHistory.map((v, i) => (<div
          className="text-white text-left pointer-events-none"
          key={i.toString()}>{v}</div>))
        }
      </div>
      <div className={'overflow-hidden flex-grow ' + (active === 'console' ? 'hidden' : '')}>
        script
      </div>
    </div>
  </div>
}


export default Main
