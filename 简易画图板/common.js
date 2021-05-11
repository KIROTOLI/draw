window.addEventListener('load',()=>{
    var color=document.querySelector('#color')
    var range=document.querySelector('#range')
    var colorvalue=color.value,
        rangevalue=range.value;
    var ee=null
    var ff=null

    var clean=document.querySelector('#clear')
    var ccc=document.querySelector('#ccc')
    clean.style.backgroundColor=color.value
    ccc.style.backgroundColor=color.value
    color.addEventListener('change',()=>{
        colorvalue=color.value
        clean.style.backgroundColor=color.value
        ccc.style.backgroundColor=color.value
        ccc.innerHTML=color.value
    })
    range.addEventListener('change',()=>{
        rangevalue=range.value
    })

    var flag=true
    var cas=document.querySelector('canvas')
    var dex=cas.getContext('2d')
    var qqq=document.querySelector('#qqq')
    ee=qqq.onclick=function(e){
        ff=null
        cas.onmousedown=function(e){
            console.log(1)
            flag=true
            var casx=cas.offsetLeft
            var casy=cas.offsetTop
            var movex=e.clientX-casx
            var movey=e.clientY-casy
            dex.beginPath()
            dex.strokeStyle=colorvalue
            dex.lineWidth=rangevalue
            dex.moveTo(movex,movey)
            cas.onmousemove=function(e){
                if(flag){
                    console.log(2)
                    var casx=cas.offsetLeft
                    var casy=cas.offsetTop
                    var movex=e.clientX-casx
                    var movey=e.clientY-casy
                    dex.lineTo(movex,movey)
                    dex.stroke()
                    }
            }
        }
        cas.onmouseup=function(){
            flag=false
        }
    }
    clean.addEventListener('click',()=>{
        dex.clearRect(0,0,1000,500)
    })
    var str=document.querySelector('#str')
    ff=str.onclick=function(e){
        ee=null
      cas.onmousedown=function(e){
        console.log(3)
        flag=true
        var casx=cas.offsetLeft
        var casy=cas.offsetTop
        var movex=e.clientX-casx
        var movey=e.clientY-casy
        dex.beginPath()
        dex.strokeStyle=colorvalue
        dex.lineWidth=rangevalue
        dex.moveTo(movex,movey)
        cas.onmousemove=null
       cas.onmouseup=function(e){
            if(flag){
                console.log(4)
            var casx=cas.offsetLeft
            var casy=cas.offsetTop
            var movex=e.clientX-casx
            var movey=e.clientY-casy
            dex.lineTo(movex,movey)
            dex.stroke()
            flag=false
            }
        }
       }
    }
   
})