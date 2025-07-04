import React, { ReactNode } from "react";

type PostSectionProps = {
  children: ReactNode;
};

const PostSection: React.FC<PostSectionProps> = ({ children }) => {
  return <section className="px-4 md:px-8 py-2">{children}</section>;
};

export default PostSection;
