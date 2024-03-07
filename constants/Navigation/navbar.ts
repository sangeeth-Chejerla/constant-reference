
{/* types*/}

interface NavigationItem {
    id: string;
    title: string;
    url: string;
    onlyMobile?: boolean; // Optional property
  }

  {/* Nav constants*/}
  type Navigation = NavigationItem[];

  const navigation: Navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];