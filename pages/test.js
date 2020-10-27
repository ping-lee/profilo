import styled from 'styled-components'

const MoreSvg = styled.svg`
  width: 36;
  height: 12;
  margin: 20px;
  fill: none;
  & .c1 {
      opacity: 0;
      transition: opacity 125ms ease 0s;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c2 {
      opacity: 0;
      transition: opacity 125ms ease 0s;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c3 {
      opacity: 0;
      transition: opacity 125ms ease 125ms;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-opacity: 0.66;
  }
  & .c4 {
      opacity: 0;
      transition: opacity 125ms ease 250ms;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-opacity: 0.35;
  }

  :hover {
    & .c1 {
        opacity: 1;
        transition: opacity 0s ease 125ms;
    }
    & .c2 {
        opacity: 1;
        transition: opacity 0s ease 0s;
    }
    & .c3 {
        opacity: 1;
        transition: opacity 0s ease 125ms;
    }
    & .c4 {
        opacity: 1;
        transition: opacity 0s ease 250ms;
    }
  }
`

const Test = () => (
    <div>
        <MoreSvg>
              <path className="c1" d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"></path>
              <path className="c2" d="M15 10L19.5 5.5L15 1"></path>
              <path className="c3" d="M23 10L27.5 5.5L23 1"></path>
              <path className="c4" d="M31 10L35.5 5.5L31 1"></path>
        </MoreSvg>
    </div>
)

export default Test