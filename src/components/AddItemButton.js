import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";



const AddItemButton = (props) => {

  const {cartID} = useUser()
  const {addToCart} = useCart()

  const handleAdd =() => {
    addToCart(cartID, props.pid)
  }

    return ( 
        <button
            className="addItem"
            onClick={handleAdd}
          >
           
            sumar al carrito
          </button>
    )
}

export default AddItemButton;