export const FONT = {
   GOST: 'GOST',
   REGULAR: 'REGULAR',
   BOLD: 'BOLD'
};

export const COLOR = {
   MAIN: '#777777',
   DANGER: '#ff3333',
   ACTIVE: '#ffffff',
   INACTIVE: '#999999',
   BACKGROUND: '#ffffff'
};

export const TEXT = {
   HEADER: {
      fontFamily: FONT.BOLD,
      fontSize: 20,
      marginBottom: 10
   },
   BOLD: {
      fontFamily: FONT.BOLD
   },
   REGULAR: {
      fontFamily: FONT.REGULAR
   }
}

export const STYLE = {
   WRAPPER: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   CONTAINER: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 25,
   },
   ROW: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   BACKGROUND: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      resizeMode: 'repeat'
   },
   CENTER: {
      alignItems: 'center'
   }
};

export const SOURCE = {
   BGIMAGE: require('../assets/background.png'),
   LOGO: require('../assets/986_logo.png')
};