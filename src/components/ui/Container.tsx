import { ReactNode } from "react";

type TodoContainerProps={
    children: ReactNode;
}
const Container = ({children}:TodoContainerProps) => {
    return (
        <div className="h-screen max-w-7xl w-full mx-auto" >
           {children} 
        </div>
    );
};

export default Container;