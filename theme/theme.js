const breakpoints = [
    '360px', '768px', '1280px', '1600px'
  ];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const theme =  {      
      colors: {
        primary: '#f00'
      },

      variant: {
          container: {
            maxWidth: 960,
            width: '100%',
            mx: 'auto',
            px: 30
          }
      },

      breakpoints: breakpoints
}
 
export default theme;