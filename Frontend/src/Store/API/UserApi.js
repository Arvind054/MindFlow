import axios from "axios";
import {login} from '../Slice/UserSlice'
//To get the user Profile From the Token by oAuth
export const getUserProfile = async (tokenInfo, dispatch) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: 'application/json',
          },
        }
      );
  
      localStorage.setItem('VerificationToken', JSON.stringify(tokenInfo));
      const userData = response.data;
      dispatch(login(userData)); 
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };