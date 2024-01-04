const bt_red_0 = document.querySelector("#bt-red-0")
const bt_yellow_0 = document.querySelector("#bt-yellow-0")
const bt_green_0 = document.querySelector("#bt-green-0")
const bt_red_1 = document.querySelector("#bt-red-1")
const bt_yellow_1 = document.querySelector("#bt-yellow-1")
const bt_green_1 = document.querySelector("#bt-green-1")
const bt_red_2 = document.querySelector("#bt-red-2")
const bt_yellow_2 = document.querySelector("#bt-yellow-2")
const bt_green_2 = document.querySelector("#bt-green-2")
const bt_red_3 = document.querySelector("#bt-red-3")
const bt_yellow_3 = document.querySelector("#bt-yellow-3")
const bt_green_3 = document.querySelector("#bt-green-3")
const bt_red_4 = document.querySelector("#bt-red-4")
const bt_yellow_4 = document.querySelector("#bt-yellow-4")
const bt_green_4 = document.querySelector("#bt-green-4")
const bt_red_5 = document.querySelector("#bt-red-5")
const bt_yellow_5 = document.querySelector("#bt-yellow-5")
const bt_green_5 = document.querySelector("#bt-green-5")
const bt_red_6 = document.querySelector("#bt-red-6")
const bt_yellow_6 = document.querySelector("#bt-yellow-6")
const bt_green_6 = document.querySelector("#bt-green-6")
const bt_red_7 = document.querySelector("#bt-red-7")
const bt_yellow_7 = document.querySelector("#bt-yellow-7")
const bt_green_7 = document.querySelector("#bt-green-7")
const gererdados = document.querySelector('#gerardados')
const nomeAluno = document.querySelector('#nomeAluno')
const nomeProf = document.querySelector('#nomeProf')
const turmaSerie = document.querySelector('#turmaSerie')
const insti = document.querySelector('#insti')
const saidaAluno = document.querySelector('#saidaAluno')
const saidaProf = document.querySelector('#saidaProf')
const saidaTurmaSerie = document.querySelector('#saidaTurmaSerie')
const saidaInsti = document.querySelector('#saidaInsti')


let valortotal = 0

let notaPergunta_1 = 0
let notaPergunta_2 = 0
let notaPergunta_3 = 0
let notaPergunta_4 = 0
let notaPergunta_5 = 0
let notaPergunta_6 = 0
let notaPergunta_7 = 0
let notaPergunta_8 = 0

/////////////////////////////////////////////////////////////////////////

bt_red_0.addEventListener('mouseenter', function(){
    bt_red_0.style.border ="5px solid red"
    
    bt_red_0.addEventListener('mouseleave', function(){
        bt_red_0.style.border = ""
    })

        bt_red_0.addEventListener('click', function(){
            bt_red_0.style.backgroundColor = "red"

            notaPergunta_1 = 0
            console.log(notaPergunta_1)
        })

            bt_red_0.addEventListener('dblclick', function(){
                bt_red_0.style.backgroundColor = ""

                notaPergunta_1 = 0
            })
})


bt_yellow_0.addEventListener('mouseenter', function(){
    bt_yellow_0.style.border = "5px solid yellow"

    bt_yellow_0.addEventListener('mouseleave', function(){
        bt_yellow_0.style.border = ""
    })

        bt_yellow_0.addEventListener('click', function(){
            bt_yellow_0.style.backgroundColor = "yellow"
            
            notaPergunta_1 = 6.25
            console.log(notaPergunta_1)
            
        })

            bt_yellow_0.addEventListener('dblclick', function(){
                bt_yellow_0.style.backgroundColor = ""

                notaPergunta_1 = 0
                console.log(notaPergunta_1)
            })
})


bt_green_0.addEventListener('mouseenter', function(){
    bt_green_0.style.border = "5px solid green"

    bt_green_0.addEventListener('mouseleave', function(){
        bt_green_0.style.border = ""
    })

        bt_green_0.addEventListener('click', function(){
            bt_green_0.style.backgroundColor = "green"
            
            notaPergunta_1 =12.5
            console.log(notaPergunta_1)
        })

            bt_green_0.addEventListener('dblclick', function(){
                bt_green_0.style.backgroundColor = ""

                notaPergunta_1 = 0
                console.log(notaPergunta_1)
            })
})

/////////////////////////////////////////////////////////////////////////

