import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const HeaderLogout = () => {
  const { user, logout } = useAuth();
  return user ? (
    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7fffd4",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerRight: () => <HeaderLogout />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#f0f8ff",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
        <Stack.Screen name="auth" options={{ headerTitle: "Login" }} />
      </Stack>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ff6347",
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RootLayout;
