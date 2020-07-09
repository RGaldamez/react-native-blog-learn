import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const BlogScreen = () => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <Icon name="trash-o" style={styles.trashIconStyle} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trashIconStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 10,

    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
});

export default BlogScreen;
