import { createContext, useContext } from 'react';

const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null;

    // 빈 Promise 배열 처리르르 위해 Promise.resolve() 사용
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};

export const usePreloader = (resolve) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;
    if (preloadContext.done) return null;
    preloadContext.promises.push(Promise.resolve(resolve()));
};
