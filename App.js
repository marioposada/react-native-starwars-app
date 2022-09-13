import HomeScreen  from '../starwars-app/src/screens/HomeScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "FlatList Example",
    },
  }
);

export default createAppContainer(navigator);