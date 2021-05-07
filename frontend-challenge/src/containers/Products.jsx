import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Banner, ContainerWrapper } from "./shared.styles";
import data from "../constants/data.json";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const Products = () => {
  const [sortField, setSortField] = useState("title");
  const [order, setOrder] = useState(-1);
  const headers = Object.keys(data.products[0]).map((item) => item);
  const SortArrow = ({ field, sortField, order }) => {
    const Icon =
      field === sortField && order === 1 ? ArrowDropUp : ArrowDropDown;
    return <Icon style={{ margin: "-6px" }} fontSize="small" />;
  };

  const onThClick = (field) => {
    if (sortField === field) {
      setOrder(order * -1);
    } else {
      setSortField(field);
    }
  };

  data.products.sort((a, b) => {
    let sort;

    if (typeof a[sortField] === "string" && typeof b[sortField] === "string") {
      if (sortField === "filename") {
        sort =
          Number(a[sortField].substring(0, a[sortField].length - 4)) <
          Number(b[sortField].substring(0, b[sortField].length - 4));
      } else sort = a[sortField].toLowerCase() < b[sortField].toLowerCase();
    } else {
      sort = a[sortField] < b[sortField];
    }

    return order * (1 - 2 * Number(sort));
  });

  return (
    <ContainerWrapper>
      <Banner>
        <Typography variant="h5">Products</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((item) => (
                  <TableCell
                    style={{ cursor: "pointer" }}
                    onClick={() => onThClick(item)}
                  >
                    <SortArrow
                      field={item}
                      sortField={sortField}
                      order={order}
                    ></SortArrow>
                    <strong>{item.toUpperCase()}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.products.map((item) => (
                <TableRow>
                  {headers.map((header) => {
                    console.log("jhe", header);
                    console.log("item", item);
                    console.log("it", item[header]);
                    return <TableCell>{item[header]}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Banner>
    </ContainerWrapper>
  );
};

export default Products;
