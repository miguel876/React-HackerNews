import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, ActivityIndicator, FlatList} from 'react-native';

export default class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
    }
  }

  componentDidMount() {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((response)=>response.json())
    .then((res)=>{ 
      var i=0;
      //Data receiving array
      const arrData=[];
      //Get current minutes
      var currDate=  new Date();
      var currDateMin= currDate.getMinutes();
      
      console.log(currDate);
        return res.slice(0,30).map(newsId=>{
        return fetch('https://hacker-news.firebaseio.com/v0/item/'+newsId+'.json')
        .then((responseMain)=>responseMain.json())
        .then((resMain)=>{
          arrData.push(resMain.title+"\n");
          arrData.push(resMain.score+" score| ");  
          arrData.push(resMain.descendants+" comments| ");

          //How many minutes ago was the post
          var postDate=new Date(resMain.time);
          var postDateMin= postDate.getMinutes();
          var finalDate=currDateMin-postDateMin;

          arrData.push(finalDate+" minutes ago by ");
          arrData.push(resMain.by+"\n\n");
         this.setState({
          dataSource:arrData,
          isLoading:false
        })
        })
        .catch((error)=>{
          console.log("Error1",error);
        });
   
    })

    })
    .catch((error)=>{
      console.log("Error2",error);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
  return (
  <FlatList
    data={[{key:this.state.dataSource}]}
    renderItem={({item})=><Text>{item.key}</Text>}
  />

    );
  }
}
AppRegistry.registerComponent('ReactJsChallenge', ()=>HackerNews);