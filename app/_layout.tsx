import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen name="index" options={{headerTitle:'Kavi',headerShown:false}} />
      <Stack.Screen name="App" options={{headerTitle:'Go To The Loging Page'}} />

    </Stack>
  );
}

