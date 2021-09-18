import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import cookies from 'universal-cookie';

import './App.css'
import { ChannelListContainer, ChannelContainer } from './components';

const apikey = '73z6svbw6gks';
const client = StreamChat.getInstance(apikey);

const App = () => {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                
                />
                <ChannelContainer

                />

            </Chat>
        </div>
    )
}

export default App
