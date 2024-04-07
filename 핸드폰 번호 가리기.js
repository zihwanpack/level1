function solution(phone_number) {
  const blindIndex = phone_number.length - 4;
  return (
    phone_number.slice(0, blindIndex).replace(/\d/g, "*") +
    phone_number.substring(blindIndex)
  );
}