bt_red_1.addEventListener('mouseenter', function(){
    bt_red_1.style.border = "5px solid red"
    
    bt_red_1.addEventListener('mouseleave', function(){
        bt_red_1.style.border = ""
    })

        bt_red_1.addEventListener('click', function(){
            bt_red_1.style.backgroundColor = "red"

            notaPergunta_2 = 0
            console.log(notaPergunta_2)
        })

            bt_red_1.addEventListener('dblclick', function(){
                bt_red_1.style.backgroundColor = ""

                notaPergunta_2 = 0
            })
})


bt_yellow_1.addEventListener('mouseenter', function(){
    bt_yellow_1.style.border = "5px solid yellow"

    bt_yellow_1.addEventListener('mouseleave', function(){
        bt_yellow_1.style.border = ""
    })

        bt_yellow_1.addEventListener('click', function(){
            bt_yellow_1.style.backgroundColor = "yellow"
            
            notaPergunta_2 = 6.25
            console.log(notaPergunta_2)
        })

            bt_yellow_1.addEventListener('dblclick', function(){
                bt_yellow_1.style.backgroundColor = ""

                notaPergunta_2 = 0
                console.log(notaPergunta_2)
            })
})



bt_green_1.addEventListener('mouseenter', function(){
    bt_green_1.style.border = "5px solid green"

    bt_green_1.addEventListener('mouseleave', function(){
        bt_green_1.style.border = ""
    })

        bt_green_1.addEventListener('click', function(){
            bt_green_1.style.backgroundColor = "green"
            
            notaPergunta_2 =12.5
            console.log(notaPergunta_2)
        })

            bt_green_1.addEventListener('dblclick', function(){
                bt_green_1.style.backgroundColor = ""

                notaPergunta_2 = 0
                console.log(notaPergunta_2)
            })
})

/////////////////////////////////////////////////////////////////////////

bt_red_2.addEventListener('mouseenter', function(){
    bt_red_2.style.border ="5px solid red"
    
    bt_red_2.addEventListener('mouseleave', function(){
        bt_red_2.style.border = ""
    })

        bt_red_2.addEventListener('click', function(){
            bt_red_2.style.backgroundColor = "red"

            notaPergunta_3 = 0
            console.log(notaPergunta_3)
        })

            bt_red_2.addEventListener('dblclick', function(){
                bt_red_2.style.backgroundColor = ""

                notaPergunta_3 = 0
            })
})


bt_yellow_2.addEventListener('mouseenter', function(){
    bt_yellow_2.style.border = "5px solid yellow"

    bt_yellow_2.addEventListener('mouseleave', function(){
        bt_yellow_2.style.border = ""
    })

        bt_yellow_2.addEventListener('click', function(){
            bt_yellow_2.style.backgroundColor = "yellow"
            
            notaPergunta_3 = 6.25
            console.log(notaPergunta_3)
            
        })

            bt_yellow_2.addEventListener('dblclick', function(){
                bt_yellow_2.style.backgroundColor = ""

                notaPergunta_3 = 0
                console.log(notaPergunta_3)
            })
})


bt_green_2.addEventListener('mouseenter', function(){
    bt_green_2.style.border = "5px solid green"

    bt_green_2.addEventListener('mouseleave', function(){
        bt_green_2.style.border = ""
    })

        bt_green_2.addEventListener('click', function(){
            bt_green_2.style.backgroundColor = "green"
            
            notaPergunta_3 =12.5
            console.log(notaPergunta_3)
        })

            bt_green_2.addEventListener('dblclick', function(){
                bt_green_2.style.backgroundColor = ""

                notaPergunta_3 = 0
                console.log(notaPergunta_3)
            })
})

////////////////////////////////////////////////////////////////////////////

bt_red_3.addEventListener('mouseenter', function(){
    bt_red_3.style.border ="5px solid red"
    
    bt_red_3.addEventListener('mouseleave', function(){
        bt_red_3.style.border = ""
    })

        bt_red_3.addEventListener('click', function(){
            bt_red_3.style.backgroundColor = "red"

            notaPergunta_4 = 0
            console.log(notaPergunta_4)
        })

            bt_red_3.addEventListener('dblclick', function(){
                bt_red_3.style.backgroundColor = ""

                notaPergunta_4 = 0
            })
})


bt_yellow_3.addEventListener('mouseenter', function(){
    bt_yellow_3.style.border = "5px solid yellow"

    bt_yellow_3.addEventListener('mouseleave', function(){
        bt_yellow_3.style.border = ""
    })

        bt_yellow_3.addEventListener('click', function(){
            bt_yellow_3.style.backgroundColor = "yellow"
            
            notaPergunta_4 = 6.25
            console.log(notaPergunta_4)
            
        })

            bt_yellow_3.addEventListener('dblclick', function(){
                bt_yellow_3.style.backgroundColor = ""

                notaPergunta_4 = 0
                console.log(notaPergunta_4)
            })
})


