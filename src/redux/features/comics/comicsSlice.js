import { createSlice } from '@reduxjs/toolkit'
import { getAllComics } from './comicsActions'

const initialState = {
  allComics: [],
  allComicsCopy: [],
  comicDetail: {}
}

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    getComicById: (state, action) => {
      state.comicDetail = state.allComics.find(c => parseInt(c.id) === parseInt(action.payload))
    },
    searchComic: (state, action) => {
      const searchComics = state.allComicsCopy.filter(el => el.title.toLowerCase().startsWith(action.payload))
      if (searchComics.length === 0) state.allComics = state.allComicsCopy;
      else state.allComics = searchComics
    },
    orderByName: (state, action) => {
      if (action.payload === 'A-Z') {
        state.allComics = state.allComics.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
      } else if (action.payload === 'Z-A') {
        state.allComics = state.allComics.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllComics.fulfilled, (state, action) => {
      state.allComics = action.payload
      state.allComicsCopy = action.payload
    })
  }
})

export const { getComicById, searchComic, orderByName } = comicsSlice.actions

export default comicsSlice.reducer