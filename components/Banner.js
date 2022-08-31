import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-banner-carousel";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 200;

const Banner = ({ images, heightsize }) => {
  const renderPage = (image, index) => {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight + heightsize }}
          source={{ uri: image }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {images.map((image, index) => renderPage(image, index))}
      </Carousel>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
