import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList175770Navigator from '../features/ArticleList175770/navigator';
import ArticleList175769Navigator from '../features/ArticleList175769/navigator';
import ArticleList175768Navigator from '../features/ArticleList175768/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList175770: { screen: ArticleList175770Navigator },
ArticleList175769: { screen: ArticleList175769Navigator },
ArticleList175768: { screen: ArticleList175768Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
