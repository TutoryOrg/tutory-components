// Font Size by String
export const fontSz = (size: string) => {
  switch(size){
    case "s": return "0.7em";
    break;
    case "m": return "0.9em";
    break
    case "l": return "1em";
    default: return "0.7em";
  }
}

// Block Size by String
export const blockSz = (size: string) => {
  switch(size){
    case "s": return "6rem";
    break;
    case "m": return "9rem";
    break
    case "l": return "12rem";
    default: return "6rem";
  }
}

