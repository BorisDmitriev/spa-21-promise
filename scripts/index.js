// write your code here
document.addEventListener('readystatechange', e => {

    if( e.target.readyState === 'complete' ){

        let promise = new Promise( (resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        });

        promise.then( () => { document.getElementsByClassName('modal')[0].style.display = 'block' } )

    }  

});

document.getElementsByClassName('close')[0].addEventListener( 'click', e => {
    e.target.closest('.modal').style.display = 'none'
} )