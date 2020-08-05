import React, { forwardRef } from 'react'
import { Paper } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({username, message}, ref) => {
    
const isUser = username === message.username;

    return (
        <div ref={ref}>
            <Paper className={isUser ? 'message__username' : 'message'} elevation={2}>
               <p>
                {!isUser && `${message.username || 'Unknown'}:`} {message.text}
               </p> 
            </Paper>  
        </div>
    )
})


export default Message
