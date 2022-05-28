import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    status1:{
      height:'28@ms',
      width:'45%',
      borderRadius:'25@ms',
      borderWidth:1,
      borderColor:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    status3:{
        
         height:'28@ms',
         width:'45%',
         borderRadius:'25@ms',
         borderWidth:1,
         alignItems:'center',
         justifyContent:'center'
       },
    status2:{
        
         height:'28@ms',
         width:'45%',
         borderRadius:'25@ms',
         borderWidth:1,
         borderColor:'green',
         alignItems:'center',
        justifyContent:'center'
       },
    searchbar:{
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'95%',
        paddingHorizontal:'25@ms',
        paddingVertical:'5@ms'
    },
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    imgStyle1: {
        height:'50@mvs',
        resizeMode:'contain',
        width:'100@ms',
    },
    imgStyle2: {
        
        color:colors.white,
        
        
        marginLeft:'15@ms'
      
    },
    imgStyle3: {
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
    },
    
    stylelogo:{
     
        height:'130@mvs',
        paddingHorizontal:'15@ms'
    },
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',
    },
    cardheader1:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginBottom:'25@ms'

    },
    typebutton:{
     //   backgroundColor:colors.blacklight,
        fontSize:'14@ms',
        paddingVertical:'5@ms',
        paddingHorizontal:'20@ms',
        borderRadius:'25@ms',
        color:'#202020'
    },
    card:{
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
    },
    hdr:{
        marginLeft:'15@ms',
        marginTop:'25@mvs',
        fontWeight:'bold',
        fontSize:'25@ms',
        color:colors.black
    },
    cardlist:{
        backgroundColor:'#FAFAFA',
        width:'155@ms',
       marginLeft:'15@ms',
        overflow:'hidden',
        marginBottom:'20@ms',
     //   alignSelf:'center',
        padding:'14@ms',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'6@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,


    },
    cardtxt:{
        backgroundColor:colors.Golden,
        borderRadius:'15@ms',
      },
    cardtxt1:{
        fontSize:'14@ms',
        fontWeight:'500',
        marginVertical:'5@ms',
        alignSelf:'center',
        color:'#7e807f'
    },
    cardtxt1add:{
        fontSize:'12@ms',
        fontWeight:'500',
        marginVertical:'5@ms',
        alignSelf:'center',
        color:colors.Charcole
    },
  
    cardtxt2:{
        fontSize:'14@ms',
        color:colors.black,
        marginVertical:'4@ms',
        marginHorizontal:'15@ms',
        fontWeight:'bold',

    },
   
    cardtxt23:{
        fontSize:'12@ms',
        color:colors.black,
        marginVertical:'4@ms',
        marginHorizontal:'15@ms',
        fontWeight:'bold',
    },
    line:{
        borderBottomWidth:1,
        width:'88%',
        alignSelf:'center',
        marginBottom:'25@ms',
        borderBottomColor:colors.blacklight

    },
    round:{
        height:'55@ms',
        width:'55@ms',
        borderRadius:'40@ms',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
    },
    
   
   
   
    
   
  
    
   
   
  
    
})