function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  let truthy = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(!!arr[i]);
    if (!!arr[i] === true) truthy.push(arr[i]);
  }

  return truthy;
}

console.log(bouncer([7, "ate", "", false, 9]));
