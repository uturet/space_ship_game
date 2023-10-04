import React from 'react'

export interface functionProp {
  name: string
  type: 'number' | 'spaceObject'
}

export interface shipComponent {
  name: string
  type: 'number' | 'function' | 'array' | 'object'
  props?: functionProp[]
  values?: shipComponent[]
}

const shipComponents: shipComponent[] = [
  {
    name: 'battery',
    type: 'number'
  },
  {
    name: 'shoot',
    type: 'function',
    props: []
  },
  {
    name: 'engine',
    type: 'object',
    values: [
      {
        name: 'forvard',
        type: 'function',
        props: []
      },
      {
        name: 'left',
        type: 'function',
        props: []
      },
      {
        name: 'right',
        type: 'function',
        props: []
      },
      {
        name: 'back',
        type: 'function',
        props: []
      }
    ]
  },
  {
    name: 'radar',
    type: 'object',
    values: [
      {
        name: 'selected',
        type: 'array'
      },
      {
        name: 'select',
        type: 'function',
        props: [
          {
            name: 'spaceObject',
            type: 'spaceObject'
          }
        ]
      },
      {
        name: 'scan',
        type: 'function',
        props: []
      }
    ]
  },
  {
    name: 'shield',
    type: 'object',
    values: [
      {
        name: 'capacity',
        type: 'number'
      },
      {
        name: 'status',
        type: 'number'
      },
      {
        name: 'on',
        type: 'function',
        props: []
      },
      {
        name: 'off',
        type: 'function',
        props: []
      }
    ]
  }
]

interface ShipComponentsInterfaceProps {
  isDraggableOverConsole: boolean
  setIsDraggableOverConsole: React.Dispatch<React.SetStateAction<boolean>>
  setConsoleHistory: React.Dispatch<React.SetStateAction<string[]>>
}

export default function ShipComponentsInterface ({
  isDraggableOverConsole,
  setIsDraggableOverConsole,
  setConsoleHistory
}: ShipComponentsInterfaceProps): JSX.Element {
  return (
    <div className="flex-grow overflow-y-scroll pt-3 pl-3">
      <div className="flex flex-wrap">
        {shipComponents.map((v, i) => (<div
          className="text-white px-3 py-1 mr-3 mb-3 bg-gray-800 hover:bg-gray-500"
          draggable={true}
          onDragEnd={() => {
            if (isDraggableOverConsole) {
              setIsDraggableOverConsole(false)
              setConsoleHistory((h) => [...h, v.name])
            }
          }}
          onClick={() => { setConsoleHistory((h) => [...h, v.name]) }}
          key={v.name}>{v.name}</div>))
        }
      </div>
    </div>
  )
}
