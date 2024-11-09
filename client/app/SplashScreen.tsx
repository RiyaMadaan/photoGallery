import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay and navigate to HomeScreen
    setTimeout(() => {
      router.push('/HomeScreen'); // This is the route for the HomeScreen
    }, 3000); // 3 seconds delay
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PhotoGallery</Text>
      <Text style={styles.subtitle}>Capture, Relive, Share</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e94560',
    fontFamily: 'Lobster-Regular', 
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#dcdde1',
    fontStyle: 'italic',
  },
});
