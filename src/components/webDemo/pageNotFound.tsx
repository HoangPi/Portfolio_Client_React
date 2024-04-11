import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const PageNotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(()=>navigate('/'),2000)
    })
    return <div>
        <h1 className="text-3xl mb-5">Page not found</h1>
        <p>Will redirect you to the main page soon</p>
    </div>
}