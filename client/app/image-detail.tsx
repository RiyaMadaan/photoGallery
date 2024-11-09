import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useRouter } from "expo-router";

export default function ImageDetail() {
  const router = useRouter();

  const uri  = router.query; // Use the query param for category
    
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
