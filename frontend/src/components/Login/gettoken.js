import {Cookies} from 'cookies-js'
export function getcookie()
{
    const token=Cookies.get('token')
    console.log(token)
}