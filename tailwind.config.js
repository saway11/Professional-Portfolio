odule.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    animation: {
      float: "float 3s infinite",
      refloat: "refloat 3s infinite"
    },
    float: {
      '0%': {
        transform: "translateY(0px)",
        animationTimingFunction: "ease-in-out",
      },
      '50%': {
        transform: "translateY(-20px)",
        animationTimingFunction: "ease-in-out",
      },
      '100%': {
        transform: "translateY(0px)",
        animationTimingFunction: "ease-in-out",
      } 
    },
    refloat: {
      '0%': {
        transform: "translateY(-20px)",
        animationTimingFunction: "ease-in-out",
      },
      '50%': {
        transform: "translateY(0px)",
        animationTimingFunction: "ease-in-out",
      },
      '100%': {
        transform: "translateY(-20px)",
        animationTimingFunction: "ease-in-out",
      } 
    },
    theme: {
      extend: {},
    },
    plugins: [],
  };