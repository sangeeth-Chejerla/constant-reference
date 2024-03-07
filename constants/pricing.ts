interface PricingPlan {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
  }
  
  type Pricing = PricingPlan[];
  
  const pricing: Pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    // Additional pricing plans can be added here
  ];
  
  export { pricing };