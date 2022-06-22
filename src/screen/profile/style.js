import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
   
   
   
 
   
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    
    imgStyle1: {
        
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
    imgStyle2: {
        
        color:colors.white,
        
        
        marginLeft:'15@ms'
      
    },
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        marginRight:'15@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
    
    stylelogo:{
     
        height:'130@mvs',
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
        marginTop:'25@mvs',
        fontWeight:'bold',
        fontSize:'25@ms',
        color:colors.black
    },

    imgsec:{
        padding:'25@ms'
    },
    aboutsec:{
        paddingHorizontal:'25@ms'
    },
    memberimg:{
        height:'100@ms',
        width:'100@ms',
        borderRadius:'55@ms',
        borderWidth:2,
        borderColor:colors.Charcole,
        overflow:'hidden',
        alignSelf:'center'
    },
    aboutheader:{
        color:colors.Charcole,
        fontSize:'18@ms',
        fontWeight:'bold',
    },
    imgStylemember:{
        height:'100%',
        width:'100%',
      //  resizeMode:''
    },
    aboutdec:{
        color:colors.Charcole,
        fontSize:'14@ms',
        fontWeight:'500',
        marginBottom:'14@ms'
    },
    txt1:{
        color:colors.Charcole,
        fontSize:'14@ms',
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:'5@ms'
    },
    txt2:{
        color:colors.Charcole,
        fontSize:'12@ms',
        fontWeight:'300',
        alignSelf:'center',
    },
    hbcard:{
        height:'100@ms',
        width:'100@ms',
        marginVertical:'8@ms',
        marginRight:'8@ms',
        borderRadius:'5@ms',
        overflow:'hidden'
    }

   
   
   
    
   
  
    
   
   
  
    
})