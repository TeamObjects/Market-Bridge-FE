import CartAddress from './CartAddress';
import CartPayInformation from './CartPayInformation';

const CartInformation = () => {
  return (
    <aside className="flex flex-col w-[30%] h-[80%] items-center ">
      <CartAddress />
      <CartPayInformation />
    </aside>
  );
};

export default CartInformation;
