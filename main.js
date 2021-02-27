const myPara = document.getElementById('myPara');

myPara.classList.add('bold', 'big-font');
myPara.classList.remove('bold');
myPara.classList.replace('big-font', 'red-bg');

console.log(myPara.classList);