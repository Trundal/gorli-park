import styled from './ReactBurger.module.css';

export function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g>
        <path
          className={styled.top}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="10.8"
          d="M6 25h88"
        ></path>
      </g>

      <path
        className={styled.middle}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="10.8"
        d="M6 50h88"
      ></path>
      <g>
        <path
          className={styled.bottom}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="10.8"
          d="M6 75h88"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
