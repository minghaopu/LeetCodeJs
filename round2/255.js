/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    let st = [];
    let low = -Infinity;
    let top = -1;
    for (let num of preorder) {
        if (num < low) return false;
        while (st.length !== 0 && num > st[top]) {
            low = st.pop();
            top--;
        }
        st.push(num);
        top++;
    }
    return true;
};

var verifyIneorder = function(inorder) {
  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i] - inorder[i-1] < 0) return false;
  }
  return true;
}

var verifyPostorder = (postorder) => {
  let st = [];
  let high = Infinity;
  let top = -1;
  for (let i = postorder.length - 1; i >= 0; i--) {
    let num = postorder[i];
    if (num > high) return false;
    while (top < 0 && num < st[top]) {
      high = st.pop();
      top--;
    }
    st.push(num);
    top++;
  }
  return true;
}