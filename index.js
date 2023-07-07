arr=document.getElementsByClassName("lis");
arr=Array.from(arr);

a=[
    "Heritage",
"SmartPind",
"MioAmore",
"Tikka",
"Sahara",
"SuperDuper",
"BananaLeaf",
"PFC",
"FoodCity",
"Subway",
"CafeCoffeeDay",
"Billoos"
]
arr.forEach(element => {
    element.addEventListener(
        'click',()=>
        {
            let str=element.innerHTML;
            console.log(str);
            // console.log(element.innertext);
            let ele=document.getElementById(str);
            ele.scrollIntoView({behavior:"smooth"})
        }
    )
});