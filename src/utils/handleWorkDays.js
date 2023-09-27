export const handleWorkDays = (days) => {
  const weekDays = ["Du", "Se", "Chor", "Pay", "Juma", "Shan"];
  let work = [];
  if (days === "even") {
    work = weekDays.filter((_, index) => index % 2 === 0);
  } else if (days === "odd") {
    work = weekDays.filter((_, index) => index % 2 !== 1);
  } else {
    work = ["Har kuni"];
  }
  return work.join(" ");
};
