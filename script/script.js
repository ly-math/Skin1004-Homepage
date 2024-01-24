
// nav-bar toggle from here
threeBars.addEventListener('click', () => {
    navBar.classList.add('active');
    navLink.classList.add('active');
});
xIcon.addEventListener('click', ()=> {
    navBar.classList.remove('active');
    navLink.classList.remove('active');
});

// nav-bar dropdown from here
dropDownWrapper.forEach(e => {
    const element = e.querySelector('.dropdown');

    element.addEventListener('click', ()=> {        
        dropDownWrapper.forEach(otherE => {
            if (otherE !== e){  
                otherE.classList.remove('active');
                otherE.classList.remove('show-icon');
                otherE.classList.remove('clicked-color');
            }
        });

        e.classList.toggle('clicked-color');
        e.classList.toggle('show-icon');
        e.classList.toggle('active');
    });
});

// multi dropdown from here
secondDropWrapper.forEach(e => {
    e.addEventListener('click', ()=> {
        secondDropWrapper.forEach(otherE => {
            if (otherE !== e){
                otherE.classList.remove('active');
            }
        });
        e.classList.toggle('active');
    });
});

// Two buttonsfrom here
// two buttons default syle.
    btnOne.style.backgroundColor = 'rgb(231, 231, 231)';
    btnOne.style.borderBottom = '1px solid black';

btnOne.addEventListener('click', () => {
    btnOne.style.backgroundColor = 'rgb(231, 231, 231)';
    btnTwo.style.backgroundColor = '#ffffff';
    btnOne.style.borderBottom = '1px solid black';
    btnTwo.style.borderBottom = 'none';

    newArrival.style.opacity = '0';
    setTimeout( ()=> {
        bestSeller.style.opacity = '1';
    }, 700)
    
});

btnTwo.addEventListener('click', () => {
    btnOne.style.backgroundColor = '#ffffff';
    btnTwo.style.backgroundColor = 'rgb(231, 231, 231)';
    btnOne.style.borderBottom = 'none';
    btnTwo.style.borderBottom = '1px solid black';

    bestSeller.style.opacity = '0';
    setTimeout( ()=> {
        newArrival.style.opacity = '1';
    }, 700)
});

// 