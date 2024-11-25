import React, { forwardRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiSend, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaChat = React.forwardRef(({ primaryColor, headerColor, logoTimeline, secondaryColor, textColor }, ref) => {

    const [messages, setMessages] = useState([
        { text: "Júlia você vai amar a Yazo, sério, eles nunca deram bola fora comigo!", type: "received" },
        { text: "Eu imagino mesmo!", type: "sent" }
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, type: "sent" }]);
            setNewMessage("");
        }
    };
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="timeline-content">
                        <div className="screenfour">
                            <div className="menuNotch" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                </div>

                            </div>

                            <div className='chatLabel'>
                                <div className="labelmenu">
                                    <div className="labelmenu01">
                                        <Icon path={mdiChevronLeft} size={0.7} style={{ color: textColor }} />
                                        <img
                                            src="/assets/1.jpg"
                                            alt="Foto do Usuário"
                                            style={{ width: '30px', height: '30px', borderRadius: '25px' }}
                                        />
                                        <h6 style={{ color: textColor }}>Ana Clara</h6>
                                    </div>
                                </div>
                                <div className="chat-messages">
                                    <div className="date-label">Hoje</div>
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`chat-bubble ${msg.type}`}
                                            style={{
                                                backgroundColor: msg.type === "sent" ? primaryColor : "#f2f2f2",
                                                color: msg.type === "sent" ? "#fff" : "#000"
                                            }}
                                        >
                                            {msg.text}
                                        </div>
                                    ))}
                                </div>
                                <div className="chat-input">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Escreva uma mensagem"
                                        style={{
                                            backgroundColor: "#b3b3b3",
                                            border: "none",
                                            
                                            borderRadius: "12px",
                                            padding: "10px"
                                        }}
                                    />
                                    <Icon
                                        path={mdiSend}
                                        size={1}
                                        onClick={handleSendMessage}
                                        style={{ color: "#5a5a5a", cursor: "pointer", marginLeft: "10px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default TelaChat;
