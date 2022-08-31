import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Banner from "../components/Banner";
import MiniProductShow from "../components/MiniProductShow";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Button } from "react-native-elements";

const HomeScreen = ({ setAddTocartValue, AddTocartValue }) => {
  const insets = useSafeAreaInsets();
  const bannerImg = [
    "https://cdn.grabon.in/gograbon/images/merchant/1633239459493.jpg",
    "https://trak.in/wp-content/uploads/2020/09/IMG_20200912_141328.jpg",
    "https://www.yourtechstory.com/wp-content/uploads/2020/10/IMG_20201003_192653-1280x720.jpg",
  ];

  const bannerImg2 = [
    "https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg",
    "https://www.earticleblog.com/wp-content/uploads/2018/09/flipkart-free-recharge-offer-banner-1200x1217.png",
    "https://assets.indiadesire.com/images/Asus%20Zenfone%207%20Pro%20flipkart%20amazon%20Launching.jpg",
  ];

  const [isOpen, setisOpen] = useState(false);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["70%"], []);

  // callbacks
  const handleSheetChangesData = useCallback((index) => {
    if (index) {
      setisOpen(true);
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      setisOpen(false);
      bottomSheetRef.current.close();
      setModalDataShow(null);
    }
  }, []);

  const [ModalDataShow, setModalDataShow] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D3D3D3",
        paddingTop: insets.top,
      }}
    >
      <StatusBar
        // animated={true}
        backgroundColor="#0C73EB"
        barStyle={"default"}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <ScrollView
        style={[
          styles.scrollView,
          {
            opacity: isOpen ? 0.2 : 1,
            backgroundColor: isOpen ? "#00000000" : "#fff",
          },
        ]}
        stickyHeaderIndices={[1]}
      >
        <View style={styles.HomeHeader}>
          <View style={styles.FlipkartView}>
            <Text style={styles.FlipkartStyle}>FlipKart</Text>
          </View>
          <View style={styles.GroceryStyle}>
            <Text style={styles.GroceryView}>Grocery</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
              backgroundColor: "#0C73EB",
              flex: 1,
            }}
          >
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png",
              }}
              style={{ width: 30, height: 30 }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
            >
              <AntDesign
                name="search1"
                size={20}
                style={{ padding: 5 }}
                color="grey"
              />
              <TextInput
                style={styles.input}
                selectionColor="#0C73EB"
                placeholder="Search for Products,Brands and More"
                // onChangeText={onChangeText}
                // value={text}
                onFocus={() => handleSheetChangesData(false)}
              />
              <FontAwesome
                name="microphone"
                style={{ padding: 8, backgroundColor: "#D3D3D3" }}
                size={20}
                color="#0C73EB"
              />
            </View>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPIPKkjpr9eKPwzxzpvMMsRaAb2msGhsQPTaFjyO4rTTt1-H7zqyp-TEOFy260zdUrA&usqp=CAU",
            }}
            style={{ width: "100%", height: 50 }}
          />
        </View>
        <View>
          <Banner images={bannerImg} heightsize={0} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            borderWidth: 2,
            marginTop: 10,
            borderColor: "#D3D3D3",
            backgroundColor: "#fff",
          }}
        >
          <MiniProductShow
            imageShow="https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg"
            title="Wishlist Now"
            rate="Just 12,500"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
          <MiniProductShow
            imageShow="https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-1/images/1920/convenience/sec1-cimg1-3ec5d106e1b4e26d9361b56dfd1f936b.png"
            title="Wishlist Now"
            rate="Just 12,500"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
          <MiniProductShow
            imageShow="https://rukminim1.flixcart.com/image/714/857/k572gsw0/dress/e/u/y/s-maxy-dress-196-black-daevish-original-imafnxw5wwtgjp3q.jpeg?q=50"
            title="Wishlist Now"
            rate="From 11,000"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Banner images={bannerImg2} heightsize={200} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            borderWidth: 2,
            marginTop: 10,
            borderColor: "#D3D3D3",
            backgroundColor: "#fff",
          }}
        >
          <MiniProductShow
            imageShow="https://media.karousell.com/media/photos/products/2020/5/30/nike_airmax_dia_1590823670_61e38ffe_progressive.jpg"
            title="Wishlist Now"
            rate="Just 12,500"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
          <MiniProductShow
            imageShow="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGY8kCuZ3B5Zk0XLp18YNs6CN2iTxeHOlFQ&usqp=CAU"
            title="Wishlist Now"
            rate="Just 12,500"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
          <MiniProductShow
            imageShow="https://rukminim1.flixcart.com/image/714/857/k572gsw0/dress/e/u/y/s-maxy-dress-196-black-daevish-original-imafnxw5wwtgjp3q.jpeg?q=50"
            title="Wishlist Now"
            rate="From 11,000"
            handleSheetChangesData={handleSheetChangesData}
            setModalDataShow={setModalDataShow}
          />
        </View>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        onClose={() => handleSheetChangesData(false)}
      >
        <BottomSheetView>
          {/* <Button
            title="press me"
            onPress={() => handleSheetChangesData(false)}
          /> */}
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              paddingRight: 10,
            }}
          >
            <AntDesign
              name="close"
              onPress={() => handleSheetChangesData(false)}
              size={24}
              color="black"
            />
          </View>
          <View>
            {ModalDataShow?.map((e, i) => (
              <View
                key={i}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  source={{
                    uri: e.imageShow,
                  }}
                  style={{ width: "50%", height: "70%" }}
                />
                <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                  {e.title}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "red",
                    marginBottom: 10,
                  }}
                >
                  For {e.rate}
                </Text>
              </View>
            ))}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                title="Add to Cart"
                buttonStyle={{
                  backgroundColor: "orange",
                  marginTop: 10,
                }}
                onPress={() => setAddTocartValue(AddTocartValue + 1)}
                icon={
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={22}
                    style={{ paddingRight: 10, color: "#fff" }}
                  />
                }
                iconPosition="left"
              />
              <Button
                title="Buy NOW"
                buttonStyle={{
                  backgroundColor: "#0C73EB",
                  marginTop: 10,
                  marginLeft: 30,
                }}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  HomeHeader: {
    flexDirection: "row",
  },
  FlipkartView: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "#0C73EB",
    padding: 15,
  },
  GroceryStyle: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "green",
    padding: 15,
  },
  FlipkartStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  GroceryView: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    height: 35,
    borderColor: "#fff",
  },
});
