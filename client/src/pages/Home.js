import React from "react";
import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";
import FriendList from "../components/FriendList";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

import PostCard from "../components/PostCard.js";
import TestPostCardII from "../components/TestPostCard2.js";
import TestPostCardIII from "../components/TestPostCard3.js";
import TestPostCardIV from "../components/TestPostCard4";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>

    //   <Grid columns={2}>
    //     {loggedIn && (
    //       <div className="col-12 mb-3">
    //         <ThoughtForm />
    //       </div>
    //     )}
    //     <GridRow>
    //       <h2>Recent Posts</h2>
    //     </GridRow>
    //     <GridRow>
    //       <h2>Loading posts... </h2>
    //       <GridColumn key="1" style={{ marginBottom: 20 }}>
    //         <PostCard />
    //         <TestPostCardII />
    //         <TestPostCardIII />
    //         <TestPostCardIV />
    //       </GridColumn>
    //     </GridRow>
    //   </Grid>
    // );
  );
};

export default Home;
