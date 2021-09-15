const menuIcon = () =>{
    console.log('menu icon clicked');
    const sideBar = document.getElementById('sideBar');
    sideBar.classList.toggle('small-sidebar');
    const largeConatiner = document.getElementById('largeConatiner');
    largeConatiner.classList.toggle('lagrge-container');

}