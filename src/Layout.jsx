import React, { useEffect, useState } from 'react';
import axios from "axios";
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Fill from './Components/Fill';
import Top from './Components/Top';
import Head from './Components/Head';



const Layout=()=>{
const [search ,setSearch]=useState("");
const [val1,setValue]=useState('');
const [movie, setMovie]=useState([]);
const [top,setTop]=useState([]);
const [horror,setHorror]=useState([]);
const [animation,setAnimation]=useState([]);
const [scifi,setSciFi]=useState([]);
const [romantic,setRomantic]=useState([]);

const inputEvent=(e)=>{
  setSearch(e.target.value);
}

const API_Key="2b9911b777000a14126dc1f921515408";

useEffect(()=>{
  getTopMovies();
  getHorrorMovies();
  getAnimatedMovies();
  getSciFiMovies();
  getRomanticMovies();
},[]);

const getMovies=async()=>{
  if(search===""){
    setValue("Please Enter Your Movie")
  }
  else{
    setValue("")
  const result1=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${search}`);
  setMovie(result1.data.results);
}
}

const showResult=()=>{
  getMovies();
  setSearch("");
}

const getTopMovies=async()=>{
  const result2=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`);
  setTop(result2.data.results);
}

const getHorrorMovies=async()=>{
  const result2=await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=27`);
  console.log(result2.data.results);
  setHorror(result2.data.results);
}

const getAnimatedMovies=async()=>{
  const result2=await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=12`);
  setAnimation(result2.data.results);
}

const getRomanticMovies=async()=>{
  const result2=await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=10749`);
  setRomantic(result2.data.results);
}

const getSciFiMovies=async()=>{
  const result2=await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=878`);
  setSciFi(result2.data.results);
}

return(
  <>
  <Nav/>
  <Banner val1={val1} search={search} inputEvent={inputEvent} showResult={showResult}/>
  <Fill val1={val1}/>
  <div className="container">
  <Movies movie={movie}/>
  </div>
  <div className="container">
  <Movies movie={movie}/>
  </div>
  <Head name="Rated"/>
  <div className="main-box">
    <Top top={top}/>
  </div>
  <Head name="Horror"/>
  <div className="main-box">
    <Top top={horror}/>
  </div>
  <Head name="Animated"/>
  <div className="main-box">
    <Top top={animation}/>
  </div>
  <Head name="Romantic"/>
  <div className="main-box">
    <Top top={romantic}/>
  </div>
  <Head name="Sci-Fi"/>
  <div className="main-box">
    <Top top={scifi}/>
  </div>
  </>
);
}
export default Layout;
