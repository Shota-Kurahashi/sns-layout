import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

function Feaching() {
  const [inputText, setInputText] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (inputText: string) => {
      return await axios.post("https://jsonplaceholder.typicode.com/posts", {
        id: "102",
        title: inputText,
      });
    },
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

  const { data, isLoading, isError } = useQuery("posts", async function () {
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
          data.map((post: any) => {
            return (
              <li key={post.id}>
                {post.id}:{post.title}
              </li>
            );
          })}
      </ul>
      <button onClick={() => mutation.mutate(inputText)}>click</button>
    </div>
  );
}

export { Feaching };
