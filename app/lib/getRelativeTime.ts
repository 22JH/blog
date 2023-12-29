import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const getRelativeTime = (postDate: string) => {
  const date = dayjs(postDate);
  const now = dayjs();

  const diffMinutes = now.diff(date, "minute");
  const diffHours = now.diff(date, "hour");
  const diffDays = now.diff(date, "day");
  const diffWeeks = now.diff(date, "week");
  const diffMonths = now.diff(date, "month");
  const diffYears = now.diff(date, "year");
  if (diffMinutes < 1) {
    return "방금 전";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffWeeks < 5) {
    return `${diffWeeks}주 전`;
  } else if (diffMonths < 12) {
    return `${diffMonths}개월 전`;
  } else {
    return `${diffYears}년 전`;
  }
};
