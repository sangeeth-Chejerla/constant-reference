interface Benefit {
    id: string;
    title: string;
    text: string;
    backgroundUrl: string;
    iconUrl: string;
    imageUrl: string;
  }
  
  type Benefits = Benefit[];
  
  const benefits: Benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1, // Assuming this variable is correctly imported or defined elsewhere
      imageUrl: benefitImage2, // Assuming this variable is correctly imported or defined elsewhere
    },
    // Additional benefits can be added here
  ];
  
  export { benefits };