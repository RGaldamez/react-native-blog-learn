import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const BlogScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Value: {value} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogScreen;
