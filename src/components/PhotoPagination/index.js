import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PhotoPagination = ({ initialPage, pageSize, items, onChangePage }) => {
  const [pager, setPager] = useState({});

  useEffect(() => {
    // set page if items array isn't empty
    // reset page if items array has changed
    if (items && items.length) {
      setPage(initialPage);
    }
  }, [items]);

  const getPager = (totalItems, currentPage) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    const pgSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pgSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pgSize;
    var endIndex = Math.min(startIndex + pgSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pgSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  const setPage = page => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    const newPager = getPager(items.length, page);

    setPager(newPager);

    // call change page function in parent component
    onChangePage(newPager);
  };

  if (!pager.pages || pager.pages.length <= 1) {
    // don't display pager if there is only 1 page
    return null;
  }

  return (
    <Pagination>
      <PaginationItem disabled={pager.currentPage === 1 ? true : false}>
        <PaginationLink first onClick={() => setPage(1)} />
      </PaginationItem>

      <PaginationItem disabled={pager.currentPage === 1 ? true : false}>
        <PaginationLink
          previous
          onClick={() => setPage(pager.currentPage - 1)}
        />
      </PaginationItem>

      {pager.pages.map((page, index) => (
        <PaginationItem
          key={index}
          active={pager.currentPage === page ? true : false}
        >
          <PaginationLink onClick={() => setPage(page)}>{page}</PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem
        disabled={pager.currentPage === pager.totalPages ? true : false}
      >
        <PaginationLink next onClick={() => setPage(pager.currentPage + 1)} />
      </PaginationItem>

      <PaginationItem
        disabled={pager.currentPage === pager.totalPages ? true : false}
      >
        <PaginationLink last onClick={() => setPage(pager.totalPages)} />
      </PaginationItem>
    </Pagination>
  );
};

const propTypes = {
  items: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
};

const defaultProps = {
  initialPage: 1
};

PhotoPagination.propTypes = propTypes;
PhotoPagination.defaultProps = defaultProps;

export default PhotoPagination;
