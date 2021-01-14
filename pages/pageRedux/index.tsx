import styles from "./index.module.scss";
import { useEffect } from "react";

export default ({ blogs }) => {


  // //test api路由
  // useEffect(() => {
  //   const data = axios.get("./api/hello.js");
  //   console.log(data, 123);
  // }, []);

  return (
    <div>
      <p className={styles.titleRed}>{blogs.title}</p>
      <p className={styles.titleRed}>{blogs.title}</p>
    </div>
  );
};

//静态生成 带数据（next build）
// export const getStaticProps = async () => {
//   return {
//     props: {
//       blogs: {
//         title: "getStaticProps",
//       },
//     },
//   };
// };

//SSR 带数据 （外部API数据）
export const getServerSideProps = async ({ query }) => {
  console.log(query, "params");

  return {
    props: {
      blogs: {
        title: "getServerSideProps",
      },
    },
  };
};
