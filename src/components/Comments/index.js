import React, { Component } from "react";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
// import comments from "../../utils/gitComments";
import styles from "./comments.scss";
import i18n from "../../utils/i18n";
import Footer from "../Footer";

const gitalk = new Gitalk({
  clientID: "3bff581d9182d38a4598",
  clientSecret: "f49cd76c182957bbcd2593b6d7bce5c6ae69b384",
  repo: "React-2048-game",
  owner: "devrsi0n",
  admin: ["devrsi0n"],
  // facebook-like distraction free mode
  distractionFreeMode: false,
  createIssueManually: true,
  id: "https://github.com/devrsi0n/React-2048-game/issues/1",
  labels: ["gitment", "https://devrsi0n.github.io/React-2048-game/"],
  title: "2048",
  body: "devrsi0n.github.io/React-2048-game"
});

export default class Comments extends Component {
  componentDidMount() {
    gitalk.render("gitalk-container");
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.comments}>
          {/* eslint-disable react/no-danger */}
          <p
            className={styles.commentsTitle}
            dangerouslySetInnerHTML={{ __html: i18n.commentTitle }}
          />
          <div id="gitalk-container" />
        </div>
        <Footer
          name="devrsi0n"
          profileUrl="https://github.com/devrsi0n"
          repoUrl="https://github.com/devrsi0n/React-2048-game"
        />
      </div>
    );
  }
}
