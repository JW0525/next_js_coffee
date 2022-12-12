import styled from "@emotion/styled";
import React from "react";
import textCss from "../../../styles/textCss";
import {Session} from "next-auth";

const TitleLayout = styled.div`
  display: flex;
  align-items: flex-end;
  ${textCss.gray18Bold};
  margin-bottom: -10px;

  span {
    display: flex;
    align-items: flex-end;
    ${textCss.gray18Bold};

    .id {
      ${textCss.gray20Bold};
      color: #AFC8D7;
    }
  }
  
  p {
    ${textCss.gray18Bold};
  }
`

const HomeRecommendListTitle = (props: {
  session: Session;
}) => {
  const { session } = props;

  return (
    <TitleLayout>
      <span>
        <p className='id'>{session?.user!.name}&nbsp;</p>님을 위한&nbsp;
      </span>
      <p>추천 메뉴</p>
    </TitleLayout>
  )
}

export default HomeRecommendListTitle;