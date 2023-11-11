import "./header.css"

export function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Рената</em>.</strong><br/>
                </h1>
                <div className="header__text">
                    <p>Смотрите, что я для <em>вас</em> связала :</p>
                </div>
            </div>
        </header>
    )
}
