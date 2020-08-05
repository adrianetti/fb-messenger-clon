import React, { useEffect, useState } from 'react';
import './App.css';
import { Input, IconButton, FormControl} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt("Hi, please set your username"));
  }, [])

  useEffect(() => {

    //this useEffect hooks is used to load the data from db once the app loads

    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(docs => ({message: docs.data(), id: docs.id})));
    })
  }, []);

  const addMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username, 
      text: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
    });
    setInput("");
  }


  return (
    <div className="App">
      <img className="logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger-logo"/>
      
      <h1 className="welcome__message">
        Hi, {username}
      </h1>

       <form className="app__form">
        <FormControl className="app__formControl">
        <Input
          className="app__input"
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        <IconButton
          className="app__iconButton"
          disabled = {!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addMessage}>

            <SendIcon className="icon__color"/>

        </IconButton>
        </FormControl>
      </form> 
        
            
        <FlipMove>  
          {
            messages.map(({id, message}) => (
            <Message
            key={id}
            username = {username}
            message = {message}/>
            )) 
          }
        </FlipMove>   

    </div>
  );
}

export default App;
