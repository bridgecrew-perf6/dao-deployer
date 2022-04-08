import styled from '@emotion/styled';

import React, { useEffect, useMemo } from 'react';

const CanvasHelperLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const CanvasHelper = () => {
  // console.log(user);
  return <CanvasHelperLayout>鼠标指针</CanvasHelperLayout>;
};

// .cursor {
//   width: 20px;
//   height: 20px;
//   border: 1px solid white;
//   border-radius: 50%;
//   position: absolute;
//   transition-duration: 200ms;
//   transition-timing-function: ease-out;
//   animation: cursorAnim 0.5s infinite alternate;
//   pointer-events: none;
// }

// .cursor::after {
//   content: '';
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   border: 8px solid gray;
//   border-radius: 50%;
//   opacity: 0.5;
//   top: -8px;
//   left: -8px;
//   animation: cursorAnim2 0.5s infinite alternate;
// }

// @keyframes cursorAnim {
//   from {
//     transform: scale(1);
//   }
//   to {
//     transform: scale(0.7);
//   }
// }

// @keyframes cursorAnim2 {
//   from {
//     transform: scale(1);
//   }
//   to {
//     transform: scale(0.4);
//   }
// }

// @keyframes cursorAnim3 {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(3);
//   }
//   100% {
//     transform: scale(1);
//     opacity: 0;
//   }
// }

// .expand {
//   animation: cursorAnim3 0.5s forwards;
//   border: 1px solid red;
// }

// p {
//   color: white;
//   font-family: 'arial';
//   text-align: center;
//   margin-top: 50px;
//   font-size: 1.4em;

//   a {
//     color: teal;
//   }
//
