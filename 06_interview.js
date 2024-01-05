function inter(gradScore, hscScore, sscScore, candidateName) {
    
    if (gradScore>=70||hscScore>=80||sscScore>90) {
      console.log(`Congrates ${candidateName} You Are eligibkle for TCS interview`);
    } else{
      console.log(`Unfortunatly ${candidateName} you are not eligible TCS for interview`);
    }
  }
  inter(80, 86, 90, "Tanuja");
  inter(70, 65, 55, "Rutuja")
  inter(60, 79, 88, "Samiksha")