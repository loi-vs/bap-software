import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import NavigationHeader from "./head-nav";
import PostTime from "./post-time";
import Story from "./story";
import NavigationBottom from "./bottom-nav";
import Detail from "../detail/detail";
import Camera from "../camera/camera";
import { Post } from "../data/data-type";

const Main = ({ navigation, route }: { navigation: any, route: any }) => {
  // const { post } = route.params
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);
  const getPost = async () => {
    try {
      const response = await fetch('https://646ae5f27d3c1cae4ce2e250.mockapi.io/use');
      const json = await response.json();
      setData(json);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  const loadRefresh = async () => {
    await getPost();
  };
  const loadItem = async () => {
    const response = await fetch('https://646ae5f27d3c1cae4ce2e250.mockapi.io/use');
    const json = await response.json();
    const loadData = [...data, ...json];
    setData(loadData);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <View style={styles.container}>
      <NavigationHeader />
      <View style= { styles.container }>
        <Story data={data} />
        <PostTime data={data} onRefresh={loadRefresh} callback={(item) => {
          navigation.navigate('Detail', {item})
        }} loadItem={loadItem} />
      </View>
    </View>
  )
}

export default Main

