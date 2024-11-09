import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Image, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#EC2025',
        headerStyle: {
          backgroundColor: '#EC2025',
          height: 0,
        },
        headerShadowVisible: false,
        headerTintColor: '#EC2025',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="package"
        options={{
          title: 'Beli Paket',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'pricetag' : 'pricetag-outline'} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="mall"
        options={{
          title: 'Mall',
          tabBarIcon: ({ color }) => (
            <View style={styles.mallIconContainer}>
              <Image
                source={{ uri: 'https://tdwva.telkomsel.com/va-ui/ext/res/static/shared/Avatar_bubble_message_MyTsel_2.png' }} // 
                style={styles.mallIcon}
              />
            </View>
          ),
          tabBarLabel: 'Mall',
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: 'Reward',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'gift' : 'gift-outline'} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="lifestyle"
        options={{
          title: 'Lifestyle',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'apps' : 'apps-outline'} color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  mallIconContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: '#EC2025',
    borderRadius: 40,
    padding: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  mallIcon: {
    width: 50,
    height: 60,
    borderRadius: 20,
  },
});
