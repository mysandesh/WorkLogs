import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> {isRegistering ? "Sign Up" : "Login"} </Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {isRegistering && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {isRegistering ? "Sign Up" : "Login"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
        <Text style={styles.switchText}>
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    color: "#007bff",
    marginTop: 10,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 16,
  },
});
export default AuthScreen;
