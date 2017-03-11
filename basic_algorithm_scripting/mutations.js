
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for (count = 0; count < test.length; count++) {
    if (target.indexOf(test[count]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
