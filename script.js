var models = [
    {
        name : 'Ece Ticaret Viski&puro Seti',
        image : 'img/1-viski-pro-seti.jpg',
        link : 'https://www.hepsiburada.com/ece-ticaret-viski-puro-seti-p-HBCV0000391SUQ?magaza=Eceticaret'
    },
    {
        name : 'Cohiba Puro Makası / Kesici',
        image : 'img/2-puro-kesici.webp',
        link : 'https://www.hepsiburada.com/cohiba-puro-makasi-kesici-pm-HBC000006T0CW'
    },
    {
        name : 'Ahşap Puro Seyahat Nemlendirici',
        image : 'img/4-puro-kutusu.webp',
        link : 'https://www.hepsiburada.com/xhang-cedar-ahsap-puro-seyahat-nemlendirici-higrometre-puro-humidor-sigaren-kutusu-ile-tasinabilir-puro-kilifi-tasinabilir-puro-kilif-puro-aksesuarlari-yurt-disindan-pm-HBC0000260N4M'
    },
    {
        name : 'Kil Puro Nemlendirici Neme Için Taşınabilir ',
        image : 'img/5-puro-killi-nemlendirici.webp',
        link : 'https://www.hepsiburada.com/kil-puro-nemlendirici-neme-icin-tasinabilir-tutun-sigara-aksesuarlari-1-adet-tasinabilir-yaprak-tutun-taze-puro-neme-puro-aksesuarlari-pm-HBC0000270XB3'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '1000',
    random : false
};

function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})