bt_green_3.addEventListener('mouseenter', function(){
    bt_green_3.style.border = "5px solid green"

    bt_green_3.addEventListener('mouseleave', function(){
        bt_green_3.style.border = ""
    })

        bt_green_3.addEventListener('click', function(){
            bt_green_3.style.backgroundColor = "green"
            
            notaPergunta_4 =12.5
            console.log(notaPergunta_4)
        })

            bt_green_3.addEventListener('dblclick', function(){
                bt_green_3.style.backgroundColor = ""

                notaPergunta_4 = 0
                console.log(notaPergunta_4)
            })
})

/////////////////////////////////////////////////////////////////////////


bt_red_4.addEventListener('mouseenter', function(){
    bt_red_4.style.border ="5px solid red"
    
    bt_red_4.addEventListener('mouseleave', function(){
        bt_red_4.style.border = ""
    })

        bt_red_4.addEventListener('click', function(){
            bt_red_4.style.backgroundColor = "red"

            notaPergunta_5 = 0
            console.log(notaPergunta_5)
        })

            bt_red_4.addEventListener('dblclick', function(){
                bt_red_4.style.backgroundColor = ""

                notaPergunta_5 = 0
            })
})


bt_yellow_4.addEventListener('mouseenter', function(){
    bt_yellow_4.style.border = "5px solid yellow"

    bt_yellow_4.addEventListener('mouseleave', function(){
        bt_yellow_4.style.border = ""
    })

        bt_yellow_4.addEventListener('click', function(){
            bt_yellow_4.style.backgroundColor = "yellow"
            
            notaPergunta_5 = 6.25
            console.log(notaPergunta_5)
            
        })

            bt_yellow_4.addEventListener('dblclick', function(){
                bt_yellow_4.style.backgroundColor = ""

                notaPergunta_5 = 0
                console.log(notaPergunta_5)
            })
})


bt_green_4.addEventListener('mouseenter', function(){
    bt_green_4.style.border = "5px solid green"

    bt_green_4.addEventListener('mouseleave', function(){
        bt_green_4.style.border = ""
    })

        bt_green_4.addEventListener('click', function(){
            bt_green_4.style.backgroundColor = "green"
            
            notaPergunta_5 =12.5
            console.log(notaPergunta_5)
        })

            bt_green_4.addEventListener('dblclick', function(){
                bt_green_4.style.backgroundColor = ""

                notaPergunta_5 = 0
                console.log(notaPergunta_5)
            })
})


/////////////////////////////////////////////////////////////////////////


bt_red_5.addEventListener('mouseenter', function(){
    bt_red_5.style.border ="5px solid red"
    
    bt_red_5.addEventListener('mouseleave', function(){
        bt_red_5.style.border = ""
    })

        bt_red_5.addEventListener('click', function(){
            bt_red_5.style.backgroundColor = "red"

            notaPergunta_6 = 0
            console.log(notaPergunta_6)
        })

            bt_red_5.addEventListener('dblclick', function(){
                bt_red_5.style.backgroundColor = ""

                notaPergunta_6 = 0
            })
})


bt_yellow_5.addEventListener('mouseenter', function(){
    bt_yellow_5.style.border = "5px solid yellow"

    bt_yellow_5.addEventListener('mouseleave', function(){
        bt_yellow_5.style.border = ""
    })

        bt_yellow_5.addEventListener('click', function(){
            bt_yellow_5.style.backgroundColor = "yellow"
            
            notaPergunta_6 = 6.25
            console.log(notaPergunta_6)
            
        })

            bt_yellow_5.addEventListener('dblclick', function(){
                bt_yellow_5.style.backgroundColor = ""

                notaPergunta_6 = 0
                console.log(notaPergunta_6)
            })
})


bt_green_5.addEventListener('mouseenter', function(){
    bt_green_5.style.border = "5px solid green"

    bt_green_5.addEventListener('mouseleave', function(){
        bt_green_5.style.border = ""
    })

        bt_green_5.addEventListener('click', function(){
            bt_green_5.style.backgroundColor = "green"
            
            notaPergunta_6 =12.5
            console.log(notaPergunta_6)
        })

            bt_green_5.addEventListener('dblclick', function(){
                bt_green_5.style.backgroundColor = ""

                notaPergunta_6 = 0
                console.log(notaPergunta_6)
            })
})


