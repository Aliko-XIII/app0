import s from './UserInfo.module.css'
const UserInfo = () => {
    return (<div className={s.user}>
        <img className={s.avatar_img} src='https://avatarfiles.alphacoders.com/150/thumb-1920-150227.jpg' alt='No avatar' />
        <div className={s.user_info}>
            <span className={s.info}>Aliko T.</span> <br />
            <span className={s.info}>DoB: 28 August</span><br />
            <span className={s.info}>City: Kyiv</span><br />
            <span className={s.info}>Education: KPI</span><br />
            <span className={s.info}>Web Site: <a href=''>tektov.aliko.com</a></span>
        </div>
    </div>);
}
export default UserInfo;