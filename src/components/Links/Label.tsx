import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type LabelProps = {
  lKey: string | number,
}

const Label = React.memo(({ lKey }: LabelProps) => {
  const diagram = useSelector((state: RootState) => state.diagram)
  return <>{diagram.nodeDataArray.find((n:any) => n.key === lKey)?.text}</>
})

export default Label
