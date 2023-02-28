import "./cart-dropdown.scss"
import Button from "../Button/Button"

function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown