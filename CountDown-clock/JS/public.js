/**
 * Created by Administrator on 2017/8/15.
 */
function drawball(x,y,r,c){
    pen.beginPath();
    pen.fillStyle =c;
    pen.arc(x,y,r,0,Math.PI*2);
    pen.fill();
    pen.closePath();
}