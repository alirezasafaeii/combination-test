import { FC } from "react";
import InfoCard from "../../features/infoCard/InfoCard";
import { MyLoader } from "../../skeletonLoadings/ProfileLoading";
import { useHome } from "./homeHooks";
import styles from "./Home.module.css";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  const { userInfo } = useHome();

  return (
    <div className={styles.homeContainer}>
      {userInfo.isLoading ? (
        <MyLoader />
      ) : (
        userInfo.data &&
        userInfo.data?.results.map((user, index) => (
          <InfoCard key={index} userInfo={user} />
        ))
      )}
    </div>
  );
};

export default Home;
