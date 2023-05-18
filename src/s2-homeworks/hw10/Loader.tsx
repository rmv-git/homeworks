import s from './Loader.module.css'
import loader from './loader.gif';

export const Loader = () => <div className={s.loader}>
    <img src={loader} alt={'loader'}/>
</div>
