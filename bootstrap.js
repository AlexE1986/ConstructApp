import * as Font from 'expo-font';

export default async function bootstrap() {
   await Font.loadAsync({
      'GOST': require('./assets/fonts/GOST_Common.ttf'),
      'REGULAR': require('./assets/fonts/Roboto_Regular.ttf'),
      'BOLD': require('./assets/fonts/Roboto_Bold.ttf')
   });
}