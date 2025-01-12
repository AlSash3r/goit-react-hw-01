import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.itemContentWrapper}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}