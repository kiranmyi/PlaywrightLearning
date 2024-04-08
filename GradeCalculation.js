function gradeCalculation(score)
{
    switch(true)
    {
        case (score<=100 && score>=90):
            {
            console.log('O');
            break;
            }
        case (score<90 && score >=80):
            {
            console.log('A');
            break; 
            }
        case (score<80 && score >=70):
            {
            console.log('B');
            break; 
            }
            case (score<80 && score >=70):
                {
            console.log('C');
            break; 
            }
            case (score<70 && score >=60):
                {
            console.log('D');
            break; 
            }
            case (score<60 && score >=50):
                {
            console.log('E');
            break; 
            }
            default:
                {
                    console.log('Fail/F');
                }


    }
   
}
gradeCalculation(85);