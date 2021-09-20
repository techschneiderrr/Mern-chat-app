import React from 'react'
import { ChannelList, userChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const sidebar = ()=>
{
    <div className="channel-list__sidebar">
        <div className="channel-lis__sidebar__icon1">
            <div className="icon1__innr">
                <img src={HospitalIcon} alt="hospiatl" width="30" />
            </div>
        </div>
    </div>
}

const ChannelListContainer = () => {
    return (
        <div>
            ChannelListContainer
        </div>
    )
}

export default ChannelListContainer;
