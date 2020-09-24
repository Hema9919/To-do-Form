
var userInput=document.getElementById('user__input');
console.log(userInput)
var submit=document.getElementById("butt");
console.log(submit)
submit.addEventListener('click', submitData);
var msgList=[];
var confirmedMsgs=[];
let msggAll=[];
function submitData(event){
    event.preventDefault();
    var msg=userInput.value;
    console.log(msg);
    var msgCont=document.getElementById("msg__cont");
    var item=document.createElement('li');
    if((msg !== "") && (!msgList.includes(msg))){ 
        msgList.push(msg);
        console.log(msgList);
        var list=document.createElement('ul');
        let msgg= new MassegeGenerator((msgList.indexOf(msg) + 1), `${date()}`, `${time()}`, msg )
        msggAll.push(msgg);
        item.innerHTML=msgg.generateElement();
        console.log(msggAll)
        item.classList.add('item__ok');
        list.classList.add("list")
        list.appendChild(item)
        msgCont.appendChild(list); 
        ok(msg);   
        close();    
    }else if(msg === ""){
        alert("Please write something to add it!");
    }
}
function ok(msg){
    var ok=document.getElementsByClassName("ok");
    if(ok){
        console.log(ok);
        var okArr=Array.from(ok)
        console.log(okArr);
       for(i=0; i<okArr.length; i++){
        console.log(okArr[i]);
        okArr[i].addEventListener('click', function(){
            if(!confirmedMsgs.includes(msg)){
                confirmedMsgs.push(msg);
                console.log(confirmedMsgs)
            }
            
        })
       }
    }else{
        console.log("not here")
    }
}
function close(){
    var close=document.getElementsByClassName("close");
    if(close){
        console.log(close);
        var closeArr=Array.from(close)
        console.log(closeArr);
       for(i=0; i<closeArr.length; i++){
        console.log(closeArr[i]);
        closeArr[i].addEventListener('click', function(){
            closeArr.forEach(function(item){
            console.log(item.parentElement);
            item.parentElement.remove();
            })
            
        })
       }
    }else{
        console.log("noot heeeere");
    }
}
function date(){
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}
function time(){
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let currentTime=`${hours}:${min}:${sec}`;
    return currentTime;
}
time()
function MassegeGenerator(msgId, msgDate, msgTime, msgContent){
    this.id=msgId
    this.content=msgContent
    this.date=msgDate
    this.time=msgTime
    this.generate= ()=>{
        console.log(`${msgId}- ${msgDate}>> ${msgContent} ${msgTime}`);
    }
    this.generateElement= ()=>{
        return `<span class="num">${msgId}</span><span>${msgDate} ${msgTime}</span>
        <h4 class="txt">${msgContent}</h4><span class="close">x</span><span class="ok">ok</span>`;
    }
}