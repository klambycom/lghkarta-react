import React from "react";
import Footer from "../Footer";

import "./index.css";

const classNames = xs => xs.filter(x => x).join(" ");

const Page = ({className, children}) => {
  return (
    <div className={classNames(["Page", className])}>
      {React.cloneElement(children, {
        className: classNames(["Page--content", children.props.className])
      })}
      <Footer />
    </div>
  );
};

export default Page;
