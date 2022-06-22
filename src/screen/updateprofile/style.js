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
    camtxt:{
        alignSelf:'center',marginTop:2,
        fontSize:'14@ms',
        color:colors.Charcole
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
      modalInner1:{
        padding:'25@ms',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    btn:{
        width:'100%',
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
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
   
    txtstyle3:{
        color:colors.Golden,
        fontSize:'17@ms',
        fontWeight:'300'
    },
    imgStyle3: {
        height:'38@ms',
        width:'38@ms',
        marginRight:'15@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
    },
    logout:{flexDirection:'row',justifyContent:'space-between',
        marginVertical:'10@ms',
        marginHorizontal:'15@ms'},
    labelhead:{
    alignSelf:'center',
    padding:'5@ms',
    fontSize:'15@ms',
    color:'#202020',
    marginVertical:'8@ms',
    fontWeight:'bold',

},
    stylelogo:{
     
        paddingHorizontal:'15@ms'
    },
    label:{
        fontSize:'15@ms',
        color:'#202020',
        marginVertical:'5@ms'
        
    },
    labeldob:{
        fontSize:'15@ms',
        color:'#202020',
        marginBottom:'12@ms',

    },
    userimg:{
    width:'100%',
    justifyContent:'space-between',
    marginBottom:'10@ms',
    alignItems:'center'
    },
    btn1:{
        backgroundColor:colors.edit,
        paddingVertical:'5@ms',
        paddingHorizontal:'8@ms',
        borderRadius:'5@ms'
    },
    btn2:{
        backgroundColor:colors.red,
        paddingVertical:'5@ms',
        paddingHorizontal:'8@ms',
        borderRadius:'5@ms'

    },
    labelbtn1:{
        color:colors.white,
        fontSize:'12@ms'
    },
    cover:{
       borderWidth:2,
       borderColor:colors.Golden,
        width:'75@ms',
        height:'75@ms',
        borderRadius:'50@ms',
        overflow:'hidden',
    },
    lbl:{
        width:'80%',
        alignSelf:'center'

    },
    input:{
        width:'100%',
       
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
        backgroundColor:colors.white,
        height:'580@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
        flex:1
    },
    hdr:{
        fontWeight:'bold',
        fontSize:'20@ms',
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