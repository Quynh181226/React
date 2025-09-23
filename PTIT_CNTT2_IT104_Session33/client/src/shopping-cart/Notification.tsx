import { useSelector } from 'react-redux'
import type { RootType } from '../store/Store'
export const Notification = () => {
    const {notification} = useSelector((state: RootType) => state)

    return (
        <div className={notification.style} style={{display: notification.status? "block" :"none"}}>
            {notification.message}
        </div>  )
}