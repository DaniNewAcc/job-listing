import './Header.css';


const Header = () => {
    return (
        <header>
            <picture className="header">
                <source className="header__img" srcSet="./images/bg-header-mobile.svg" alt="" media='(max-width: 576px)'/>
                <img className="header__img" src="./images/bg-header-desktop.svg" alt="" />
            </picture>
        </header>
    )
}

export default Header;