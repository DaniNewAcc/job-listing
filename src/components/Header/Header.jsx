import './Header.css';


const Header = () => {
    return (
        <picture className="header">
            <source className="header__img" srcSet="./src/assets/images/bg-header-mobile.svg" alt="" media='(max-width: 576px)'/>
            <img className="header__img" src="./src/assets/images/bg-header-desktop.svg" alt="" />
        </picture>
    )
}

export default Header;