import s from './Profile.module.css'


import UserInfo from './UserInfo/UserInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
    return (<>
        <img className={s.bg_img}
            src='https://wallup.net/wp-content/uploads/2019/09/11751-green-nature-grass-bokeh-blurred-background.jpg'
            alt='No background' />
        <UserInfo />
        <MyPosts posts={props.state.posts}/>
    </>);
}

export default Profile;