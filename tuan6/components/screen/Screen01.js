import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Screen01({navigation}) {
  return (
      <View style = {styles.container}>
        
        <Image source = {require('../../assets/vs_blue.png')} />
        <Text>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style = {styles.content}> 
          <View style = {styles.star}>
            <Image source = {require('../../assets/star.png')} />
            <Image source = {require('../../assets/star.png')} />
            <Image source = {require('../../assets/star.png')} />
            <Image source = {require('../../assets/star.png')} />
            <Image source = {require('../../assets/star.png')} />
              <Text style ={styles.rate}>(Xem 828 đánh giá)</Text>
          </View>
      <br/>
          <View >
            <Text style = {styles.cost}>
            1.790.000 đ
            </Text>
              <br/>
            <Text style = {styles.discount}>
             Ở ĐẦU RẺ HƠN HOÀN TIỀN 
            </Text>
          </View>


    
        </View>
        <Pressable style = {styles.btnChonMau}
                  onPress={() => navigation.navigate('Screen02')}>
          <Text>4 MÀU-CHỌN MÀU    > </Text>
        </Pressable>
  <br/>
        <Pressable style = {styles.btnMua}>
          <Text style={{color:'white'}}>CHỌN MUA</Text>
        </Pressable>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{
    padding: 20,
    backgroundColor: '#D3D3D3',
    flex: 1,
    alignItems: 'center',
  },
  star:{
    flexDirection:'row'
  },
  rate:{
    fontWeight:'400',
    fontFamily:'Roboto',
    fontSize:'15px',
    lineHeight:'100%'
  },

  cost:{
    fontWeight:'700',
    fontFamily:'Roboto',
    fontSize:'18px',
    lineHeight:'100%'
  },
  discount:{
    fontWeight:'700',
    fontSize:'12px',
    lineHeight:'100%',
    color:'red',
  },
  btnChonMau:{
    borderBlockColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',    
    borderRadius: 8,
    borderWidth: 1,
  },
  btnMua:{
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',    
    borderRadius: 8,   
  }

})