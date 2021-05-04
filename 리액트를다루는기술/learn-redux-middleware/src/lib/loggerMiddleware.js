const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action && action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    next(action); // 다음미들웨어나 리듀서에게 전달
    console.log('next state', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;
