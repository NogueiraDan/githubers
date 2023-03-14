import React, { useState } from "react";
import axios from 'axios';
import "./card.css";

export default function App() {
  const [input, setInput] = useState();
  const [user, setUser] = useState('');

  const handleShow = () => {

    axios.get(`https://api.github.com/users/${input}`)
    .then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch(()=>{
      alert('Usuário não encontrado')
    })
 
  };

  if(!user){
    return(
      <div className="cardContainer">
      <div className="cardHeader">
        <span>Githubers</span>
      </div>
      <div className="cardSearch">
        <input
          id="search"
          type="text"
          placeholder="Procure um nome de usuário..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="btnSearch" onClick={handleShow}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      
    </div>
    )
  }
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <span>Githubers</span>
      </div>
      <div className="cardSearch">
        <input
          id="search"
          type="text"
          placeholder="Procure um nome de usuário..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="btnSearch" onClick={handleShow}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="cardData">
        <div className="avatarUser">
        <img src={user.avatar_url} id="imgUser"/>
        </div>

        <div className="userInfo">
        <span>{user.name}  (<a href={user.html_url} target="_blank">{user.login}</a>)</span><br/>
        <span>Bio: {user.bio}</span><br/>
        <span>Local: {user.location}</span><br/>
        <span>Seguidores: {user.followers}</span><br/>
        <span>Seguindo: {user.following}</span><br/>
        </div>
        
       
      </div>
    </div>
  );
}
