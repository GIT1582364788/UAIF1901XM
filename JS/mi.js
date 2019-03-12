window.onload = function () {
    // 二维码开始
    let box1 = document.getElementsByClassName("dis")[0]
    let box2 = document.getElementsByClassName("diss")[0]

    box2.style.display = "none"
    box1.onmouseover = function () {
        box2.style.display = "block"
    }
    box1.onmouseout = function () {
        box2.style.display = "none"
    }
    // 二维码结束
    // 购物车开始
    // let box3 = document.getElementsByClassName("shopping-car")[0]
    // let box4 = document.getElementsByClassName("sho")[0]
    // box4.style.display = "none"
    // box3.onmouseover = function () {
    //     box4.style.display = "block"
    // }
    // box3.onmouseout = function () {
    //     box4.style.display = "none"
    // }
    // 购物车结束
    // 搜索移入开始
    let search = document.querySelector(".search-bar")
    let search_btn = document.querySelector(".submit-btn")
    let search_input = document.querySelector(".search-input")
    let flag = true
    let keyword_list = document.querySelector(".keyword-list")
    keyword_list.style.display = "none"
    search.onmouseenter = function () {
        if (!flag) {
            return
        }
        search_input.style.borderColor = "#333"
        search_btn.style.borderColor = "#333"
    }
    search.onmouseleave = function () {
        if (!flag) {
            return
        }
        search_input.style.borderColor = ""
        search_btn.style.borderColor = ""
    }

    search_btn.onmouseenter = function () {
        if (!flag) {

            return
        }
        search_input.style.borderColor = "#333"
        search_btn.style.borderColor = "#ff6700"
        search_btn.style.backgroundColor = "#ff6700"
        search_btn.style.color = "#fff"
    }
    search_btn.onmouseleave = function () {
        if (!flag) {

            return
        }
        search_btn.style.borderColor = "#333"
        search_btn.style.backgroundColor = ""
        search_btn.style.color = ""
    }

    search_input.onfocus = function () {
        flag = false
        search_input.style.borderColor = "#ff6700"
        search_btn.style.borderColor = "#ff6700"
        keyword_list.style.display = "block"
    }
    search_input.onblur = function () {
        flag = true
        search_input.style.borderColor = ""
        search_btn.style.borderColor = ""
        keyword_list.style.display = "none"
    }
    // 搜索结束
    // 选项卡效果开始
    let boxs = document.querySelectorAll(".bannerList-item")
    let cons = document.querySelectorAll(".bannerList-r")
    boxs.forEach(function (v, i) {
        // console.log(v,i)
        v.onmouseenter = function () {
            cons[i].style.display = "block"
        }
        v.onmouseleave = function () {
            cons[i].style.display = "none"
        }
    })

    // boxs.forEach((v,i)=>{
    //     // console.log(v,i)
    //     v.onmouseenter = ()=> cons[i].style.display = "block"
    //     v.onmouseleave = ()=> cons[i].style.display = "none"
    // })

    // cons.forEach((v,i)=>{
    //     // console.log(v,i)
    //     boxs[i].onmouseenter = ()=> v.style.display = "block"
    //     boxs[i].onmouseleave = ()=> v.style.display = "none"
    // })

    // let arr = [0,2,3,4,5,6,7,8,9]
    // let index = 0

    // for(i of arr){
    //     boxs[i].onmouseenter = function(){
    //         cons[this.index].style.display = "block"
    //     }
    //     boxs[i].onmouseenter = function(){
    //         cons[this.index].style.display = "none"
    //     }

    //     // boxs[i].setAttribute('inedx',index)
    //     boxs[i].index = index         //给对象添加属性，指定值是index，每个box里的index都不一样
    //     index+=1
    // }

    // 选项卡效果结束
    // 家电开始(选项卡功能函数)
    function select(n,b) {
        let navs = document.querySelectorAll(n)
        let boxs = document.querySelectorAll(b)
        // alert(boxs.length)
        navs.forEach(function (item, i) {
            item.onmouseenter = function () {
                // nav
                navs.forEach(function (item2) {
                    item2.classList.remove("active")
                })
                this.classList.add("active")
                // box
                boxs.forEach(function (item) {
                    item.classList.remove("active")
                })
                boxs[i].classList.add("active")
            }
        })
    }
    select(".pop1 .ls",".con1 .furni-right")
    select(".pop2 .ls",".con2 .furni-right")
    select(".pop3 .ls",".con3 .furni-right")
    select(".pop4 .ls",".con4 .furni-right")
    select(".pop5 .ls",".con5 .furni-right")
    // 家电结束
    // 上边的栏开始
    // let span = document.querySelectorAll(".navBox nav span")
    // let boxs = document.querySelectorAll(".navBox nav span .box")
    // let nav = document.querySelector(".navBox nav")
    // nav.onmouseenter = function(){
    //     boxs.forEach(function(item){
    //         item.style.transition = "all .5s"
    //     })
    // }
    // nav.onmouseleave = function(){
    //     boxs.forEach(function(item){
    //         item.style.transition = ""
    //     })
    // }
    
    // span.forEach(function(item,i){
    //     item.onmouseenter = function(){
    //         // boxs[i].style.height = "200px"
    //         boxs[i].classList.add("active")
    //     }
    //     item.onmouseleave = function(){
    //         boxs[i].classList.remove("active")
    //     }
    // })
	let lis = document.querySelectorAll(".search-list .nav .link")	
	let listBox = document.querySelectorAll(".search-list .nav .link .list-box")
	lis.forEach(function(item,i){
		item.onmouseenter = function(){
			listBox.forEach(function(item){
				item.style.zIndex = 0
			})
			listBox[i].style.zIndex = 10
		}
	})
    
    // 上边的栏结束
}
