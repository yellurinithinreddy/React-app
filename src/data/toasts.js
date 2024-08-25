
import { toast } from 'react-toastify';
export const Successtoasts=(msg,pos)=>{
    toast.success(msg, {
        position: pos
      });
}
export const Errortoasts=(msg,pos)=>{
    toast.error(msg, {
        position: pos
      });
}
export const Warntoasts=(msg,pos)=>{
    toast.warn(msg, {
        position: pos
      });
}
export const Infotoasts=(msg,pos)=>{
    toast.info(msg, {
        position: pos
      });
}