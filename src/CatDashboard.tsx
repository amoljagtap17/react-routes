import * as React from "react";
import { useParams } from "react-router-dom";

export const CatDashboard = () => {
  const { categoryId } = useParams();

  return <h2>Dashboard - {categoryId}</h2>;
};
