"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const CommentForm = ({ ideaId }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const [comments, setComments] = useState([]);

  // FETCH COMMENTS
  const fetchComments = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`,
    );
    const data = await res.json();
    setComments(data);
  };
  // GET COMMENTS
  useEffect(() => {
    if (ideaId) {
      fetchComments();
    }
  }, [ideaId]);

  // POST COMMENT
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const commentData = formData.get("comment");

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: commentData,
        userName: user?.name,
        userImage: user?.image,
        ideaId,
      }),
    });
    console.log({
      comment: commentData,
      userName: user?.name,
      userImage: user?.image,
      ideaId,
    });
    const data = await res.json();

    console.log(data);

    // NEW COMMENT ADD LOCALLY
    setComments((prev) => [
      ...prev,
      {
        comment: commentData,
        userName: user?.name,
        userImage: user?.image,
      },
    ]);

    e.target.reset();
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={onSubmit}>
        <textarea
          name="comment"
          rows={4}
          placeholder="Write comment..."
          className="border p-4 w-full"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 mt-4"
        >
          Post Comment
        </button>
      </form>

      {/* COMMENTS */}
      <div className="mt-10 space-y-5">
        {comments.map((comment, index) => (
          <div key={index} className="border rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <Avatar src={comment.userImage} name={comment.userName} />

              <h2 className="font-bold">{comment.userName}</h2>
            </div>

            <p className="mt-4">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
