import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../Screens/login';
import Register from '../Screens/register';
import Home from '../Screens/home';
import  Loginheader from '../Components/loginheader';
import Preview from '../Screens/preview';
import Header from '../Components/header';
import NoRadiusHeader from '../Components/noradiusheader';
import ListeDemande from '../Screens/listedemande';
import Formulaire from '../Screens/form';
import Resumer from '../Screens/resumer';
import Great  from '../Screens/greatpage';
import ForumDemande from '../Screens/forumdemande';
import ForumForm from '../Screens/forumform';
import Discussion from '../Screens/discussion';
import Profil from '../Screens/profil';
import NoHeader from '../Components/noheader';
import TechHome from '../Screens/techHome';
import TechDemande from '../Screens/techDemandes';
import LiveDemande from '../Screens/liveDemandes';
import ForumDemandeTech from '../Screens/forumDemandeTech';
import AudioTest from '../Screens/audioTest'
const Stack = createStackNavigator();

function Navigation() {
  const userId = useSelector(state => state.userdata.partner_id);
  return userId ?(
        <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header:Header
            })}
          />
          <Stack.Screen
            name="ListeDemande"
            component={ListeDemande}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Formulaire"
            component={Formulaire}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Resumer"
            component={Resumer}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Great"
            component={Great}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="ForumDemande"
            component={ForumDemande}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
           <Stack.Screen
            name="ForumForm"
            component={ForumForm}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Discussion"
            component={Discussion}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Profil"
            component={Profil}
            options={({ navigation }) => ({
              header:NoHeader
            })}
          />

          <Stack.Screen
            name="TechHome"
            component={TechHome}
            options={({ navigation }) => ({
              header:Header
            })}
          />

          <Stack.Screen
            name="TechDemande"
            component={TechDemande}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="LiveDemande"
            component={LiveDemande}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="ForumDemandeTech"
            component={ForumDemandeTech}
            options={({ navigation }) => ({
              header:NoRadiusHeader
            })}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              header:Loginheader
            })}
          />

          <Stack.Screen
            name="AudioTest"
            component={AudioTest}
            options={({ navigation }) => ({
              header:Loginheader
            })}
          />



          
        </Stack.Navigator>
      </NavigationContainer>
    ):(
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              header:Loginheader
            })}
          />

        

          <Stack.Screen
            name="Register"
            component={Register}
            options={({ navigation }) => ({
              header:Loginheader
            })}
          />

          <Stack.Screen
            name="Preview"
            component={Preview}
            options={({ navigation }) => ({
              header:Loginheader
            })}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header:Header
            })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation;