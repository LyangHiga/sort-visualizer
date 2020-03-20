const sleep = m => new Promise(r => setTimeout(r, m));

export const changeAllColor = (i, color) => {
  const arrBars = document.getElementsByClassName('arr-bar');
  for (let j = 0; j < i; j++) {
    const bar1 = arrBars[j].style;
    bar1.backgroundColor = color;
  }
};

export async function selectionAnimation(i, j, color) {
  //   animate bar[i] and bar[j]
  const arrBars = document.getElementsByClassName('arr-bar');
  const bar1 = arrBars[i].style;
  const bar2 = arrBars[j].style;
  bar1.backgroundColor = 'red';
  bar2.backgroundColor = 'red';
  await sleep(1);
  bar1.backgroundColor = color;
  bar2.backgroundColor = color;
}

export const sortedAnimation = i => {
  //   sorted intem in black
  const arrBars = document.getElementsByClassName('arr-bar');
  const bar1 = arrBars[i].style;
  bar1.backgroundColor = 'black';
};

export const swapAnimation = (i, j) => {
  const arrBars = document.getElementsByClassName('arr-bar');
  const bar1 = arrBars[i].style;
  let height1 = bar1.height;
  const bar2 = arrBars[j].style;
  let height2 = bar2.height;
  bar1.height = `${height2}`;
  bar2.height = `${height1}`;
};
