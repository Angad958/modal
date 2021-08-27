'use strict';
const modal=document.querySelector('.modal');
const CloseModal=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
const showmodal=document.querySelectorAll('.show-modal');
for(let i=0;i<showmodal.length;i++)
{
    showmodal[i].addEventListener('click',function()
    {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');


    });
}
const closemodal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
CloseModal.addEventListener('click',closemodal);
overlay.addEventListener('click',closemodal);
document.addEventListener('keydown',function (e)
{
    const key=e.key;
    console.log(key);
    if(key=='Escape')
    {
        closemodal();
        
    }

});
