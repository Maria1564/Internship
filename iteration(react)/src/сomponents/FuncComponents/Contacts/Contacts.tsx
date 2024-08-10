
const Contacts = () => {
    return (
        <div className="contacts">
            <h2>Контакты</h2>
            <ul>
                <li className="contacts__item-list">
                    <a className="contacts__link" href="#"><b>Телефон:</b> +7 (495) 123-45-67</a>
                </li>
                <li className="contacts__item-list">
                    <a className="contacts__link" href="#"><b>Telegram:</b>  @pet_kennel_moscow</a>
                </li>
                <li className="contacts__item-list">
                    <a className="contacts__link" href="#"><b>Gmail:</b> petkennel.moscow@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts