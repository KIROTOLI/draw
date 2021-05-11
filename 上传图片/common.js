window.addEventListener('load',()=>{
    let upload=document.querySelector('#file')
    let list=document.querySelector('.list')
    let file=document.querySelector('.file')
    upload.addEventListener('change',function(){
        for(let item of this.files){
            let li=document.createElement('li')
            li.innerHTML=`
            <div class="close">x</div>
                <img src="${item.name}" alt="">
            `
            list.insertBefore(li,file)
        }
    })
    list.addEventListener('click',(e)=>{
        if(e.target.className=='close'){
            list.removeChild(e.target.parentNode)
        }
    })
})