import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedMenuAtom } from "store/atoms";

const useOrderCalculate = () => {
  const [selectedMenu] = useRecoilState(selectedMenuAtom);
  const [quantity, setQuantity] = useState(1);
  const [useCoupon, setUseCoupon] = useState(0);
  const [price, setPrice] = useState(selectedMenu.price);
  const [finalPrice, setFinalPrice] = useState(selectedMenu.price);

  const onQuantityChange = (value: number | null) => {
    if (!value || value <= 0) {
      value = 1;
    }
    setQuantity(value);
    setPrice(value * selectedMenu.price);
    setUseCoupon(0);
    setFinalPrice(value * selectedMenu.price);
  };

  const onCouponChange = (value: number | null) => {
    if (!value) {
      value = 0;
    }
    setUseCoupon(value);
    setFinalPrice(
      price - (value / selectedMenu.couponPrice) * selectedMenu.price
    );
  };

  return {
    quantity,
    useCoupon,
    price,
    finalPrice,
    onQuantityChange,
    onCouponChange,
  };
};

export default useOrderCalculate;
