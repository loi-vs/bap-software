import React from "react";
import { RNNSearchBar } from "react-native-navigation-search-bar";
import Main from "../main/view-main";
import { Text } from "react-native";


const Search = () => {
    return (
        <RNNSearchBar
            componentId={Main} // <-- RNN component id
            statusBarHeight={30} // <-- prop status bar height
            search={Text}
            onChangeText={'search'}
        />
    )
}

export default Search

