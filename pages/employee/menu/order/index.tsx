import { MenuOrderBox } from "@/components/menu/menuOrderBox";
import { MenuOrderContainer } from "@/components/menu/menuOrderContainer";
import MenuOrderItem from "@/components/menu/menuOrderItem";
import MenuOrderItemTitle from "@/components/menu/menuOrderItemTitle";
import { useAuth } from "hooks/common/useAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedMenuAtom } from "store/atoms";
import type { RadioChangeEvent } from "antd";
import { Radio, InputNumber, Input } from "antd";
import ButtonBox, { Button } from "../../../../components/common/btn";
import { MenuOrderContent } from "@/components/menu/menuOrderContent";
import useMakeOrder from "hooks/api/useMakeOrder";

export default function EmployeeMenuOrderPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const [selectedMenu] = useRecoilState(selectedMenuAtom);
  const { isLogin, userInfo } = useAuth();
  const router = useRouter();
  const [hotColdOption, setOption] = useState(1);
  const { makeOrder, errorMessage } = useMakeOrder();
  const [orderRequest, setOrderRequest] = useState("");

  // fix custom hook
  const [quantity, setQuantity] = useState(1);
  const [useCoupon, setUseCoupon] = useState(0);
  const [price, setPrice] = useState(selectedMenu.price);
  const [finalPrice, setFinalPrice] = useState(selectedMenu.price);

  const onOptionChange = (e: RadioChangeEvent) => {
    setOption(e.target.value);
  };

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

  const onRequestChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
    setOrderRequest(e.target.value);
  };

  const onClickOrder = async () => {
    if (confirm(`주문하시겠습니까?`)) {
      console.log("주문 완료");
      await makeOrder({
        userName: userInfo.name,
        userId: userInfo.uid,
        menuName: selectedMenu.name,
        menuId: selectedMenu.id,
        hotColdOption: hotColdOption === 1 ? "hot" : "cold",
        price: price,
        quantity: quantity,
        finalPrice: finalPrice,
        couponQuantity: useCoupon / selectedMenu.couponPrice,
        request: orderRequest,
        status: "준비중",
        orderMemo: "",
      });
    } else {
      console.log("주문 취소");
    }
  };

  useEffect(() => {
    setHeaderTitle("주문하기");
    if (!(isLogin && !userInfo.isManager)) {
      void router.push("/signin");
    }
  }, []);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <MenuOrderContainer>
      <MenuOrderContent>
        <MenuOrderBox>
          <MenuOrderItem>
            <MenuOrderItemTitle>메뉴</MenuOrderItemTitle>
            <strong>{selectedMenu.name}</strong>
          </MenuOrderItem>
          <MenuOrderItem>
            <MenuOrderItemTitle>옵션</MenuOrderItemTitle>
            <Radio.Group onChange={onOptionChange} value={hotColdOption}>
              {selectedMenu.hotAvailable && <Radio value={1}>hot</Radio>}
              {selectedMenu.coldAvailable && <Radio value={2}>cold</Radio>}
            </Radio.Group>
          </MenuOrderItem>
          <MenuOrderItem>
            <MenuOrderItemTitle>수량</MenuOrderItemTitle>
            <InputNumber
              min={1}
              defaultValue={quantity}
              onChange={onQuantityChange}
            />
          </MenuOrderItem>
          <MenuOrderItem>
            <MenuOrderItemTitle>요청사항</MenuOrderItemTitle>
            <Input
              style={{ width: "70%" }}
              showCount
              maxLength={30}
              onChange={onRequestChange}
            />
          </MenuOrderItem>
        </MenuOrderBox>
        <MenuOrderBox>
          <MenuOrderItem>
            <MenuOrderItemTitle>가격</MenuOrderItemTitle>
            <p>{price}원</p>
          </MenuOrderItem>
          <MenuOrderItem>
            <MenuOrderItemTitle>쿠폰사용</MenuOrderItemTitle>
            <InputNumber
              min={0}
              max={Math.min(
                Math.floor(userInfo.coupon / 10) * 10,
                selectedMenu.couponPrice * quantity
              )}
              value={useCoupon}
              step={selectedMenu.couponPrice}
              onChange={onCouponChange}
            />
          </MenuOrderItem>
          <MenuOrderItem>
            <MenuOrderItemTitle>최종금액</MenuOrderItemTitle>
            <strong>{finalPrice}원</strong>
          </MenuOrderItem>
        </MenuOrderBox>
      </MenuOrderContent>
      <Button onClick={onClickOrder} type="button">
        확인
      </Button>
    </MenuOrderContainer>
  );
}