////////////////////////////////////////////////////////////////////////

bt_red_6.addEventListener('mouseenter', function(){
    bt_red_6.style.border ="5px solid red"
    
    bt_red_6.addEventListener('mouseleave', function(){
        bt_red_6.style.border = ""
    })

        bt_red_6.addEventListener('click', function(){
            bt_red_6.style.backgroundColor = "red"

            notaPergunta_7 = 0
            console.log(notaPergunta_7)
        })

            bt_red_6.addEventListener('dblclick', function(){
                bt_red_6.style.backgroundColor = ""

                notaPergunta_7 = 0
            })
})


bt_yellow_6.addEventListener('mouseenter', function(){
    bt_yellow_6.style.border = "5px solid yellow"

    bt_yellow_6.addEventListener('mouseleave', function(){
        bt_yellow_6.style.border = ""
    })

        bt_yellow_6.addEventListener('click', function(){
            bt_yellow_6.style.backgroundColor = "yellow"
            
            notaPergunta_7 = 6.25
            console.log(notaPergunta_7)
            
        })

            bt_yellow_6.addEventListener('dblclick', function(){
                bt_yellow_6.style.backgroundColor = ""

                notaPergunta_7 = 0
                console.log(notaPergunta_7)
            })
})


bt_green_6.addEventListener('mouseenter', function(){
    bt_green_6.style.border = "5px solid green"

    bt_green_6.addEventListener('mouseleave', function(){
        bt_green_6.style.border = ""
    })

        bt_green_6.addEventListener('click', function(){
            bt_green_6.style.backgroundColor = "green"
            
            notaPergunta_7 =12.5
            console.log(notaPergunta_7)
        })

            bt_green_6.addEventListener('dblclick', function(){
                bt_green_6.style.backgroundColor = ""

                notaPergunta_7 = 0
                console.log(notaPergunta_7)
            })
})

////////////////////////////////////////////////////////////////////////////


bt_red_7.addEventListener('mouseenter', function(){
    bt_red_7.style.border ="5px solid red"
    
    bt_red_7.addEventListener('mouseleave', function(){
        bt_red_7.style.border = ""
    })

        bt_red_7.addEventListener('click', function(){
            bt_red_7.style.backgroundColor = "red"

            notaPergunta_8 = 0
            console.log(notaPergunta_8)
        })

            bt_red_7.addEventListener('dblclick', function(){
                bt_red_7.style.backgroundColor = ""

                notaPergunta_8 = 0
            })
})


bt_yellow_7.addEventListener('mouseenter', function(){
    bt_yellow_7.style.border = "5px solid yellow"

    bt_yellow_7.addEventListener('mouseleave', function(){
        bt_yellow_7.style.border = ""
    })

        bt_yellow_7.addEventListener('click', function(){
            bt_yellow_7.style.backgroundColor = "yellow"
            
            notaPergunta_8 = 6.25
            console.log(notaPergunta_8)
            
        })

            bt_yellow_7.addEventListener('dblclick', function(){
                bt_yellow_7.style.backgroundColor = ""

                notaPergunta_8 = 0
                console.log(notaPergunta_8)
            })
})


bt_green_7.addEventListener('mouseenter', function(){
    bt_green_7.style.border = "5px solid green"

    bt_green_7.addEventListener('mouseleave', function(){
        bt_green_7.style.border = ""
    })

        bt_green_7.addEventListener('click', function(){
            bt_green_7.style.backgroundColor = "green"
            
            notaPergunta_8 =12.5
            console.log(notaPergunta_8)
        })

            bt_green_7.addEventListener('dblclick', function(){
                bt_green_7.style.backgroundColor = ""

                notaPergunta_8= 0
                console.log(notaPergunta_8)
            })
})

///////////////////////////////////////////////////////////////////////

