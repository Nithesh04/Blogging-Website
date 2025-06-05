import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
      "Blogging is a powerful medium for sharing ideas, insights, and expertise with a broad audience. It allows individuals and organizations to connect with readers, foster discussions, and build an online presence. Writing a well-thought-out blog post can enhance credibility, drive traffic, and establish authority in a given field. To create compelling content, bloggers should focus on relevant topics, provide valuable information, and engage readers through relatable stories or examples. Consistent blogging can attract a loyal readership and help in building a community of followers who appreciate the shared knowledge and insights."
      </p>
      
    </div>
  );
}

export default About;
