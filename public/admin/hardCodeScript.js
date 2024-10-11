const observer = new MutationObserver((mutationsList, observer) => {
  let inputTitle = "";
  let inputContent = "";
  const saveButton = Array.from(document.querySelectorAll("button")).find(
    (button) => button.textContent.trim() === "Save"
  );
  const inputTitleDom = document.querySelector('input[name="title"]');
  if (inputTitleDom) {
    inputTitle = inputTitleDom.value;
    inputTitleDom.addEventListener("input", (event) => {
      inputTitle = event.target.value;
    });
  }
  // const inputContentDom = document.querySelector('input[name="content"]');
  // if (inputContentDom) {
  //   inputContent = inputContentDom.value;
  //   inputContentDom.addEventListener("input", (event) => {
  //     inputContent = event.target.value;
  //   });
  // }
  if (saveButton) {
    // console.log("saveButton", saveButton);
    // 找到按鈕後，可以停止觀察
    // observer.disconnect();
    saveButton.addEventListener("click", () => {
      console.log("Save button was clicked!");
      console.log("inputTitle", inputTitle);
      // console.log("inputContent", inputContent);
      // 在這裡處理點擊後的邏輯
    });
  }
});

// 監聽 #root 節點的變化
const rootNode = document.getElementById("root");
if (rootNode) {
  observer.observe(rootNode, { childList: true, subtree: true });
}
