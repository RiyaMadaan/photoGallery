import React, { useEffect } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native"; 
import { useRouter } from "expo-router"; 
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { photos, WomenCategory, InsideCategory, OutsideCategory, ShoppingCategory } from './data';

export default function ShowImages() {
  const route = useRoute();
  const router = useRouter(); 
  const navigation = useNavigation(); // Get navigation instance
  const { category } = route.params;

  useEffect(() => {
    console.log("Selected category:", category);
    navigation.setOptions({
      title: category|| "Images", 
    });
  }, [category]);

  const handleImagePress = (uri) => {
    router.push({ pathname: "/image-detail", params: { uri } });
  };

  const getImagesByCategory = (category) => {
    switch (category) {
      case "Women":
        return WomenCategory;
      case "Inside Pics":
        return InsideCategory;
      case "Outside Pics":
        return OutsideCategory;
      case "Shopping":
        return ShoppingCategory;
        case "All":
          return [...photos, ...WomenCategory, ...InsideCategory, ...OutsideCategory, ...ShoppingCategory];
      default:
        return photos;
    }
  };

  const filteredPhotos = getImagesByCategory(category);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.uri)}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPhotos}
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
