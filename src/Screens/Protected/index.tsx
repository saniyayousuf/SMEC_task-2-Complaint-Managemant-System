import { useEffect, useState } from "react"
import Loading from '../../Assets/Loading.jpg'
import { useNavigate } from "react-router-dom"
import { FbAuth } from "../../Config/Firebase/FirebaseMethods"





export default function Protected(props: any) {

    const { Screen } = props
    const [loader, setloader] = useState<any>(true)
    const navigate = useNavigate()
    
    let checkAuth = () => {
        setloader(true)
        FbAuth().then(res => {
            setloader(false)
        }).catch(err => {
            setloader(true)
            navigate("/login")
        })

    }
    useEffect(() => {
        checkAuth()
    }, [])

    return loader ? <>
        <div className="h-screen d-flex justify-center align-items-center">
            <img src={Loading} height={100} width={100} />
            <div> 
                 
            <h1>Loading...........</h1>
        </div>
            </div >
    </>

        : <Screen />
}
