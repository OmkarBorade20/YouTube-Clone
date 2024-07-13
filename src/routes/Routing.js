import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home';
import VideoDetails from '../components/VideoDetails';
import AppLayout from '../AppLayout';

const Routing=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/watch/:id",
                element:<VideoDetails/>
            }
        ]

    }

]);


export default Routing;