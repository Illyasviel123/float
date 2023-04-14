window.addEventListener('load',function(){
        let container = document.querySelector('#container')
        let photo = document.querySelectorAll('.photo')
        let width = photo[0].offsetWidth
        let clientWidth = document.documentElement.clientWidth
        let column = Math.floor(clientWidth / width)
        container.style.width = column*width+'px'

        let arr = []
        for(let i = 0 ;i<photo.length;i++){
            if(i<column){
                photo[i].style.top = "0px"
                photo[i].style.left = i*width+"px" 
                arr.push(photo[i].offsetHeight)
            }else{
                let j = 0                                            /*高度最小那行的列数*/
                let min = arr[0]
                for(let i = 0;i<arr.length;i++){                            
                    if(arr[i]<min){
                        min = arr[i]
                        j = i
                    }
                }
                photo[i].style.top = min+"px"
                photo[i].style.left = j*width+"px" 
                arr[j] += photo[i].offsetHeight
            }
        }
})