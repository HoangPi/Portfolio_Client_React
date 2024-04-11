import { useAppDispatch } from "../../store/hook"
import { deleteToken } from "../../store/tokenSlice"
import { Link } from "react-router-dom"
// import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

export const NavBarDemo = () => {
    const dispatch = useAppDispatch()
    return <div className="px-4 py-6 h-full sticky border-r-2 border-slate-500">
        {/* <ToastContainer /> */}
        <h1 className="mt-2"><strong>Navigator</strong></h1>
        <Link to={'/'} className="block mb-3 mt-5 hover:text-slate-50 hover:underline">Home page</Link>
        <Link to={'/admin'} className="block mb-3 mt-5 hover:text-slate-50 hover:underline">Admin</Link>
        <Link to={'/signin'} className="block mb-3 hover:text-slate-50 hover:underline">Sign in</Link>
        <Link to={'/signup'} className="block mb-3 hover:text-slate-50 hover:underline">Sign up</Link>
        <Link onClick={()=>dispatch(deleteToken())} to={'/signin'} className="block mb-3 hover:text-slate-50 hover:underline">Sign out</Link>
    </div>
}