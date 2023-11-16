import { SelectOption } from "@/app/types/category.type";
import {
  category,
  categoryFrame,
  titleFrame,
  dateAndTitleFrame,
} from "./DetailTitleAndDate.css";

interface PropType {
  title: string;
  categories: SelectOption[];
  postDate: string;
}

export default function DetailTitleAndDate({
  title,
  categories,
  postDate,
}: PropType) {
  return (
    <>
      <div className={titleFrame}>
        <h1>{title}</h1>
      </div>
      <div className={dateAndTitleFrame}>
        <div className={categoryFrame}>
          {categories.map((cat) => {
            return <h4 className={category}>{cat.label}</h4>;
          })}
        </div>
        {postDate}
      </div>
    </>
  );
}
