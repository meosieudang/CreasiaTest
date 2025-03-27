import {StyleSheet, Text, View, Linking, Button} from 'react-native';
import React from 'react';
import Share, {ShareSingleOptions} from 'react-native-share';
const App = () => {
  const shareToFacebookStory = async () => {
    const shareOptions: ShareSingleOptions = {
      title: 'Share image to fbstory',
      social: Share.Social.FACEBOOK,
      appId: '219376304', //facebook appId
      message: `Hưởng ứng ngày hội Một ngày làm sinh viên, các em hệ 24TC B cũng được trải nghiệm một ngày làm thợ thi công hệ thống mạng cho phòng thực hành D2.101: tính toán vị trí đặt thiết bị, đo dây cáp, lắp ống sắt để bảo vệ dây, luồn dây, đóng nẹp,... . 
Một hoạt động thực tế rất bổ ích, cũng đổ mồ hôi, chai tay thậm chí chợt vẹt nhưng ai cũng có phần, kể cả quét dọn vệ sinh sau khi thi công. 
Cám ơn thầy Thắng đã hỗ trợ và hướng dẫn các em tích luỹ kinh nghiệm thực chiến!
PS: Cho ai đó nhoi nhoi dạy xong môn Mạng mà sinh viên không biết sợi dây mạng là cái chi!😍 #aaa  `,
      // url: 'https://plus.unsplash.com/premium_photo-1670537995192-c0b562f5c7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      console.log('Response =>', ShareResponse);
      // setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      // setResult('error: '.concat(getErrorString(error)));
    }
  };
  const shareUrlWithMessage = async () => {
    const shareOptions = {};

    try {
      const ShareResponse = await Share.open({
        title: 'Share file',
        message: `aaaa #aa`,
        urls: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEXw8PDQ0Gjy8vbPz2XW1oXOzl3p6djX14vo6NPw8PLy8vnr693Pz2Lp6dbU1H7V1YPc3J/k5MPv7+vMzFLi4rvS0nUtPdGHAAACLUlEQVR4nO3cW3aCQBBFUeSlgIDRZP5TzRD6dtYtKOM5Ayhqr+SzraYhIiIiIiIi+tQmqTfe6rmO5dblYKJxq2l9DUJbG46K2moah0u5rj9YaNwKIcKYECKMmuULIcKoWb4QIoya5QshwqhZvhAijJrlCyHCqFm+ECKMmuULIcKoWb4QIoya5QshwqhZvhCeJZxaqfcVTkt/FXooo5IK16Erd9/fWJhyVNK1ECLMvxZChPnXQogw/1oIEeZfCyHC/GshRJh/LYQI86+FEGH+tRAizL8WQoT510KI8C+z5vIJh/b4UUbhtghXHL6UOwiDNup+sPDSSct/r7di465MUoBeodSwtuV/wPnaub53gvAm3BppEeohRFgfQoS1IURYH0KEtSFEWB9ChLUhRFgfQoS1IURYH0KEtSFEWB9ChLUh/BihdCZAaxjn8s2I+Xp3fU86XtBMy9a72nblasSP7Xu7coCiUc91CM2LdDWiF/7QagrQmPMhU84QIswfQoT5Q4gwfwgR5g8hwvwhRJg/hAjzhxBh/hAizB9ChPlDiPDcyr+zt16NmIRHHWbgsh57NWJ9Hixs+4OvRryUpzlWofTMx3g1Qnp8dILQ9yYKoT2ECGNGOUOIMGaUM4QIY0Y5Q4gwZpQzhAhjRjlDiDBmlDOECGNGOUOIMGaUM4QIY0Y5Q4gwZpQzhP9BqJx6EIW2Uc7ax65cjRgVoW+UNe2Ig7SVcRQRERERERHRx/YLy8KMroD18pMAAAAASUVORK5CYII=',
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXw8PDUVp/SSZry9/Tq1eDUUp3ZeK7x8/Lp0N3agLLSRZjr2uPYcKvZea/TT5zq1uDdkbvlutHz/vjv6+3ROpTVXqLpztzWZaX0Py9GAAACFklEQVR4nO3cTVZaYRBFUQIC+vgLasj8Z5pWGml5G1UvRbLPAK7fZmkPa7ORJEmSJOl/7fjERcCPl+ftlBCPL5/bZ2057yLh9tuztj8QEk6PkHB+hITzIyScHyHh/AgJ50dIOD9CwvkREs6PkHB+hITzI/wtXPZB4Y9cd+qaCU/nw9ddfkSvOl9WnTp8T4Sb4y7o/S356Le3dad2ETBrlz3rNfh+S+FUZYSEPVOVERL2TFVGSNgzVRkhYc9UZYSEPVOVERL2TFVGSNgzVRkhYc9UZYSEPVOVERL2TFVGSNgzlZZcZ/gLwt26VyNOhyW4cfD5SISXZGq539a9GrGcb69f9/hIfuDtEUzdo4+h8GrE/lL3SxP9VdyiVxV+JyrbqqvyVYSEPRESdm3VRUjYtVUXIWHXVl2EhF1bdRESdm3VRUjYtVUXIWHXVl2EhF1bdRESdm3VRUjYtVVXrTC5GnG9vEcXAMo6Ra+qvBrx823dDutfjbgmpzjqWmZejShs6Le+CAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCacLo/+PX1848mrENXr8PliaejXinhD32dTIqxHhqYfCqbW/EzVzauizCAnnP4uQcP6zCAnnP4uQcP6zCAnnP4uQcP6zCAnnP4uQcP6zCAnnP4uQcP6zCAn/3Cq7zzBzKrwaEd1nmDkVXo3I7jPMnJIkSZIk6V/sF+VupuU9YoYGAAAAAElFTkSuQmCC',
        ],
      });
      console.log('Result =>', ShareResponse);
    } catch (error) {
      console.log('Error =>', error);
    }
  };
  return (
    <View>
      <Text>Apap</Text>
      <Button
        title="Open facebook"
        // onPress={() => Linking.openURL('fb://page/159616034235')}
        onPress={() =>
          // shareToFacebookStory()
          shareUrlWithMessage()
        }
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
