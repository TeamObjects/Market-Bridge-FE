import CartInformation from '@/components/(cart)/CartInformation';
import CartList from '@/components/(cart)/CartList';

const Cart = () => {
  return (
    <main className="flex flex-col w-[100%] h-[100vh]">
      <div className="flex h-[133px] justify-center items-center text-4xl font-bold">
        장바구니
      </div>
      <div className="flex w-[100%] h-[80%]">
        <CartList />
        <CartInformation />
      </div>
    </main>
  );
};

export default Cart;
