import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  TouchableHighlight,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import Notification from "./screen/Notification";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Categories from "./screen/Categories";
import Account from "./screen/Account";
import MyCard from "./screen/MyCard";
import "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import SearchScreen from "./screen/SearchScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const [AddTocartValue, setAddTocartValue] = useState(0);

  const [isOpen, setisOpen] = useState(true);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    if (index) {
      bottomSheetRef.current?.snapToIndex(0);
      setisOpen(true);
    } else {
      bottomSheetRef.current.close();
      setisOpen(false);
    }
  }, []);

  // const CustomHeader = (props) => {
  //   return (
  //     <View>
  //       <Text>{...props}</Text>
  //       <Text>shiva,</Text>
  //     </View>
  //   );
  // };

  const Left = ({ onPress }) => (
    <TouchableHighlight onPress={onPress}>
      <Text>jkb</Text>
    </TouchableHighlight>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { paddingTop: 5, paddingBottom: 10, height: 60 },
        }}
      >
        <Tab.Screen
          name="Home"
          // component={HomeScreen}
          children={() => (
            <HomeScreen
              setAddTocartValue={setAddTocartValue}
              AddTocartValue={AddTocartValue}
            />
          )}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
            tabBarActiveTintColor: "#0C73EB",
            tabBarInactiveTintColor: "gray",
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="All Categories"
          component={Categories}
          options={({ navigation }) => ({
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore-o" size={size} color={color} />
            ),
            tabBarActiveTintColor: "#0C73EB",
            tabBarInactiveTintColor: "gray",
            headerStyle: { height: 50 },
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  onPress={() => navigation.navigate("SearchScreen")}
                  name="search1"
                  size={20}
                  style={{ marginRight: 20 }}
                  color="white"
                />
                <FontAwesome
                  name="microphone"
                  onPress={() => handleSheetChanges(true)}
                  style={{ marginRight: 20 }}
                  size={20}
                  color="white"
                />
              </View>
            ),
            headerStyle: { backgroundColor: "#0C73EB" },
            headerTitleStyle: { color: "white" },
          })}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarLabel: "bells",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="bells" size={size} color={color} />
            ),
            tabBarActiveTintColor: "#0C73EB",
            tabBarInactiveTintColor: "gray",
            headerStyle: { height: 50 },
            headerStyle: { backgroundColor: "#0C73EB" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Tab.Screen
          name="My Account"
          component={Account}
          options={({ navigation }) => ({
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={size}
                color={color}
              />
            ),
            tabBarActiveTintColor: "#0C73EB",
            tabBarInactiveTintColor: "gray",
            headerStyle: { height: 50 },
            headerStyle: { backgroundColor: "#0C73EB" },
            headerTitleStyle: { color: "white" },
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  onPress={() => navigation.navigate("SearchScreen")}
                  name="search1"
                  size={20}
                  style={{ marginRight: 20 }}
                  color="white"
                />
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="My Cart"
          component={MyCard}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                size={size}
                color={color}
              />
            ),
            tabBarActiveTintColor: "#0C73EB",
            tabBarInactiveTintColor: "gray",
            headerStyle: { height: 50 },
            headerStyle: { backgroundColor: "#0C73EB" },
            headerTitleStyle: { color: "white" },
            tabBarBadge: AddTocartValue,
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,

            // tabBarStyle: { display: "none" },
            // tabBarLabel: "Cart",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="cart-outline"
            //     size={size}
            //     color={color}
            //   />
            // ),
            // tabBarActiveTintColor: "#0C73EB",
            // tabBarInactiveTintColor: "gray",
            // headerStyle: { height: 50 },
            // headerStyle: { backgroundColor: "#0C73EB" },
            // headerTitleStyle: { color: "white" },
          }}
        />
      </Tab.Navigator>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        onClose={() => handleSheetChanges(false)}
      >
        <BottomSheetView>
          <Button title="press me" onPress={() => handleSheetChanges(false)} />
        </BottomSheetView>
      </BottomSheet>
    </NavigationContainer>
  );
}

{
  /* <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
</NavigationContainer> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
