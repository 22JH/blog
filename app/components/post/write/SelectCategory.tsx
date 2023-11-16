import { getCategory } from "@/app/lib/actions/category.action";
import { changeKrUrl } from "@/app/lib/changeKrUrl";
import { SelectOption } from "@/app/types/category.type";
import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

interface PropType {
  selectCategory: SelectOption[];
  setSelectCategory: (select: SelectOption[]) => void;
}

const createOption = (label: string) => ({
  label: changeKrUrl(label),
  value: label + label,
});

export default function Category({
  selectCategory,
  setSelectCategory,
}: PropType) {
  const [isLoading, setIsLoading] = useState(false);
  const [defaultOption, setDefaultOption] = useState<SelectOption[]>([]);
  const handleCreate = (inputValue: string) => {
    try {
      setIsLoading(true);
      const newOption: SelectOption = createOption(inputValue);
      setIsLoading(false);
      setSelectCategory([...selectCategory, newOption]);
      setDefaultOption((prev) => [...prev, newOption]);
    } catch (err) {
      throw new Error(`Failed to create category ${err}`);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await getCategory();
        setDefaultOption(category);
      } catch (err: any) {
        throw new Error(`Faild to get categories ${err}`);
      }
    };
    fetchCategory();
  }, []);
  return (
    <CreatableSelect
      isMulti
      value={selectCategory}
      isDisabled={isLoading}
      isLoading={isLoading}
      onCreateOption={handleCreate}
      options={defaultOption}
      isClearable={false}
      onChange={(select) => setSelectCategory(select as SelectOption[])}
    />
  );
}
