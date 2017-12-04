function esep(){
	var a=0,b=1,z=0;
	for (i=10;i<=25;i++)
	{
		a=a+(i-3);
	}
	document.getElementById("res1").innerHTML="A="+a;
	for (i=1;i<=5;i++)
	{
		b=b*(i+10);
	}
   document.getElementById("res2").innerHTML="B="+b;
   
   for (i=2;i<=10;i++)
	{
		z=z+Math.pow(i,2);
	}
	document.getElementById("res3").innerHTML="Z="+z;
	document.getElementById("res4").innerHTML=b-a+z;
}