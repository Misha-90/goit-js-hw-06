const cat = document.querySelectorAll('#categories > .item');

console.log('Number of categories: ', cat.length);

cat.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);
});