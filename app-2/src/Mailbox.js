/*
 * Component indicating how many emails are in a user's mail box
*/

import React, { Component } from 'react';

class MailBox extends Component{
    render() {
        const unreadMessages = this.props.unreadMessages;
        return(
            <div>
                <h1>Hello!</h1>
                { unreadMessages.length > 0 &&
                    <h2>You have { unreadMessages.length } unread messages.</h2>
                 }
            </div>
        );
    }
}

export default MailBox;