import CartContext from "./context/CartContext";
import MainNavigator from "./Navigation";

export default function App() {
  return (
    <CartContext>
      <MainNavigator/>
    </CartContext>
  );
}