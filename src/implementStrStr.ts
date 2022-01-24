export const strStr = (haystack: string, needle: string): number => {
  if (!needle) return 0;
  const splitted = haystack.split(needle);
  return splitted.length > 1 ? splitted[0].length : -1;
};
