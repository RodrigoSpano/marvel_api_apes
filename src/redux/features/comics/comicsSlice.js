import { createSlice } from '@reduxjs/toolkit'
import { getAllComics } from './comicsActions'

const initialState = {
  allComics: [],
  comicDetail: {}
}

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    getComicById: (state, action) => {
      state.comicDetail = state.allComics.find(c => parseInt(c.id) === parseInt(action.payload))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllComics.fulfilled, (state, action) => {
      state.allComics = action.payload
    })
  }
})

export const { getComicById } = comicsSlice.actions

export default comicsSlice.reducer