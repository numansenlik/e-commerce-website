import React, { ReactNode } from 'react';

interface PageContainerProps {
    children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='w-10/12 m-auto'>{children}</div>
    );
};

export default PageContainer;
