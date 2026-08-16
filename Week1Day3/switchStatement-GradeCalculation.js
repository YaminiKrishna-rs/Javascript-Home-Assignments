function gradeCheck(score) {

    switch (true) {
        case (score>90):
            console.log("Grade is A");
            break;

         case (score>80):
            console.log("Grade is B");
            break; 
            
        case (score>70):
            console.log("Grade is C");
            break;

        case (score>60):
            console.log("Grade is D");
            break;

        case (score>50):
            console.log("Grade is E");
            break;
    
        default:
            console.log("Failed");
            break;
    }
    
}

gradeCheck(75)