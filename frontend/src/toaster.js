import { toast } from 'react-hot-toast'
export function successfunction(msg)
{
//     toast.promise(
//         saveSettings(settings),
//          {
//            loading: 'Saving...',
//            success: <b>Settings saved!</b>,
//            error: <b>Could not save.</b>,
//          }
//        );
// }
toast.success('Successfully toasted!')
}
export function promisefunction(myPromise)
{
    toast.promise(myPromise, {
        loading: 'Loading',
        success:'Saved',
        error: 'unSaved',
      });
}
export function errorfunction(msg)
{

toast.error(msg)
}