export const changeKrUrl = (title: string) => {
  const url = title.replace(/[^\w\s가-힣]/gi, "").replace(/ /g, "-");
  return url;
};
