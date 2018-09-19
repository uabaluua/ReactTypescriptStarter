import * as React from 'react'
import { PieChart } from 'iota-toolkit'

const DEFAULT_PIE_DATA = {
  Label1: 30,
  Label3: 15,
  Label2: 13,
  Label5: 10,
  Label4: 5,
}

export const Content = () => {
  return <PieChart
    data={DEFAULT_PIE_DATA}
  />
}
