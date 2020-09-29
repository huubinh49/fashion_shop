import * as actionTypes from './actionTypes'
import axiosClient from '../../API/axiosClient'
import decode from 'jwt-decode'
export const authStart = ()=>{
    return{
        type:actionTypes.AUTH_START
    }
}
export const authSuccess = (token)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token: token
    }
}
export const authFail = (error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expiration');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}


export const checkAuthentication = ()=>{
    return dispatch =>{
        const access = localStorage.getItem("token") 
        const refresh = localStorage.getItem("refresh_token")
        if(!access && !refresh){
            dispatch(authLogout());
        }else{
            const exp_refresh = decode(refresh).exp;
            if(exp_refresh*1000 <= new Date().getTime()){
                dispatch(authLogout());
                return;
            }else{
                const exp_access = decode(access).exp;
                if(exp_access*1000 <= new Date().getTime()){
                    dispatch(obtainNewToken(refresh))
                    return;
                }else{
                    dispatch(authSuccess(access))
                }
            }
        }
    }
}

export const authSignup = (formData)=>{
    return dispatch =>{
        dispatch(authStart());
        axiosClient.post('/signup/',{
            username:formData.getAll('username')[0],
            password:formData.getAll('password1')[0],
            password2:formData.getAll('password2')[0],
            email:formData.getAll('email')[0]
        }
        // ,{
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }
        )
        .then(
            res =>{
                const token = res;
                localStorage.setItem('token', token.access)
                localStorage.setItem('refresh_token', token.refresh)
                dispatch(authSuccess(token.access))
            }
        )
        .catch(
            err =>{
                dispatch(authFail(err))
            }
        )
    }   
}
export const authLogin = (email, password)=>{
    return dispatch =>{
        dispatch(authStart());
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axiosClient.post('api/token/',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(
            res =>{
                const token = res;
                localStorage.setItem('token', token.access)
                localStorage.setItem('refresh_token', token.refresh)
                dispatch(authSuccess(token))
            }
        )
        .catch(
            err =>{
                dispatch(authFail(err))
            }
        )
    }
}

export const obtainNewToken = (refresh_token)=>{
    return dispatch =>{
        dispatch(authStart())
        const formData = new FormData();
        formData.append('refresh', refresh_token);
        axiosClient.post('obtain/token/',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(
            res => {
                const newToken = res.access;
                localStorage.setItem('token', newToken)
                dispatch(authSuccess(newToken))
            }
        )
        .catch(
            err =>{
                console.log(err)
                dispatch(authFail(err));
            }
        )
    }
}


export const OAuthLogin = (form, provider)=>{
    return dispatch =>{
        dispatch(authStart());
        const formData = new FormData();
        if(provider == 'facebook'){
            formData.append('email', form.email);
            formData.append('token', form.accessToken);
            formData.append('grant_type', 'convert_token');
            formData.append('backend', provider);
            formData.append('first_name', form.first_name);
            formData.append('last_name', form.last_name);
            formData.append('client_id', 'ZGvLLVFRd0ONcCERQM8XIdhCoTBJKxf0GVRV3BPB');
            formData.append('client_secret', 'r8ZWGrwPoTGla2WILYLvVEsBAczpa1Sol1k6pVdII2Vc7qhATMaqlEavoDWmGsOa0L5AXQuCuM51VvNBeGnjQCJNYKLtqQEPIaeW9AbGpOuhm6GBUf5YGSsE9RoARS0C');
        }else if (provider == 'google-oauth2'){
            formData.append('email', form.profileObj.email);
            formData.append('token', form.accessToken);
            formData.append('grant_type', 'convert_token');
            formData.append('backend', provider);
            formData.append('first_name', form.profileObj.familyName);
            formData.append('last_name', form.profileObj.givenName);
            formData.append('client_id', 'ZGvLLVFRd0ONcCERQM8XIdhCoTBJKxf0GVRV3BPB');
            formData.append('client_secret', 'r8ZWGrwPoTGla2WILYLvVEsBAczpa1Sol1k6pVdII2Vc7qhATMaqlEavoDWmGsOa0L5AXQuCuM51VvNBeGnjQCJNYKLtqQEPIaeW9AbGpOuhm6GBUf5YGSsE9RoARS0C');
        }else
        return;

        axiosClient.post('auth/convert-token/',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(
            res =>{
                const token = res;
                localStorage.setItem('token', token.access_token)
                localStorage.setItem('refresh_token', token.refresh_token)
                dispatch(authSuccess(token))
            }
        )
        .catch(
            err =>{
                console.log(err)
                dispatch(authFail(err))
            }
        )
    }
}