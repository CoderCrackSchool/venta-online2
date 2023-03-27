import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as LogoCorona } from "../../assets/crown.svg"
import { UserContext } from "../../contexts/user.context.user"
import { signOutUsser } from "../../utils/firebase/firebase"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import "./nav-bar.css"


const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [isDropDown, setIsDropDown] = useState(false)

    const signOutHandler = async () => {
        const g = await signOutUsser();
        setCurrentUser(null)
    }

    const onHandleDropDown = () => {
        setIsDropDown(!isDropDown)
    }

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <LogoCorona />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutHandler}>
                        LOG OUT
                    </span>) :
                        (<Link className='nav-link' to='/sign-in'>
                            SIGN IN
                        </Link>)}
                    <CartIcon onClick={onHandleDropDown} />
                </div>
            </div>
            {isDropDown && <CartDropdown />}
        </>
    )
}

export default NavBar