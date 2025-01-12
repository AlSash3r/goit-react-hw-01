import css from "./Profile.module.css";
import clsx from "clsx";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div className={css.userInfoContainer}>
        <img src={image} alt="User avatar" className={css.profilePicture} />
        <p className={css.profileName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.itemElement}>Followers</span>
          <span className={clsx(css.itemElement, css.itemAccent)}>
            {followers}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemElement}>Views</span>
          <span className={clsx(css.itemElement, css.itemAccent)}>
            {views}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemElement}>Likes</span>
          <span className={clsx(css.itemElement, css.itemAccent)}>
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
}