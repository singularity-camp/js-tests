const convertToSeconds = (hours: number, minutes: number): number | string => {
    if (hours < 0 || minutes < 0 || !hours || !minutes) return "invalid number";
    return (hours * 60 + minutes) * 60;
  };
  
  
  