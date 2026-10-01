import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#211b32',
        tabBarInactiveTintColor: '#55545c',
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
        },
      }}
    >
      {/* 1. Home Tab (app/(tabs)/index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />

      {/* 2. Notifications Tab (app/(tabs)/notifications.tsx) */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={26} color={color} />
          ),
        }}
      />

      {/* 3. Account Tab (app/(tabs)/account.tsx) */}
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={27} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}