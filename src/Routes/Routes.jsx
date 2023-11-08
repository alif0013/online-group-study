import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Asignments from '../Pages/Asignments/Asignments/Asignments';
import CreatAsignment from '../Pages/creatAsignment/CreatAsignment';
import Myasignnment from '../Pages/myAsignment/Myasignnment';
import SubmittedAsignment from '../Pages/submittedAsignment/SubmittedAsignment';
import ErrorPage from '../errorPage/ErrorPage';
import ViewAsignment from '../Pages/ViewAsignment/ViewAsignment';
import UpdateAsignment from '../Pages/updateAsignment/UpdateAsignment';
import PrivateRoutes from './PrivateRoutes';
import Submit from '../Pages/Submit/Submit';
import GiveMark from '../Pages/giveMark/GiveMark';

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'asignments',
                element: <Asignments></Asignments>,
                loader: ()=> fetch('https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/asignments')
             },
            {
                path: 'creatasignment',
                element: <PrivateRoutes><CreatAsignment></CreatAsignment></PrivateRoutes>
            },
            {
                path: 'myasignment',
                element: <PrivateRoutes><Myasignnment></Myasignnment></PrivateRoutes>
            },
            {
                path: 'submittedasignment',
                element: <PrivateRoutes><SubmittedAsignment></SubmittedAsignment></PrivateRoutes>
            },
            {
                //out side of children
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <ViewAsignment></ViewAsignment>,
                loader: ({params}) => fetch(`https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/asignments/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateAsignment></UpdateAsignment></PrivateRoutes>,
                loader: ({params}) => fetch(`https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/asignments/${params.id}`)
            },
            {
                path: '/submit',
                element: <Submit></Submit>,
            },
            {
                path: '/givemark/:id',
                element: <GiveMark></GiveMark>,
                // loader: ()=> fetch('https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/submitAsignment')
                loader: ({params}) => fetch(`https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/submitAsignment/${params.id}`)
            }


        ],
    },

    

])

export default myCreatedRoutes;