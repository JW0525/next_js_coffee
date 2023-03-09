import styled from "@emotion/styled";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedOrderHistoryDateAtom } from "store/atoms";

export default function OrderHitoryDate() {
  const [_, setSelectedDate] = useRecoilState(selectedOrderHistoryDateAtom);

  const onDateChange: DatePickerProps["onChange"] = (_, dateString) => {
    setSelectedDate(dateString);
  };

  const getToday = useCallback(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return dayjs().tz("Asia/Seoul");
  }, []);

  return (
    <OrderHistoryDateContainer>
      <Title>날짜</Title>
      <DatePicker
        defaultValue={getToday()}
        size="large"
        onChange={onDateChange}
      />
    </OrderHistoryDateContainer>
  );
}

const OrderHistoryDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
  margin: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 100%;
  font-weight: bold;
`;
