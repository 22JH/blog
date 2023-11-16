import { usePathname } from "next/navigation";

export default function PostBtn() {
  const pathname = usePathname();
  const isActive = pathname.includes("/post");
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1236_2090)">
        <path
          d="M0.5 11.7501V2.25006C0.5 1.98484 0.605357 1.73049 0.792893 1.54295C0.98043 1.35542 1.23478 1.25006 1.5 1.25006H5.19C5.41843 1.2434 5.64226 1.31519 5.82421 1.45347C6.00615 1.59175 6.13525 1.78818 6.19 2.01006L6.5 3.25006H12.5C12.7652 3.25006 13.0196 3.35541 13.2071 3.54295C13.3946 3.73049 13.5 3.98484 13.5 4.25006V11.7501C13.5 12.0153 13.3946 12.2696 13.2071 12.4572C13.0196 12.6447 12.7652 12.7501 12.5 12.7501H1.5C1.23478 12.7501 0.98043 12.6447 0.792893 12.4572C0.605357 12.2696 0.5 12.0153 0.5 11.7501Z"
          stroke={isActive ? "white" : "#464646"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8H8.5"
          stroke={isActive ? "white" : "#464646"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1236_2090">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
