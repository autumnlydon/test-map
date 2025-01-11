import { StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={[styles.contentContainer, { paddingTop: insets.top + 20 }]}>
        <ThemedView style={styles.whiteBox}>
          <ThemedView style={styles.headerContainer}>
            <ThemedText style={styles.title}>aria</ThemedText>
            <ThemedText style={styles.subtitle}>your daily companion</ThemedText>
          </ThemedView>

          <ThemedView style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#A8A8A8"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#A8A8A8"
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton}>
              <ThemedText style={styles.loginButtonText}>Login</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}>
              <ThemedText style={styles.forgotPasswordText}>Forgot Password?</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F6',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  whiteBox: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 30,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: '300',
    color: '#FF97B7',
    letterSpacing: 6,
    textAlign: 'center',
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 16,
    color: '#A8A8A8',
    marginTop: 8,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.02,
    shadowRadius: 5,
  },
  loginButton: {
    backgroundColor: '#A1CEDC',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#A8A8A8',
    fontSize: 14,
  },
});
