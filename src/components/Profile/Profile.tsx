export const Profile = ({ name, title, description, socials }) => {
  return (
    <div className={`profile`}>
      <img className={`profile-img`} />
      <h3 className={`name`}>{name}</h3>
      <p className={`title`}>{title}</p>
      <p className={`description`}>{description}</p>
      {/* {socials.map((social) => social)} */}
    </div>
  )
}
