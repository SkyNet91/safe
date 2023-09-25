import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import BackgroundImage1 from './assets/images/desk.jpg';
import BackgroundImage2 from './assets/images/ice.jpg';
import BackgroundImage3 from './assets/images/long.jpg';
import BackgroundImage4 from './assets/images/vermelho.jpg';
import BackgroundImage5 from './assets/images/offroad.jpg';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white', 
    fontSize: 24,
  },
});

function Screen1() {
  return (
    <ImageBackground source={BackgroundImage1} style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: 'black', fontSize: 24}}>Tela Inicial</Text>
    </View>
    </ImageBackground>
  );
}

function Screen2() {
  return (
    <ImageBackground source={BackgroundImage2} style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Configurações</Text>
    </View>
    </ImageBackground>
  );
}

function Screen3() {
  return (
    <ImageBackground source={BackgroundImage3} style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Notificações</Text>
    </View>
    </ImageBackground>
  );
}

function Screen4() {
  return (
    <ImageBackground source={BackgroundImage4} style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Perfil</Text>
    </View>
    </ImageBackground>
  );
}

function Screen5() {
  return (
    <ImageBackground source={BackgroundImage5} style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Chat</Text>
    </View>
    </ImageBackground>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Pagina Inicial"
          component={Screen1}
          options={{
            tabBarLabel: 'Inicial',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={Screen2}
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-settings" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notificações"
          component={Screen3}
          options={{
            tabBarLabel: 'Notificações',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Screen4}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Screen5}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-chatbox" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;