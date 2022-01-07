import {configureStore} from'@reduxjs/toolkit';
import GalleryReducer from '../src/modules/GallerySlice';

export default configureStore({
    reducer:{
        gallery: GalleryReducer,
    },
})