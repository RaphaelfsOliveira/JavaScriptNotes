const first = () => {
  console.log('hey there');
  second();
  t();
  t3();
  t4();
  console.log('The End');
}

const second = () => {
  setTimeout(() => {
    console.log('Async Hey there');
  }, 2000);
}

const t = () => {
  setTimeout(() => {
    console.log('async opaaa');
  }, 1);
}

const t3 = () => {
  setTimeout(() => {
    console.log('async 3');
  }, 4000);
}

const t4 = () => {
  setTimeout(() => {
    console.log('async 4');
  }, 2522);
}

first();
