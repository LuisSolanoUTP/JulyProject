import React from "react";
import { Button } from "@dhis2/ui";

import * as classes from "../App.module.css";

export const PaginationControls = ({ pager, refetch }) => {
  const { page, pageCount } = pager;

  const Previous = () => {
    refetch({ page: page - 1 });
  };
  const Next = () => {
    refetch({ page: page + 1 });
  };
  const First = () => {
    refetch({ page: 1 });
  };
  const Last = () => {
    refetch({ page: pageCount });
  };

  return (
    <div className={classes.buttons}>
      <Button onClick={First} disabled={page === 1}>
        First
      </Button>
      <Button onClick={Previous} disabled={page === 1}>
        Previous
      </Button>
      
 
        <span>
         {page} / {pageCount}
      </span>
  
      <Button onClick={Next} disabled={page === pageCount}>
        Next
      </Button>
      <Button onClick={Last} disabled={page === pageCount}>
        Last
      </Button>
    </div>
  );
};
export default PaginationControls;