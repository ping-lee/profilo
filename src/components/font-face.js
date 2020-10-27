const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "PingFangSC-Semibold";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(/fonts/PingFangSC-Semibold.woff2) format("woff2");
      }

      @font-face {
        font-family: "PingFangSC-Regular";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(/fonts/PingFangSC-Regular.woff2) format("woff2");
      }
    `}
  </style>
)

export default FontFace
