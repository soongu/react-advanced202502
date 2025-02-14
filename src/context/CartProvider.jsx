import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = ({ children }) => {

  // 장바구니를 렌더링할 목록
  const [cartItems, setCartItems] = useState([]);
  // 총액을 상태관리
  const [totalPrice, setTotalPrice] = useState(0);

  const [cartIsShown, setCartIsShown] = useState(false);

  const openModal = () => setCartIsShown(true);
  const closeModal = () => setCartIsShown(false);

  // 장바구니 배열에 데이터를 추가하는 함수
  const handleAddToCartItem = (newCartItem) => {

    // 원본 배열을 복사
    const existingItems = [...cartItems]; 
    // 이미 장바구니에 있는 항목인지를 체크
    const existingItem = existingItems.find(cartItem => cartItem.id === newCartItem.id);
    
    if (existingItem) { // 수량과 가격을 갱신
      existingItem.amount += newCartItem.amount;
      existingItem.price += newCartItem.price;
      setCartItems(existingItems); // 원본에 복사배열 갱신
    } else { // 배열에 첫 추가
      setCartItems([...cartItems, newCartItem]);
    }
    // 총액 갱신
    setTotalPrice(prev => prev + newCartItem.price);
  };

  const initialValue = {
    cartIsShown: cartIsShown, // 모달을 열고닫는 여부
    openModal: openModal, // 모달 열어주는 함수
    closeModal: closeModal, // 모달 닫아주는 함수
    cartItems: cartItems, // 모달에 렌더링할 장바구니 배열
    addToCartItem: handleAddToCartItem, // 장바구니에 내용을 추가
    totalPrice: totalPrice, // 장바구니 총액
  };

  return (
    <CartContext.Provider value={initialValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
