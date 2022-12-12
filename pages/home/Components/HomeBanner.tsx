import Image from "next/image";
// import Ham from "/public/asset/img/Ham.png";
import React from "react";
import styled from "@emotion/styled";
import textCss from "../../../styles/textCss";

const BannerLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 140px;
  background-color: #F6F5EE;
  box-shadow: 0 4px 4px 0 #d3d2cf;

  > span {
    h6 {
      padding-bottom: 20px;
      ${textCss.gray16Medium};
    }

    h3 {
      font-size: 22px;
    }
  }
}
`
const HomeBanner = () => {

  return (
    <BannerLayout>
      <span>
        <h6>오늘의 조식</h6>
        <h3>햄치즈 샌드위치</h3>
      </span>
      {/*<Image*/}
      {/*  priority*/}
      {/*  src={Ham}*/}
      {/*  height={150}*/}
      {/*  width={150}*/}
      {/*  alt="ham"*/}
      {/*/>*/}
    </BannerLayout>
  )
}

export default HomeBanner;