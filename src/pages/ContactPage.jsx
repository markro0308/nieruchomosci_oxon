import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';
import AlertBox from '../components/AlertBox';

function ContactPage() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [myAlert, setMyAlert] = useState("");

    const handleSetName = (e) => setName(e.target.value);
    const handleSetMail = (e) => setMail(e.target.value);
    const handleSetPhone = (e) => setPhone(e.target.value);
    const handleSetMessage = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        let lettersNameSurname = /^[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ ]+[ ]{1}[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ]+[-]{0,1}[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ ]*$/;
        let number = /^[0-9]{9}$/;
        let number_field = document.getElementById("phone_nr");
        let name_field = document.getElementById("name_surname");
        let email_field = document.getElementById("email");

        if (!name_field.value.match(lettersNameSurname)) {
            // alert("Podaj imię i nazwisko w pierwszym polu. Imię i nazwisko nie może zawierać cyfr i znaków specjalnych.");
            setMyAlert('Podaj imię i nazwisko w pierwszym polu. Imię i nazwisko nie może zawierać cyfr i znaków specjalnych.');
            e.preventDefault();
            return;
        }
        if (email_field.value === "" && number_field.value === "") {
            // alert("Podaj do kontaktu numer telefonu lub adres email.");
            setMyAlert('Podaj do kontaktu numer telefonu lub adres email.')
            e.preventDefault();
            return;
        }
        if (number_field.value !== "" && !number_field.value.match(number)) {
            // alert("Numer telefonu może się składać tylko z 9 cyfr.");
            setMyAlert('Numer telefonu może się składać tylko z 9 cyfr.')
            e.preventDefault();
            return;
        }

        setName("");
        setMail("");
        setPhone("");
        setMessage("");
        //  alert("Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy.");
        setMyAlert('Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy.');
    };

    return (
        <>
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
                <div id="form-box">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="name_surname" value={name} onChange={handleSetName} placeholder="Imię i Nazwisko" required />
                        <input type="email" id="email" value={mail} onChange={handleSetMail} placeholder="Adres email" />
                        <input type="text" id="phone_nr" value={phone} onChange={handleSetPhone} placeholder="Numer telefonu" />
                        <textarea cols="30" rows="10" value={message} onChange={handleSetMessage} placeholder="Treść wiadomości" required></textarea>
                        <button>Wyślij</button>
                    </form>
                    {myAlert !== "" && <AlertBox msg={myAlert} click={() => setMyAlert("")} />}
                </div>
            </div>
            <div id="map-section">
                <MapContainer />
            </div>
        </>
    );
};

export default ContactPage;