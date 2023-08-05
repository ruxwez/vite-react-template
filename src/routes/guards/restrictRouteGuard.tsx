import { isAuthenticated } from "@/libs/managers";
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"


// Este Guard restringe la ruta a los usuarios autenticados
export const RestrictRouteGuard = (props: {element: ReactNode})  => {
  
  if (!isAuthenticated()) {
    return props.element
  }

  return <Navigate replace to="/"/>;
};