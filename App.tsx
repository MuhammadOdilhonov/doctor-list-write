// App.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import MainTabNavigator from './pages/Mein/MainTabNavigator';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import DrInformation from './components/Dr. information/DrInformation';
import store from './redux/store';
import HospitalFilter from './components/HospitalFilter/HospitalFilter';
import HospitalInformation from './components/HospitalInformation/HospitalInformation';

const Stack = createNativeStackNavigator();

// console.log("==>>>", store);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="DrInformation" component={DrInformation} />
            <Stack.Screen name="HospitalFilter" component={HospitalFilter} />
            <Stack.Screen name="HospitalInformation" component={HospitalInformation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;














[
  {
    "createdAt": "2024-04-30T07:27:32.806Z",
    "img": "https://www.vpslakeshorehospital.com/uploads/doctor//drvivekmathew-endrocrinology-rj8ojdkxoljslrs-0o2w4gKOLJVdIl8.jpg",
    "Bemorlar": "10",
    "Tajribam": "15",
    "Baholashlar": "3",
    "drinfo": "Doktor Venkat AQShning Mayami universitetida 3 yillik (2 yillik stipendiya va 1 yil fakultet) tahsil olgan maslahatchi uro-onkolog va robot-urologdir. U, shuningdek, Mayamiga tashrif buyurgan yordamchi professor va 600 dan ortiq robotli jarrohlik amaliyotiga ega. U bor • Urologik onkologiya va robotojarrohlik boʻyicha ilmiy xodim, Mayami Miller universiteti tibbiyot maktabi, Mayami, AQSh – 2017 • M.Ch. Urologiya, Xristian tibbiyot kolleji, Vellore – 2013 • MS Umumiy jarrohlik, Seth GS tibbiyot kolleji va KEM kasalxonasi, Mumbay – 2009 • MBBS, BJ Medical College, Pune – 2005",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": true
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": true
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": true
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Endocrinolog",
    "name": "Dr. Vivek",
    "Address": "Toshkent sh, Shayhontohur , Baliqchi 1",
    "level": 4.7,
    "Number": "+998 99 899 89 98",
    "BooleanDoctor": false,
    "id": "1"
  },
  {
    "createdAt": "2024-04-30T04:38:19.777Z",
    "img": "https://clinics.uz/images/doctors/L9pbEOP1fmqV7Kk17LWZc4u20KBAG5EOitumw3x1_large.jpg",
    "Bemorlar": "11",
    "Tajribam": "15",
    "Baholashlar": "4",
    "drinfo": "Zokirov Jurat Fotixovich - nefrolog, 41 yil tajribaga ega oliy toifali shifokor.",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": true
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": true
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": true
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": true
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": true
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": true
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": true
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": true
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": true
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Nefrolog",
    "name": "Jurat Fatixovich,",
    "Address": "Toshkent sh, Yunsobod , Amitemur 49a",
    "level": 4.8,
    "Number": "+998 90 950 80 81",
    "BooleanDoctor": true,
    "id": "2"
  },
  {
    "createdAt": "2024-04-30T11:24:33.311Z",
    "img": "https://nefrolog.doctor/wp-content/uploads/2023/08/Corina-Teodosiu-Nefrolog.webp",
    "Bemorlar": "12",
    "Tajribam": "5",
    "Baholashlar": "5",
    "drinfo": "tibbiyot xodimi, kasallikka chalingan yoki jarohatlangan odam sogʻligʻini tiklash bilan shugʻullanuvchi kasb egalari hisoblanadi. Xalq orasida — „doktor“, „vrach“, „tabib“ (asosan xalq tabobatiga oid) kabi nomlari tarqalgan. Qadimda mazkur kasb egalarini „hakim“ deb atashgan.",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": true
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Nefrolog",
    "name": "Lenufar",
    "Address": "Toshkent sh, Chilonzor , Mashrab 21",
    "level": 5,
    "Number": "+998 90 555 44 75",
    "BooleanDoctor": true,
    "id": "3"
  },
  {
    "createdAt": "2024-04-30T12:57:38.545Z",
    "img": "https://clinics.uz/images/doctors/ji7r1r1BHASx0Kh6aX8h8R6R1KmlgKxmln657wfY_large.jpg",
    "Bemorlar": "20",
    "Tajribam": "15",
    "Baholashlar": "2",
    "drinfo": "Владеет хирургическими методами лечения больных с торакальной, абдоминальной патологией.Самостоятельно выполняет все сложные операции на грудной клетки и его органов, шеи(заболевание щитовидной железы, трахеи), а также на органах брюшной полости.Консультирует и владеет лечением пульмонологических, фтизиатрических, онкологических, эндокринологических(заболевание щитовидной железы) заболеваний.Опубликовал более 100 научных трудов, из них 1 монография, 38 журнальных статей, более 70 тезисов, получены 8 патента, из них 3 государственного патентного ведомства РУз",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": true
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": true
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": true
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": true
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Pulmonolog",
    "name": "Завкий Фахриддинович",
    "Address": "Toshkent v, Chirchiq , Baliqchi 14a",
    "level": 4.9,
    "Number": "+99891 707 08 08",
    "BooleanDoctor": false,
    "id": "4"
  },
  {
    "createdAt": "2024-04-30T21:44:48.129Z",
    "img": "https://www.амадей-клиник.бел/wp-content/uploads/2023/12/glav-scaled-1-819x1024.jpg",
    "Bemorlar": "10",
    "Tajribam": "12",
    "Baholashlar": "4",
    "drinfo": "Нейроциркуляторная дистония (НЦД) – это распространенная патология, связанная с дисбалансом в работе вегетативной нервной системы. Симптомы, возникающие при этом состоянии, могут быть различными, но каждый из них требует внимания. Своевременное лечение позволяет стабилизировать организм и избавиться от неприятных проявлений дистонии.",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Endokrinolog",
    "name": "Георгий Никитич",
    "Address": "Toshkent sh, Shayhontohur , Orifon 47",
    "level": 5,
    "Number": "+998 91 243 43 68",
    "BooleanDoctor": false,
    "id": "5"
  },
  {
    "createdAt": "2024-04-30T14:31:32.029Z",
    "img": "https://novolekar.by/images/Barabanovnew.jpg",
    "Bemorlar": "18",
    "Tajribam": "5",
    "Baholashlar": "5",
    "drinfo": "Ten Sergey Leonidovich - plastik jarroh, 33 yil tajribaga ega oliy toifali shifokor, 1 fikr-mulohaza. Onlayn yoki telefon orqali qabulga yozilish",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Dermatolog",
    "name": "Андрей Леонидович",
    "Address": "Samarqant v, Ot Ariq 55",
    "level": 4.9,
    "Number": "+998 99 899 89 98",
    "BooleanDoctor": true,
    "id": "6"
  },
  {
    "createdAt": "2024-05-01T01:03:03.276Z",
    "img": "https://med24.uz/upload/iblock/a91/a918dd470bc69c087fd9c0fd29f5f75e.png",
    "Bemorlar": "10",
    "Tajribam": "15",
    "Baholashlar": "3",
    "drinfo": "Odilovich - plastik jarroh, 24 yil tajribaga ega oliy toifali shifokor, 1 fikr-mulohaza. Onlayn yoki telefon orqali qabulga yozilish",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Jarrohlik",
    "name": "Faxriddin Odilovich",
    "Address": "Termiz v, Qoqraqul , Baliqchi 49a",
    "level": 4.5,
    "Number": "+998 88 920 44 11",
    "BooleanDoctor": false,
    "id": "7"
  },
  {
    "createdAt": "2024-04-30T05:48:57.206Z",
    "img": "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png",
    "Bemorlar": "10",
    "Tajribam": "15",
    "Baholashlar": "3",
    "drinfo": "Turdiev Dilmurod Normovich - stomatolog, stomatolog-ortoped, 17 yil tajribaga ega uchinchi toifali shifokor, 1 fikr-mulohaza. Onlayn yoki telefon orqali qabulga yozilish",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": true
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Pediatrlar",
    "name": "Dilmurod Rinatovich",
    "Address": "Samarqant sh, Oq ilon , dukduk 11e",
    "level": 4.7,
    "Number": "+998 97 726 84 35",
    "BooleanDoctor": true,
    "id": "8"
  },
  {
    "createdAt": "2024-04-30T20:37:21.975Z",
    "img": "https://pomedicine.ru/uploads/posts/2015-12/1450156605_grinkolor.jpg",
    "Bemorlar": "4",
    "Tajribam": "2",
    "Baholashlar": "3",
    "drinfo": "Doktor Profi ko‘p tarmoqli xususiy klinikasi Chilonzor tumanida, Novza metro bekati yaqinida joyda joylashgan. U 2013-yilda tashkil etilgan. Har bir bemorga individual yondashuv va shifokorlarning professionalligi uning faoliyati davomida mijozlar ishonchini qozonishga yordam berdi. U ko'plab sohalarda kattalar va bolalar uchun sifatli tibbiy xizmatlarni taklif etadi. ",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": true
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": true
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Pediatrlar",
    "name": "Mufazal Rashidovna",
    "Address": "Toshkent sh, Shayhontohur , Yalang`och 11",
    "level": 4.9,
    "Number": "+998 88 800 07 06",
    "BooleanDoctor": true,
    "id": "9"
  },
  {
    "createdAt": "2024-04-30T15:54:30.348Z",
    "img": "https://www.kliniki.uz/images/small/4476.jpg",
    "Bemorlar": "20",
    "Tajribam": "6",
    "Baholashlar": "4",
    "drinfo": "(1957-yil 26-mayda tugʻilgan)[1] – 1968-yilda Nyukasl-apon Tayn shahrining ichki chekkasidagi Skotsvudda oʻsmirlik davrida ikki maktabgacha yoshdagi bolalarni oʻldirgan ingliz ayol[2]. Birinchi qotillik u 10 yoshida sodir boʻlgan. Ikkala holatda ham Bell jabrlanuvchiga uning tomogʻi ogʻriyotgani haqida xabar berdi va u uni boʻgʻib oʻldirishdan oldin u massaj qilishini aytdi",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Nefrolog",
    "name": "Doctor Nayt",
    "Address": "Toshkent sh, Chilonzor , Nurafshon 11a",
    "level": 5,
    "Number": "+998 20 000 00 01",
    "BooleanDoctor": false,
    "id": "10"
  },
  {
    "createdAt": "2024-04-30T15:54:30.348Z",
    "img": "https://www.kliniki.uz/images/small/4476.jpg",
    "Bemorlar": "16",
    "Tajribam": "5",
    "Baholashlar": "4",
    "drinfo": "Dr.Hasan - xususiy ko'p tarmoqli davolash-diagnostika klinikasi o'z bemorlariga sifatli tibbiy xizmatlarni taqdim etadi.",
    "Jadvallar": [
      {
        "id": 1,
        "number_dey": 1,
        "number_week": "Dush",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": true
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 2,
        "number_dey": 2,
        "number_week": "Sesh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": true
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 3,
        "number_dey": 3,
        "number_week": "Chor",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 4,
        "number_dey": 4,
        "number_week": "Pay",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 5,
        "number_dey": 5,
        "number_week": "Juma",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 6,
        "number_dey": 6,
        "number_week": "Shan",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      },
      {
        "id": 7,
        "number_dey": 7,
        "number_week": "Yaksh",
        "bolleanWeek": false,
        "Tashrif": [
          {
            "id": 1,
            "number_hour": "11:00",
            "booleanVisitingHours": false
          },
          {
            "id": 2,
            "number_hour": "12:00",
            "booleanVisitingHours": false
          },
          {
            "id": 3,
            "number_hour": "13:00",
            "booleanVisitingHours": false
          },
          {
            "id": 4,
            "number_hour": "14:00",
            "booleanVisitingHours": false
          },
          {
            "id": 5,
            "number_hour": "15:00",
            "booleanVisitingHours": false
          },
          {
            "id": 6,
            "number_hour": "16:00",
            "booleanVisitingHours": false
          },
          {
            "id": 7,
            "number_hour": "17:00",
            "booleanVisitingHours": false
          },
          {
            "id": 8,
            "number_hour": "18:00",
            "booleanVisitingHours": false
          }
        ]
      }
    ],
    "yolanish": "Nefrolog",
    "name": "Doctor Hasan",
    "Address": "Toshkent sh, Sergili 11, Suraklar 15b",
    "level": 4.3,
    "Number": "+998 98 005 55 45",
    "BooleanDoctor": true,
    "id": "11"
  }
]

