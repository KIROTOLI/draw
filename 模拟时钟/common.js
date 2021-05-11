window.addEventListener('load',()=>{
    const hour=document.querySelector(".hour>span")
    const minute=document.querySelector(".minute>span")
    const second=document.querySelector(".second>span")

    const running=document.querySelector(".running>span")
    const paused=document.querySelector(".paused>span")

    const toast =document.querySelector('.toast')

    const gettime=()=>{
    const  nowtime=new Date()
    const hours=nowtime.getHours()
    hour.innerHTML=hour<10 ? '0' +hours:hours;
    const minutess=nowtime.getMinutes()
    minute.innerHTML=minutess<10 ? '0' +minutess:minutess
    const seconds=nowtime.getSeconds()
    second.innerHTML=seconds<10? '0'+seconds:seconds
    }
    let ww=null
    let qq=setInterval(function(){
        gettime()
    },1000)
    paused.addEventListener('click',()=>{
        clearInterval(qq)
        clearTimeout(ww)
        toast.style.opacity='0.9'
        toast.innerHTML='时钟已暂停！'
        ww=setTimeout(()=>{
            toast.style.opacity='0'
        },2000)
    })
    running.addEventListener('click',()=>{
        clearInterval(qq)
        clearTimeout(ww)
        qq=setInterval(function(){
            gettime()
        },1000)
        toast.style.opacity='0.9'
        toast.innerHTML='时钟已开始！'
        ww=setTimeout(()=>{
            toast.style.opacity='0'
        },2000)
    })

})