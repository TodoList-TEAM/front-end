// src/components/RootRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {RootLayout_after, RootLayout_before} from './RootLayout';
//import ErrorPage from './ErrorPage';
import { LoginPage } from '../components/loginPage/LoginPage';
import { HomePage } from '../components/homePage/HomePage';
import { MyPage } from '../components/myPage/MyPage';
import { ComunityPage } from '../components/comunityPage/ComunityPage';

const router = createBrowserRouter([
  {
    path: '/',
    
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        element: <RootLayout_after />,
        children:[
          {
            path: 'home',
            element: <HomePage />, 
            
          },
          {
            path: 'comunity',
            element: <ComunityPage />,
          },
          {
            path: 'mypage',
            element: <MyPage />,
          },
        ]
      },
      
    ],
  },
]);

export const RootRouter = () => {
  return <RouterProvider router={router} />;
};


/*
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import { RootLayout } from './RootLayout';
import { LoginPage } from '../components/loginPage/LoginPage';
import { HomePage } from '../components/homePage/HomePage';
import { MyPage } from '../components/myPage/MyPage';
import { ComunityPage } from '../components/comunityPage/ComunityPage' 


// 중첩 라우터 관리

const router= createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path:'home',
                element: <HomePage />,
            },
            {
                path:'comunity',
                element: <ComunityPage />,
            },
            {
                path:'mypage',
                element: <MyPage />,
            },
        ],
    },
]);
*/

/*
export const RootRouter= () => {
    return <RouterProvider router={router} />;
};
*/







/*
// 하나로 관리해주는 라우터


// router 객체 선언부
// path부분의 경로로 들어오면
// element에 있는 페이지로 렌더링.
const router= createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/todolist',
        element: <TodoListpage />,
    },
]);


// router 객체를 컴포넌트로 제공해주기위한 provider
// 객체로 만들어둔 라우터 설정을 파라미터로 받아서 실제로 적용시켜준다. 
export const RootRouter = () => {
    return <RouterProvider router={router} />;
};

*/

