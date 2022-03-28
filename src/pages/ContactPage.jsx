import React, { useState } from 'react';

function ContactPage() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSetName = (e) => setName(e.target.value);
    const handleSetMail = (e) => setMail(e.target.value);
    const handleSetPhone = (e) => setPhone(e.target.value);
    const handleSetMessage = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setMail("");
        setPhone("");
        setMessage("");
    };

    return (
        <div id="contact_box">
            <div id="adress">
                <h3>Biuro</h3>
                <p>F.U.H. „OXON” Adam Kroker</p>
                <p>ul. Tadeusza Kościuszki 63, 41-503 Chorzów</p>
                <p><i class="icon-mail"></i> oxon_sl@interia.pl</p>
                <p><i class="icon-phone"></i> +48 507 133 631, +48 604 958 671</p>
                <p>NIP: 627 100 41 25</p>
                <p>REGON: 270338238</p>
                <p>Nr konta bankowego:</p>
                <p>52 1952 0000 5465 0085 6789 8545</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={handleSetName} placeholder="Imię i Nazwisko" />
                    <input type="text" value={mail} onChange={handleSetMail} placeholder="Adres email" />
                    <input type="text" value={phone} onChange={handleSetPhone} placeholder="Numer telefonu" />
                    <textarea cols="30" rows="10" value={message} onChange={handleSetMessage} placeholder="Treść wiadomości"></textarea>
                    <button>Wyślij</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;