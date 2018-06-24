import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Scene, Router, Actions, Stack, Tabs, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AlbumList from './components/albums/album_list';
import LibraryList from './components/library/library_list';
import LoginForm from './components/login/login_form';
import MainScene from './components/scene/MainScene';
import Tab from './components/Tab';
import TabNotice from './components/scene/TabNotice';
import TabSchedule from './components/scene/TabSchedule';
import TabSNS from './components/scene/TabSNS';
import TabJob from './components/scene/TabJob';
import SettingScene from './components/scene/SettingScene';
import AttendanceScene from './components/scene/AttendanceScene';
import MypageScene from './components/scene/MypageScene';
import SocialScene from './components/scene/SocialScene';
import SNSloginScene from './components/scene/SNSloginScene';
import JobsloginScene from './components/scene/JobsloginScene';
import FavoriteScene from './components/scene/FavoriteScene';
import loginscene from './components/scene/LoginScene';
import FavoriteEdit from './components/scene/FavoriteEditScene';
import SNSNaver from './components/scene/SNSNaver';
import SNSFacebook from './components/scene/SNSFacebook';
import Jobbasic from './components/scene/Jobbasic';
import RecomJob from './components/scene/RecomJob';
import Saramin from './components/scene/Saramin';
import JobKorea from './components/scene/JobKorea';
import Worknet from './components/scene/Worknet';
import ResumeScene from './components/scene/ResumeScene';
import SaramResume from './components/scene/SaramResume';
import JobKResume from './components/scene/JobKResume';
import NCSquiz1 from './components/scene/NCSquiz1';
import NCSquiz2 from './components/scene/NCSquiz2';
import NCSquiz3 from './components/scene/NCSquiz3';
import NCSquiz4 from './components/scene/NCSquiz4';
import NCSquiz5 from './components/scene/NCSquiz5';
import NCSquiz6 from './components/scene/NCSquiz6';
import NCSquiz7 from './components/scene/NCSquiz7';
import NCSquiz8 from './components/scene/NCSquiz8';
import NCSquiz9 from './components/scene/NCSquiz9';
import NCSquiz10 from './components/scene/NCSquiz10';
import Ncsrecom from './components/scene/Ncsrecom';
import SelectTime from './components/scene/SelectTime';
import CheckPage from './components/scene/CheckPage';
//import SNSScene from '../SNSScene';
//import JobsScene from '../JobsScene';
//import ScheduleScene from '../ScheduleScene';

import Menubar from '../src/components/Navbar/Menubar';
import NavbarJobbasic from '../src/components/Navbar/NavbarJobbasic';
import NavbarRecomJob from '../src/components/Navbar/NavbarRecomJob';
import NavbarJobsite from '../src/components/Navbar/NavbarJobsite';
import Navbar from '../src/components/Navbar/Navbar';
import Navbar2 from '../src/components/Navbar/Navbar2';
import NavbarFavorite from '../src/components/Navbar/NavbarFavorite';
import NavbarMypage from '../src/components/Navbar/NavbarMypage';
import NavbarSetting from '../src/components/Navbar/NavbarSetting';
import NavbarSocial from '../src/components/Navbar/NavbarSocial';
import NavbarJobslogin from '../src/components/Navbar/NavbarJobLogin';
import NavbarSNSlogin from '../src/components/Navbar/NavbarSNSLogin';
import NavbarSNS from '../src/components/Navbar/NavbarSNS';
import NavbarJobResume from '../src/components/Navbar/NavbarJobResume';
import Job1scene from './components/scene/Job1scene';
import Job2scene from './components/scene/Job2scene';
import Job3scene from './components/scene/Job3scene';
import Job4scene from './components/scene/Job4scene';
import ARScene from './components/scene/ARScene';
import ForgetScene from './components/scene/ForgetScene';




