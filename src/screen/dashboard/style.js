import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    stylewrap:{
        width:'100%',
        height:'95@mvs',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
    imgStyle1: {
        
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
    imgStyle2: {
      
        color:colors.Golden,
        marginLeft:'15@ms'
      
    },
    styletxts2:{
        color:colors.Golden,
        fontSize: '13@ms',
        fontWeight: 'bold',

    },
    imgStyle3: {
        height:'38@ms',
        width:'38@ms',
        marginRight:'15@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
    stylelogo:{
     //   backgroundColor:colors.Golden,
        height:'130@mvs',
    },
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',
        marginBottom:'25@mvs'
    },
    cardtxt1:{
        fontWeight:'bold',
        fontSize:'15@ms',
        color:colors.black
    },
    cardtxt2:{
        fontWeight:'500',
        fontSize:'12@ms',
        color:colors.black3,
        marginTop:'5@mvs'
    },
    card:{
        backgroundColor:colors.white,
        height:'630@mvs',
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

    stylerow:{
        height:'100@mvs',
        width:'100%'
    },
    
    box1:{
        width:'28%',
        height:'100%',
        backgroundColor:colors.Golden,
        justifyContent:'center',
        alignItems:'center'
    },
    lconStyle:{
        width:'60%',
        height:'50%',
        resizeMode:'contain',
    },
    lconStyle1:{
        width:'30%',
        height:'50%',
        resizeMode:'contain',
    },
    styletxt1:{
        color:colors.Charcole,
        fontSize: '13@ms',
        fontWeight: 'bold',

    },
    styletxt2:{
        color:colors.Charcole,
        fontSize: '15@ms',
    },
    styletxt3:{
        color:colors.Golden,
        fontSize: '15@ms',
    },
    box2:{
        width:'70%',
        height:'100%',
        backgroundColor:colors.black,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
  
    stylebootam:{
        height:'33%',
    },
    stylewrap1:{
        height:'31%',
        flexDirection:'row',
        alignItems:'flex-end', 
        justifyContent:'space-evenly',
        paddingVertical:'5@ms'
    },
    btnstylelogin:{
        height:'60%',
        width:'43%',
        backgroundColor:colors.Golden,
        borderRadius:'6@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    btnstylesignup:{
        height:'60%',
        width:'43%',
        backgroundColor:colors.Charcole,
        borderRadius:'6@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    stylewrap2:{
        height:'69%',
    },
    btm1:{
        height:'60%',
        justifyContent:'space-evenly'
    },
    btm2:{
        height:'40%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
  
   
    styletxt4:{
        color:colors.Charcole,
        alignSelf:'center',
        fontSize:'11@ms',
    },
    styletxt5:{
        color:colors.Charcole,
        alignSelf:'center',
        fontSize:'11@ms',
        textDecorationLine: 'line-through', 
    }
    
})