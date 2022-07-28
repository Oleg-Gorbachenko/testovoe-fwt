export type PaginatorPropsType = {
  pageSize: number;
  totalPaintingsCount: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
};
