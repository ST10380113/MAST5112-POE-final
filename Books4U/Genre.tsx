import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//returns the array of data
const fetchBookData = async () => {
 return [
    { id: 1, title: '', genre: '' },
    { id: 2, title: '', genre: '' },
    { id: 3, title: '', genre: '' },
    { id: 4, title: '', genre: '' },
    { id: 5, title: '', genre: '' },
    { id: 6, title: '', genre: '' },
    { id: 7, title: '', genre: '' },
    { id: 8, title: '', genre: '' },
 ];
};

const GenreScreen = () => {

   //stores set of genres
 const [Total, setTotal] = useState({});

 useEffect(() => {
   const fetchAndSetTotalGenres = async () => {
     const books = await fetchBookData();
     const genres = books.reduce((acc, book) => {
       acc.add(book.genre);
       return acc;
     }, new Set());

     setTotal(genres);
   };

   fetchAndsetTotal();
 }, []);
 const [sideNavOpen, setSideNavOpen] = useState(false);
 const toggleSideNav = () => {
 setSideNavOpen(!sideNavOpen);
 };
 return (
    <View style={styles.container}>

    <TouchableOpacity onPress={toggleSideNav}>
         <Image source={sideNavOpen ? require('./x.png') : require('./NAV.png')} style={styles.toggleButton} />
      </TouchableOpacity>

     <View style={[styles.sideNav, { display: sideNavOpen ? 'flex' : 'none' }]}>
      <View style={styles.sideNav}>

       <Image source={require('./navilogo.jpg')} style={styles.sideNavImage}/>

       <Text style={styles.sideNavTitle}>Books4U</Text>

       <TouchableOpacity style={styles.sideNavItem}>
         <Text style={styles.sideNavText}>Home</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>New Book</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.sideNavItem} >
         <Text style={styles.sideNavText}>Book History</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>Genre Tracker</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Total Genres Read</Text>
      {Array.from(totalGenres).map((genre) => (
        <View key={genre} style={styles.genreItem}>
          <Text style={styles.genreName}>{genre}</Text>
        </View>
      ))}
    </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 genreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
 },
 genreName: {
    fontSize: 18,
 },
 genreCount: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 sideNav:{
  flex: 1,
   backgroundColor: '#F0F0F0', 
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   paddingTop: 60, 
   paddingHorizontal: 10
 },
 sideNavText:{
  fontSize: 18,
  color: 'black'
 },
 sideNavItem:{
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#CCCCCC',
 },
 sideNavTitle:{
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
 },
 sideNavImage:{
  width: '103%', 
  height: 150,
  resizeMode: 'cover',
  marginBottom: 30, 
 },
 toggleButton:{
  width: 30, 
  height: 30, 
  resizeMode: 'contain',
  marginLeft: 10,
 }
});

export default GenreScreen;