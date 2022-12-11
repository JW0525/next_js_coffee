import React from "react";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import {palette} from "../../../styles/baseSytle";

const HeaderLayout = styled.div<{ exchangeRate: number }>`
  position: relative;
  padding: 25px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), url("/asset/img/mone-style.png");
  background-size: cover;

  > h2 {
    font-size: ${theme.fontSizes.mmd};
    color: ${palette.common.white};
    text-align: center;
  }

  .greeting {
    display: block;
    padding: 25px 0;
    color: ${palette.common.white};
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    
    p {
      font-size: 18px;
      font-weight: 600;
      color: #EFD0D0;
    }
  }
  
  .coupon-box {
    display: grid;
    grid-template-columns: 1fr 100px;
    padding-top: 5px;
    
    .reward-rate {
      p {
        padding-bottom: 5px;
        font-size: 14px;
        font-weight: 700;
        color: ${palette.common.white};
      }
      
      .rate-bar {
        position: relative;
        height: 5px;
        width: 100%;
        background-color: ${palette.common.white};
        border-radius: 5px;
        
        > span {
          position: absolute;
          height: 5px;
          width: ${props => props.exchangeRate * 100 > 100 ? 100 : props.exchangeRate * 100}%;
          border-radius: 5px;
          background-color: #EFD0D0;
        }
      }
    }
    
    > span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 20px;
      color: ${palette.common.white};

      p {
        font-size: 30px;
        font-weight: 700;
        color: #EFD0D0;
        text-align: center;
      }
    }
  }
`

const HomeHeader = (props: {
  session: any;
  star: any;
  exchangeRate: any;
  exchangeBtn: any;
  exchangeCondition: any;
  clickHandler: any;
}) => {
  const { session, star, exchangeRate, exchangeBtn, exchangeCondition, clickHandler } = props;

  return (
    <HeaderLayout exchangeRate={exchangeRate}>
      <h2>WEBLING MEMBERS</h2>
      <span className='greeting'>
          { session && <p>{`${session.user!.name} 님`}</p> }
        위블링과 함께 오늘 하루도 즐겨요!
        </span>
      { !isNaN(star) && (
        <div className='coupon-box'>
          <div className='reward-rate'>
            {
              !exchangeBtn
                ? <p>{exchangeCondition - star} until next Reward</p>
                : <p onClick={clickHandler}>쿠폰으로 전환하기</p>
            }
            <div className='rate-bar'>
              <span />
            </div>
          </div>
          <span>
            <p>{star}</p>&nbsp;/ {exchangeCondition} ★
          </span>
        </div>
      )}
    </HeaderLayout>
  )
}

export default HomeHeader;