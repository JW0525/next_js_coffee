import React from "react";
import {useSession} from "next-auth/react";
import styled from "@emotion/styled";
import { IMenuData } from "../../index";

const MenuBoxLayout = styled.div<{isCoupon: boolean}>`
  .image-wrapper {
    width: 100%;
    height: 300px;
    object-fit: cover;
    background-color: #f9394e;
  }

  .menu-box {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid wheat;
    text-align: center;

    ul {
      display: flex;
      justify-content: space-between;
    }
  }
  
  .select-coupon {
    background-color: ${(props) => (props.isCoupon && 'yellow')};
  }
`

const MenuBox = (props: {
  menu: IMenuData;
  isCoupon: boolean;
  setIsCoupon: Function;
  submitFormHandler: any;
}) => {
  const { menu, isCoupon, setIsCoupon, submitFormHandler } = props;
  const { data: session, status } = useSession();

  if (!menu) return <></>
  return (
    <MenuBoxLayout isCoupon={isCoupon}>
      <div className="image-wrapper">
        {/*<Image*/}
        {/*  // src={menu.url}*/}
        {/*  src={ImageS}*/}
        {/*  alt='image'*/}
        {/*/>*/}
      </div>
      <div className='menu-box'>{menu.name}</div>
      <div className='menu-box'>{menu.price}</div>
      {
        menu?.option.length > 1 && (
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
      <div className='select-coupon' onClick={() => setIsCoupon(!isCoupon)}>쿠폰으로 구매하기</div>
      <div onClick={submitFormHandler}>
        구매
      </div>
    </MenuBoxLayout>
  )
}

export default MenuBox;