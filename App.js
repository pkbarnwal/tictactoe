import React,{ useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
   } from 'react-native';

import {Text,
       Container,
       Content,
       Header,
       Body,
       Title,
      //  Center,
       Card,
       H1,H3,
      Button} from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty')


const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [win, setWin] = useState('');

  const changeItem = (itemNumber) => {
    count=0;
      if(win){
        return Snackbar.show({
          text:win,
          backgroundColor:'#000',
          textColor:'#fff'
        });
      }
     if(itemArray[itemNumber] === 'empty'){
        itemArray[itemNumber] = isCross ? 'cross': 'circle'
        count++;
        setIsCross(!isCross)
      } 
      else if(count == '9'){
        return Snackbar.show({
          text:'Game Tie'
        })
      }
      
      else{
        return Snackbar.show({
          text:'Position is Already Filled',
          backgroundColor:'red',
          textColor:'#FFF',
          fontSize:20
        })
      }
      checkIsWinner()
  }

  const reloadGame =() => {
       setIsCross(false);
       setWin('');
       itemArray.fill('empty',0,9);
  }

  const checkIsWinner = () =>{
    if(itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== 'empty')
      {
        setWin(`${itemArray[0]} won`);
       }
    else if(itemArray[3] !== 'empty' && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5])
        {
          setWin(`${itemArray[3]} won`);
        }
    else if(itemArray[6] !=='empty' && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8])
        {
          setWin(`${itemArray[6]} won`)
        }
    else if(itemArray[0] !=='empty' && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6])
        {
          setWin(`${itemArray[0]} won`);
        }
   else if(itemArray[1] !=='empty' && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7])
       {
        setWin(`${itemArray[1]} won`);
        
       }
    else if(itemArray[2] !== 'empty' && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8])
        {
        setWin(`${itemArray[2]} won`);
        }
    else if(itemArray[0] !== 'empty' && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8])
       {
        setWin(`${itemArray[0]} won`);
      }
    else if(itemArray[2] !== 'empty' && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6])
      {
      setWin(`${itemArray[2]} won`);
      }
  
   }

  return (
    <Container style={{backgroundColor :'#333945', padding:5}}>
      <Header>
         <Body style={styles.container}>
           <Title>
              TIC TAC TOE GAME
           </Title>
         </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
            {itemArray.map((item,index) => (
              <TouchableOpacity key={index}
                        onPress={() => changeItem(index)}
                        style={styles.box} >
                    <Card style={styles.card}>
                       <Icons name={item}/>
                    </Card>
              </TouchableOpacity>
         ))}
       </View>
       <View>
         { win ? (
           <View>
              <H1 style ={styles.message}>{win}</H1>
              <Button 
                onPress={reloadGame}
                primary
                block
                rounded>
                <Text>Restart the Game</Text>
              </Button>
           </View>
         ) : (
           <H3 style={styles.message}> 
           {isCross ? 'Cross' :'Circle'} turns
           </H3>
         )}
       </View>
      </Content>
       
    </Container>
    );
}
     
const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
  },
 grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
  },
  box:{
    width:'30%',
    maxWidth:400,
    margin:4
  },
  card:{
    height:120,
    justifyContent:'center',
    alignItems:'center',
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#fff',
    marginTop:20,
    backgroundColor:'#465283',
    paddingVertical:10,
    marginVertical:10,
  }
});

export default App;
