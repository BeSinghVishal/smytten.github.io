import {useEffect, useState} from 'react';
const Random=(props)=>{
const Arr=props.randComic
const [randomArr,setRandomArr]=useState([]);
//const randomArr = useRef([]);
useEffect(()=>{
        if(Arr.length){  
          //  let randomArr=[]; 
            Arr.map((cno)=>{
                   fetch(`https://xkcd.com/${cno}/info.0.json`,{method:'GET'})
         .then(response => response.json())
         .then(data => {setRandomArr(prev=>[...prev,data])});
            })
    }
},[props.randComic])

const selectRandom=(event)=>{
let val=event.target.id;
val=parseInt(val);
let url=window.location.href;
    let strArr=url.split('/');
    strArr.pop();
    strArr.push(`${val}`);
   window.location.replace(strArr.join('/'));
}

return <div className='holder'>
{randomArr.length?randomArr.map((obj)=>{return <div id={obj.num} className='random' > 
<img onClick={selectRandom} id={obj.num} className='random' src={obj.img} alt={obj.alt} />
</div>}):"loading...."}
</div>

}

export default Random;