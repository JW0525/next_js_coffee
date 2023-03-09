import { MenuOrderContainer } from "@/components/menu/menuOrderContainer";
import { useAuth } from "hooks/common/useAuth";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedMenuAtom } from "store/atoms";
import type { RadioChangeEvent } from "antd";
import { Button } from "../../../../components/common/btn";
import { MenuOrderContent } from "@/components/menu/menuOrderContent";
import useMakeOrder from "hooks/api/useMakeOrder";
import useOrderCalculate from "hooks/common/useOrderCalculate";
import ContentItemBox from "@/components/common/contentItemBox";
import MenuOrderName from "@/components/menu/menuOrderName";
import MenuOrderOptoin from "@/components/menu/menuOrderOption";
import MenuOrderQuantity from "@/components/menu/menuOrderQuantity";
import MenuOrderRequest from "@/components/menu/menuOrderRequest";
import MenuOrderPrice from "@/components/menu/menuOrderPrice";
import MenuOrderCoupon from "@/components/menu/menuOrderCoupon";
import MenuOrderFinalPrice from "@/components/menu/menuOrderFinalPrice";

export default function EmployeeMenuOrderPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const [selectedMenu] = useRecoilState(selectedMenuAtom);
  const { userInfo } = useAuth();
  const [hotColdOption, setOption] = useState(1);
  const { makeOrder, errorMessage } = useMakeOrder();
  const [orderRequest, setOrderRequest] = useState("");
  const {
    quantity,
    useCoupon,
    price,
    finalPrice,
    onQuantityChange,
    onCouponChange,
  } = useOrderCalculate();

  const onOptionChange = (e: RadioChangeEvent) => {
    setOption(e.target.value);
  };

  const onRequestChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOrderRequest(e.target.value);
  };

  const onClickOrder = async () => {
    if (confirm(`주문하시겠습니까?`)) {
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
    }
  };

  useEffect(() => {
    setHeaderTitle("주문하기");
  }, []);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <MenuOrderContainer>
      <MenuOrderContent>
        <ContentItemBox>
          <MenuOrderName body={`${selectedMenu.name}`} />
          <MenuOrderOptoin
            onOptionChange={onOptionChange}
            hotColdOption={hotColdOption}
            hotAvailable={selectedMenu.hotAvailable}
            coldAvailable={selectedMenu.coldAvailable}
          />
          <MenuOrderQuantity
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
          <MenuOrderRequest onRequestChange={onRequestChange} />
        </ContentItemBox>
        <ContentItemBox>
          <MenuOrderPrice price={price} />
          <MenuOrderCoupon
            max={Math.min(
              Math.floor(userInfo.coupon / 10) * 10,
              selectedMenu.couponPrice * quantity
            )}
            useCoupon={useCoupon}
            step={selectedMenu.couponPrice}
            onCouponChange={onCouponChange}
          />
          <MenuOrderFinalPrice finalPrice={finalPrice} />
        </ContentItemBox>
      </MenuOrderContent>
      <Button onClick={onClickOrder} type="button">
        확인
      </Button>
    </MenuOrderContainer>
  );
}
