import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { HashLink } from 'react-router-hash-link';
import AlertBox from '../components/AlertBox';

function ContactPage() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [accept, setAccept] = useState(false);
    const [myAlert, setMyAlert] = useState("");

    const handleSetName = (e) => setName(e.target.value);
    const handleSetMail = (e) => setMail(e.target.value);
    const handleSetPhone = (e) => setPhone(e.target.value);
    const handleSetMessage = (e) => setMessage(e.target.value);
    const handleSetAccept = (e) => setAccept(e.target.checked);

    const handleSubmit = (e) => {
        e.preventDefault();
        let lettersNameSurname = /^[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ ]+[ ]{1}[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ]+[-]{0,1}[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ ]*$/;
        let number = /^[0-9]{9}$/;
        let number_field = document.getElementById("phone_nr");
        let name_field = document.getElementById("name_surname");
        let email_field = document.getElementById("email");

        if (!name_field.value.match(lettersNameSurname)) {
            setMyAlert('Podaj imię i nazwisko w pierwszym polu. Imię i nazwisko nie może zawierać cyfr i znaków specjalnych.');
            e.preventDefault();
            return;
        }
        if (email_field.value === "" || number_field.value === "") {
            setMyAlert('Podaj do kontaktu numer telefonu oraz adres email.')
            e.preventDefault();
            return;
        }
        if (number_field.value !== "" && !number_field.value.match(number)) {
            setMyAlert('Numer telefonu może się składać tylko z 9 cyfr.')
            e.preventDefault();
            return;
        }


        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                setMyAlert(error.text);
                return;
            });

        setName("");
        setMail("");
        setPhone("");
        setMessage("");
        setAccept(false);
        setMyAlert('Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy.');
    };

    return (
        <>
            <div id="contact_box">
                <div id="adress">
                    <h3>Biuro</h3>
                    <p>F.U.H. „OXON” Adam Kroker</p>
                    <p>ul. Tadeusza Kościuszki 63/311, 41-500 Chorzów</p>
                    <p><i className="icon-mail"></i> oxon_sl@interia.pl</p>
                    <p><i className="icon-phone"></i> +48 507 133 631, +48 604 958 671</p>
                    <p>NIP: 627 100 41 25</p>
                    <p>REGON: 270338238</p>
                    <p>Nr konta bankowego:</p>
                    <p>44 1160 2202 0000 0004 5127 8932</p>
                </div>
                <div id="form-box">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <input type="text" id="name_surname" name="from_name" value={name} onChange={handleSetName} placeholder="Imię i Nazwisko" required />
                        <input type="email" id="email" name="from_email" value={mail} onChange={handleSetMail} placeholder="Adres email" />
                        <input type="text" id="phone_nr" name="from_phone_nr" value={phone} onChange={handleSetPhone} placeholder="Numer telefonu" />
                        <textarea cols="30" rows="10" name="message" value={message} onChange={handleSetMessage} placeholder="Treść wiadomości" required></textarea>
                        <span>
                            <input type="checkbox" checked={accept} onChange={handleSetAccept} name="clause" id="clause" required />
                            <label htmlFor="clause" >Oświadczam, że wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                                <HashLink smooth to="/polityka-prywatnosci#">
                                    < strong > Polityką prywatności</strong>
                                </HashLink>
                            </label>
                        </span>
                        <button>Wyślij</button>
                    </form>
                    {myAlert !== "" && <AlertBox msg={myAlert} click={() => setMyAlert("")} />}
                </div>
            </div >
            <div id="map-section">
                <div id="map"></div>
                <p id="map-rights">Mapa na podstawie serwisu polska.e-mapa.net</p>
            </div>
        </>
    );
};

export default ContactPage;