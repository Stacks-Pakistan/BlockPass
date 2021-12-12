import React, { useState } from 'react';

export default function TableTitle(props) {
    const [text, setText] = useState("Reveal Principal");
    const [isText, setIsText] = useState(false);
    const principal = () => {
        if (isText) {
            setText("Reveal Principal");
            setIsText(false);
        }
        else {
            setText(props.userData.identityAddress);
            setIsText(true);
        }
    }

    return (
        <>
            <h1 className = "mt-4">My Passwords</h1>
            <div className="d-flex flex-row py-4 justify-content-between">
                <button className="btn btn-primary" style={{ fontFamily: 'opensauce-bold', borderRadius: '25px' }} onClick={() => principal()}>{text}</button>
            </div>
        </>
    )
}
