import Cookie from 'js-cookie'
export default function getcookie()
{
    const token=Cookie.get('usertoken')
  
     return token;
}
export const clearcookie=()=>
{
  Cookie.remove('usertoken');
}