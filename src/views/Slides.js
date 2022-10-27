import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Slide from '../../components/Slide'
const slides = [
  {
    id: 1,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Browse  Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 2,
    image: require('../images/icons8-delivery-500.png'),
    title: "Order Food",
    subtitle: "Hungry? Order food in just a few clicks and we’ll take care of you..",
  },
  {
    id: 3,
    image: require('../images/noun_Calendar_2442157.png'),
    title: "Make Reservations",
    subtitle: "Book a table in advance to avoid waiting in line",
  },
  {
    id: 4,
    image: require('../images/noun_Binoculars_1107295.png'),
    title: "Quick  Search",
    subtitle: "Quickly find food items you like the most"
  },

  {
    id: 5,
    image: require('../images/noun_mac_2076879.png'),
    title: "Apple Pay",
    subtitle: "We know you’re busy, so you can pay with your phone in just one click"
  },
]
export default function Slides() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <FlatList
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </View>
  )
}