function solution(sizes) {
  const widthArr = [];
  const heightArr = [];
  sizes.forEach((size) => {
    if (size[1] < size[0]) {
      [size[1], size[0]] = [size[0], size[1]];
    }
    widthArr.push(size[0]);
    heightArr.push(size[1]);
  });

  return parseInt(Math.max(...widthArr)) * parseInt(Math.max(...heightArr));
}
