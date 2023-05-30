import React, { useState } from "react";
import styles from "./styles";
import { Post } from "../data/data-type";
import { View, Text, Image, FlatList, TouchableHighlight, ActivityIndicator } from "react-native";


const PostTime = ({ data, callback, loadItem, onRefresh }: { data: Post[], callback: (item: Post) => void, loadItem: () => void, onRefresh: () => void }) => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const renderPost = ({ item, index }: { item: Post, index: number }) => {
    const isLast = index === data.length - 1;
    
    if (!isLast)
      return <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <TouchableHighlight onPress={() => callback(item)}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </TouchableHighlight>
        <Text style={styles.caption}>{item.caption}</Text>
        <View>
          <Image source={require('./img/Heart-icon.png')}/>
        </View>
      </View>
    else {
      return <LoadMore />
    }
  };

  if (data.length > 0) {
    const empty = data[0];
    data = [empty, ...data, empty]
  }

  const LoadMore = () => {
    return <ActivityIndicator style={{ marginBottom: 100}} />
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderPost}
        onEndReached={loadItem}
        refreshing={isRefreshing}
        onRefresh={() => {
          setRefreshing(true)
          onRefresh()
          setRefreshing(false)
        }
        }
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PostTime;
