import { FC } from "react";
import { IUserInfoResult } from "../../pages/home/homeModels";
import styles from "./InfoCard.module.css";

interface IInfoCardProps {
  userInfo: IUserInfoResult;
}

const InfoCard: FC<IInfoCardProps> = ({ userInfo }) => {
  return (
    <div className={styles.infoCardContainer}>
      <div className={styles.topBackgroundPic}>
        <div className={styles.pictureContent}>
          <img
            width="130"
            height="130"
            src={userInfo.picture.large}
            loading="lazy"
            alt="userPhoto"
          />
        </div>
      </div>
      <div className={styles.infoCardBody}>
        <span className={styles.infoCardName}>
          {`${userInfo.name.first} ${userInfo.name.last}`}
        </span>
      </div>
      <div className={styles.infoCardLocationContent}>
        <img
          width="18"
          height="18"
          src={"/icons/location.png"}
          loading="lazy"
          alt="userPhoto"
        />
        <span className={styles.infoCardLocationText}>
          {`${userInfo.location.country}`}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
