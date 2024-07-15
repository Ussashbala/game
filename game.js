let userscore=0;
let compscore=0;
const all_choices=document.querySelectorAll(".round");
let user_p=document.querySelector("#user-score");
let comp_p=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

// all_choices.forEach((ch)=>{
//     console.log(ch);
//     ch.addEventListener("click",()=>{
//         const user_ch=ch.getAttribute("id");
//         console.log(user_ch);
//     })
    
// });

all_choices[0].addEventListener("click",()=>{
     user_ch=all_choices[0].getAttribute("id");
    play_game();
})
all_choices[1].addEventListener("click",()=>{
    user_ch=all_choices[1].getAttribute("id");
    play_game();
})
all_choices[2].addEventListener("click",()=>{
     user_ch=all_choices[2].getAttribute("id");
    play_game();
})

const comp_gen_ch=()=>{
    let option=["rock","paper","scissor"];
    let ch_idx=Math.floor(Math.random()*3);
    return option[ch_idx];
}
const play_game=()=>{
    comp_ch=comp_gen_ch();
    console.log(user_ch,comp_ch);
    let usewin=true;
    if(user_ch===comp_ch){
        console.log("draw");
        msg.style.backgroundColor="blue";
        msg.innerText="Draw. Play Again"
    }else if(user_ch==="rock"){
        userwin=comp_ch==="paper"?false:true;
        show_result();
    }else if(user_ch==="paper"){
        userwin=comp_ch==="rock"?true:false;
        show_result();
    }
    else if(user_ch==="scissor"){
        userwin=comp_ch==="paper"?true:false;
        show_result();
    }
    
}
const show_result=()=>{
    if(userwin){
        console.log("user win");
        userscore++;
        user_p.innerText=userscore;
        msg.style.backgroundColor="green";
        msg.innerText="You Win"


    }else{
        console.log("comp win");
        compscore++;
        comp_p.innerText=compscore;
        msg.style.backgroundColor="red";
        msg.innerText="You Lose"
    }
}