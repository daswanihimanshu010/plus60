import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    modal:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    imgStyle1: {
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },modalInner:{
        width: '320@ms',
        backgroundColor: 'white',
   
        borderRadius: '4@ms',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        paddingHorizontal:'12@ms',
        paddingVertical:'14@ms'
      },
      modaltitle:{
        fontSize:'14@ms',
        color:colors.Charcole,
        fontWeight:'bold',
        marginVertical:'5@ms',
        alignSelf:'center'
      },
      
      
      modalsubtitle:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400',
        marginBottom:'2@ms'
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
      //  height:'130@mvs',
    },
    cardheader1:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:'15@ms'
  
      },
      typebutton:{
           fontSize:'14@ms',
           paddingVertical:'5@ms',
           paddingHorizontal:'15@ms',
           borderRadius:'25@ms',
           color:'#202020'
       },
    cardheader:{
        marginTop:'30@ms',

        paddingBottom:'25@mvs',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardheaderblb:{
        paddingTop:'25@mvs',
        marginBottom:'-8@ms',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
    },
    iconf:{color:'red'},
    cardheadertxt:{
        marginLeft:'6@ms',
        color:colors.black,
        fontSize:'14@ms',
        lineHeight:'25@ms',
        fontWeight:'400'
    },
    card:{
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
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
    searchbar:{
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'95%',
        paddingHorizontal:'25@ms',
        paddingVertical:'5@ms',
        color:colors.Charcole
    },
    cardheadersearch:{
        marginTop:'30@ms',

        paddingBottom:'25@mvs',
        paddingHorizontal:'25@ms',
    },
    roundstyle:{

        backgroundColor:colors.blacklight,
        height:'70@mvs',
        width:'95@ms',
        alignItems:'center',
        justifyContent:'center',
    },
    roundstyletxt:{
        fontWeight:'bold',
        fontSize:'35@ms',
        color:colors.black
    },cardtxt:{
        // backgroundColor:'red',
        // width:"190@ms",
         flex:1,
         paddingLeft:'8@ms',
         justifyContent:'space-evenly'

     
         },
         cardtxtstyle1:{
             fontSize:'16@ms',
             fontWeight:'800',
             color:'#585c59'
         },
         cardtxtstyle2:{
             fontSize:'14@ms',
             fontWeight:'500',
             color:'#424242'
     
         },
         cardtxtstyle2lang:{
            fontSize:'12@ms',
            color:'#383937'
        },
   
   
    
   
  
    
   
   
  
    
})