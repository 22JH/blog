import PostBtn from "../components/svg/navbar/PostBtn";
import HomeBtn from "../components/svg/navbar/HomeBtn";
import GuestBookBtn from "../components/svg/navbar/GuestBookBtn";
// import ResumeBtn from "../components/svg/navbar/ResumeBtn";
export const sidebarLinks = [
  {
    imgURL: HomeBtn,
    route: "/",
    label: "Home",
  },
  {
    imgURL: PostBtn,
    route: "/post/all?page=1",
    label: "Posts",
  },
  {
    imgURL: GuestBookBtn,
    route: "/guest-book",
    label: "Guest book",
  },
  // {
  //   imgURL: ResumeBtn,
  //   route: "/resume",
  //   label: "Resume",
  // },
];
