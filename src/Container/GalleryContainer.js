import React,{useState,useEffect} from 'react';
import Gallery from '../Presenter/Gallery';
import axios from "axios";


const body = document.querySelector("body");


export default function GalleryContainer() {
//items 는 img list
//isPop 은 popup 스테이트
// 
    let [items, setItems] = useState([]);
    let [isPop, setIsPop] = useState(false);
    //썸네일 클릭 이벤트 발생시 해당 순번값을 관리하는 state생성
    let [index, setIndex] = useState(0);
    let [numbers, setNumbers] =useState(12);
    let [imgSrc, setImgSrc] = useState(null);

    let [input, setInput] = useState({searchValue:''});

    const {searchValue} = input;

    const api_key = "e7ed3b39fe112d7e93d03c19325305e0";
    const base = 'https://www.flickr.com/services/rest/?method=flickr.'
    const url = `${base}interestingness.getList&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1`;
    const url2= `${base}photos.search&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1&privacy_filter=1&tags=${searchValue}`; 
    const url3 = `${base}photos.search&api_key=${api_key}&per_page=${numbers}&format=json&nojsoncallback=1&privacy_filter=1&tags=${'바다'}`;


    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                setItems(json.data.photos.photo);
            })
            
    }, []);

    
    const isValue =(e) =>{
        let {value,name} = e.target
        
        let nextValue ={
            ...input,
            [name] : value
        }

        setInput(nextValue);
    }

    return(
        <Gallery 
        items={items} 
        setIsPop ={setIsPop} 
        setIndex={setIndex} 
        isPop={isPop} 
        index={index} 
        showPop={showPop} 
        imgSrc={imgSrc} 
        isValue={isValue} 
        handleValue={handleValue}
        searchValue={searchValue}
        />
    )


    function showPop(index){
        const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;
        //컴포넌트 상단에 있는 items, index스테이트값을 활용해서
        body.style.overflow = "hidden";
        setImgSrc(imgSrc);
    }


    async function handleValue(){
        
        try{
            
        await axios.get( searchValue == '' ? url3 : url2).then(json => {
            console.log(json);
            json.data.photos.photo.length === 0 ?
                alert('there is no pics for this keyword'):
            setItems(json.data.photos.photo);
        },[input])
        setInput('');
        
        }
        catch(err){
            alert(`error: ${err}`)
        }
    }
}