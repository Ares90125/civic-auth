export const formattedYear = (): string => {
  return new Date().toLocaleDateString("en", { year: "numeric" });
};