const btm_red_0 = document.querySelector("#btm-red-0")
const btm_yellow_0 = document.querySelector("#btm-yellow-0")
const btm_green_0 = document.querySelector("#btm-green-0")
const btm_red_1 = document.querySelector("#btm-red-1")
const btm_yellow_1 = document.querySelector("#btm-yellow-1")
const btm_green_1 = document.querySelector("#btm-green-1")
const btm_red_2 = document.querySelector("#btm-red-2")
const btm_yellow_2 = document.querySelector("#btm-yellow-2")
const btm_green_2 = document.querySelector("#btm-green-2")
const btm_red_3 = document.querySelector("#btm-red-3")
const btm_yellow_3 = document.querySelector("#btm-yellow-3")
const btm_green_3 = document.querySelector("#btm-green-3")
const btm_red_4 = document.querySelector("#btm-red-4")
const btm_yellow_4 = document.querySelector("#btm-yellow-4")
const btm_green_4 = document.querySelector("#btm-green-4")
const btm_red_5 = document.querySelector("#btm-red-5")
const btm_yellow_5 = document.querySelector("#btm-yellow-5")
const btm_green_5 = document.querySelector("#btm-green-5")
const btm_red_6 = document.querySelector("#btm-red-6")
const btm_yellow_6 = document.querySelector("#btm-yellow-6")
const btm_green_6 = document.querySelector("#btm-green-6")
const btm_red_7 = document.querySelector("#btm-red-7")
const btm_yellow_7 = document.querySelector("#btm-yellow-7")
const btm_green_7 = document.querySelector("#btm-green-7")


let valortotalMatem = 0

let notaPerguntaMa_1 = 0
let notaPerguntaMa_2 = 0
let notaPerguntaMa_3 = 0
let notaPerguntaMa_4 = 0
let notaPerguntaMa_5 = 0
let notaPerguntaMa_6 = 0
let notaPerguntaMa_7 = 0
let notaPerguntaMa_8 = 0




btm_red_0.addEventListener('mouseenter', function(){
    btm_red_0.style.border ="5px solid red"
    
    btm_red_0.addEventListener('mouseleave', function(){
        btm_red_0.style.border = ""
    })

        btm_red_0.addEventListener('click', function(){
            btm_red_0.style.backgroundColor = "red"

            notaPerguntaMa_1 = 0
            console.log(notaPerguntaMa_1)
        })

            btm_red_0.addEventListener('dblclick', function(){
                btm_red_0.style.backgroundColor = ""

                notaPerguntaMa_1 = 0
            })
})


btm_yellow_0.addEventListener('mouseenter', function(){
    btm_yellow_0.style.border = "5px solid yellow"

    btm_yellow_0.addEventListener('mouseleave', function(){
        btm_yellow_0.style.border = ""
    })

        btm_yellow_0.addEventListener('click', function(){
            btm_yellow_0.style.backgroundColor = "yellow"
            
            notaPerguntaMa_1 = 6.25
            console.log(notaPerguntaMa_1)
            
        })

            btm_yellow_0.addEventListener('dblclick', function(){
                btm.yellow_0.style.backgroundColor = ""

                notaPerguntaMa_1 = 0
                console.log(notaPerguntaMa_1)
            })
})


btm_green_0.addEventListener('mouseenter', function(){
    btm_green_0.style.border = "5px solid green"

    btm_green_0.addEventListener('mouseleave', function(){
        btm_green_0.style.border = ""
    })

        btm_green_0.addEventListener('click', function(){
            btm_green_0.style.backgroundColor = "green"
            
            notaPerguntaMa_1 =12.5
            console.log(notaPerguntaMa_1)
        })

            btm_green_0.addEventListener('dblclick', function(){
                btm_green_0.style.backgroundColor = ""

                notaPerguntaMa_1= 0
                console.log(notaPerguntaMa_1)
            })
})

//////////////////////////////////////////////////////////////////////////////////////////////////

btm_red_1.addEventListener('mouseenter', function(){
    btm_red_1.style.border ="5px solid red"
    
    btm_red_1.addEventListener('mouseleave', function(){
        btm_red_1.style.border = ""
    })

        btm_red_1.addEventListener('click', function(){
            btm_red_1.style.backgroundColor = "red"

            notaPerguntaMa_2 = 0
            console.log(notaPerguntaMa_2)
        })

            btm_red_1.addEventListener('dblclick', function(){
                btm_red_1.style.backgroundColor = ""

                notaPerguntaMa_2 = 0
            })
})


btm_yellow_1.addEventListener('mouseenter', function(){
    btm_yellow_1.style.border = "5px solid yellow"

    btm_yellow_1.addEventListener('mouseleave', function(){
        btm_yellow_1.style.border = ""
    })

        btm_yellow_1.addEventListener('click', function(){
            btm_yellow_1.style.backgroundColor = "yellow"
            
            notaPerguntaMa_2 = 6.25
            console.log(notaPerguntaMa_2)
            
        })

            btm_yellow_1.addEventListener('dblclick', function(){
                btm_yellow_1.style.backgroundColor = ""

                notaPerguntaMa_2 = 0
                console.log(notaPerguntaMa_2)
            })
})


