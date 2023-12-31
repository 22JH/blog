import { vars } from "@/app/styles/themes/theme.css";

export default function SendBtn({ comment }: { comment: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.2 0.799988L0.799988 10.4L8.79999 15.2M23.2 0.799988L13.6 23.2L8.79999 15.2M23.2 0.799988L8.79999 15.2"
        stroke={
          comment
            ? vars.themeColor.buttonColor.activeColor
            : vars.themeColor.buttonColor.notActiveColor
        }
        strokeWidth="2px"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
