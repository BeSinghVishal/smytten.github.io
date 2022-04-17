import {useEffect,useState} from 'react';
const Comic=(props)=>{
    let serial=parseInt([...(window.location.href).split('/')].pop());
    if(!serial){
        serial=0
    }
    const [curr,setCurr]=useState(null)
    const[cno,setCno]=useState(serial);
    const [loading,setLoading]=useState(false)
    console.log(cno,'cno');
useEffect(()=>{
let URL=`https://xkcd.com/info.0.json`;
if(cno!==0){
    URL=`https://xkcd.com/${cno}/info.0.json`
}
    fetch(URL,{method:'GET'})
  .then(response => response.json())
  .then(data => {setCurr(data)
    setLoading(false);
    urlHandler();
});
},[cno])
const urlHandler=()=>{
    let url=window.location.href;
    let strArr=url.split('/');
    let indx=strArr[strArr.length-1];
    strArr.pop();
    strArr.push(`${cno}`);
    if(indx==''||`${cno}`!==indx){
   window.location.replace(strArr.join('/'));
    }
}
return <div>
{console.log('curr',curr)}
<h1>{!!curr?curr.title:''}</h1>
<div className='comic'> 
{curr&&!loading?<a title={curr.alt}><img src={curr.img} alt={curr.alt} /></a>:"LOADING....."}
</div>
<button className='prev' onClick={()=>{
    setCno(prev=>prev+1)
    setLoading(true);
}}> prev </button>
<button className='next' onClick={()=>{
    setCno(prev=>prev-1)
    setLoading(true);
}} disabled={cno===0}> Next </button>
</div>
}
export default Comic;