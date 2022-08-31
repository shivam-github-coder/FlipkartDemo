import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Categories = () => {
  const dataSource = [
    {
      icons:
        "https://image.similarpng.com/very-thumbnail/2020/11/Sale-special-offer-banner-design-on-transparent-background-PNG.png",
      title: "Offer",
    },
    {
      icons:
        "https://toppng.com/uploads/preview/grocery-png-11553955872cerceh5w5f.png",
      title: "Grocery",
    },
    {
      icons:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Moto-G82-5G.png",
      title: "Mobile",
    },
    {
      icons:
        "https://image.similarpng.com/very-thumbnail/2021/06/Fashion-and-beauty-logo-and-emblem-on-transparent-background-PNG.png",
      title: "Fashion",
    },
    {
      icons:
        "https://www.nicepng.com/png/detail/913-9138897_lg-43lh547v-43-led-hd-digital-satellite-tv.png",
      title: "Electronic",
    },
    {
      icons:
        "https://www.pngall.com/wp-content/uploads/4/Dream-House-Transparent.png",
      title: "Home",
    },
    {
      icons:
        "https://i.pinimg.com/474x/3c/5d/3f/3c5d3ff93f74afb65539be416d910e7b.jpg",
      title: "Beauty",
    },
    {
      icons:
        "https://www.nicepng.com/png/detail/369-3693028_home-appliance-transparent-background-home-appliances-transparent-background.png",
      title: "Appliance",
    },
    {
      icons:
        "https://www.pngall.com/wp-content/uploads/5/Baby-Toy-Transparent.png",
      title: "Toy & Baby",
    },
    {
      icons:
        "https://p.kindpng.com/picc/s/4-42790_furniture-png-image-furniture-png-transparent-png.png",
      title: "Furniture",
    },
    {
      icons:
        "https://mpng.subpng.com/20180314/isq/kisspng-airplane-flight-aircraft-airbus-a330-airbus-a321-white-flying-plane-5aa9c50adc85d5.2469253515210754669033.jpg",
      title: "Flight",
    },
    {
      icons:
        "https://toppng.com/uploads/preview/life-insurance-ico-11562915077d2jrvshhho.png",
      title: "Insurance",
    },
    {
      icons:
        "https://i.pinimg.com/474x/d5/66/99/d566998c2b9fc483947378f129925107.jpg",
      title: "Sports",
    },
    {
      icons:
        "https://i.pinimg.com/736x/47/96/33/4796332c07bf0d6264b4b4eb3592c929.jpg",
      title: "Food & more",
    },
    {
      icons:
        "https://5.imimg.com/data5/SELLER/Default/2021/12/PI/FZ/HE/49541234/refurbished-one-plus-500x500.png",
      title: "Refurnished",
    },
    {
      icons:
        "https://library.kissclipart.com/20190226/raq/kissclipart-hayabusa-bike-full-hd-clipart-suzuki-hayabusa-moto-95f95b71dd58edb9.png",
      title: "Cars & Bikes",
    },
    {
      icons:
        "https://previews.123rf.com/images/artnata/artnata1704/artnata170400030/75635018-gift-card-with-box-and-red-bow-isolated-on-transparent-background-vector-illustration-.jpg",
      title: "Gift Cards",
    },
    {
      icons:
        "https://png.pngtree.com/png-clipart/20190517/original/pngtree-colorful-pills-on-transparent-background-png-image_4018376.jpg",
      title: "Medicine",
    },
  ];
  return (
    <View style={styles.contain}>
      <ScrollView>
        <FlatList
          data={[...dataSource]}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 15,
                flex: 1,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.icons }}
                style={{
                  padding: 15,
                  marginBottom: 10,
                  width: 100,
                  height: 90,
                }}
              />
              <Text>{item.title}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {},
});

export default Categories;
