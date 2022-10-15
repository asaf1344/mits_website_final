let gallery = document.querySelector('#gallery');

let images = {
    img1: {
        url: 'assets/1.jpg',
        type: 'Shoe'
    },
    img2: {
        url: 'assets/2.jpg',
        type: 'Shoe'
    },
    img3: {
        url: 'assets/3.jpg',
        type: 'Shoe'
    },
    img4: {
        url: 'assets/4.jpg',
        type: 'Shoe'
    },
    img5: {
        url: 'assets/5.jpg',
        type: 'Shoe'
    },
    img6: {
        url: 'assets/6.jpg',
        type: 'Mobile'
    },
    img7: {
        url: 'assets/7.jpg',
        type: 'Mobile'
    },
    img8: {
        url: 'assets/8.jpg',
        type: 'Food'
    },
    img9: {
        url: 'assets/9.jpg',
        type: 'Food'
    },
    img10: {
        url: 'assets/10.jpg',
        type: 'Food'
    },
    img11: {
        url: 'assets/11.jpg',
        type: 'Food'
    },
    img12: {
        url: 'assets/12.jpg',
        type: 'Food'
    },
    img13: {
        url: 'assets/13.jpg',
        type: 'Laptop'
    },
    img14: {
        url: 'assets/14.jpg',
        type: 'Laptop'
    },
    img15: {
        url: 'assets/15.jpg',
        type: 'Laptop'
    },
    
}


// variable to store list
let unique_list = ['All'];

let ul = document.querySelector('ul');


let img_key = Object.keys(images);

img_key.forEach(key => {
    gallery.innerHTML += `<div class="images w-full overflow-hidden">
    <img src="${images[key].url}" alt="" class="h-full transition duration-300 hover:scale-125">
</div>`;

if(unique_list.includes(images[key].type) == false){
    unique_list.push(images[key].type);
}
});

unique_list.forEach(list=>{
    ul.innerHTML += `<li class="mx-5 bg-zinc-200 px-4 py-4 cursor-pointer">${list}</li>`
});

li = document.querySelectorAll('li');
li[0].classList.add('bg-sky-600');
li[0].classList.add('text-neutral-50');

li.forEach(list=>{
    list.addEventListener('click',()=>{
        li.forEach(list=>{
            list.classList.remove('bg-sky-600');
            list.classList.remove('text-neutral-50');
        });
        list.classList.add('bg-sky-600');
        list.classList.add('text-neutral-50');


    gallery.innerHTML = '';

    let img_key = Object.keys(images);

    if(list.innerText == 'All'){
        img_key.forEach(key => {
            gallery.innerHTML += `<div class="images w-full overflow-hidden">
            <img src="${images[key].url}" alt="" class="h-full transition duration-300 hover:scale-125">
        </div>`;
        });
    }else{
        img_key.forEach(key => {
            if(images[key].type == list.innerText){
            gallery.innerHTML += `<div class="images w-full overflow-hidden">
            <img src="${images[key].url}" alt="" class="h-full transition duration-300 hover:scale-125">
        </div>`;
            }
    });
    
}
});
});
