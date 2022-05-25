let imageArray=['https://images.all-free-download.com/images/graphiclarge/beautiful_scenery_04_hd_pictures_166258.jpg',
'https://wallpaperaccess.com/full/1376490.jpg',
'https://w0.peakpx.com/wallpaper/123/54/HD-wallpaper-scenery-lake-nature-sky-tree-water.jpg',
'https://wallpapercave.com/wp/wp9526935.jpg',
'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg']
let  index=0;let noOfImages=1;
setImage(0);
function setImage(currentIndex){
    let main=document.getElementById('main');
    main.innerHTML = ''
    let divElements= document.createElement('div');
    divElements.className='fade';
    for(let i=0;i<noOfImages;i++){
        let innerDivElements= document.createElement('div');
        let innermostDivElements= document.createElement('div');
        innermostDivElements.innerText=`${currentIndex+1}/${imageArray.length}`;
        innermostDivElements.className='numbertext';
        innerDivElements.appendChild(innermostDivElements);
        let image_element= document.createElement('img');
        image_element.src=imageArray[(currentIndex+i)%imageArray.length];
        image_element.alt=' beautiful mountain Image';
        image_element.width=500;
        image_element.height=300;
        innerDivElements.appendChild(image_element);
        divElements.appendChild(innerDivElements);
    }
    for(let i=0;i<imageArray.length;i++){
        let innerDivElements= document.createElement('div');
        
        divElements.appendChild(innerDivElements);
    }
    main.appendChild(divElements);
}


document.getElementById('next_button').addEventListener('click',nextClick);
document.getElementById('previous_button').addEventListener('click',previousClick);
document.getElementById('dots').addEventListener('click',currentSlide);
function currentSlide(event){
    for(var i = 0; i <= 4; i++) {
        let Elemet= document.getElementById(i);
        Elemet.classList.remove("active");
    }
   let Elemet= document.getElementById(event.target.id);
   Elemet.className+=' active';
    index=Number(event.target.id);
    setImage(Number(event.target.id));
}
function nextClick(){
    setImage((index+1)%imageArray.length);
    if(index===imageArray.length-1){
        index=0;
    }
    else{
        index++;
    }
    for(var i = 0; i <= 4; i++) {
        let Elemet= document.getElementById(i);
        Elemet.classList.remove("active");
    }
   let Elemet= document.getElementById(index);
   Elemet.className+=' active';
    
}
function previousClick(){
    if(index===0){
        index=imageArray.length-1;
    }
    else{
        index--;
    }
    setImage((index)%imageArray.length);
    for(var i = 0; i <= 4; i++) {
        let Elemet= document.getElementById(i);
        Elemet.classList.remove("active");
    }
   let Elemet= document.getElementById(index);
   Elemet.className+=' active';
    
}
