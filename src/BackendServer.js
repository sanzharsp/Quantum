/*хранилище url Django backend */
const url={
    BaseUrl:"http://127.0.0.1:8000",
    Auth:{
        login:'/api/v1/login',
        post:'/api/v1/news/post/new_post',
        register:'/api/v1/register',
        refresh:'/api/v1/login/refresh/'
    },
    
    
    }
    
    
export default url ;