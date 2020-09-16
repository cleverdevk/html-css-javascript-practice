import axios from "axios";

const request = axios.create({
    baseURL:"http://localhost:8000"
});

export const userApi = {
    registerUser: (email, password, name) => {
        return request.post('/user', {
            email:email,
            password:password,
            name: name
        })
    },
    loginUser : (email, password) => {
        return request.post("/user/login", {
            email,
            password
        })
    }
}

export const sellerApi = {
    registerSeller: (email, password, name) => {
        return request.post('/seller', {
            email:email,
            password:password,
            name: name
        })
    },
    loginSeller : (email, password) => {
        return request.post("/seller/login", {
            email,
            password
        })
    }
}

export const postApi = {
    post:(formData) => {
        return request.post("/post", formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })
    },
    getFile:(src) => {
        return request.get("/post/images", {
            params:{
                src:src
            },
            // binary large object - for multimedia data
            responseType: "blob"
        })
    },
    // 아무것도 안들어왔을 때 ""이 들어간다. default값 정의 가능
    getList: (searchKeyword = "") => {
        return request.get("/post",{
            params:{
                searchKeyword: searchKeyword
            }
        })
    },
    getOne: (id) => {
        return request.get(`/post/${id}`);
    }
}