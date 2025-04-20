/_ checkout section _/

position: absolute;
width: 508px;
height: 319px;
left: 46px;
top: 789px;

/_ purchase btn _/

position: absolute;
width: 508px;
height: 60px;
left: 46px;
top: 1048px;

background: #16DB99;
/_ shadow/sm _/
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 3px;

/_ btn text _/

position: absolute;
width: 139px;
height: 24px;
left: 194px;
top: 18px;

font-family: 'Verdana';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/_ identical to box height, or 150% _/

/_ white _/
color: #FFFFFF;

/_ item price 2 _/

position: absolute;
width: 18px;
height: 24px;
left: 532px;
top: 903px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/_ identical to box height, or 120% _/
text-align: right;

color: #000000;

/_ remove item btn _/

position: absolute;
width: 77px;
height: 22px;
left: 94px;
top: 907px;

font-family: 'Verdana';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
/_ or 200% _/

color: #BBBBBB;

/_ item name 2 _/

position: absolute;
width: 38px;
height: 17px;
left: 46px;
top: 909px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 17px;
/_ identical to box height, or 60% _/

color: #000000;

/_ item price 1 _/

position: absolute;
width: 19px;
height: 24px;
left: 531px;
top: 870px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/_ identical to box height, or 120% _/
text-align: right;

color: #000000;

/_ remove item btn _/

position: absolute;
width: 77px;
height: 22px;
left: 102px;
top: 868px;

font-family: 'Verdana';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
/_ or 200% _/

color: #BBBBBB;

/_ item name 1 _/

position: absolute;
width: 43px;
height: 17px;
left: 46px;
top: 870px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 17px;
/_ identical to box height, or 60% _/

color: #000000;

/_ divider _/

position: absolute;
width: 504px;
height: 0px;
left: 46px;
top: 957px;

border: 2px solid #393333;

/_ total price text _/

position: absolute;
width: 358px;
height: 24px;
left: 46px;
top: 971px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 24px;
/_ identical to box height, or 86% _/

color: #0E0E0E;

/_ total price _/

position: absolute;
width: 371px;
height: 24px;
left: 179px;
top: 971px;

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/_ identical to box height, or 120% _/
text-align: right;

color: #0E0E0E;

/_ title _/

font-family: 'Smythe';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 17px;
/_ identical to box height, or 60% _/

color: #000000;

document.addEventListener("click", function (e) {
if (e.target.dataset.additem) {
handleitemClick(e.target.dataset.additem);
}
});
function handleitemClick(itemChosen) {
const orderList = menuArray.filter(function(itemchoice){
return itemchoice.id === itemChosen;
})[0];

console.log(orderList)
}
