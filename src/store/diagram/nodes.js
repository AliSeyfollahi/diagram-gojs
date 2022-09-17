const nodes = {
  nodeDataArray: [
    { key: 0, text: 'Een', color: 'lightblue', loc: '0 0' },
    { key: 1, text: 'twee', color: 'orange', loc: '150 0' },
    { key: 2, text: 'Drie', color: 'lightgreen', loc: '150 150' },
    { key: 3, text: 'vier', color: 'pink', loc: '0 150' },
    { key: 4, text: 'vijf', color: 'red', loc: '0 90' }
  ],
  linkDataArray: [
    { key: -1, from: 0, to: 1 },
    { key: -2, from: 1, to: 2 },
    { key: -3, from: 2, to: 3 },
    { key: -4, from: 3, to: 4 },
    { key: -5, from: 4, to: 0 }
  ]
}

export default nodes