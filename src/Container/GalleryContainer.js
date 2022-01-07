import React,{useState,useEffect} from 'react';
import Gallery from '../Presenter/Gallery';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveData, resetInput, saveSrc } from '../modules/GallerySlice';

const body = document.querySelector("body");


export default function GalleryContainer() {
//items 는 img list
//isPop 은 popup 스테이트
// 
    //썸네일 클릭 이벤트 발생시 해당 순번값을 관리하는 state생성
    let [index, setIndex] = useState(0);
    let numbers =12;

    const input = useSelector(state => state.gallery.input);
    const data = useSelector(state => state.gallery.data);
    const dispatch = useDispatch();


    const api_key = "e7ed3b39fe112d7e93d03c19325305e0";
    const base = 'https://www.flickr.com/services/rest/?method=flickr.'
    const url = `${base}interestingness.getList&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1`;
    const url2= `${base}photos.search&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1&privacy_filter=1&tags=${input}`; 
    const url3 = `${base}photos.search&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1&privacy_filter=1&tags=${''}`;


    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                dispatch(saveData(json.data.photos.photo))
            })
    }, []);
    
    return(
        <Gallery 
        setIndex={setIndex} 
        index={index} 
        showPop={showPop} 
        handleValue={handleValue}
        />
    )


    // get input data

    // load input's search and reset input 
    async function handleValue(){
        
        try{
            
        await axios.get( input == '' ? url3 : url2).then(json => {
            console.log(json);
            json.data.photos.photo.length === 0 ?
            alert('there is no pics for this keyword'):
            dispatch(saveData(json.data.photos.photo));
        },[input])

        setTimeout(() => {
            dispatch(resetInput())
        },1000)
        }
        catch(err){
            alert(`error: ${err}`)
        }
    }



    // show Popup image
    function showPop(index){
        const imgSrc = `https://live.staticflickr.com/${data[index].server}/${data[index].id}_${data[index].secret}_b.jpg`;
        //컴포넌트 상단에 있는 data, index스테이트값을 활용해서
        body.style.overflow = "hidden";
        dispatch(saveSrc((imgSrc)));
    }
}