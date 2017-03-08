import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    console.log('Rendering <MessageList />');


    return (
      <main className="messages">
        {
          this.props.messages.map((message) => {
            return(
              <Message username={message.username} content={message.content} key={message.id}/>
            )
          })
        }
        {this.props.oldName &&
        <div className="message system">
           {this.props.oldName} changed their name to {this.props.currentUser.name}
        </div>
      }
      </main>
    );
  }
}
export default MessageList;