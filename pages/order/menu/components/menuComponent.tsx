import React, {useState} from "react";
import {useSession} from "next-auth/react";
import styled from "@emotion/styled";
import getData from "@/lib/getData";
import {API} from "../../../../config";

const MenuContainer = styled.div<{isCoupon: boolean}>`
  
  .select-coupon {
    background-color: ${(props) => (props.isCoupon && 'yellow')};
  }
`

const MenuComponent = (props: any) => {
  const { menu } = props;
  const { data: session, status } = useSession();
  const { data: userData, isLoading, isError } = getData(`${API.USER}`);
  const { email } = session!.user!;
  const [isCoupon, setIsCoupon] = useState(false);

  if (!userData) return <></>;
  const userInfo = userData!.find((user: any) => user.email === email);

  const submitFormHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    // 유저 정보에 쿠폰이 1 이하로 남아 있는 경우, 쿠폰으로 구매할 수 없다.
    if (userInfo.coupon < 1 && isCoupon) {
      alert('사용 가능한 쿠폰이 없습니다.')
      return;
    }

    const reqBody = {
      menuId: menu.id,
      menuName: menu.name,
      option: 'ice',
      quantity: 1,
      totalPrice: isCoupon ? 0 : menu.price,
      status: 'preparing',
      userEmail: email
    }

    const response = await fetch('/api/order/menu', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <MenuContainer
      isCoupon={isCoupon}
    >
      <div className="image">
        {/*<Image*/}
        {/*  // src={menu.url}*/}
        {/*  src={ImageS}*/}
        {/*  alt='image'*/}
        {/*/>*/}
      </div>
      <div className='menu-box'>{menu.name}</div>
      <div className='menu-box'>{menu.price}</div>
      <div className='select-coupon' onClick={() => setIsCoupon(!isCoupon)}>쿠폰으로 구매하기</div>
      {
        menu.option.length > 1 && (
          <div className='menu-box'>
            <ul>
              {
                menu.option.map((option: string, idx: number) => {
                  return <li key={idx}>{option}</li>
                })
              }
            </ul>
          </div>
        )
      }
      <div onClick={submitFormHandler}>
        구매
      </div>
    </MenuContainer>
  )
}

export default MenuComponent;