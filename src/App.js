import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

let[좋아요수, 좋아요변경] = useState([0,0,0]);
let[글제목,글제목변경] = useState( ['React 공부하기', 'CSS 공부','자바스크립트 공부하기'] );
let [modal, setModal] = useState(false);
let [count,setCount] = useState(0);
let [입력값, 입력값변경] = useState('');
// let [today,setToday] = useState(new Date())

  return (
    <div className="App">
      <div className='Black-nav'>
        <h1>Jay.erconsolog</h1>
        <div className='flex-grow'></div>
        <button onClick={ ()=>{
          var 새글제목 = [...글제목];
          새글제목[0] = 'Figma 공부하기';
          글제목변경(새글제목);
        }}>글제목 바꾸기</button>
      </div>

      {/* <div className="list">
        <h4 onClick={ ()=>{
          var newcount = [...[count]];
          newcount[0] = count[0]+1;
          setCount(newcount);
        }}> {글제목[0]} </h4>
        <span onClick={()=>{
          var 새로운좋아요수 = [...[좋아요수]];
          새로운좋아요수[0] = 좋아요수[0]+1;
          좋아요변경(새로운좋아요수);
          console.log(새로운좋아요수);
        }}>❤️</span> {좋아요수[0]}
        <p>2월 17일 발행</p>
      </div>
      {
        count[0]%2 == 1 ? <Modal></Modal> : null
      }
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return(
          <div className="list" key={i} id={i}>
          <h4 onClick={()=>{setCount(count+1)}}>{a}</h4>
          <span onClick={(e)=>{ e.stopPropagation();
            var 새로운좋아요수 = [...좋아요수];
            새로운좋아요수[i] = (좋아요수[i]+1);
            // console.log(새로운좋아요수);
            좋아요변경(새로운좋아요수);
          }}>❤️</span> 
          {좋아요수[i]}
          <button className='btn-right' onClick={()=>{
            let 새글제목 = [...글제목];
            새글제목.splice(i,1);
            글제목변경(새글제목);
          }}>Delete</button>
          {/* <p>{today}</p> */}
        </div>
          )
        })
        
      }
        <input onChange={ (e)=> {
          입력값변경(e.target.value); 
          }}/>
        <button onClick={()=>{
          console.log(입력값);
          console.log(...글제목,입력값);
          글제목변경(글제목.concat(입력값));
          좋아요변경(좋아요수.concat(0));
        }
        }>글추가버튼</button>
        {
          count%2 == 1 ? <Modal 글제목={글제목} 함수={
            function change (){
            var 새글제목 = [...글제목];
            새글제목[0] = 'Figma 공부하기';
            글제목변경(새글제목);
          }}></Modal> : null
        }  
    </div>
  );
};

function Modal (props){
  return(
    <div className="modal" >
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button className='button' onClick={props.함수}>글제목 수정할랭</button>
    </div>
  )
}


export default App;
