import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const getToday = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return dayjs().tz("Asia/Seoul");
};

export const getTodayString = (format?: string) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  if (format) {
    return dayjs().tz("Asia/Seoul").format(format);
  } else {
    return dayjs().tz("Asia/Seoul").format("YYYY-MM-DD");
  }
};
