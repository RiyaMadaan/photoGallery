import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native"; 
import { useRouter } from "expo-router"; 
import { useNavigation } from "@react-navigation/native";

export default function ShowImages() {
  const route = useRoute();
  const router = useRouter();
  const navigation = useNavigation();
  const { category } = route.params;
  
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: category || "Images",
    });

    const fetchImagesByCategory = async () => {
      try {
        let url = `http://192.168.0.107:3000/`;
  
        switch (category) {
           case "Women":
              url += "categories/women";
              break;
           case "Inside Pics":
              url += "categories/inside";
              break;
           case "Outside Pics":
              url += "categories/outside";
              break;
           case "Shopping":
              url += "categories/shopping";
              break;
            
           default:
              url += "categories/all";
              break;
        }
  
        const response = await fetch(url);
  
        // Log the response
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
  
        const data = await response.json();
  
        // Log the data
        console.log("Fetched Data:", data);
        setPhotos(data);
     } catch (error) {
        console.error("Failed to fetch photos:", error);
     }
    };

    fetchImagesByCategory();
  }, [category]);

  const handleImagePress = (uri) => {
    router.push({ pathname: "/image-detail", params: { uri } });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.uri)}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} 
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  galleryContainer: {
    justifyContent: "space-between",
  },
  photo: {
    width: Dimensions.get("window").width / 2 - 10,
    height: Math.random() * 150 + 150,
    margin: 5,
  },
});
