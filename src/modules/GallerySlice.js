import {createSlice} from '@reduxjs/toolkit';


export const GallerySlice = createSlice({
    name:'gallery',
    initialState: {
        input: '',
        data:[],
        imgSrc:null,
        isPop:false,
    },
    reducers:{
        saveInput: (state, action) =>{
            return {
                ...state, input:action.payload
            }
        },
        resetInput: (state) => {
            
            return{...state, input: '' }
        },
        saveData:(state, action) =>{
            return{
                ...state,data:action.payload
            }
        },
        saveSrc: (state, action) => {
            return{
                ...state,imgSrc:action.payload
            }
        },
        setIsPop: (state, action) => {
            return{
                ...state, isPop: action.payload
            }
        }
        
    }
}
);

export const {saveInput, resetInput, saveData, saveSrc, setIsPop} = GallerySlice.actions;

export default GallerySlice.reducer;