import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    }, 
     modal:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
        
    },
    modalInner:{
        
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
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
        marginTop:'35@mvs'
    },
    imgStyle1: {
        
        height:'50@mvs',
        resizeMode:'contain',
        width:'100@ms',
    },
    imgStyle2: {  
        color:colors.Charcole, 
    },
    txtstyle3:{
        color:colors.Golden,
        fontSize:'17@ms',
        fontWeight:'300'
    },
    imgStyle3: {
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    }, modalInner1:{
        padding:'25@ms',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    
    stylelogo:{
        paddingHorizontal:'15@ms',
        height:'130@mvs',
    },
    label:{
        fontSize:'15@ms',
        color:colors.Golden
    },
    lbl:{
        width:'80%',
        alignSelf:'center'

    },
    input:{
        width:'100%',
    },
    des:{
        marginTop:'5@ms',
        width:'100%',
        height:'100@ms',
        alignSelf:'center',
        marginBottom:'10@ms',
        borderColor:colors.black,
        borderWidth:1,
        color:'#202020'
    },
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    iconf:{color:'red'},

    cardheadertxt:{
        marginLeft:'6@ms',
        color:colors.black,
        fontSize:'18@ms',
        lineHeight:'25@ms',
        fontWeight:'bold'
    },
    card:{
        flex:1,
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
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginBottom:'25@ms'
    },
    roundstyle:{
        backgroundColor:colors.blacklight,
        height:'48@mvs',
        width:'93@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    roundstyletxt:{
        fontWeight:'bold',
        fontSize:'35@ms',
        color:colors.black
    },cardtxt:{
        // backgroundColor:'red',
         width:"190@ms",
         paddingLeft:'8@ms',
         justifyContent:'space-evenly'

     
         },
         cardtxtstyle1:{
             fontSize:'16@ms',
             fontWeight:'800',
           //  color:colors.black
         },
         cardtxtstyle2:{
             fontSize:'14@ms',
             fontWeight:'500'
     
         },
   
   
    
   
  
    
   
   
  
    
})