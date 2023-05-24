import React from "react";
import styles from "./styles";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";



type post = {
  username: string,
  caption: string,
  avatar: string,
  imageUrl: string,
  id: string
};
type posts = {
  posts: post[]
};

const Post = ({posts, callback}:{posts:posts, callback: any}) => {
    const renderPost = ({ item }) => (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image style={styles.avatar}  source={{ uri: item.avatar}}/>
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <TouchableHighlight onPress={() => callback()}>
          <Image style={styles.image}  source={{ uri: item.imageUrl }} />
        </TouchableHighlight>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    );

    const data = posts.posts
  
    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  export default Post