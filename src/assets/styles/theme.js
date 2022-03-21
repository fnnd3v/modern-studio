import { css } from "styled-components";

export const theme = {
  color: {
    beige: "hsl(33,23%,83%)",
    steel: "hsl(225,23%,83%)",
    orange: "hsl(14,64%,54%)",
    black: "hsl(210,11%,30%)",
    brown: "hsl(355,13%,20%)",
  },
  font: {
    size: {
      heading: "5rem",
      headingMobile: "2.8rem",
      headingSmall: "4.2rem",
      paragraph: "1.6rem",
      caption: "1.35rem",
      mobileNav: "2rem",
    },
    family: {
      montserrat: '"Montserrat", sans-serif',
      cormorant: '"Cormorant Garamond", serif',
    },
  },
  mq: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    bigDesktop: "@media (min-width: 1280px)",
    huge: "@media(min-width: 1440px)",
  },

  beforeElement: (height, width) => {
    css`
      &::before {
        content: "";
        height: ${height};
        width: ${width};
        position: absolute;
        background-color: red;
        top: -30px;
        left: -20px;
      }
    `;
  },
};
