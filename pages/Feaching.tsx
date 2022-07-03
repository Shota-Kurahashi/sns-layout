import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Feaching = () => {
  const [inputText, setInputText] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (text: string) =>
      // eslint-disable-next-line no-return-await
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        id: "102",
        title: text,
      }),
    {
      onSuccess: (result) => {
        const previousResult = queryClient.getQueryData<any>("posts");

        if (previousResult) {
          console.log(result);

          queryClient.setQueryData("posts", [...previousResult, result.data]);
        }
      },
    }
  );

  const { data, isLoading, isError } = useQuery("posts", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return res.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <input
        type="text"
        className="border-2"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <ul>
        {data &&
          data.map((post: any) => (
            <li key={post.id}>
              {post.id}:{post.title}
            </li>
          ))}
      </ul>
      <button type="button" onClick={() => mutation.mutate(inputText)}>
        click
      </button>
    </div>
  );
};

export { Feaching };
