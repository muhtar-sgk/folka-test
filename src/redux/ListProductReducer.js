import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: {},
  isLoading: false,
  error: ''
}

const url = 'https://mocki.io/v1/52c41978-6e31-4ea3-b917-01899e3ed373'

export const getListProduct = () => {
  return dispatch => {
    dispatch(listProductStart())
    axios.get(url)
    .then((result) => {
      dispatch(listProductSuccess(result.data))
    })
    .catch(err => {
      dispatch(listProductFailure(err))
    })
  }
}

export const listProductReducer = createSlice({
  name: 'listProductReducer',
  initialState,
  reducers: {
    listProductStart: state => {
      state.isLoading = true
    },
    listProductSuccess: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    listProductFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {listProductStart, listProductSuccess, listProductFailure} = listProductReducer.actions
export default listProductReducer.reducer