function numberType(num)
{
   if(num>0)
   {
    return console.log(num + " is a positive number");
   }
   else if(num==0){
    return console.log(num + " is a neutral number");
   }
   else {
    return console.log(num + " is a negative number");
   }
   
}
numberType(5);
numberType(0);
numberType(-8);