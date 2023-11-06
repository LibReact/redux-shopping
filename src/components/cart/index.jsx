import { useSelector } from "react-redux"
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/index"
// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  console.log(products)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {
          products.map((product) => <CartItem key={product.id} product={product} />)
        }

        <Styles.CartTotal>
          Total: R$ {productsTotalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