btm_green_1.addEventListener('mouseenter', function(){
    btm_green_1.style.border = "5px solid green"

    btm_green_1.addEventListener('mouseleave', function(){
        btm_green_1.style.border = ""
    })

        btm_green_1.addEventListener('click', function(){
            btm_green_1.style.backgroundColor = "green"
            
            notaPerguntaMa_2 =12.5
            console.log(notaPerguntaMa_2)
        })

            btm_green_1.addEventListener('dblclick', function(){
                btm_green_1.style.backgroundColor = ""

                notaPerguntaMa_2= 0
                console.log(notaPerguntaMa_2)
            })
})

////////////////////////////////////////////////////////////////////////////////////////////////

btm_red_2.addEventListener('mouseenter', function(){
    btm_red_2.style.border ="5px solid red"
    
    btm_red_2.addEventListener('mouseleave', function(){
        btm_red_2.style.border = ""
    })

        btm_red_2.addEventListener('click', function(){
            btm_red_2.style.backgroundColor = "red"

            notaPerguntaMa_3 = 0
            console.log(notaPerguntaMa_3)
        })

            btm_red_2.addEventListener('dblclick', function(){
                btm_red_2.style.backgroundColor = ""

                notaPerguntaMa_3 = 0
            })
})


btm_yellow_2.addEventListener('mouseenter', function(){
    btm_yellow_2.style.border = "5px solid yellow"

    btm_yellow_2.addEventListener('mouseleave', function(){
        btm_yellow_2.style.border = ""
    })

        btm_yellow_2.addEventListener('click', function(){
            btm_yellow_2.style.backgroundColor = "yellow"
            
            notaPerguntaMa_3 = 6.25
            console.log(notaPerguntaMa_3)
            
        })

            btm_yellow_2.addEventListener('dblclick', function(){
                btm_yellow_2.style.backgroundColor = ""

                notaPerguntaMa_3 = 0
                console.log(notaPerguntaMa_3)
            })
})


btm_green_2.addEventListener('mouseenter', function(){
    btm_green_2.style.border = "5px solid green"

    btm_green_2.addEventListener('mouseleave', function(){
        btm_green_2.style.border = ""
    })

        btm_green_2.addEventListener('click', function(){
            btm_green_2.style.backgroundColor = "green"
            
            notaPerguntaMa_3 =12.5
            console.log(notaPerguntaMa_3)
        })

            btm_green_2.addEventListener('dblclick', function(){
                btm_green_2.style.backgroundColor = ""

                notaPerguntaMa_3= 0
                console.log(notaPerguntaMa_3)
            })
})

//////////////////////////////////////////////////////////////////////////////////////////////

btm_red_3.addEventListener('mouseenter', function(){
    btm_red_3.style.border ="5px solid red"
    
    btm_red_3.addEventListener('mouseleave', function(){
        btm_red_3.style.border = ""
    })

        btm_red_3.addEventListener('click', function(){
            btm_red_3.style.backgroundColor = "red"

            notaPerguntaMa_4 = 0
            console.log(notaPerguntaMa_4)
        })

            btm_red_3.addEventListener('dblclick', function(){
                btm_red_3.style.backgroundColor = ""

                notaPerguntaMa_4 = 0
            })
})


btm_yellow_3.addEventListener('mouseenter', function(){
    btm_yellow_3.style.border = "5px solid yellow"

    btm_yellow_3.addEventListener('mouseleave', function(){
        btm_yellow_3.style.border = ""
    })

        btm_yellow_3.addEventListener('click', function(){
            btm_yellow_3.style.backgroundColor = "yellow"
            
            notaPerguntaMa_4 = 6.25
            console.log(notaPerguntaMa_4)
            
        })

            btm_yellow_3.addEventListener('dblclick', function(){
                btm_yellow_3.style.backgroundColor = ""

                notaPerguntaMa_4 = 0
                console.log(notaPerguntaMa_4)
            })
})


btm_green_3.addEventListener('mouseenter', function(){
    btm_green_3.style.border = "5px solid green"

    btm_green_3.addEventListener('mouseleave', function(){
        btm_green_3.style.border = ""
    })

        btm_green_3.addEventListener('click', function(){
            btm_green_3.style.backgroundColor = "green"
            
            notaPerguntaMa_4 =12.5
            console.log(notaPerguntaMa_4)
        })

            btm_green_3.addEventListener('dblclick', function(){
                btm_green_3.style.backgroundColor = ""

                notaPerguntaMa_4= 0
                console.log(notaPerguntaMa_4)
            })
})

