import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails key="kevin" name="kevin" text="Good job" image="https://source.unsplash.com/random" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails key="john" name="john" text="Good work" image="https://source.unsplash.com/random" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails key="sarah" name="sarah" text="awesome" image="https://source.unsplash.com/random" />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);