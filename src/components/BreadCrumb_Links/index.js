import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
function BreadCrumb({ page, CurrentMovie }) {
  let BreadMain = [
    {
      Name: "Popular",
      title: "Popular movies",
      link: "/",
    },
    {
      Name: "Now_Playing",
      title: "Now Playing movies",
      link: "/now_playing",
    },
    {
      Name: "Top_Rated",
      title: "Top Rated movies",
      link: "/top_rated",
    },
    {
      Name: "Upcoming",
      title: "Upcoming movies",
      link: "/upcoming",
    },
  ];
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>
        {BreadMain.map((path, index) =>
          path.Name === page ? (
            <Link key={index} to={path.link}>
              {path.title}
            </Link>
          ) : (
            ""
          )
        )}
      </Breadcrumb.Item>
      <Breadcrumb.Item>{CurrentMovie.title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;
