function solution(s, skip, index) {
  const skipArr = [...skip].map((e) => e.charCodeAt());
  return [...s]
    .map((e) => {
      let num = e.charCodeAt();
      for (let i = 0; i < index; i++) {
        num++;
        if (num === 'z'.charCodeAt() + 1) num = 'a'.charCodeAt();
        while (skipArr.includes(num)) {
          num++;
          if (num === 'z'.charCodeAt() + 1) num = 'a'.charCodeAt();
        }
      }
      return String.fromCharCode(num);
    })
    .join('');
}
