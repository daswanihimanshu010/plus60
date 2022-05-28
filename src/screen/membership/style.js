import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
     
    },
    stylelogo:{
        height:'22%',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapp:{
        height:'78%',
    //    backgroundColor:'red'
    },
    headerstyle:{
        height:'10%',
        backgroundColor:colors.headerview,
        justifyContent:'center',
        alignItems:'center'

    },
    wlcom:{
        width:'80%',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:colors.Golden,
        paddingVertical:'12@ms',
        marginTop:'25@ms',
        borderRadius:'8@ms'
    },
    wlcomtxt:{
        fontSize:'12@ms',
        fontWeight:'bold',
        color:colors.Charcole
    },
    txtstyle1:{
        color:colors.whitelight,
        fontSize:'20@ms',
        fontWeight:'300'
    },
    txtstyle3:{
        color:colors.whitelight,
        fontSize:'17@ms',
        fontWeight:'200'
    },
    field:{
        width:'90%',
        alignSelf:'center',
        
    },
    card:{
       // height:"75%",
        justifyContent:'space-evenly'

    },
    // card2:{
    //     height:"20%",
    //     backgroundColor:'black',
    //     justifyContent:'space-evenly'

    // },
    
    wrp:{
        height:"100@mvs",
        borderRadius:'6@ms',
        backgroundColor:colors.card1,
        flexDirection:'row',
        overflow:'hidden',
        marginBottom:'8@mvs',
        marginTop:'8@mvs'
    },
    wrp11:{
        height:"25%",
        borderRadius:'6@ms',
        backgroundColor:colors.card2,
        flexDirection:'row',
        overflow:'hidden'
    },
    wrp22:{
        height:"25%",
        borderRadius:'6@ms',
        backgroundColor:colors.card3,
        flexDirection:'row',
        overflow:'hidden'
    },
    wrp1:{
        width:'70%',
        paddingHorizontal:'15@ms',
        justifyContent:'space-evenly'
        
    },
    cardtxtstyle1:{
        color:colors.white,
        fontSize:'15@ms',
        fontWeight:'500'
        
    },
    cardtxtstyle2:{
        color:colors.white,
        fontSize:'8@ms',
        
    },
    cardtxtstyle3:{
        color:colors.white,
        fontSize:'12@ms',
        fontWeight:'400'  
    },
    wrp2:{
        width:'30%',
        paddingHorizontal:'15@ms',
        justifyContent:'space-evenly'
    },
    txtstyle2:{
        color:colors.Charcole,
        fontSize:'15@ms',
    },
   
    btn:{
        width:'80%',
        height:'45@ms',
        backgroundColor:colors.Charcole,
        borderRadius:'8@ms',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginBottom:'25@mvs',
        marginTop:'14@mvs'
        
    },
   
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
      imgStyle: {
        alignSelf : 'center',
        height:'50%',
        resizeMode:'contain',
        width:'40%',
    },
    imgStyle1: {
        
        height:'50%',
        resizeMode:'contain',
        width:'40%',
        alignSelf : 'center',
        marginTop:'-18@ms'
    },
    
})