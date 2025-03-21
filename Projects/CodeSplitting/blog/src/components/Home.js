import React from "react";
import Card from "./Card";
import "./home.css";

export default function Home() {
  return (
    <div className="home-body">
      Home Page
      <div className="home-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
