import React, { useState } from "react";
import { Box, TextField, Button, Typography, styled } from "@mui/material";
import { addPost } from "../service/api.js";
import { useAlert } from "react-alert";

const Container = styled(Box)`
  width: 550px;
  height: 100%;
  margin: auto;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > h6 {
    padding: 10px;
    margin-left: 90px;
    font-weight: bold;
    font-family: font-family: Georgia, serif;
  }
`;

const Text = styled(TextField)`
  margin: 5px 2px 5px 2px;
  padding: 3px;
  border: 2px solid black;
  background-color: #e0e0e0;
`;

const ButtonBox = styled(Box)`
  margin-left: 320px;
  color: black;
  margin-bottom: 20px;
`;

const AddPost = () => {
  const alert = useAlert();
  const blogInfo = {
    author: "",
    email: "",
    title: "",
    content: "",
  };

  const [blogData, setBlogData] = useState(blogInfo);

  const getBlogData = (e) => {
    // console.log(e.target.value, e.target.name);
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
    // console.log(blogData);
  };

  const onSubmitBlog = () => {
    // console.log(blogData.author, blogData.email, blogData.content);
    // const res = addPost(blogData);

    try {
      if (
        blogData.author &&
        blogData.content &&
        blogData.email &&
        blogData.title
      ) {
        addPost(blogData);
        alert.show("Details is Saved!");
      } else {
        alert.show("Enter right details");
      }
    } catch (err) {
      const msg = err.response ? err.response.data.message : err;
      alert.show(msg, { type: "error" });
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Typography variant="h6">
            {" "}
            * Share your Blog Details Here *{" "}
          </Typography>
          <Text
            variant="outlined"
            label="Author"
            name="author"
            onChange={(e) => getBlogData(e)}
          />
          <Text
            variant="outlined"
            label="Email"
            name="email"
            onChange={(e) => getBlogData(e)}
          />
          <Text
            variant="outlined"
            label="Title"
            name="title"
            onChange={(e) => getBlogData(e)}
          />
          <Text
            variant="outlined"
            label="Content"
            multiline
            rows={4}
            name="content"
            onChange={(e) => getBlogData(e)}
          />
          <Typography>Enter any image related to blog</Typography>
        </Wrapper>
        <ButtonBox>
          <Button variant="contained" onClick={onSubmitBlog}>
            Submit Details
          </Button>
        </ButtonBox>
      </Container>
    </>
  );
};

export default AddPost;
