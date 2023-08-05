import { isAuthenticated } from "@/libs/managers";
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

// Este Guard restringe la ruta a los usuarios que no estan autenticados
export const PrivateRouteGuard = (props: {element: ReactNode})  => {
  
  // En caso de que el usuario este autenticado, se muestra el componente
  if (isAuthenticated()) {
    return props.element
  }

  // En caso de que el usuario no este autenticado, se redirige a la ruta de login
  return <Navigate replace to="/login"/>;
};