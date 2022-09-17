import { createSlice } from '@reduxjs/toolkit'
import nodes from './nodes'

const storageKey = "diagramNodes"
const save = (state) => {
  return localStorage.setItem(storageKey, JSON.stringify(state))
}

const load = () => {
  let state = null;
  try {
    state = JSON.parse(localStorage.getItem(storageKey))
  } catch (ex) {
    return null
  }
  return state;
}

export const diagramSlice = createSlice({
  name: 'diagram',
  initialState: load() || nodes,
  reducers: {
    link: (state, action) => {
      const { payload } = action;
      state.linkDataArray = [...state.linkDataArray, { key: Date.now(), ...payload }];
      save(state)
    },
    unlink: (state, action) => {
      const { payload } = action
      state.linkDataArray = state.linkDataArray.filter(node => node.from !== payload.from && node.to !== payload.to)
      save(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { link, unlink } = diagramSlice.actions

export default diagramSlice.reducer