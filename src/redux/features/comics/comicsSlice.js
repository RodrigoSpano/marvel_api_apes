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
    getComics: (state, action) => {
      state = action
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllComics.fulfilled, (state, action) => {
      state.allComics = action.payload
    })
  }
})

export const { getComics } = comicsSlice.actions

export default comicsSlice.reducer