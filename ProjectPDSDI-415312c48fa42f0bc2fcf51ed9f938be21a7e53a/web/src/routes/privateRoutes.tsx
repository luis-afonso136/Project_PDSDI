import { Loader } from 'lucide-react'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface PrivateRoutesProps {
    element: ReactNode
    notHaveAccessNavigateTo: string
}

export function PrivateRoutes({
    element,
    notHaveAccessNavigateTo
}: PrivateRoutesProps) {

    const { user_id, loading } = useAuth()

    if (loading) {
        return (
            <Loader size={80}/>
        )
    }

    return user_id ? element : <Navigate to={notHaveAccessNavigateTo} replace />
}