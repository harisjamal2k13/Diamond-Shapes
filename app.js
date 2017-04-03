document.write("<h2>Maths Table</h2><br>");
var a = +prompt("Enter Table Number","2,3,4,5")
for (var i = 1; i <11; i++) {
  document.write(a+"x"+i+"="+a*i+"<br>");
}

document.write("<h2>Diamond</h2><br/>");
var a=6;
for(var i=1;i<=a; i++)
{
for(var j=i;j < a; j++)
{
  document.write("&nbsp&nbsp");
}
for(var k=1;k <=(2*i-1) ; k++)
{
  document.write("*");
}
document.write("</br>");

//end--;  
}

for(var i=a;i >=1; i--)
{
for(var j=i;j < a; j++)
{
  document.write("&nbsp&nbsp");
}
for(var k=1;k <=(2*i-1) ; k++)
{
  document.write("*");
}
document.write("</br>");

//end--;  
}

document.write("<h2>Right Angle Triangle</h2><br>");
for(var i=1;i<=8; i++)
{  
for(var j=0;j<i; j++)
{
    document.write("*"); 
}  
 document.write("<br/>");
}
