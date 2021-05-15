import "./styles.css";
import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey"
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h4>John Doe</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%"
            }}
          >
            <h5>40 Posts</h5>
            <h5>4.5K Followers</h5>
            <h5>6.6K Following</h5>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1616741404398-924a06f48348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=533&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1577641807952-468709d3aa48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1551776315-d69681c7701f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=508&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1568429838920-de3a3aa8cf1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1541214356144-6098f33b876a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=468&q=80"
        />
      </div>
    </div>
  );
};

export default Profile;
