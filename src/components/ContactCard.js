import React from "react";

import userIcon from '../images/user.png'

const ContactCard = (props) => {
    
    const {id, name, email} = props.contact;

    return (
        <div className="item" key={id} style={{display: 'flex', alignItems: 'center', justifyContent:'space-between', paddingBlock:'10px'}}>
            <div style={{display:'flex', width:'80%'}}>
                <img className="ui avatar image" src={userIcon} alt="user" />
                <div className="content" style={{display: 'flex', flexDirection: 'column', marginLeft:'5px'}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <i 
                className="trash alternate outline icon" 
                style={{color:'red', alignContent:'end'}}
                onClick={() => props.getContactId(id)}
            ></i>
        </div>
    );
}

export default ContactCard;