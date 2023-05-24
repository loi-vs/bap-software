import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import NavigationHeader from "./head-nav";
import Post from "./post";
import Story from "./story";
import NavigationBottom from "./bottom-nav";



const Main = ( {navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
      <ScrollView>
          <Story />
          <Post posts={{posts: posts}} callback={() => navigation.navigate('Login')} />
      </ScrollView>
      <NavigationBottom />
    </View>
  )
}

export default Main

const posts = [
  {
    username: "Henry Purdy",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "1"
  },
  {
    username: "Al Crona",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "2"
  },
  {
    username: "Mrs. Wade Kshlerin",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1135.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "3"
  },
  {
    username: "Cathy Berge",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/977.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "4"
  },
  {
    username: "Ian Gislason",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "5"
  },
  {
    username: "Antonio Lang",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "6"
  },
  {
    username: "Timothy Conn",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "7"
  },
  {
    username: "Mrs. Elmer Armstrong",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "8"
  },
  {
    username: "Mrs. Bonnie Orn",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/201.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "9"
  },
  {
    username: "Annette Brown",
    caption: "Have nice day",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg",
    imageUrl: "https://loremflickr.com/640/480/transport",
    id: "10"
  }
];