const RouterComponent = () => {
  return (
    
  
    <Router>
    <Scene hideNavBar="true">

    
      <Scene key="root">
      
        <Scene
          key="MainScene"
          component={MainScene}
          navBar={Navbar}
        />
        <Scene
          key="Notice"
          component={TabNotice}
          navBar={Navbar}
          
        />

        <Scene
          key="CheckPage"
          component={CheckPage}
          navBar={Navbar}
          
        />
       

        <Scene
          key="library"
          onRight={() => Actions.pop()}
          rightTitle="back"
          rightButtonStyle={{ paddingLeft: 5 }}
          component={LibraryList}
          title="Library"
        />
        <Scene
          key="Schedule"
          component={TabSchedule}
          navBar={Navbar}
          navigationBarStyle={{ backgroundColor: '#26a69a', top: 300 }}
        />
        <Scene
          key="SNS"
          component={TabSNS}
          navBar={Navbar}
        />
        <Scene
          key="Jobs"
          component={TabJob}
          navBar={Navbar}
        />
        <Scene
          key="Jobbasic"
          component={Jobbasic}
          navBar={Navbar}
        />

        <Scene
          key="Job1scene"
          component={Job1scene}
          navBar={Navbar}
        />

        <Scene
          key="Job2scene"
          component={Job2scene}
          navBar={Navbar}
        />

         <Scene
          key="Job3scene"
          component={Job3scene}
          navBar={Navbar}
        />

        <Scene
          key="Job4scene"
          component={Job4scene}
          navBar={Navbar}
        />

        <Scene
        key="NCSquiz1"
        component={NCSquiz1}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz2"
        component={NCSquiz2}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz3"
        component={NCSquiz3}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz4"
        component={NCSquiz4}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz5"
        component={NCSquiz5}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz6"
        component={NCSquiz6}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz7"
        component={NCSquiz7}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz8"
        component={NCSquiz8}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz9"
        component={NCSquiz9}
        navBar={Navbar}
        />

        <Scene
        key="NCSquiz10"
        component={NCSquiz10}
        navBar={Navbar}
        />

        <Scene
          key="ResumeScene"
          component={ResumeScene}
          navBar={Navbar}
        />

        <Scene
          key="SaramResume"
          component={SaramResume}
          navBar={Navbar}
        />

        <Scene
          key="JobKResume"
          component={JobKResume}
          navBar={Navbar}
        />

        <Scene
          key="Favorite"
          component={FavoriteScene}
          navBar={Navbar}
        />
        <Scene
          key="FavoriteEdit"
          component={FavoriteEdit}
          navBar={Navbar}
        />
        <Scene
          key="Mypage"
          component={MypageScene}
          navBar={Navbar}
        />
        <Scene
          key="Setting"
          component={SettingScene}
          navBar={Navbar}
        />
        <Scene
          key="Attendance"
          component={AttendanceScene}
          navBar={Navbar}
        />
        <Scene
          key="Social"
          component={SocialScene}
          navBar={Navbar}
        />
        <Scene
          key="SNSlogin"
          component={SNSloginScene}
          navBar={Navbar}
        />
        <Scene
          key="Naverblog"
          component={SNSNaver}
          navBar={Navbar}
        />
        <Scene
          key="Facebook"
          component={SNSFacebook}
          navBar={Navbar}
        />
        <Scene
          key="Jobslogin"
          component={JobsloginScene}
          navBar={Navbar}
        />

        <Scene
          key="RecomJob"
          component={RecomJob}
          navBar={Navbar}
        />

        <Scene
          key="Saramin"
          component={Saramin}
          navBar={Navbar}
        />

        <Scene
          key="JobKorea"
          component={JobKorea}
          navBar={Navbar}
        />

        <Scene
          key="Worknet"
          component={Worknet}
          navBar={Navbar}
        />

        <Scene
          key="login"
          component={loginscene}
          hideNavBar='true'
          initial
          
        />

        <Scene
          key="Ncsrecom"
          component={Ncsrecom}
          navBar={Navbar}
        />

        
        <Scene
          key="SelectTime"
          component={SelectTime}
          navBar={Navbar}
        />

        <Scene
          key="forget"
          component={ForgetScene}
                    
        />
         <Scene
          key="ARScene"
          component={ARScene}
          navBar={Navbar}
                    
        />

      </Scene>
      </Scene>

    </Router> 
    
  );
};



export default RouterComponent;
