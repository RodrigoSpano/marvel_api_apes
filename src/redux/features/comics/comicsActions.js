import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const API_URI = import.meta.env.VITE_API_URI

export const getAllComics = createAsyncThunk(
  'comics/getAll',
  async () => {
    const { data } = await axios(`${API_URI}/comics?offset=3&limit=30&apikey=${API_KEY}`)
    const results = await data.data.results.map(c => ({
      id: c.id,
      title: c.title,
      description: c.description,
      pageCount: c.pageCount,
      resourceURI: c.resourceURI,
      dates: c.dates,
      prices: c.prices,
      images: c.images.length ? c.images.map(o => ({ path: `${o.path}.${o.extension}` })) : [{ path: '/assets/confidential.png' }],
      creators: c.creators.items,
      characters: c.characters.items
    }))
    return results
  })