//////////////////////////////////////////////////////////////////////////////////////////

btm_red_4.addEventListener('mouseenter', function(){
    btm_red_4.style.border ="5px solid red"
    
    btm_red_4.addEventListener('mouseleave', function(){
        btm_red_4.style.border = ""
    })

        btm_red_4.addEventListener('click', function(){
            btm_red_4.style.backgroundColor = "red"

            notaPerguntaMa_5 = 0
            console.log(notaPerguntaMa_5)
        })

            btm_red_4.addEventListener('dblclick', function(){
                btm_red_4.style.backgroundColor = ""

                notaPerguntaMa_5 = 0
            })
})


btm_yellow_4.addEventListener('mouseenter', function(){
    btm_yellow_4.style.border = "5px solid yellow"

    btm_yellow_4.addEventListener('mouseleave', function(){
        btm_yellow_4.style.border = ""
    })

        btm_yellow_4.addEventListener('click', function(){
            btm_yellow_4.style.backgroundColor = "yellow"
            
            notaPerguntaMa_5 = 6.25
            console.log(notaPerguntaMa_5)
            
        })

            btm_yellow_4.addEventListener('dblclick', function(){
                btm_yellow_4.style.backgroundColor = ""

                notaPerguntaMa_5 = 0
                console.log(notaPerguntaMa_5)
            })
})


btm_green_4.addEventListener('mouseenter', function(){
    btm_green_4.style.border = "5px solid green"

    btm_green_4.addEventListener('mouseleave', function(){
        btm_green_4.style.border = ""
    })

        btm_green_4.addEventListener('click', function(){
            btm_green_4.style.backgroundColor = "green"
            
            notaPerguntaMa_5 =12.5
            console.log(notaPerguntaMa_5)
        })

            btm_green_4.addEventListener('dblclick', function(){
                btm_green_4.style.backgroundColor = ""

                notaPerguntaMa_5= 0
                console.log(notaPerguntaMa_5)
            })
})

/////////////////////////////////////////////////////////////////////////////////////////

btm_red_5.addEventListener('mouseenter', function(){
    btm_red_5.style.border ="5px solid red"
    
    btm_red_5.addEventListener('mouseleave', function(){
        btm_red_5.style.border = ""
    })

        btm_red_5.addEventListener('click', function(){
            btm_red_5.style.backgroundColor = "red"

            notaPerguntaMa_6 = 0
            console.log(notaPerguntaMa_6)
        })

            btm_red_5.addEventListener('dblclick', function(){
                btm_red_5.style.backgroundColor = ""

                notaPerguntaMa_6 = 0
            })
})


btm_yellow_5.addEventListener('mouseenter', function(){
    btm_yellow_5.style.border = "5px solid yellow"

    btm_yellow_5.addEventListener('mouseleave', function(){
        btm_yellow_5.style.border = ""
    })

        btm_yellow_5.addEventListener('click', function(){
            btm_yellow_5.style.backgroundColor = "yellow"
            
            notaPerguntaMa_6 = 6.25
            console.log(notaPerguntaMa_6)
            
        })

            btm_yellow_5.addEventListener('dblclick', function(){
                btm_yellow_5.style.backgroundColor = ""

                notaPerguntaMa_6 = 0
                console.log(notaPerguntaMa_6)
            })
})


btm_green_5.addEventListener('mouseenter', function(){
    btm_green_5.style.border = "5px solid green"

    btm_green_5.addEventListener('mouseleave', function(){
        btm_green_5.style.border = ""
    })

        btm_green_5.addEventListener('click', function(){
            btm_green_5.style.backgroundColor = "green"
            
            notaPerguntaMa_6 =12.5
            console.log(notaPerguntaMa_6)
        })

            btm_green_5.addEventListener('dblclick', function(){
                btm_green_5.style.backgroundColor = ""

                notaPerguntaMa_6= 0
                console.log(notaPerguntaMa_6)
            })
})

///////////////////////////////////////////////////////////////////////////////////

btm_red_6.addEventListener('mouseenter', function(){
    btm_red_6.style.border ="5px solid red"
    
    btm_red_6.addEventListener('mouseleave', function(){
        btm_red_6.style.border = ""
    })

        btm_red_6.addEventListener('click', function(){
            btm_red_6.style.backgroundColor = "red"

            notaPerguntaMa_7 = 0
            console.log(notaPerguntaMa_7)
        })

            btm_red_6.addEventListener('dblclick', function(){
                btm_red_6.style.backgroundColor = ""

                notaPerguntaMa_7 = 0
            })
})


