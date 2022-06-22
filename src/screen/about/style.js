import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    cardlist:{
        alignSelf:'center',
        marginBottom:'25@ms',
        marginTop:'25@ms',
        flex:1

    },
    cardtxt:{
  
    width:"100%",
    paddingHorizontal:'18@ms',
    marginBottom:'12@ms'


    },
    cardtxtstyle1:{
        fontSize:'16@ms',
        fontWeight:'800',
        lineHeight:'19@ms',
        color:colors.Charcole
    },
    cardtxtstyle2:{
        fontSize:'14@ms',
        fontWeight:'400',
        marginTop:'5@ms',
        lineHeight:'19@ms',
        color:colors.Charcole



    },
    roundstyle:{
        backgroundColor:colors.blacklight,
        height:'63@ms',
        width:'63@ms',
        borderRadius:'40@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    roundstyletxt:{
        fontWeight:'bold',
        fontSize:'35@ms',
        color:colors.black
    },
 
   
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    
    imgStyle1: {
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
   
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
    
    stylelogo:{
        paddingHorizontal:'15@ms',
    
    },
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',
    },
   
    
    card:{
        backgroundColor:colors.white,
        height:'650@ms',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
    },
    hdr:{
        marginLeft:'15@ms',
        fontWeight:'bold',
        fontSize:'25@ms',
        color:colors.black
    },

   
   
   
    
   
  
    
   
   
  
    
})