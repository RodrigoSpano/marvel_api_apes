import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comics: [],
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
})

export const { getComics } = comicsSlice.actions

export default comicsSlice.reducer