btm_yellow_6.addEventListener('mouseenter', function(){
    btm_yellow_6.style.border = "5px solid yellow"

    btm_yellow_6.addEventListener('mouseleave', function(){
        btm_yellow_6.style.border = ""
    })

        btm_yellow_6.addEventListener('click', function(){
            btm_yellow_6.style.backgroundColor = "yellow"
            
            notaPerguntaMa_7 = 6.25
            console.log(notaPerguntaMa_7)
            
        })

            btm_yellow_6.addEventListener('dblclick', function(){
                btm_yellow_6.style.backgroundColor = ""

                notaPerguntaMa_7 = 0
                console.log(notaPerguntaMa_7)
            })
})


btm_green_6.addEventListener('mouseenter', function(){
    btm_green_6.style.border = "5px solid green"

    btm_green_6.addEventListener('mouseleave', function(){
        btm_green_6.style.border = ""
    })

        btm_green_6.addEventListener('click', function(){
            btm_green_6.style.backgroundColor = "green"
            
            notaPerguntaMa_7 =12.5
            console.log(notaPerguntaMa_7)
        })

            btm_green_6.addEventListener('dblclick', function(){
                btm_green_6.style.backgroundColor = ""

                notaPerguntaMa_7= 0
                console.log(notaPerguntaMa_7)
            })
})

////////////////////////////////////////////////////////////////////////////////

btm_red_7.addEventListener('mouseenter', function(){
    btm_red_7.style.border ="5px solid red"
    
    btm_red_7.addEventListener('mouseleave', function(){
        btm_red_7.style.border = ""
    })

        btm_red_7.addEventListener('click', function(){
            btm_red_7.style.backgroundColor = "red"

            notaPerguntaMa_8 = 0
            console.log(notaPerguntaMa_8)
        })

            btm_red_7.addEventListener('dblclick', function(){
                btm_red_7.style.backgroundColor = ""

                notaPerguntaMa_8 = 0
            })
})


btm_yellow_7.addEventListener('mouseenter', function(){
    btm_yellow_7.style.border = "5px solid yellow"

    btm_yellow_7.addEventListener('mouseleave', function(){
        btm_yellow_7.style.border = ""
    })

        btm_yellow_7.addEventListener('click', function(){
            btm_yellow_7.style.backgroundColor = "yellow"
            
            notaPerguntaMa_8 = 6.25
            console.log(notaPerguntaMa_8)
            
        })

            btm_yellow_7.addEventListener('dblclick', function(){
                btm_yellow_7.style.backgroundColor = ""

                notaPerguntaMa_8= 0
                console.log(notaPerguntaMa_8)
            })
})


btm_green_7.addEventListener('mouseenter', function(){
    btm_green_7.style.border = "5px solid green"

    btm_green_7.addEventListener('mouseleave', function(){
        btm_green_7.style.border = ""
    })

        btm_green_7.addEventListener('click', function(){
            btm_green_7.style.backgroundColor = "green"
            
            notaPerguntaMa_8 =12.5
            console.log(notaPerguntaMa_8)
        })
            btm_green_7.addEventListener('dblclick', function(){
                btm_green_7.style.backgroundColor = ""

                notaPerguntaMa_8= 0
                console.log(notaPerguntaMa_8)
            })
})


///////////////////////////////////////////////////////////////////////

gererdados.addEventListener('click', function(){

    valortotal = notaPergunta_1 + notaPergunta_2 + notaPergunta_3 + notaPergunta_4 
    + notaPergunta_5 + notaPergunta_6 + notaPergunta_7 + notaPergunta_8


    valortotalMatem = notaPerguntaMa_1 + notaPerguntaMa_2 + notaPerguntaMa_3 + notaPerguntaMa_4
    + notaPerguntaMa_5 + notaPerguntaMa_6 + notaPerguntaMa_7 + notaPerguntaMa_8

    console.log(valortotal)
    console.log(nomeAluno.value)
    console.log(nomeProf.value)
    console.log(turmaSerie.value)
    console.log(insti.value)

    saidaAluno.textContent = "Aluno " + nomeAluno.value
    saidaProf.textContent = "Professor(a) " +nomeProf.value
    saidaTurmaSerie.textContent = "Turma/Série " + turmaSerie.value
    saidaInsti.textContent = "Instituição de ensino " + insti.value



    var data = [
        { 
            x: ['portugues', 'matematica'],
            y: [valortotal, valortotalMatem],
            type: 'bar'
        }
    ];
    
    Plotly.newPlot('meuGrafico', data);

})
