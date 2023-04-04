const ctgList = document.querySelector('#categories');

console.log('Number of categories:', ctgList.children.length);

const items = [...ctgList.children];

items.forEach(item => {
  const ctgFirstElem = item.firstElementChild;
  const ctgName = ctgFirstElem.textContent;
  const ctgLiCount = ctgFirstElem.nextElementSibling.children.length;
  console.log('Category:', ctgName);
  console.log('Elements:', ctgLiCount);
});
