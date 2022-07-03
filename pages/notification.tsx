import React from "react";
import { useQueryClient } from "react-query";
import { Layout } from "../components/Layout";

const Notification = () => {
  const queryClient = useQueryClient();
  const previousResult = queryClient.getQueryData<any>("posts");

  return (
    <Layout title="Notification">
      <ul>
        {previousResult &&
          previousResult.map((post: any) => (
            <li key={post.id}>
              {post.id}:{post.title}
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default Notification;
