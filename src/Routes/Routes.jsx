import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Asignments from '../Pages/Asignments/Asignments/Asignments';
import CreatAsignment from '../Pages/creatAsignment/CreatAsignment';
import Myasignnment from '../Pages/myAsignment/Myasignnment';
import SubmittedAsignment from '../Pages/submittedAsignment/SubmittedAsignment';

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'asignments',
                element: <Asignments></Asignments>
            },
            {
                path: 'creatasignment',
                element: <CreatAsignment></CreatAsignment>
            },
            {
                path: 'myasignment',
                element: <Myasignnment></Myasignnment>
            },
            {
                path: 'submittedasignment',
                element: <SubmittedAsignment></SubmittedAsignment>
            }
        ],
    },

    {
        //out side of children
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }

])

export default myCreatedRoutes;